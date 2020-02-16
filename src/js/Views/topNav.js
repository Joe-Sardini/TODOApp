import { elements } from './base';

export const renderTopNav = () => {
    const markup = `
    <input type="text" class="myInput" placeholder="Title...">
    <button class='addBtn'>Add</button>
    `
    elements.TODOHeader.insertAdjacentHTML("afterbegin",markup);
}
