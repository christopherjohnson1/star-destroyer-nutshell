import utils from '../../helpers/utils';
import personnelData from '../../helpers/data/personnelData';

const editPersonnelForm = (e) => {
  const personnelId = e.target.closest('.card').id;
  $('#addPersonnelModal').modal('show');
  personnelData.getPersonnelInfo(personnelId)
    .then((resp) => {
      const personnelPlaceholder = resp.data;
      let domString = '';
      domString += `<div id="personnelForm" class="personnel-form" data-id="${personnelId}">`;
      domString += '<div class="form-group">';
      domString += '<label for="personnelName">Edit the new personnel name</label>';
      domString += `<input type="text" id="editPersonnelName" class="form-control" value="${personnelPlaceholder.name}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="personnelImageUrl">Edit personnel Photo</label>';
      domString += `<input type="text" id="editPersonnelImageUrl" class="form-control" value="${personnelPlaceholder.imageUrl}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="personnelTitle">Edit the title of personnel</label>';
      domString += `<input type="text" id="editPersonnelTitle" class="form-control" value="${personnelPlaceholder.title}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="personnelDescription">Edit the personnel description</label>';
      domString += `<input type="text" id="editPersonnelDescription" class="form-control" value="${personnelPlaceholder.description}">`;
      domString += '</div>';
      domString += '</div>';
      utils.printToDom('modalPersonnelForm', domString);
      $('#newPersonnelSubmit').addClass('hide');
      $('#editPersonnelSubmit').removeClass('hide');
    })
    .catch((err) => console.error('editPersonnelMemberForm', err));
};

export default { editPersonnelForm };
