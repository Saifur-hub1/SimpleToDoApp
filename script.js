document.addEventListener("DOMContentLoaded", function(){
  const addBtn = document.querySelector('.add-button');
  const deleteBtn = document.querySelector('.delete-button');
  const inp = document.getElementById('taskTitle');
  inp.addEventListener('keyup', (e)=>{
    if(e.key==='Enter'){
      add();
    }
  });
  
  addBtn.addEventListener('click', add);
  deleteBtn.addEventListener('click', deleteTask);
});

function deleteTask(){

}

const toDoList = [
  // {
  // name: 'practice javascript',
  // date: '25-12-2024'
  // }
];

renderToDoList();
// add();
function add(){
  const userInputDate = document.getElementById('dateInput').value;
  let userInputTitle = document.getElementById('taskTitle').value;

  if(!userInputTitle){
    document.querySelector('.css-input').classList.add('css-input-empty');
    return;
  }
  if(!userInputDate){
    document.querySelector('.date').classList.add('css-input-empty');
    return;
  }
  toDoList.push({
    name:userInputTitle,
    date:userInputDate
  });

  document.querySelector('.css-input').value= '';
  renderToDoList();
}
function renderToDoList(){
  document.querySelector('.date').classList.remove('css-input-empty');
  document.querySelector('.css-input').classList.remove('css-input-empty');
  document.querySelector('.css-input').classList.add('css-input');
  document.querySelector('.date').classList.add('css-input');

  let toDoHtml = '';
  for(let i=0; i<toDoList.length; i++){
    let toDoObject = toDoList[i];
    const {name, date} = toDoObject;
    let html = `
    <div>
    <div class="title-box">${name}</div>
    </div>
    <div>
      <input  class="css-input css-display-date" value="${date}" disabled>
    </div>
    <div>
      <button class="delete-button button">Delete</button>
    </div>
    `;
    toDoHtml+=html;
  }
  document.querySelector('.output-grid').innerHTML = toDoHtml;
  
  addDeleteButtonListener();
}

function addDeleteButtonListener(){
  const deleteButtons = document.querySelectorAll('.delete-button');

  deleteButtons.forEach((button, index)=>{
    button.addEventListener('click', ()=>{
      deleteToDoItem(index);
      renderToDoList();
    });
  });
}

function deleteToDoItem(index){
  toDoList.splice(index, 1);
  console.log(index);
}