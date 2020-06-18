/* eslint-disable no-use-before-define */
import firebase from 'firebase/app';
import weaponsData from '../../helpers/data/weaponsData';
import newWeaponForm from './newWeaponForm';
import utils from '../../helpers/utils';
import weaponCards from './weaponCards';

const saveNewWeaponItem = (e) => {
  e.stopImmediatePropogation();
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

const buildAllWeapons = () => {
  let domString = '';
  weaponsData.getWeapons()
    .then((allWeapons) => {
      domString += '<div id="weapon-title" class="text-center">';
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
};

export default { buildAllWeapons, weaponEvents };
