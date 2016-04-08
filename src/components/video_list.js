// Functional component, doesn't need to maintain state, returns static JSX
// Faster, less code to write
import React from 'react';
import VideoListItem from './video_list_items';

// props is an object passed in from index.js functional only
// Good practice to add a key to each list item
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
      onVideoSelect={props.onVideoSelect}
      key={video.etag}
      video={video} />
    );
  });
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
