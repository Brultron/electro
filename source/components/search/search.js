import React from 'react';
import Dom from 'react-dom';
import debug from 'debug-menu';

import TrackStore from './stores/Tracks.js';
import Search from './components/search/Search.react.js';

const MAIN_RENDER = function(){
  Dom.render(<Search tracks={TrackStore.getTracks()}/>, document.getElementById('search'));
}

TrackStore.listen(MAIN_RENDER);
debug.install();
MAIN_RENDER()
