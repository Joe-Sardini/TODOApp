import { elements } from './base';
import uniqid from 'uniqid';

export const addTodoItem = item => {
    const markup = `
    <li class="todoItem" data-itemid=${uniqid()}> ${item}
    <span class='todoDelSpan'><button class="delTodoItem">X</button></span>
    </li>
    `;
    elements.TODOList.insertAdjacentHTML("beforeend",markup)
};

export const deleteItem = id => {
    const item = document.querySelector(`[data-itemid="${id}"]`);
    if (item) item.parentElement.removeChild(item);
}