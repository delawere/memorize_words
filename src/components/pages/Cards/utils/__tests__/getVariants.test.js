import getUniqNumbers from '../getUniqNumbers';
import getVariants from '../getVariants';

jest.mock('../getUniqNumbers', () => jest.fn());

const mockData = [
  {
    id: '1',
    word: 'test1',
    translate: 'test1',
  },
  {
    id: '2',
    word: 'test2',
    translate: 'test2',
  },
  {
    id: '3',
    word: 'test3',
    translate: 'test3',
  },
  {
    id: '4',
    word: 'test4',
    translate: 'test4',
  },
];

it('get random variants', () => {
  getUniqNumbers.mockImplementation(() => [0, 1, 2]);
  const result = getVariants(mockData, 'word', 'test4');

  expect(result).toEqual(['test1', 'test2', 'test3']);

  getUniqNumbers.mockReset();
});

it('if words is null should return array of strings', () => {
  const result = getVariants(null);

  expect(result).toEqual(Array(3).fill(''));
});

it('if words is empty should return array of strings', () => {
  const result = getVariants([]);

  expect(result).toMatchInlineSnapshot(`
    Array [
      "",
      "",
      "",
    ]
  `);
});

it('if words is not valid should return array of strings', () => {
  const result = getVariants([
    ...mockData,
    {
      someProp: 'value',
    },
  ]);

  expect(result).toMatchInlineSnapshot(`
    Array [
      "",
      "",
      "",
    ]
  `);
});

it('if words is not array should return array of strings', () => {
  const result = getVariants({ someProp: 'someValue' });

  expect(result).toMatchInlineSnapshot(`
    Array [
      "",
      "",
      "",
    ]
  `);
});
