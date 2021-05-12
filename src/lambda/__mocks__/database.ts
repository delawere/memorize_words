import getMockWords from '../utils/getMockWords';

const firestore = {
  collection: (collectionName: string): unknown => {
    const collections = {
      users: {
        doc: (uid: string) => {
          const docs = {
            '1': {
              collection: (anotherCollectionName: string) => {
                const anotherCollection = {
                  words: {
                    get: () => {
                      return getMockWords(
                        'rabbit | rabbit | 2021.01.12 | 2021.01.12 | 3 | Rabbit runs  | run.mp3',
                        'fish   | fish   | 2021.12.12 | 2021.12.12 | 0 | Fish bubbles | bubble.mp3',
                        'cat    | cat    | 2021.11.12 | 2021.11.12 | 1 | Cat meows    | meow.mp3',
                        'dog    | dog    | 2021.10.12 | 2021.10.12 | 2 | Dog barks    | bark.mp3'
                      );
                    },
                  },
                };

                return anotherCollection[
                  anotherCollectionName as keyof typeof anotherCollection
                ];
              },
              get: () => {
                return {
                  data: () => ({ colorScheme: 'light', language: 'en' }),
                };
              },
            },
          };

          return docs[uid as keyof typeof docs];
        },
      },
    };

    return collections[collectionName as keyof typeof collections];
  },
};

export { firestore };
