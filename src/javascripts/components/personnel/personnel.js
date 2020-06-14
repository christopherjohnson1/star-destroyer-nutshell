import personnelData from '../../helpers/data/personnelData';
import personnelCards from './personnelCards';
import utils from '../../helpers/utils';

const buildAllPersonnel = () => {
  let domString = '';
  personnelData.getPersonnel()
    .then((allPersonnel) => {
      domString += '<div id="personnel-title" class="text-center">';
      domString += '<h2 class="text-center mt-3">Personnel</h2>';
      domString += '</div>';
      domString += '<div class="container-fluid d-flex flex-wrap col-md-9 col-sm-10">';
      allPersonnel.forEach((personnel) => {
        domString += personnelCards.buildPersonnelCards(personnel);
      });
      domString += '</div>';
      utils.printToDom('personnel', domString);
    })
    .catch((err) => console.error('get personnel failed', err));
};

export default { buildAllPersonnel };
