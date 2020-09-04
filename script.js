const input = document.getElementById('details');
var list = document.querySelector('#task-list ul');

let itemsArray = sessionStorage.getItem('items')
  ? JSON.parse(sessionStorage.getItem('items'))
  : []

sessionStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(sessionStorage.getItem('items'))

const task = document.forms['add-task'];

    //add Tasks
    task.addEventListener('submit', function(e){
    e.preventDefault();
    const value = task.querySelector('input[type = "text"]').value;
    const date = task.querySelector('input[type = "date"]').value;
    itemsArray.push(value)
    sessionStorage.setItem('items', JSON.stringify(itemsArray))

    //create Element
    const liname = document.createElement('li');
    const taskDate = document.createElement('span');

    //add Context
    liname.textContent = value;
    taskDate.innerHTML = '&#128198'

    // add classes
    taskDate.classList = 'emoji'

    // append to docuement
    liname.appendChild(taskDate);
    list.appendChild(liname);

 });


