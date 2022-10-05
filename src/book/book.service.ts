import { Chapter } from '../chapter/chapter.interface';
import { BaseService } from '../common/services/base.service';
import { ApiResponse } from '../common/types';
import { ApiClient } from '../utils/ApiClient';
import { Book } from './book.interface';

export class BookService extends BaseService<Book> {
         constructor(client: ApiClient) {
           super(client, 'book');
         }

         async getChaptersByBookId(id: string): Promise<ApiResponse<Chapter>> {
           const response = await this.client.request<ApiResponse<Chapter>>(
             `book/${id}/chapter`
           );

           return response;
         }
       }
