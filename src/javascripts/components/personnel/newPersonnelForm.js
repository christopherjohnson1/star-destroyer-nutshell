import utils from '../../helpers/utils';

const newPersonnelForm = () => {
  $('#addPersonnelModal').modal('show');
  let domString = '';
  domString += '<div class="form-group">';
  domString += '<label for="personnelName">Enter the new personnel name</label>';
  domString += '<input type="text" id="personnelName" class="form-control" placeholder="Name">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="personnelImageUrl">Personnel Photo</label>';
  domString += '<input type="text" id="personnelImageUrl" class="form-control" placeholder="imageUrl">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="personnelTitle">Enter the title of personnel</label>';
  domString += '<input type="text" id="personnelTitle" class="form-control" placeholder="title">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="personnelDescription">Enter the personnel description</label>';
  domString += '<input type="text" id="personnelDescription" class="form-control" placeholder="Description">';
  domString += '</div>';
  utils.printToDom('modalPersonnelForm', domString);
  $('newPersonnelSubmit').removeClass('hide');
  $('#editPersonnelSubmit').addClass('hide');
};

export default { newPersonnelForm };
