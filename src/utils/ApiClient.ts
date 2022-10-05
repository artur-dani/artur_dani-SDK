import axios, { AxiosInstance } from 'axios';
import {
  FilterKeyEnum,
  FilterOperators,
  RequestOptions,
} from '../common/types';

export class ApiClient {
  private readonly axiosInstance: AxiosInstance | undefined;

  constructor(apiKey: string) {
    if (apiKey === undefined || !apiKey) {
      throw new Error('Api key is undefined or null!');
    }

    this.axiosInstance = axios.create({
      baseURL: 'https://the-one-api.dev/v2/',
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
  }

  async request<T>(url: string, options?: RequestOptions): Promise<T> {
    const params = this._getParams(options);
    console.log({ params });

    try {
      const response = await this.axiosInstance?.request({
        url: `${url}${params}`,
        method: 'GET',
      });

      return response?.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  private _getParamValue(value: string | string[]): string {
    if (Array.isArray(value)) {
      return value.join(',');
    }

    return value;
  }

  private _getParams(options?: RequestOptions): string {
    if (!options) return '';

    const { limit, page, offset, sort, filters } = options;
    const params = [];

    if (limit) {
      params.push(`limit=${limit}`);
    }

    if (page) {
      params.push(`page=${page}`);
    }

    if (offset) {
      params.push(`offset=${offset}`);
    }

    if (sort) {
      params.push(`sort=${sort.sortBy}:${sort.order}`);
    }

    if (filters) {
      const filterParams = (
        Object.keys(filters) as Array<keyof typeof filters>
      ).map((key) => {
        const filter = filters[key];
        const operator = FilterOperators[key];

        if (!filter?.value) {
          return `${filter?.field}`;
        }

        if (
          key === FilterKeyEnum.REGEX_MATCH ||
          key === FilterKeyEnum.REGEX_NOT_MATCH
        ) {
          return `${filter.field}${operator}/${filter.value}/i`;
        }

        const value = this._getParamValue(filter?.value);
        const field = filter?.field;

        return `${field}${operator}${value}`;
      });

      params.push(`${filterParams.join('&')}`);
    }

    return params.length ? `?${params.join('&')}` : '';
  }
}
