/* eslint-disable no-use-before-define */
import firebase from 'firebase/app';
import personnelData from '../../helpers/data/personnelData';
import personnelCards from './personnelCards';
import newPersonnelForm from './newPersonnelForm';
import utils from '../../helpers/utils';

const saveNewPersonnelItem = (e) => {
  e.stopImmediatePropagation();
  const newPersonnel = {
    name: $('#personnelName').val(),
    imageUrl: $('#personnelImageUrl').val(),
    title: $('#personnelTitle').val(),
    description: $('#personnelDescription').val(),
  };
  personnelData.addPersonnel(newPersonnel)
    .then(() => {
      document.getElementById('modalPersonnelForm').reset();
      $('#addPersonnelModal').modal('hide');
      buildAllPersonnel();
    })
    .catch((err) => console.error('save new personnel failed', err));
};

const buildAllPersonnel = () => {
  let domString = '';
  personnelData.getPersonnel()
    .then((allPersonnel) => {
      domString += '<div id="personnel-title" class="text-center">';
      domString += '<h2 class="text-center mt-3">Personnel</h2>';
      const user = firebase.auth().currentUser;
      if (user !== null) {
        domString += '<button id="addPersonnelBtn" class="btn btn-lg add-personnel-btn"><i class="fas fa-plus"></i>Add Personnel</button>';
      }
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

const personnelEvents = () => {
  $('body').on('click', '#addPersonnelBtn', newPersonnelForm.newPersonnelForm);
  $('body').on('click', '#newPersonnelSubmit', saveNewPersonnelItem);
};

export default { buildAllPersonnel, personnelEvents };
