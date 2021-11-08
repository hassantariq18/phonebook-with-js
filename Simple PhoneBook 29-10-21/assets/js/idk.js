// function removeTaskFromLocalStorage(taskItem) {
//     let tasks;
//     if(localStorage.getItem('tasks') === null){
//       tasks = [];
//     } else {
//       tasks = JSON.parse(localStorage.getItem('tasks'));
//     }
  
//     tasks.forEach(function(task, index){
//       if(taskItem.textContent === task){
//         tasks.splice(index, 1);
//       }
//     });
  
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }