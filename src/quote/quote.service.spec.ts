import { when } from 'jest-when'
import { ApiResponse } from '../common/types'
import { ApiClient } from '../utils/ApiClient'
import { Quote } from './quote.interface'
import { QuoteService } from './quote.service'

const requestSpy = jest.fn()

describe('quote service', () => {
  let service: QuoteService
  const mockedClient = new ApiClient('123')

  beforeEach(async () => {
    mockedClient.request = requestSpy
    service = new QuoteService(mockedClient)
  })

  describe('list', () => {
    it('should list all quotes', async () => {
      when(requestSpy)
        .calledWith('quote', {
          params: {},
        })
        .mockResolvedValue(mockeResponse())

      const response = await service.list()
      expect(response).toEqual(mockeResponse())
      expect(requestSpy).toBeCalled()
    })
  })

  describe('getOneById', () => {
    it('works as expected', async () => {
      when(requestSpy).calledWith('quote/111').mockResolvedValue(mockeResponse())

      expect(await service.getOneById('111')).toEqual(mockeResponse().docs[0])
      expect(requestSpy).toBeCalled()
    })
  })
})

const mockeResponse = (): ApiResponse<Quote> => {
  return {
    docs: [
      {
        _id: '5cd96e05de30eff6ebcce7e9',
        dialog: 'Deagol!',
        movie: '5cd95395de30eff6ebccde5d',
        character: '5cd99d4bde30eff6ebccfe9e',
        id: '5cd96e05de30eff6ebcce7e9',
      },
      {
        _id: '5cd96e05de30eff6ebcce7ea',
        dialog: 'Deagol!',
        movie: '5cd95395de30eff6ebccde5d',
        character: '5cd99d4bde30eff6ebccfe9e',
        id: '5cd96e05de30eff6ebcce7ea',
      },
    ],
    limit: 5,
    offset: 0,
    page: 1,
    pages: 5,
    total: 5,
  }
}
