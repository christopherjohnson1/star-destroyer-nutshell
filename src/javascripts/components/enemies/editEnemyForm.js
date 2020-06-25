import utils from '../../helpers/utils';
import enemiesData from '../../helpers/data/enemiesData';

const editEnemyForm = (e) => {
  const enemyId = e.target.closest('.card').id;
  $('#addEnemyModal').modal('show');
  enemiesData.getEnemyInfo(enemyId)
    .then((resp) => {
      const enemyPlaceholder = resp.data;
      let domString = '';
      domString += `<div id="enemyForm" class="enemy-form" data-id="${enemyId}">`;
      domString += '<div id="form-group">';
      domString += '<label for="enemyName">Enter the name of the enemy</label>';
      domString += `<input type="text" id="editEnemyName" class="form-control" value="${enemyPlaceholder.name}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="enemyImageUrl">Edit the enemy Photo Url</label>';
      domString += `<input type="text" id="editEnemyImageUrl" class="form-control" value="${enemyPlaceholder.imageUrl}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="ememyStrengths">Enter the strengths (if any) for the enemy</label>';
      domString += `<input type="text" id="editEnemyStrengths" class="form-control" value="${enemyPlaceholder.strengths}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="enemyWeaknesses">Enter all of the enemies weaknesses so they can be defeated!</label>';
      domString += `<input type="text" id="editEnemyWeaknesses" class="form-control" value="${enemyPlaceholder.weaknesses}">`;
      domString += '</div>';
      domString += '</div>';
      utils.printToDom('modalEnemyForm', domString);
      $('#newEnemySubmit').addClass('hide');
      $('#editEnemySubmit').removeClass('hide');
    })
    .catch((err) => console.error('editEnemyForm', err));
};

export default { editEnemyForm };
