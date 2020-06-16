import firebase from 'firebase/app';
import weaponsData from '../../helpers/data/weaponsData';
import utils from '../../helpers/utils';
import weaponCards from './weaponCards';

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

export default { buildAllWeapons };
