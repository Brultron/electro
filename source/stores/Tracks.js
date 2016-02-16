import BaseStore from './BaseStore.js';
import Dispatcher from '../dispatcher/Dispatcher.js';

let tracks = {};

class Tracks extends BaseStore {

  getTracks(){
    return tracks;
  }

  getTrack(id){
    return tracks[id];
  }

}

const instance = new Tracks();

instance.dispatchToken = Dispatcher.register(action => {
  switch (action.type) {
    case 'update_track':
      tracks[action.track.id] = action.track;
      instance.emitChange();
      break;
    case 'remove_track':
      // NOTE soft delete here... so we can reuse if needed
      tracks[action.track.url].removed = true;
      instance.emitChange();
      break;
    case 'clear_search':
      for(let key in tracks){
        if(tracks[key].search && !tracks[key].ready){
          delete tracks[key];
        }
      }
    }
});

export default instance;
