import { ApiClient } from '../../utils/ApiClient'
import { ApiResponse, RequestOptions } from '../types'

export abstract class BaseService<T> {
  private readonly _path: string

  constructor(protected readonly client: ApiClient, path: string) {
    this._path = path
  }

  async list(options?: RequestOptions): Promise<ApiResponse<T>> {
    const response = await this.client.request<ApiResponse<T>>(
      this._path,
      options
    );

    return response
  }

  async getOneById(id: string): Promise<T | null> {
    const response = await this.client.request<ApiResponse<T>>(`${this._path}/${id}`)

    return response.docs[0]
  }
}
