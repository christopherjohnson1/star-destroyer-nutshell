import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPersonnel = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/personnel.json`)
    .then((response) => {
      const allPersonnel = response.data;
      const personnel = [];
      if (allPersonnel) {
        Object.keys(allPersonnel).forEach((personnelId) => {
          allPersonnel[personnelId].id = personnelId;
          personnel.push(allPersonnel[personnelId]);
        });
      }
      resolve(personnel);
    })
    .catch((err) => reject(err));
});

export default { getPersonnel };
