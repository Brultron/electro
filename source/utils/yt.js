import yt from 'youtube-audio-stream';
import ac from './ac.js';
import concat from 'array-buffer-concat';
import TrackActions from '../actions/Tracks.js';
import TrackStore from '../stores/Tracks.js';

let apiKey = TrackStore.getYtApiKey();
const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
const DOWNLOAD_URL = 'https://www.youtube.com/watch?v=';
let params = {
  part: 'snippet',
  kind: 'youtube#video',
  key: apiKey,
  maxResults: 10
}

class Yt {

  constructor() {
    TrackStore.listen(() => {
      apiKey = TrackStore.getYtApiKey()
    });
  }

  download(track) {
    var stream = yt(track.url);
    var master = new ArrayBuffer();

    stream.on('data', (data) => {
      master = concat(master, data);
    });

    stream.on('end', (data) => {
      ac.createSource(master, track, (track) => {
        track.ready = true;
        track.playing = false;
        track.cued = false;
        track.bpm = 0;
        track.movingBpm = [];
        track.pitch = 1;
        TrackActions.updateTrack(track.id, track);
      });
    });
  }

  search(q) {

    if (q) {
      params.q = q;
      params.pageToken = undefined;
    }

    $.get(SEARCH_URL, params).then((resp) => {
      params.pageToken = resp.nextPageToken;
      for (let t of resp.items) {
        let track = {
          id: t.id.videoId,
          url: DOWNLOAD_URL + t.id.videoId,
          title: t.snippet.title,
          description: t.snippet.description,
          thumbnail: t.snippet.thumbnails.high.url,
          search: true
        };
        TrackActions.updateTrack(t.id.videoId, track);
      }
    });
  }
}

let instance = new Yt();
export default instance;
