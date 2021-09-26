import React from 'react';
import './Hero.scss';

const Hero = () => {
    return ( 
        <section className='main-container'>
            <div className='image-left' />
            <div className='middle-section'>
                <h1>Group Chat for Everyone</h1>
                <p>
                    Meet makes it easy to connect with 
                    others face-to-face virtually and 
                    collaborate across any device.
                </p>
                <div className='button-div'>
                    <button className='dl-button'>Download <span>v1.3</span></button>
                    <button className='what-button'>What is it?</button>
                </div>
            </div>
            <div className='image-right' />
        </section>
    );
}
 
export default Hero;