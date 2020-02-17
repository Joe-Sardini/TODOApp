import Todo from './Models/Todo';
import Footer from './Models/Footer';
import CatFact from './Models/CatFacts';

import { elements } from './Views/base';
import { renderTodoItem, deleteItem, renderTodoList } from './Views/mainList';
import { renderFooter } from './Views/todoFooterView';
import { renderCatFacts } from './Views/catFactsView.js';

import '../css/style.css';

const state = {};

const controlTODOadd = async () => {
    if (!state.Todo){
        state.Todo = new Todo();
    }
}

const footerSetup = async () => {
    const footer = new Footer();
    //const image = await footer.getImage();
    //renderFooter(image);
}

const catFactsSetup = async () => {
    const catFacts = new CatFact();
    const cFacts = await catFacts.loadCatFacts();
    const interval = window.setInterval(renderCatFacts, 2000, cFacts);
    setTimeout(() => {
        clearInterval(interval);
    }, 12000);
}

window.addEventListener('load', () => {
    controlTODOadd();
    state.Todo.readStorage();
    renderTodoList(state.Todo.Todo);
    footerSetup();
    catFactsSetup();
});

const windowLoad = () => {
    controlTODOadd();
    state.Todo.readStorage();
    renderTodoList(state.Todo.Todo);
}

elements.TheTODOListDiv.addEventListener('click', e => {
    if (e.target.matches('.addBtn, .addBtn *')){
        controlTODOadd();
        const item = state.Todo.addTodo(elements.TODOInput.value);
        renderTodoItem(item);
    }
});

elements.TODOMiddleSection.addEventListener('click', e => {
    const id = e.target.closest('.todoItem').dataset.itemid;
    if (e.target.matches('.delTodoItem, .delTodoItem *')){
        deleteItem(id);
        state.Todo.deleteItem(id);
    }
});

const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);