import BaseStore from './BaseStore.js';
import Dispatcher from '../dispatcher/Dispatcher.js';

let tracks = {};
let activeTrack1 = {};
let activeTrack2 = {};

class Tracks extends BaseStore {

  getTracks(){
    return tracks;
  }

  getActiveTrack1(){
    return activeTrack1;
  }

  getActiveTrack2(){
    return activeTrack2;
  }
}

const instance = new Tracks();

instance.dispatchToken = Dispatcher.register(action => {
  switch (action.type) {
    case 'add_track':
      tracks[action.track.url] = action.track;
      instance.emitChange();
      break;
    case 'track_uploaded':
      tracks[action.track.url] = action.track;
      instance.emitChange();
      break;
    case 'set_active_track':
      activeTrack1 = action.track;
      instance.emitChange();
      break;
  }
});

export default instance;
