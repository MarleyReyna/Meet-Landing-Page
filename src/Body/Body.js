import React from 'react';
import './Body.scss';
import videocall from './Images/image-women-videochatting.jpg'
import text from './Images/image-man-texting.jpg'
import meeting from './Images/image-men-in-meeting.jpg'
import womantwo from './Images/image-woman-in-videocall.jpg'



const Body = () => {
    return (
        <section className='body-container'>
            <div className='transition'>
                <div className='vert-line'></div>
                <div className='circle-div'>
                    01
                </div>
            </div>
            <div className='photo-container'>
                <img src={womantwo} alt ='womantwo'></img>
                <img src={videocall} alt ='videocall'></img>
                <img src={meeting} alt ='meeting'></img>
                <img src={text} alt ='text'></img>
            </div>
        </section>
    );
}
 
export default Body;