import firebase from 'firebase/app';
import 'firebase/auth';
import personnel from '../../components/personnel/personnel';
import weapons from '../../components/weapons/weapons';
import planetarySectors from '../../components/planetarySectors/planetarySectors';
import enemies from '../../components/enemies/enemies';

const authDiv = $('#auth');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      logoutButton.removeClass('hide');
    } else {
      authDiv.removeClass('hide');
      logoutButton.addClass('hide');
    }
    personnel.buildAllPersonnel();
    personnel.personnelEvents();
    weapons.buildAllWeapons();
    weapons.weaponEvents();
    planetarySectors.buildAllPlanetarySectors();
    planetarySectors.planetarySectorEvents();
    enemies.buildAllEnemies();
    enemies.enemyEvents();
  });
};

export default { checkLoginStatus };
