import React from 'react';

const Video = () => {
    return (
        <div>
            <video
                src={'https://www.outsourcetoasia.co/assets/video/clients-review-videos/client-reviews.mp4'}
                controls
                autoPlay={false}
                type="video/mp4"
            >
            </video>
        </div>
    )
}

export default Video
