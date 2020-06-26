import firebase from 'firebase/app';

const buildAllEnemyCards = (enemies) => {
  let domString = '';
  domString += '<div class="col-md-4 col-sm-10 mb-2">';
  domString += `<div id="${enemies.id}" class="card">`;
  domString += `<img src="${enemies.imageUrl}" class="card-img-top img-fluid enemy-img" alt="Photo of ${enemies.name}">`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${enemies.name}</h5>`;
  domString += `<p class="card-text">Strengths: ${enemies.strengths}</p>`;
  domString += `<p class="card-text">Weaknesses: ${enemies.weaknesses}</p>`;
  const user = firebase.auth().currentUser;
  if (user !== null) {
    domString += '<button id="editEnemyBtn" class="col-5 btn btn-dark editEnemyBtn add-edit-btn"><i class="fas fa-feather-alt"></i>Edit</button>';
    domString += '<button id="deleteEnemyBtn" class="col-5 btn btn-dark deleteEnemyBtn add-edit-btn"><i class="far fa-trash-alt"></i>Delete</button>';
  }
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { buildAllEnemyCards };
