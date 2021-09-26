import React from 'react';
import './Built.scss'

const Built = () => {
    return (
        <section className='built-container'>
            <div className='built-div'>
                <h3>BUILT FOR MODERN USE</h3>
                <h1>Smarter meetings, all in one place</h1>
                <p>
                    Send messages, share files, show your 
                    screen, and record your meetings - all
                    in one workspace. Control who can join
                    with invite-only team access, data
                    encryption, and data export
                </p>
            </div>
            <div className='transition'>
                <div className='vert-line'></div>
                <div className='circle-div'>
                    02
                </div>
            </div>
        </section>
    );
}
 
export default Built;