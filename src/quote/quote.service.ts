import { Quote } from './quote.interface';
import { BaseService } from '../common/services/base.service';
import { ApiClient } from '../utils/ApiClient';

export class QuoteService extends BaseService<Quote> {
  constructor(client: ApiClient) {
    super(client, 'quote');
  }
}
