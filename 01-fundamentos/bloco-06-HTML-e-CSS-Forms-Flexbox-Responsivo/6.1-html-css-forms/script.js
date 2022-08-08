const button = document.querySelector('#send-button');
let inputUserName = document.querySelector('#full-name');

function getUserValue(event) {
  event.preventDefault();
  console.log(inputUserName.value);
}

button.addEventListener('click', getUserValue); 