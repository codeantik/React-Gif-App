import React from 'react';
import useGif from '../useGif';

const Random2 = () => {

    const {gif, fetchGif} = useGif();

    return (
        <div className="container">
            <h3 className="sub-heading">Random Gif</h3>
            <img height="320px" width="500px" src={gif} alt="random gif" className="random-image" />
            <button onClick={fetchGif}>Click for new gif</button>
        </div>
    );
}

export default Random2;