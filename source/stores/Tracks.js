import BaseStore from './BaseStore.js';
import Dispatcher from '../dispatcher/Dispatcher.js';

let tracks = {};

class Tracks extends BaseStore {

  getTracks(){
    return tracks;
  }

  getTrack(url){
    return tracks[url];
  }

}

const instance = new Tracks();

instance.dispatchToken = Dispatcher.register(action => {
  switch (action.type) {
    case 'update_track':
      tracks[action.track.url] = action.track;
      instance.emitChange();
      break;
    case 'remove_track':
      // NOTE soft delete here... so we can reuse if needed
      tracks[action.track.url].removed = true;
      instance.emitChange();
      break;
    }
});

export default instance;
