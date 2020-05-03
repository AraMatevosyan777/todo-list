import React from 'react';
import '../common.css';
import loader from './6.svg'


const Loader = (props) => {
    return (
        <div className='loader'>
            <img src={loader}/>
        </div>
    )
}

export default Loader;