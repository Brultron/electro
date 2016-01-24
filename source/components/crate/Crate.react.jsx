'use strict';

import React from 'react';
import TrackAction from '../../actions/Tracks.js';
import TrackStore  from '../../stores/Tracks.js';
import Item from './item/Item.react.js';

class Crate extends React.Component {

  constructor(props) {
    super(props);

    var tracks = TrackStore.getTracks();

    this.state = {
      tracks : tracks
    }

    this.onChange = this.onChange.bind(this);

  }

  componentDidMount(){
    TrackStore.listen(() => {this.onChange()});
  }

  enter(e){
    if('Enter' === e.key){
      var track = {url: e.target.value, ready: false};
      TrackAction.addTrack(track);
    }
  }

  onChange(){
    this.setState({tracks: TrackStore.getTracks()});
  }

  render(){
    return (
      <div>
        <div className={'row'} >
          <div className={'medium-12 columns'}>
            <label>URL
              <input type={'text'} onKeyUp={this.enter} />
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Crate;
