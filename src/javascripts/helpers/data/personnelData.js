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

const addPersonnel = (newPersonnel) => axios.post(`${baseUrl}/personnel.json`, newPersonnel);

const getPersonnelInfo = (personnelId) => axios.get(`${baseUrl}/personnel/${personnelId}.json`);

const updatePersonnel = (personnelId, modifiedPersonnel) => axios.put(`${baseUrl}/personnel/${personnelId}.json`, modifiedPersonnel);

const deletePersonnel = (personnelId) => axios.delete(`${baseUrl}/personnel/${personnelId}.json`);

export default {
  getPersonnel,
  addPersonnel,
  getPersonnelInfo,
  updatePersonnel,
  deletePersonnel,
};
