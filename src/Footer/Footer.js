import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <section className='footer-section'>
            <div className='footer-container'>
                <h1>Experience more together</h1>
                <p>
                    Stay connected with reliable HD meetings
                    and unlimited one-on-one and group video
                    settings.
                </p>
                <div className='button-div'>
                    <button className='dl-button'>
                        Download <span>v1.3</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
 
export default Footer;