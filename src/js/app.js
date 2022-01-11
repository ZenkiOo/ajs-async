/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import GameSavingLoader from './GameSavingLoader';

(async () => {
  const saving = await GameSavingLoader.load();
  console.log(saving);
})();
