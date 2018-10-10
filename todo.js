let taskTextBox = document.getElementById('taskName')
let addButton = document.getElementById('addButton')

let pendingTasksList = document.querySelector("#pendingTasksList")
let completedTasksList = document.querySelector("#completedTasksList")

let taskLIItems = ''
function markAsCompleted(cb) {
  if(cb.checked) {
    console.log("checked")
  } else {
    console.log("unchecked")
  }
}
function removeTask(){
  var x = document.getElementById("pendingTasksList");
  x.parentNode.removeChild(x);
}

addButton.addEventListener('click',function(){
  let title = taskTextBox.value
  let taskItem =  `
  <li>
    <input type='checkbox' onchange = 'markAsCompleted(this)'
    <label>${title}</label> 
    <button onclick="removeTask(this)">Remove</button>
  </li>
   `
  taskLIItems += taskItem;
  pendingTasksList.innerHTML = taskLIItems;
})



