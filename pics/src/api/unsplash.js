//All configuration related to axios will be here
import axios from 'axios';

const unsplash = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 61rOcdgdI-4KzANYrd9UOIm9R9GhMT191jGf7c952vw'
    }
});

export default unsplash;