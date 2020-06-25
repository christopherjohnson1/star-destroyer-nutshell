/* eslint-disable no-use-before-define */
import firebase from 'firebase/app';
import enemiesData from '../../helpers/data/enemiesData';
import utils from '../../helpers/utils';
import enemyCards from './enemyCards';
import newEnemyForm from './newEnemyForm';

const saveNewEnemyItem = (e) => {
  e.stopImmediatePropagation();
  const newEnemy = {
    name: $('#enemyName').val(),
    imageUrl: $('#enemyImageUrl').val(),
    strengths: $('#enemyStrengths').val(),
    weaknesses: $('#enemyWeaknesses').val(),
  };
  enemiesData.addEnemy(newEnemy)
    .then(() => {
      document.getElementById('modalEnemyForm').reset();
      $('#addEnemyModal').modal('hide');
      buildAllEnemies();
    })
    .catch((err) => console.error('save new enemy failed', err));
};

const buildAllEnemies = () => {
  let domString = '';
  enemiesData.getEnemies()
    .then((allEnemies) => {
      domString += '<div id="enemies-title" class="text-center">';
      domString += '<h2 class="text-center mt-3">Enemies</h2>';
      const user = firebase.auth().currentUser;
      if (user !== null) {
        domString += '<button id="addEnemyBtn" class="btn btn-lg add-enemy-button"><i class="fas fa-plus"></i>Add Enemy</button>';
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

const enemyEvents = () => {
  $('body').on('click', '#addEnemyBtn', newEnemyForm.newEnemyForm);
  $('body').on('click', '#newEnemySubmit', saveNewEnemyItem);
};

export default { buildAllEnemies, enemyEvents };
