var VideoListEntry = (p) => (
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={p.video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title" onClick={p.entryClick.bind(null, p.index)} >{p.video.snippet.title}</div>
      <div className="video-list-entry-detail">{p.video.snippet.description}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

VideoListEntry.defaultProps = {
  entryClick: ()=>{}
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
