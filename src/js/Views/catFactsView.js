import { elements } from './base';

export const renderCatFacts = fact => {
    if (fact){
        elements.CatFactsSpan.innerHTML += `${fact[Math.ceil(Math.random()*fact.length)].text}<BR><BR>`;
    }
}