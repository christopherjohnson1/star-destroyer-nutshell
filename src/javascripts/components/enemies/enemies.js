import firebase from 'firebase/app';
import enemiesData from '../../helpers/data/enemiesData';
import utils from '../../helpers/utils';
import enemyCards from './enemyCards';

const buildAllEnemies = () => {
  let domString = '';
  enemiesData.getEnemies()
    .then((allEnemies) => {
      domString += '<div id="enemies-title" class="text-center">';
      domString += '<h2 class="text-center mt-3">Enemies</h2>';
      const user = firebase.auth().currentUser;
      if (user !== null) {
        domString += '<button id="addEnemyButton" class="btn btn-lg add-enemy-button"><i class="fas fa-plus"></i>Add Enemy</button>';
      }
      domString += '</div>';
      domString += '<div class="container-fluid d-flex flex-wrap col-md-9 col-sm-10">';
      allEnemies.forEach((enemies) => {
        domString += enemyCards.buildAllEnemyCards(enemies);
      });
      domString += '</div>';
      utils.printToDom('enemies', domString);
    })
    .catch((err) => console.error('get enemies failed', err));
};

export default { buildAllEnemies };
