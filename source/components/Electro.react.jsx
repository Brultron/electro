'use strict';

import React from 'react';
import Crate from './crate/Crate.react.js';
import Deck from './deck/Deck.react.js';
import TrackStore from '../stores/Tracks.js';

class Electro extends React.Component {

  constructor(props) {
    super(props);
    this.state = {activeTrack1: {}, activeTrack2: {}}
  }

  componentDidMount(){
    TrackStore.listen(() => {
      this.setActiveTracks();
    })
  }

  setActiveTracks(){
    var active1 = TrackStore.getActiveTrack1();
    var active2 = TrackStore.getActiveTrack2();
    this.setState({activeTrack1: active1, activeTrack2: active2});
  }

  render(){
    return (
      <div className={'row'}>
        <div className={'small-3 columns'}>
          <div className={'row'}>
            <Crate/>
          </div>
          <div className={'row'}>
            <Deck track={this.state.activeTrack1}/>
          </div>
        </div>
        <div className={'small-6 columns'}>

        </div>
        <div className={'small-3 columns'}>
          <div className={'row'}>
            <Crate/>
          </div>
          <div className={'row'}>
            <Deck track={this.state.activeTrack2}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Electro;
