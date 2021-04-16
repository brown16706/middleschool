import React from 'react';
import LazyLoad from 'react-lazyload';
import '../styles/styles.css'

const Video = ({ videoUrl, ...props }) => {

  return (
    <div >
    <LazyLoad className="videoWrapper" offset={100}>
          <iframe
            src={videoUrl}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
          />
      </LazyLoad>
</div>
  )
};
// Example taken from https://github.com/twobin/react-lazyload

export default Video