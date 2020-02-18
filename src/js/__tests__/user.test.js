/* eslint-disable no-undef */

import GameSavingLoader from '../app';


test('testing GameSavingLoader', (done) => {
  GameSavingLoader.load().then((saving) => {
    const result = JSON.parse(saving);
    expect(result).toEqual({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1, name: 'Hitman', level: 10, points: 2000,
      },
    });
    done();
  });
});
