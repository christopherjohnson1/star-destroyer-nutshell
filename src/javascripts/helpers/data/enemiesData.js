import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEnemies = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/enemy.json`)
    .then((response) => {
      const allEnemies = response.data;
      const enemies = [];
      if (allEnemies) {
        Object.keys(allEnemies).forEach((enemyId) => {
          allEnemies[enemyId].id = enemyId;
          enemies.push(allEnemies[enemyId]);
        });
      }
      resolve(enemies);
    })
    .catch((err) => reject(err));
});

export default { getEnemies };
