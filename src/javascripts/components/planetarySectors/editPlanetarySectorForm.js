import utils from '../../helpers/utils';
import planetarySectorData from '../../helpers/data/planetarySectorData';

const editPlanetarySectorForm = (e) => {
  const planeterySectorId = e.target.closest('.card').id;
  $('#addPlanetarySectorModal').modal('show');
  planetarySectorData.getPlanetarySectorInfo(planeterySectorId)
    .then((resp) => {
      const planetarySectorPlaceholder = resp.data;
      let domString = '';
      domString += `<div id="planetarySectorForm" class="planetary-sector-form" data-id="${planeterySectorId}">`;
      domString += '<div id="form-group">';
      domString += '<label for="planetarySectorName">Edit the name of the planetary sector</label>';
      domString += `<input type="text" id="editPlanetarySectorName" class="form-control" value="${planetarySectorPlaceholder.name}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="planetarySectorImageUrl">Edit the planetary sector photo</label>';
      domString += `<input type="text" id="editPlanetarySectorImageUrl" class="form-control" value="${planetarySectorPlaceholder.imageUrl}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="explore">Update if you have explored the area or not</label>';
      domString += '<select id="editExplore" name="explore">';
      domString += '<option value="Yes">Yes</option>';
      domString += '<option value="No">No</option>';
      domString += '</select>';
      domString += '</div>';
      utils.printToDom('modalPlanetarySectorForm', domString);
      $('#newPlanetarySectorSubmit').addClass('hide');
      $('#editPlanetarySectorSubmit').removeClass('hide');
    })
    .catch((err) => console.error('editPlanetarySector', err));
};

export default { editPlanetarySectorForm };
