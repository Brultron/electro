'use strict';

import React from 'react';
import Remote from 'remote';
const TrackAction  = Remote.require('./actions/Tracks.js');
const TrackStore   = Remote.require('./stores/Tracks.js');
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

  getTrackItems(){
    let trackItems = [];
    for(var track in this.state.tracks){
      trackItems.push(<Item  track={this.state.tracks[track]}></Item>)
    }
    return trackItems;
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
        <div className={'row'}>
          <ul>
            {this.getTrackItems()}
          </ul>
        </div>
      </div>
    );
  }
}

export default Crate;
