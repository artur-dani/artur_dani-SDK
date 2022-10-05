import { when } from 'jest-when';
import { ApiResponse } from '../common/types';
import { ApiClient } from '../utils/ApiClient';
import { Movie } from './movie.interface';
import { MovieService } from './movie.service';

const requestSpy = jest.fn();

describe('movie service', () => {
  let service: MovieService;
  const mockedClient = new ApiClient('123');

  beforeEach(async () => {
    mockedClient.request = requestSpy;
    service = new MovieService(mockedClient);
  });

  describe('list', () => {
    it('should list all movies', async () => {
      when(requestSpy)
        .calledWith('movie', {
          params: {},
        })
        .mockResolvedValue(mockeResponse());

      const response = await service.list();
      expect(response).toEqual(mockeResponse());
      expect(requestSpy).toBeCalled();
    });
  });

  describe('getOneById', () => {
    it('works as expected', async () => {
      when(requestSpy)
        .calledWith('movie/111')
        .mockResolvedValue(mockeResponse());

      expect(await service.getOneById('111')).toEqual(mockeResponse().docs[0]);
      expect(requestSpy).toBeCalled();
    });
  });
});

const mockeResponse = (): ApiResponse<Movie> => {
  return {
    docs: [
      {
        _id: '5cd95395de30eff6ebccde56',
        name: 'The Lord of the Rings Series',
        runtimeInMinutes: 558,
        budgetInMillions: 281,
        boxOfficeRevenueInMillions: 2917,
        academyAwardNominations: 30,
        academyAwardWins: 17,
        rottenTomatoesScore: 94,
      },
      {
        _id: '5cd95395de30eff6ebccde57',
        name: 'The Hobbit Series',
        runtimeInMinutes: 462,
        budgetInMillions: 675,
        boxOfficeRevenueInMillions: 2932,
        academyAwardNominations: 7,
        academyAwardWins: 1,
        rottenTomatoesScore: 66.33333333,
      },
    ],
    limit: 5,
    offset: 0,
    page: 1,
    pages: 5,
    total: 5,
  };
};
