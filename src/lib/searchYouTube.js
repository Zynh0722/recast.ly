import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {
      'q': query,
      'youtube-api-key': YOUTUBE_API_KEY
    },
    contentType: 'application/json',
    success: function(data) {
      console.log('Endpoint data successfully recieved!');
      console.log(data);
      callback(data);
      return data;
    },
    error: function(data) {
      console.log('Failed to get from endpoint!');
      return [];
    }
  });
};

export default searchYouTube;
