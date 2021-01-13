import { deepClone } from 'aws-cdk/lib/util';

const PETS_MOCK = [
  {
    id: 9222968140491042959,
    category: {
      id: 0,
      name: 'string'
    },
    name: 'test',
    photoUrls: [
      'string'
    ],
    tags: [
      {
        id: 0,
        name: 'string'
      }
    ],
    status: 'available'
  },
  {
    id: 9222968140491042961,
    category: {
      id: 0,
      name: 'string'
    },
    name: 'doggie',
    photoUrls:  [
      'string'
    ],
    tags: [
      {
        id: 0,
        name: 'string'
      }
    ],
    status: 'available'
  }
];

export function petsMocks() {
  return deepClone(PETS_MOCK);
}
