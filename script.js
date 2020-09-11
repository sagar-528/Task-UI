const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
let itemsArray = sessionStorage.getItem('items') ? JSON.parse(sessionStorage.getItem('items')) : [];

sessionStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(sessionStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('li');
  const taskDate = document.createElement('span');

  li.textContent = text;
  taskDate.innerHTML = '&#128198'

  taskDate.classList = 'emoji'

  li.appendChild(taskDate);
  ul.appendChild(li)
}



form.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  sessionStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach(item => {
  liMaker(item);
});
