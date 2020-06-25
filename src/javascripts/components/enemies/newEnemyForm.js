import utils from '../../helpers/utils';

const newEnemyForm = () => {
  $('#addEnemyModal').modal('show');
  let domString = '';
  domString += '<div class="form-group">';
  domString += '<label for="enemyName">Enter the name of the enemy</label>';
  domString += '<input type="text" id="enemyName" class="form-control" placeholder="Enemy Name">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="enemyImageUrl">Enemy Photo Url</label>';
  domString += '<input type="text" id="enemyImageUrl" class="form-control" placeholder="Image Url">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="enemyStrengths">Enter the strengths (if any) for the enemy</label>';
  domString += '<input type="text" id="enemyStrengths" class="form-control" placeholder="Enemy Strengths">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="enemyWeaknesses">Enter all of the weaknesses of the enemy so they can be defated!</label>';
  domString += '<input type="text" id="enemyWeaknesses" class="form-control" placeholder="Enemy Weaknesses">';
  domString += '</div>';
  utils.printToDom('modalEnemyForm', domString);
  $('#newEnemySubmit').removeClass('hide');
  $('#editEnemySubmit').addClass('hide');
};

export default { newEnemyForm };
