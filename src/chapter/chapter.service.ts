import { Chapter } from './chapter.interface';
import { BaseService } from '../common/services/base.service';
import { ApiClient } from '../utils/ApiClient';

export class ChapterService extends BaseService<Chapter> {
         constructor(client: ApiClient) {
           super(client, 'chapter');
         }
       }
