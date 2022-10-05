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
    console.log({ params, url: `${url}${params}` })

    try {
      const response = await this.axiosInstance?.get(url, {
        params,
      });
      

      return response?.data
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  private _getParamValue(value: string | string[]): string {
    if (Array.isArray(value)) {
      return value.join(',');
    }

    return value;
  }

  private _getParams(options?: RequestOptions): Record<string, string> {
    const params: Record<string, any> = {};
    if (!options) return {};

    const { limit, page, offset, sort, filters } = options;

    if (limit) {
      params.limit = limit;
    }

    if (page) {
      params.page = page;
    }

    if (offset) {
      params.offset = offset;
    }

    if (sort) {
      params.sort = `${sort.sortBy}:${sort.order}`;
    }

    if (filters) {
      ;(Object.keys(filters) as Array<keyof typeof filters>).forEach((key) => {
        const filter = filters[key]
        const operator = FilterOperators[key]

        if (!filter?.value) {
          return
        }

        if (key === FilterKeyEnum.REGEX_MATCH || key === FilterKeyEnum.REGEX_NOT_MATCH) {
          return (params[`${filter.field}${operator}`] = filter.value)
        }

        const value = this._getParamValue(filter?.value)
        const field = filter?.field

        return (params[`${field}${operator}`] = value)
      })
    }

    return  params
  }
}
