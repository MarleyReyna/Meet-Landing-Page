import React from 'react';
import logo from './logo.svg';
import './Topbar.scss';

const Topbar = () => {
    return (
        <header className='top-div'>
            <img src={logo} alt='logo'></img>
        </header>
    );
}
 
export default Topbar;