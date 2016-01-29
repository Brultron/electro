import BaseStore from './BaseStore.js';
import Dispatcher from '../dispatcher/Dispatcher.js';

let tracks = {};

class Tracks extends BaseStore {

  getTracks(){
    return tracks;
  }

}

const instance = new Tracks();

instance.dispatchToken = Dispatcher.register(action => {
  switch (action.type) {
    case 'add_track':
      tracks[action.track.url] = action.track;
      instance.emitChange();
      break;
    case 'track_ready':
      tracks[action.track.url] = action.track;
      instance.emitChange();
      break;
    }
});

export default instance;
