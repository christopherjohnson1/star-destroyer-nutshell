import firebase from 'firebase/app';

const buildAllWeaponCards = (weapons) => {
  let domString = '';
  domString += '<div class="col-md-4 col-sm-12 mb-2">';
  domString += `<div id="${weapons.id}" class="card">`;
  domString += `<img src="${weapons.imageUrl}" class="card-img-top img-fluid weapon-img" alt"Photo of ${weapons.name}">`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${weapons.name}</h5>`;
  domString += `<p class="card-text">Description: ${weapons.description}</p>`;
  const user = firebase.auth().currentUser;
  if (user !== null) {
    domString += '<button id="editWeaponBtn" class="col-5 btn btn-dark editWeaponBtn add-edit-btn"><i class="fas fa-feather-alt"></i>Edit</button>';
    domString += '<button id="deleteWeaponBtn" class="col-5 btn btn-dark deleteWeaponBtn add-edit-btn"><i class="far fa-trash-alt"></i>Delete</button>';
  }
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { buildAllWeaponCards };
