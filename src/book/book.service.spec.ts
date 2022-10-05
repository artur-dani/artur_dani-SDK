import { BookService } from './book.service'
import { when } from 'jest-when'
import { ApiResponse } from '../common/types'
import { Chapter } from '../chapter/chapter.interface'
import { Book } from './book.interface'
import { ApiClient } from '../utils/ApiClient'

const requestSpy = jest.fn()

describe('book service', () => {
  let service: BookService
  const mockedClient = new ApiClient('123')

  beforeEach(async () => {
    mockedClient.request = requestSpy
    service = new BookService(mockedClient)
  })

  describe('list', () => {
    it('should get all books', async () => {
      when(requestSpy)
        .calledWith('book', {
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
      when(requestSpy).calledWith('book/111').mockResolvedValue(mockeResponse())

      expect(await service.getOneById('111')).toEqual(mockeResponse().docs[0])
      expect(requestSpy).toBeCalled()
    })
  })

  describe('getChaptersByBookId', () => {
    it('works as expected', async () => {
      when(requestSpy).calledWith('book/111/chapter').mockResolvedValue(mockeGetChaptersResponse())

      expect(await service.getChaptersByBookId('111')).toEqual(mockeGetChaptersResponse())
      expect(requestSpy).toBeCalled()
    })
  })
})

const mockeResponse = (): ApiResponse<Book> => {
  return {
    docs: [
      {
        _id: '123',
        name: 'Hello world!',
      },
    ],
    limit: 5,
    offset: 0,
    page: 1,
    pages: 1,
    total: 1,
  }
}

const mockeGetChaptersResponse = (): ApiResponse<Chapter> => {
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
    pages: 1,
    total: 1,
  }
}
