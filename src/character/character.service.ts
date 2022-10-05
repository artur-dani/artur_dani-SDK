import { Character } from './character.interface';
import { BaseService } from '../common/services/base.service';
import { ApiClient } from '../utils/ApiClient';
import { Quote } from '../quote/quote.interface';
import { ApiResponse } from '../common/types';

export class CharacterService extends BaseService<Character> {
         constructor(client: ApiClient) {
           super(client, 'character');
         }

         async getQuetesByCharacterId(id: string): Promise<ApiResponse<Quote>> {
           const response = await this.client.request<ApiResponse<Quote>>(
             `book/${id}/chapter`
           );

           return response;
         }
       }
