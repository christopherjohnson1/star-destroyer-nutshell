import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getWeapons = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/weapons.json`)
    .then((response) => {
      const allWeapons = response.data;
      const weapons = [];
      if (allWeapons) {
        Object.keys(allWeapons).forEach((weaponId) => {
          allWeapons[weaponId].id = weaponId;
          weapons.push(allWeapons[weaponId]);
        });
      }
      resolve(weapons);
    })
    .catch((err) => reject(err));
});

const addWeapon = (newWeapon) => axios.post(`${baseUrl}/weapons.json`, newWeapon);

const getWeaponInfo = (weaponId) => axios.get(`${baseUrl}/weapons/${weaponId}.json`);

const updateWeapon = (weaponId, modifiedWeapon) => axios.put(`${baseUrl}/weapons/${weaponId}.json`, modifiedWeapon);

const deleteWeapon = (weaponId) => axios.delete(`${baseUrl}/weapons/${weaponId}.json`);

export default {
  getWeapons,
  addWeapon,
  getWeaponInfo,
  updateWeapon,
  deleteWeapon,
};
