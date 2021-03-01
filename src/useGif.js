import { useState, useEffect } from 'react'
import axios from 'axios';


const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {

    const [gif, setGif] = useState('');

    const fetchGif = async (tag) => {
        try {
            const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
            console.log(data.data.images.downsized_large.url);
            const gifSrc = await data.data.images.downsized_large.url;
            setGif(gifSrc);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchGif(tag);
    }, [tag]);

    return {gif, fetchGif};
}

export default useGif;