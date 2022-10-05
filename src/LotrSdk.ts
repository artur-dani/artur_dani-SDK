import { BookService } from './book/book.service';
import { ChapterService } from './chapter/chapter.service';
import { MovieService } from './movie/movie.service';
import { QuoteService } from './quote/quote.service';
import { ApiClient } from './utils/ApiClient';

export class LotrSdk {
  private readonly apiClient: ApiClient;

  public books: BookService;
  public chapters: ChapterService;
  public characters: ChapterService;
  public movies: MovieService;
  public quotes: QuoteService;

  constructor(apiKey: string) {
    this.apiClient = new ApiClient(apiKey);

    this.books = new BookService(this.apiClient);
    this.chapters = new ChapterService(this.apiClient);
    this.characters = new ChapterService(this.apiClient);
    this.movies = new MovieService(this.apiClient);
    this.quotes = new QuoteService(this.apiClient);
  }
}
