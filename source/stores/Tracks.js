import BaseStore from './BaseStore.js';
import Dispatcher from '../dispatcher/Dispatcher.js';

let tracks = {};
let rightTrack;
let leftTrack;

class Tracks extends BaseStore {

  getTracks(){
    return tracks;
  }

  getTrack(id){
    return tracks[id];
  }

  getRightTrack(){
    return rightTrack;
  }

  getLeftTrack(){
    return leftTrack;
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
      tracks[action.track.id].removed = true;
      instance.emitChange();
      break;
    case 'clear_search':
      for(let key in tracks){
        if(tracks[key].search && !tracks[key].ready){
          delete tracks[key];
        }
      }
      break;
    case 'set_right_track':
      rightTrack = action.track;
      instance.emitChange();
      break;
    case 'set_left_track':
      leftTrack = action.track;
      instance.emitChange();
      break;

  }
});

export default instance;
