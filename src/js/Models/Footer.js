import axios from 'axios';

export default class Footer{
    constructor(){
    }

    async getImage(){
        try {
            const res = await axios('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
            return res.data.hdurl;
        }catch (error){
            console.log(error);
        }
    }
}