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

const addEnemy = (newEnemy) => axios.post(`${baseUrl}/enemy.json`, newEnemy);

const getEnemyInfo = (enemyId) => axios.get(`${baseUrl}/enemy/${enemyId}.json`);

const updateEnemy = (enemyId, modifiedEnemy) => axios.put(`${baseUrl}/enemy/${enemyId}.json`, modifiedEnemy);

const deleteEnemy = (enemyId) => axios.delete(`${baseUrl}/enemy/${enemyId}.json`);

export default {
  getEnemies,
  addEnemy,
  getEnemyInfo,
  updateEnemy,
  deleteEnemy,
};
