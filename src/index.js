import './style.css';

const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

let todos = [];

function render() {
  list.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${todo} <button data-index="${index}">Delete</button>`;
    list.appendChild(li);
  });
}

addBtn.addEventListener('click', () => {
  if (input.value.trim()) {
    todos.push(input.value);
    input.value = '';
    render();
  }
});

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    todos.splice(e.target.dataset.index, 1);
    render();
  }
});

render();