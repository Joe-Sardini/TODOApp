import { elements } from './base';

export const renderTodoItem = item => {
    const markup = `
    <li class="todoItem" data-itemid=${item.id}> ${item.text}
    <span class='todoDelSpan'><button class="delTodoItem">X</button></span>
    </li>
    `;
    elements.TODOList.insertAdjacentHTML("beforeend",markup)
};

export const deleteItem = id => {
    const item = document.querySelector(`[data-itemid="${id}"]`);
    if (item) item.parentElement.removeChild(item);
}

export const renderTodoList = (todos) => {
    todos.forEach(el => {
        renderTodoItem(el);
    });
}