import React from 'react';
import loader from '../images/loader.gif';

const Loading = () => (
    <div className='loader'>
        <img className='loader__image' src={loader} />
    </div>
);

export default Loading;