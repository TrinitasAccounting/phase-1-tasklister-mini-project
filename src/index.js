
// const body = document.querySelector('body');
// document.body.style.backgroundColor = 'red';

// function changeBackground(color) {
//   document.body.style.background = color;
// }

// window.addEventListener("load", function () { changeBackground('white') });







document.addEventListener("DOMContentLoaded", (event) => {
  // your code here
  event.preventDefault();

  //Finding the form that we want to change
  const form = document.getElementById('create-task-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    //Grabbing the input element that is in the form so we can access the newInput.value that is input
    const newInput = document.getElementById('new-task-description');

    //this is where we are adding a li element onto the correct form Div
    const myTodosDiv = document.querySelector('#tasks');
    const newLiElement = document.createElement('li')
    const newListItem = myTodosDiv.appendChild(newLiElement);
    newListItem.textContent = newInput.value + ' ';

    //Creating the x button and appending
    const btn = document.createElement('button');
    btn.textContent = 'X'
    newListItem.appendChild(btn)

    form.reset();

    //Making the button remove the element
    btn.addEventListener('click', (event) => {
      newListItem.remove();
    })


  })
});
