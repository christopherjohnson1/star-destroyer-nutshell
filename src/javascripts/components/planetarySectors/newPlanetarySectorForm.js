import utils from '../../helpers/utils';

const newPlanetarySectorForm = () => {
  $('#addPlanetarySectorModal').modal('show');
  let domString = '';
  domString += '<div class="form-group">';
  domString += '<label for="planetarySectorName">Enter the name of the new planetary sector</label>';
  domString += '<input type="text" id="planetarySectorName" class="form-control" placeholder="Planetary Sector Name">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="planetarySectorImageUrl">Planetary Sector Photo</label>';
  domString += '<input type="text" id="planetarySectorImageUrl" class="form-control" placeholder="Image Url">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<p class="radio-title">Select appropriate value if planetary sector explored or not</p>';
  domString += '<label for="explored">Enter Yes or No</label>';
  domString += '<input type="text" id="explored" class="form-control" placeholder="Enter yes or no">';
  domString += '</div>';
  utils.printToDom('modalPlanetarySectorForm', domString);
  $('#newPlanetarySectorSubmit').removeClass('hide');
  $('#editPlanetarySectorSubmit').addClass('hide');
};

export default { newPlanetarySectorForm };
