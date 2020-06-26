/* eslint-disable no-use-before-define */
import firebase from 'firebase/app';
import planetarySectorData from '../../helpers/data/planetarySectorData';
import utils from '../../helpers/utils';
import planetarySectorCards from './planetarySectorCards';
import newPlanetarySectorForm from './newPlanetarySectorForm';
import editPlanetarySectorForm from './editPlanetarySectorForm';

const saveNewPlanetarySectorItem = (e) => {
  e.stopImmediatePropagation();
  const newPlanetarySector = {
    name: $('#planetarySectorName').val(),
    imageUrl: $('#planetarySectorImageUrl').val(),
    beenThere: $('#explore').val(),
  };
  planetarySectorData.addPlanetarySector(newPlanetarySector)
    .then(() => {
      document.getElementById('modalPlanetarySectorForm').reset();
      $('#addPlanetarySectorModal').modal('hide');
      buildAllPlanetarySectors();
    })
    .catch((err) => console.error('save new planetary sector failed', err));
};

const editPlanetarySectorItem = (e) => {
  e.preventDefault();
  const planetarySectorId = $('.planetary-sector-form').data('id');
  const editPlanetarySector = {
    name: $('#editPlanetarySectorName').val(),
    imageUrl: $('#editPlanetarySectorImageUrl').val(),
    beenThere: $('#editExplore').val(),
  };
  planetarySectorData.updatePlanetarySector(planetarySectorId, editPlanetarySector)
    .then(() => {
      document.getElementById('modalPlanetarySectorForm').reset();
      $('#addPlanetarySectorModal').modal('hide');
      buildAllPlanetarySectors();
    })
    .catch((err) => console.error('edit planetary sector failed', err));
};

const removePlanetarySectorCard = (e) => {
  e.preventDefault();
  const planetarySectorId = e.target.closest('.card').id;
  planetarySectorData.deletePlanetarySector(planetarySectorId)
    .then(() => {
      buildAllPlanetarySectors();
    })
    .catch((err) => console.error('delete planetary sector failed', err));
};

const buildAllPlanetarySectors = () => {
  let domString = '';
  planetarySectorData.getPlanetartSectors()
    .then((allPlanetarySectors) => {
      domString += '<div id="planetary-sector-title" class="text-center section-title mb-3">';
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

const planetarySectorEvents = () => {
  $('body').on('click', '#addPlanetarySectorBtn', newPlanetarySectorForm.newPlanetarySectorForm);
  $('body').on('click', '#newPlanetarySectorSubmit', saveNewPlanetarySectorItem);
  $('body').on('click', '#editPlanetarySectorBtn', editPlanetarySectorForm.editPlanetarySectorForm);
  $('body').on('click', '#editPlanetarySectorSubmit', editPlanetarySectorItem);
  $('body').on('click', '#deletePlanetarySectorBtn', removePlanetarySectorCard);
};

export default { buildAllPlanetarySectors, planetarySectorEvents };
