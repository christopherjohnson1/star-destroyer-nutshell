import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = $('#auth');
const testDiv = $('#test');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    console.error('user', user);
    if (user) {
      authDiv.addClass('hide');
      testDiv.removeClass('hide');
      logoutButton.removeClass('hide');
    } else {
      authDiv.removeClass('hide');
      testDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
