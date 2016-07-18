'use strict';

import React from 'react';
import Crate from './crate/Crate.react.js';
import Deck from './deck/Deck.react.js';
import Mixer from './mixer/Mixer.react.js'
import TrackActions from '../actions/Tracks.js';
import TrackStore from '../stores/Tracks.js';

class Electro extends React.Component {

  constructor(props) {
    super(props);
    this.state = {tracks: TrackStore.getTracks()};
    this.onChange = this.onChange.bind(this);
    $(window).scroll(function() {
       if($(window).scrollTop() + window.innerHeight >= $(document).height()) {
           console.log("bottom!");
           $('.track-thumb').addClass('loading-spin');
           TrackActions.getNextTracks();
       }
    });
  }

  componentDidMount(){
    TrackStore.listen(() => {this.onChange()});
  }

  onChange(){
    this.setState(
      {
        tracks: TrackStore.getTracks(),
        rightTrack: TrackStore.getRightTrack(),
        leftTrack: TrackStore.getLeftTrack()
      }
    );
  }

  getDecks(){
    var decks = [];
    for(let key in this.state.tracks){
      var track = this.state.tracks[key];
      if(!track.removed && !track.search){
        decks.push(
          <Deck key={track.id} track={track}/>
        );
      }
    }
    return decks;
  }

  render(){
    return (
      <div>
        <div className='row'>
          <div className='small-12 columns'>
            <Crate tracks={this.state.tracks}/>
          </div>
        </div>
        <div className='row channels'>
          <div className='small-12 columns'>
            {this.getDecks()}
          </div>
        </div>
        <Mixer
          tracks={this.state.tracks}
          leftTrack={this.state.leftTrack}
          rightTrack={this.state.rightTrack}/>
      </div>
    );
  }
}

export default Electro;
