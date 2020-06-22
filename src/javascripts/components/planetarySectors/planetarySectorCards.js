import firebase from 'firebase/app';

const buildAllPlanetarySectorCards = (planetarySectors) => {
  let domString = '';
  domString += '<div class="col-md-4 col-sm-12 mb-2">';
  domString += `<div id="${planetarySectors.id}" class="card">`;
  domString += `<img src="${planetarySectors.imageUrl}" class="card-img-top img-fluid planetary-sector-img" alt="Photo of ${planetarySectors.name}">`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${planetarySectors.name}</h5>`;
  domString += `<p class="card-text">Has been visited: ${planetarySectors.beenThere}</p>`;
  const user = firebase.auth().currentUser;
  if (user !== null) {
    domString += '<button id="editPlanetarySectorBtn" class="col-5 btn editPlanetarySectorBtn"><i class="fas fa-feather-alt"></i>Edit</button>';
    domString += '<button id="deletePlanetarySectorBtn" class="col-5 btn deletePlanetarySectorBtn"><i class="far fa-trash-alt"></i>Delete</button>';
  }
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { buildAllPlanetarySectorCards };
