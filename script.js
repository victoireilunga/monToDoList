let btn = document.querySelector('button');


btn.onclick=addTask;

function addTask() {
    // Récupérer la valeur de l'input
    let taskList = document.querySelector('#list-cont')
    let taskInput = document.getElementById("input-box");
    let taskValue = taskInput.value;

    
  
    // Créer un nouvel élément li
    let li = document.createElement("li");
    li.textContent = taskValue;
  
    // Ajouter l'élément li à la liste
    taskList.appendChild(li);
  
    // Réinitialiser la valeur de l'input
    taskInput.value = "";
  }
  const toDoList = document.getElementById('#list-cont');
const items = list-cont.getElementsByTagName('li');

for (let i = 0; i < items.length; i++) {
  items[i].remove();
}

function addTask() {
  
  let taskList = document.querySelector('#list-cont')
  let taskInput = document.getElementById("input-box");
  let taskValue = taskInput.value;

  let li = document.createElement("li");
  li.textContent = taskValue;

  taskList.appendChild(li);

  taskInput.value = "";

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Supprimer";
  deleteBtn.onclick = function() {
      taskList.removeChild(li);
  };
  li.appendChild(deleteBtn);
}