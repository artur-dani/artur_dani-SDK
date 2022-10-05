export interface ApiResponse<T> {
  docs: T[]
  total: number
  limit: number
  offset: number
  page: number
  pages: number
}

export interface RequestOptions {
  limit?: number
  page?: number
  offset?: number
  sort?: 'asc' | 'desc'
}
