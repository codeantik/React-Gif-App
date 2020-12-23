import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Random = () => {

    const [tag, setTag] = useState('');
    const [gif, setGif] = useState('');

    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

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
        fetchGif(tag);
    }, [ ]);

    const handleClick = () => {
        fetchGif(tag);
    }

    return (
        <div className="container">
            <h3 className="sub-heading">Random {tag} Gif</h3>
            <img height="300px" width="500px" src={gif} alt="random gif"/>
            <input value={tag} onChange={(e) => setTag(e.target.value)} placeholder="Search for gifs" />
            <button onClick={() => handleClick()}>Click for new gif</button>
        </div>
    );
};

export default Random;