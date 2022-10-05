import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export class ApiClient {
  private readonly axiosInstance: AxiosInstance | undefined

  constructor(apiKey: string) {
    if (apiKey === undefined || !apiKey) {
      throw new Error('Api key is undefined or null!')
    }

    this.axiosInstance = axios.create({
      baseURL: 'https://the-one-api.dev/v2/',
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
  }

  async request<T>(url: string, axiosRequestOptions?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.axiosInstance?.request({
        url,
        method: 'GET',
        ...(axiosRequestOptions || {}),
      })

      return response?.data
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
