import React from 'react';
import './index.css'
import video from './tvmount.mp4'
const VideoBackground = () => {
    return (
        <div className="video-background" >
            <video autoPlay loop muted>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoBackground;