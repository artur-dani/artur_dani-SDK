// import { when } from 'jest-when'
// import { ApiResponse, RequestOptions } from '../common/types';
import { ApiClient } from '../utils/ApiClient';
// import { Character } from './character.interface';
import { CharacterService } from './character.service';

// const requestSpy = jest.fn();

describe('character service', () => {
  let service: CharacterService;
  // const mockedClient = new ApiClient('123');
  let client = new ApiClient('zvyLqsI73wL2kYravJlb');

  beforeEach(async () => {
    // mockedClient.request = requestSpy;
    // service = new CharacterService(mockedClient);
    service = new CharacterService(client);
  });

  it('should return a list of characters', async () => {
    const response = await service.list({
      limit: 10,
      page: 2,
      offset: 10,
      sort: {
        sortBy: 'name',
        order: 'asc',
      },
      filters: {},
    });
    console.log({ response });
  });

  // describe('list', () => {
  //   it('should list all characters', async () => {
  //     when(requestSpy)
  //       .calledWith('character', undefined)
  //       .mockResolvedValue(mockeResponse());

  //     const response = await service.list();
  //     expect(response).toEqual(mockeResponse());
  //     expect(requestSpy).toBeCalled();
  //   });

  //   it('should list all characters with params', async () => {
  //     const requestOptions = {
  //       limit: 10,
  //       page: 2,
  //       offset: 10,
  //       sort: {
  //         sortBy: 'name',
  //         order: 'asc',
  //       },
  //       filters: {},
  //     } as RequestOptions;
  //     when(requestSpy)
  //       .calledWith('character', requestOptions)
  //       .mockResolvedValue(mockeResponse());

  //     const response = await service.list(requestOptions);
  //     expect(response).toEqual(mockeResponse());
  //     expect(requestSpy).toBeCalled();
  //   });
  // });

  // describe('getOneById', () => {
  //   it('works as expected', async () => {
  //     when(requestSpy)
  //       .calledWith('character/111')
  //       .mockResolvedValue(mockeResponse());

  //     expect(await service.getOneById('111')).toEqual(mockeResponse().docs[0]);
  //     expect(requestSpy).toBeCalled();
  //   });
  // });
});

// const mockeResponse = (): ApiResponse<Character> => {
//   return {
//     docs: [
//       {
//         _id: '5cd99d4bde30eff6ebccfbbe',
//         height: '',
//         race: 'Human',
//         gender: 'Female',
//         birth: '',
//         spouse: 'Belemir',
//         death: '',
//         realm: '',
//         hair: '',
//         name: 'Adanel',
//         wikiUrl: 'http://lotr.wikia.com//wiki/Adanel',
//       },
//       {
//         _id: '5cd99d4bde30eff6ebccfbbf',
//         height: '',
//         race: 'Human',
//         gender: 'Male',
//         birth: 'Before ,TA 1944',
//         spouse: '',
//         death: 'Late ,Third Age',
//         realm: '',
//         hair: '',
//         name: 'Adrahil I',
//         wikiUrl: 'http://lotr.wikia.com//wiki/Adrahil_I',
//       },
//     ],
//     limit: 5,
//     offset: 0,
//     page: 1,
//     pages: 5,
//     total: 5,
//   }
// }
