import { when } from 'jest-when'
import { ApiResponse } from '../common/types'
import { ApiClient } from '../utils/ApiClient'
import { Chapter } from './chapter.interface'
import { ChapterService } from './chapter.service'

const requestSpy = jest.fn()

describe('chapter service', () => {
  let service: ChapterService
  const mockedClient = new ApiClient('123')

  beforeEach(async () => {
    mockedClient.request = requestSpy
    service = new ChapterService(mockedClient)
  })

  describe('list', () => {
    it('should list all chapters', async () => {
      when(requestSpy)
        .calledWith('chapter', {
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
      when(requestSpy).calledWith('chapter/111').mockResolvedValue(mockeResponse())

      expect(await service.getOneById('111')).toEqual(mockeResponse().docs[0])
      expect(requestSpy).toBeCalled()
    })
  })
})

const mockeResponse = (): ApiResponse<Chapter> => {
  return {
    docs: [
      {
        _id: '123',
        chapterName: 'Hello world!',
      },
    ],
    limit: 5,
    offset: 0,
    page: 1,
    pages: 5,
    total: 5,
  }
}
