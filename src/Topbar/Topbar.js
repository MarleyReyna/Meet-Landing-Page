import React from 'react';
import logo from './logo.svg';
import './Topbar.scss';

const Topbar = () => {
    return (
        <div className='top-div'>
            <img src={logo} alt='logo'></img>
        </div>
    );
}
 
export default Topbar;