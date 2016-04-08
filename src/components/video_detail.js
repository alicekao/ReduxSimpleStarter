// Doesn't need to maintain any type of state, only needs title, desc, and url which are all passed down in props
import React from 'react';

const VideoDetail = ({video}) => {
  // To protect against react's instant rendering
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  // String interpolation
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
