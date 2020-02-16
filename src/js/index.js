import { elements } from './Views/base';
import { addTodoItem, deleteItem } from './Views/mainList';
import '../css/style.css';

elements.TheTODOListDiv.addEventListener('click', e => {
    if (e.target.matches('.addBtn, .addBtn *')){
        //Handle add click
        addTodoItem(elements.TODOInput.value);
    }
});

elements.TODOMiddleSection.addEventListener('click', e => {
    const id = e.target.closest('.todoItem').dataset.itemid;
    if (e.target.matches('.delTodoItem, .delTodoItem *')){
        deleteItem(id);
    }
});

const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);