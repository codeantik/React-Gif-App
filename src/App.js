import React from 'react';
import './App.css';
import Random2 from './components/Random_v2';
import Tag2 from './components/Tag_v2';

const App = () => (
    <div className="main-container">
        <h1 className="heading">Gif Application</h1>
        <Random2 />
        <Tag2 />
    </div>
);

export default App;