import exampleVideoData from '/src/data/exampleVideoData.js';
import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props),

    this.state = {
      videos: [],
      selected: {
        id: {
          videoId: 0
        },
        snippet: {
          title: '',
          description: ''
        }
      }
    };
  }

  componentDidMount() {
    searchYouTube('', function (data) {
      this.setState({
        videos: data,
        selected: data[0]
      });
    }.bind(this));
  }

  entryOnClick(key, event) {
    this.setState({
      selected: this.state.videos[key]
    });
  }

  searchOnClick(event) {
    event.persist();
    event.target.disabled = true;
    setTimeout(function() { event.target.disabled = false; }.bind(this), 500);

    let callback = function (data) {
      this.setState({
        videos: data
      });
    };

    searchYouTube(event.target.previousElementSibling.value, callback.bind(this));
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchClick={this.searchOnClick.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.selected}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} entryClick={this.entryOnClick.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
