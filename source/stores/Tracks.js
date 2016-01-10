import BaseStore from './BaseStore.js';
import Dispatcher from '../dispatcher/Dispatcher.js';

let tracks = [];

class Tracks extends BaseStore {
  getTracks(){
    return this.tracks;
  }
}

const instance = new Tracks();
instance.dispatchToken = Dispatcher.register(action => {
  console.log(action);
  switch (action.type) {
    case 'add_track':
      console.log(action.track);

  }
});

export default instance;
