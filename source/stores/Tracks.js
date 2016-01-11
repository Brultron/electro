import BaseStore from './BaseStore.js';
import Dispatcher from '../dispatcher/Dispatcher.js';

let tracks = {};

class Tracks extends BaseStore {
  getTracks(){
    return this.tracks;
  }
}

const instance = new Tracks();
instance.dispatchToken = Dispatcher.register(action => {
  switch (action.type) {
    case 'add_track':
      tracks[action.track.url] = action.track;
      break;
    case 'track_uploaded':
      tracks[action.track.url] = action.track;
      console.log(tracks);
      break;
  }
});

export default instance;
