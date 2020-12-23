import React, { useState } from 'react';
import useGif from '../useGif';

const Tag2 = () => {

    const [tag, setTag] = useState('dogs');
    const {gif, fetchGif} = useGif(tag);

    return (
        <div className="container">
            <h3 className="sub-heading">Random {tag} Gif</h3>
            <img height="320px" width="500px" src={gif} alt="random gif" />
            <input value={tag} onChange={(e) => setTag(e.target.value)} placeholder="Search for gifs" />
            <button onClick={() => fetchGif(tag)}>Click for new gif</button>
        </div>
    );
};

export default Tag2;