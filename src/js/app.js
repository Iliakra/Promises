import json from './parser';
import read from './reader';


export default class GameSavingLoader {
  static load() {
    const data = read();
    const value = data.then((buffer) => json(buffer)).then((result) => result);
    return value;
  }
}


GameSavingLoader.load().then((saving) => {
  const result = JSON.parse(saving);
  return result;
}, (error) => {
  return new Error('Ошибка обработки!');
});