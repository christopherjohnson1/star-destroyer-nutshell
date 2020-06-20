import utils from '../../helpers/utils';
import weaponsData from '../../helpers/data/weaponsData';

const editWeaponForm = (e) => {
  const weaponId = e.target.closest('.card').id;
  $('#addWeaponModal').modal('show');
  weaponsData.getWeaponInfo(weaponId)
    .then((resp) => {
      const weaponPlaceHolder = resp.data;
      let domString = '';
      domString += `<div id="weaponForm" class="weapon-form" data-id="${weaponId}">`;
      domString += '<div id="form-group">';
      domString += '<label for="weaponName">Edit the weapon name</label>';
      domString += `<input type="text" id="editWeaponName" class="form-control" value="${weaponPlaceHolder.name}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="weaponImageUrl">Edit weapon photo</label>';
      domString += `<input type="text" id="editWeaponImageUrl" class="form-control" value="${weaponPlaceHolder.imageUrl}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="weaponDescription">Edit the weapon description</label>';
      domString += `<input type="text" id="editWeaponDescription" class="form-control" value="${weaponPlaceHolder.description}">`;
      domString += '</div>';
      domString += '</div>';
      utils.printToDom('modalWeaponForm', domString);
      $('#newWeaponSubmit').addClass('hide');
      $('#editWeaponSubmit').removeClass('hide');
    })
    .catch((err) => console.error('editWeaponForm', err));
};

export default { editWeaponForm };
