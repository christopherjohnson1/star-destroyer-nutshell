import utils from '../../helpers/utils';

const newWeaponForm = () => {
  $('#addWeaponModal').modal('show');
  let domString = '';
  domString += '<div class="form-group">';
  domString += '<label for="weaponName">Enter the name of new weapon</label>';
  domString += '<input type="text" id="weaponName" class="form-control" placeholder="Weapon Name">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="weaponImageUrl">Weapon Photo</label>';
  domString += '<input type="text" id="weaponImageUrl" class="form-control" placeholder="Image Url">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="weaponDescription">Enter the description of the weapon.</label>';
  domString += '<input type="text" id="weaponDescription" class="form-control" placeholder="Weapon Description">';
  domString += '</div>';
  utils.printToDom('modalWeaponForm', domString);
  $('#newWeaponSubmit').removeClass('hide');
  $('#newWeaponEdit').addClass('hide');
};

export default { newWeaponForm };
