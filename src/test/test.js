import fetchData from '../js/http';
import { getLevel } from '../js/user';

jest.mock('../js/http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call fetchData once', () => {
  fetchData.mockReturnValue(JSON.stringify({}));

  getLevel(1);

  expect(fetchData).toBeCalledWith('https://server/user/1');
});
