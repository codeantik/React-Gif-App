import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Random = () => {

    const [gif, setGif] = useState('');

    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    const fetchGif = async () => {
        try {
            const { data } = await axios.get(url);
            console.log(data.data.images.downsized_large.url);
            const gifSrc = data.data.images.downsized_large.url;
            setGif(gifSrc);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchGif();
    }, [ ]);

    const handleClick = () => {
        fetchGif();
    }

    return (
        <div className="container">
            <h3 className="sub-heading">Random Gif</h3>
            <img height="320px" width="500px" src={gif} alt="random gif" className="random-image" />
            <button onClick={handleClick}>Click for new gif</button>
        </div>
    );
};

export default Random;