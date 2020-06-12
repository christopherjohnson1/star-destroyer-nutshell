import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = $('#auth');
const pinterestDiv = $('#pinterest');
const logoutButton = $('#navbar-logout-button');
const pinterestHeading = $('#show-me-the-pinterest');
const boardsHeading = $('#pinterest-boards');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      pinterestDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      pinterestHeading.addClass('hide');
      boardsHeading.removeClass('hide');
    } else {
      authDiv.removeClass('hide');
      pinterestDiv.addClass('hide');
      logoutButton.addClass('hide');
      pinterestHeading.removeClass('hide');
      boardsHeading.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
