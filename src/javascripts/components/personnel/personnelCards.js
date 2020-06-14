import firebase from 'firebase/app';

const buildPersonnelCards = (personnel) => {
  let domString = '';
  domString += '<div class="col-md-4 col-sm-12 mb-2">';
  domString += `<div id="${personnel.id}" class="card">`;
  domString += `<img src="${personnel.imageUrl}" class="card-img-top img-fluid personnel-img" alt="Photo of ${personnel.name}">`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${personnel.name}</h5>`;
  domString += `<p class="card-text">Title: ${personnel.title}</p>`;
  domString += `<p class="card-text">Description: ${personnel.description}</p>`;
  const user = firebase.auth().currentUser;
  if (user !== null) {
    domString += '<button id="editPersonnelBtn" class="col-5 btn editPersonnelBtn"><i class="fas fa-feather-alt"></i> Edit</button>';
    domString += '<button id="deletePersonnelBtn" class="col-5 btn delete-personnel-btn"><i class="far fa-trash-alt"></i>Delete</button>';
  }
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { buildPersonnelCards };
