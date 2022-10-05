export interface ApiResponse<T> {
  docs: T[]
  total: number
  limit: number
  offset: number
  page: number
  pages: number
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
  filters?: Filters;
}

export enum FilterOperator {
  EQUAL = '=',
  NOT_EQUAL = '!=',
  GREATER_THAN = '>',
  GREATER_THAN_OR_EQUAL = '>=',
  LESS_THAN = '<',
  LESS_THAN_OR_EQUAL = '<=',
  NOT_ExISTS = '?!',
  EXISTS = '',
}

export enum FilterKeyEnum {
  MATCH = 'match',
  NOT_MATCH = 'notmatch',
  INCLUDE = 'include',
  EXCLUDE = 'exclude',
  EXISTS = 'exists',
  NOT_EXISTS = 'notExists',
  LESS = 'less',
  LESS_OR_EQUAL = 'lessOrEqual',
  GREATER = 'greater',
  GREATER_OR_EQUAL = 'greaterOrEqual',
  EQUAL = 'equal',
  REGEX_MATCH = 'regexMatch',
  REGEX_NOT_MATCH = 'regexNotMatch',
}

export interface Filter {
  field: string;
  value?: string | string[];
}

export type Filters = {
  [key in FilterKeyEnum]?: Filter;
};

export const FilterOperators = {
  [FilterKeyEnum.MATCH]: FilterOperator.EQUAL,
  [FilterKeyEnum.NOT_MATCH]: FilterOperator.NOT_EQUAL,
  [FilterKeyEnum.INCLUDE]: FilterOperator.EQUAL,
  [FilterKeyEnum.EXCLUDE]: FilterOperator.NOT_EQUAL,
  [FilterKeyEnum.EXISTS]: FilterOperator.EQUAL,
  [FilterKeyEnum.NOT_EXISTS]: FilterOperator.NOT_EQUAL,
  [FilterKeyEnum.LESS]: FilterOperator.LESS_THAN,
  [FilterKeyEnum.LESS_OR_EQUAL]: FilterOperator.LESS_THAN_OR_EQUAL,
  [FilterKeyEnum.GREATER]: FilterOperator.GREATER_THAN,
  [FilterKeyEnum.GREATER_OR_EQUAL]: FilterOperator.GREATER_THAN_OR_EQUAL,
  [FilterKeyEnum.EQUAL]: FilterOperator.EQUAL,
  [FilterKeyEnum.REGEX_MATCH]: FilterOperator.EQUAL,
  [FilterKeyEnum.REGEX_NOT_MATCH]: FilterOperator.NOT_EQUAL,
} as const;

