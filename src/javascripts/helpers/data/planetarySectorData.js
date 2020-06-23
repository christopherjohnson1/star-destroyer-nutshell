import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPlanetartSectors = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/planetarySector.json`)
    .then((response) => {
      const allPlanetarySectors = response.data;
      const planetarySectors = [];
      if (allPlanetarySectors) {
        Object.keys(allPlanetarySectors).forEach((planetarySectorId) => {
          allPlanetarySectors[planetarySectorId].id = planetarySectorId;
          planetarySectors.push(allPlanetarySectors[planetarySectorId]);
        });
      }
      resolve(planetarySectors);
    })
    .catch((err) => reject(err));
});

const addPlanetarySector = (newPlanetarySector) => axios.post(`${baseUrl}/planetarySector.json`, newPlanetarySector);

const getPlanetarySectorInfo = (planetarySectorId) => axios.get(`${baseUrl}/planetarySector/${planetarySectorId}.json`);

const updatePlanetarySector = (planetarySectorId, modifiedPlanetarySector) => axios.put(`${baseUrl}/planetarySector/${planetarySectorId}.json`, modifiedPlanetarySector);

const deletePlanetarySector = (planetarySectorId) => axios.delete(`${baseUrl}/planetarySector/${planetarySectorId}.json`);

export default {
  getPlanetartSectors,
  addPlanetarySector,
  getPlanetarySectorInfo,
  updatePlanetarySector,
  deletePlanetarySector,
};
