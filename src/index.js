
// const body = document.querySelector('body');
// document.body.style.backgroundColor = 'red';

// function changeBackground(color) {
//   document.body.style.background = color;
// }

// window.addEventListener("load", function () { changeBackground('white') });




document.addEventListener("DOMContentLoaded", (event) => {
  // your code here
  event.preventDefault();



  const form = document.getElementById('create-task-form');
  // console.log(form);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newInput = document.getElementById('new-task-description');
    // console.log(newInput.value);
    const myTodosDiv = document.querySelector('#tasks');
    const newLiElement = document.createElement('li')
    const newListItem = myTodosDiv.appendChild(newLiElement);
    newListItem.textContent = newInput.value + ' ';

    const btn = document.createElement('button');
    btn.textContent = 'X'
    newListItem.appendChild(btn)

    form.reset();

    btn.addEventListener('click', (event) => {
      newListItem.remove();
    })


  })

  // const newTask = taskInput.value;
  // console.log(taskInput);
  // console.log(event);
  // const submitButton = document.querySelector('#submit');

});

// document.addEventListener('click', (event) => {
//   console.log(event);
// })
