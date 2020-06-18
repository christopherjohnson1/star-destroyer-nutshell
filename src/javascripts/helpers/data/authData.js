import firebase from 'firebase/app';
import 'firebase/auth';
import personnel from '../../components/personnel/personnel';
import weapons from '../../components/weapons/weapons';

const authDiv = $('#auth');
const testDiv = $('#test');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      testDiv.removeClass('hide');
      logoutButton.removeClass('hide');
    } else {
      authDiv.removeClass('hide');
      testDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
    personnel.buildAllPersonnel();
    personnel.personnelEvents();
    weapons.buildAllWeapons();
    weapons.weaponEvents();
  });
};

export default { checkLoginStatus };
