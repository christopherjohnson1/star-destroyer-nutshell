/* eslint-disable no-use-before-define */
import firebase from 'firebase/app';
import weaponsData from '../../helpers/data/weaponsData';
import newWeaponForm from './newWeaponForm';
import utils from '../../helpers/utils';
import weaponCards from './weaponCards';
import editWeaponForm from './editWeaponForm';

const saveNewWeaponItem = (e) => {
  e.stopImmediatePropagation();
  const newWeapon = {
    name: $('#weaponName').val(),
    imageUrl: $('#weaponImageUrl').val(),
    description: $('#weaponDescription').val(),
  };
  weaponsData.addWeapon(newWeapon)
    .then(() => {
      document.getElementById('modalWeaponForm').reset();
      $('#addWeaponModal').modal('hide');
      buildAllWeapons();
    })
    .catch((err) => console.error('save new weapon failed', err));
};

const editWeaponItem = (e) => {
  e.preventDefault();
  const weaponId = $('.weapon-form').data('id');
  const editWeapon = {
    name: $('#editWeaponName').val(),
    imageUrl: $('#editWeaponImageUrl').val(),
    description: $('#editWeaponDescription').val(),
  };
  weaponsData.updateWeapon(weaponId, editWeapon)
    .then(() => {
      document.getElementById('modalWeaponForm').reset();
      $('#addWeaponModal').modal('hide');
      buildAllWeapons();
    })
    .catch((err) => console.error('edit weapon failed', err));
};

const removeWeaponCards = (e) => {
  e.preventDefault();
  const weaponId = e.target.closest('.card').id;
  weaponsData.deleteWeapon(weaponId)
    .then(() => {
      buildAllWeapons();
    })
    .catch((err) => console.error('delete weapon failed', err));
};

const buildAllWeapons = () => {
  let domString = '';
  weaponsData.getWeapons()
    .then((allWeapons) => {
      domString += '<div id="weapon-title" class="text-center section-title mb-3">';
      domString += '<h2 class="text-center mt-3">Weapons</h2>';
      const user = firebase.auth().currentUser;
      if (user !== null) {
        domString += '<button id="addWeaponBtn" class="btn btn-lg add-weapon-btn"><i class="fas fa-plus"></i>Add Weapon</button>';
      }
      domString += '</div>';
      domString += '<div class="container-fluid d-flex flex-wrap col-md-9 col-sm-10">';
      allWeapons.forEach((weapons) => {
        domString += weaponCards.buildAllWeaponCards(weapons);
      });
      domString += '</div>';
      utils.printToDom('weapons', domString);
    })
    .catch((err) => console.error('get weapons failed', err));
};

const weaponEvents = () => {
  $('body').on('click', '#addWeaponBtn', newWeaponForm.newWeaponForm);
  $('body').on('click', '#newWeaponSubmit', saveNewWeaponItem);
  $('body').on('click', '#editWeaponBtn', editWeaponForm.editWeaponForm);
  $('body').on('click', '#editWeaponSubmit', editWeaponItem);
  $('body').on('click', '#deleteWeaponBtn', removeWeaponCards);
};

export default { buildAllWeapons, weaponEvents };
