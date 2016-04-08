// Need relative path reference when using a file we wrote
import _ from 'lodash';
import React, { Component } from 'react'; // Used to create and manage components
import ReactDOM from 'react-dom'; // Used to interact with DOM
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAknQk_hJ40munPiooRUjO2zgjMxjlMPf8';

// Create a new component. This component should produce some HTML
// App is a component class (creates instances of hi divs)
// Fat arrow is ES6, identicaly to function() {}, only difference is the value of this
class App extends Component {
  constructor(props) {
    super(props);

    // Why do we need to pre define the state props?
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('yosemite');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // Everytime you setstat, render() gets called
      this.setState( {
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    // Can throttle and limit search to once ever 300 ms
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

// To create an instance of App, wrap in tags:
// <App />
// Take this component's generate HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
