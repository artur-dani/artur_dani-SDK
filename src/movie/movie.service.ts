import { Movie } from './movie.interface';
import { BaseService } from '../common/services/base.service';
import { ApiClient } from '../utils/ApiClient';

export class MovieService extends BaseService<Movie> {
  constructor(client: ApiClient) {
    super(client, 'movie');
  }
}
