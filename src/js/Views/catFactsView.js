import { elements } from './base';

export const renderCatFacts = fact => {
    if (fact){
        const rnd = Math.ceil(Math.random()*fact.length);
        elements.CatFactsSpan.innerHTML += `<BR>${rnd}: ${fact[rnd].text}<BR>`;
    }
}

export const clearCatFacts = () => {
    elements.CatFactsSpan.innerHTML = '';
}