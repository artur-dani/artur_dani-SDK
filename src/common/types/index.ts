export interface ApiResponse<T> {
  docs: T[]
  total: number
  limit: number
  offset: number
  page: number
  pages: number
}

interface FilterOptions {
  filterBy: string;
  equalTo?: string;
  negate?: boolean;
}

interface SortOptions {
  sortBy: string;
  order: 'asc' | 'desc';
}

export interface RequestOptions {
  limit?: number;
  page?: number;
  offset?: number;
  sort?: SortOptions;
  filter?: FilterOptions;
}
