/* eslint-disable no-use-before-define */
import firebase from 'firebase/app';
import enemiesData from '../../helpers/data/enemiesData';
import utils from '../../helpers/utils';
import enemyCards from './enemyCards';
import newEnemyForm from './newEnemyForm';
import editEnemyForm from './editEnemyForm';

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

const editEnemyItem = (e) => {
  e.preventDefault();
  const enemyId = $('.enemy-form').data('id');
  const editEnemy = {
    name: $('#editEnemyName').val(),
    imageUrl: $('#editEnemyImageUrl').val(),
    strengths: $('#editEnemyStrengths').val(),
    weaknesses: $('#editEnemyWeaknesses').val(),
  };
  enemiesData.updateEnemy(enemyId, editEnemy)
    .then(() => {
      document.getElementById('modalEnemyForm').reset();
      $('#addEnemyModal').modal('hide');
      buildAllEnemies();
    })
    .catch((err) => console.error('edit enemy failed', err));
};

const removeEnemyCard = (e) => {
  e.preventDefault();
  const enemyId = e.target.closest('.card').id;
  enemiesData.deleteEnemy(enemyId)
    .then(() => {
      buildAllEnemies();
    })
    .catch((err) => console.error('delete enemy failed', err));
};

const buildAllEnemies = () => {
  let domString = '';
  enemiesData.getEnemies()
    .then((allEnemies) => {
      domString += '<div id="enemies-title" class="text-center section-title mb-3">';
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
  $('body').on('click', '#editEnemyBtn', editEnemyForm.editEnemyForm);
  $('body').on('click', '#editEnemySubmit', editEnemyItem);
  $('body').on('click', '#deleteEnemyBtn', removeEnemyCard);
};

export default { buildAllEnemies, enemyEvents };
