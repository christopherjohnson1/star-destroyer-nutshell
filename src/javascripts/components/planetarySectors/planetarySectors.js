import firebase from 'firebase/app';
import planetarySectorData from '../../helpers/data/planetarySectorData';
import utils from '../../helpers/utils';
import planetarySectorCards from './planetarySectorCards';

const buildAllPlanetarySectors = () => {
  let domString = '';
  planetarySectorData.getPlanetartSectors()
    .then((allPlanetarySectors) => {
      domString += '<div id="planetary-sector-title" class="text-center">';
      domString += '<h2 class="text-center mt-3">Planetary Sectors</h2>';
      const user = firebase.auth().currentUser;
      if (user !== null) {
        domString += '<button id="addPlanetarySectorBtn" class="btn btn-lg add-planetary-sector-btn"><i class="fas fa-plus"></i>Add Planetary Sector</button>';
      }
      domString += '</div>';
      domString += '<div class="container-fluid d-flex flex-wrap col-md-9 col-sm-10">';
      allPlanetarySectors.forEach((planetarySector) => {
        domString += planetarySectorCards.buildAllPlanetarySectorCards(planetarySector);
      });
      domString += '</div>';
      utils.printToDom('planetarySectors', domString);
    })
    .catch((err) => console.error('get planetary sectors failed', err));
};

export default { buildAllPlanetarySectors };
