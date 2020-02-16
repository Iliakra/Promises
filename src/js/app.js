import json from './parser';
import read from './reader';



class GameSavingLoader {
  static load() {
    const data = read();
    const value = data.then((buffer) => json(buffer)).then((result) => result);
    return value;
  }
}