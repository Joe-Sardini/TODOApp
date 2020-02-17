import axios from 'axios';

export default class CatFact {
    constructor(){
        this.catfacts = [];
    }

    async loadCatFacts(){
        try {
            const res = await axios('https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts');
            return res.data.all;
        }catch (error){
            console.log(error);
        }
    }
}