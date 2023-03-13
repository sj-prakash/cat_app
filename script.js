const catapiKey = 'live_CiuY0U0Up1vtvyzyfmdvy5Q7XFq6IEqwWyhAFRBfiIEtZIMQfKn0wYdegfErVmQU';
const dogapiKey = 'live_Sj1mu3xXx97jR16u70oHuDQavRf4dTflE7PuKAgryYamI7wr3c0jVtkXxcE3INxF';
const catImageElement = document.getElementById('cat-image');
const newCatButton = document.getElementById('new-cat-btn');
const newDogButton = document.getElementById('new-dog-btn');

function getCatImage() {
  axios.get(`https://api.thecatapi.com/v1/images/search?api_key=${catapiKey}`)
    .then(response => {
      const catImageUrl = response.data[0].url;
      catImageElement.innerHTML = `<img src="${catImageUrl}">`;
    })
    .catch(error => {
      console.log(error);
    });
}

function getDogImage() {
  axios.get(`https://api.thedogapi.com/v1/images/search?api_key=${dogapiKey}`)
    .then(response => {
      const dogImageUrl = response.data[0].url;
      catImageElement.innerHTML = `<img src="${dogImageUrl}">`;
    })
    .catch(error => {
      console.log(error);
    });
}

newCatButton.addEventListener('click', getCatImage);
newDogButton.addEventListener('click', getDogImage);


getCatImage();

