'use strict';

import React from 'react';
import Crate from './crate/Crate.react.js';
import Deck from './deck/Deck.react.js';
import Mixer from './mixer/Mixer.react.js'
import TrackStore from '../stores/Tracks.js';

class Electro extends React.Component {

  constructor(props) {
    super(props);
    this.state = {tracks: TrackStore.getTracks()};
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    TrackStore.listen(() => {this.onChange()});
  }

  onChange(){
    this.setState({tracks: TrackStore.getTracks()})
  }

  getDecks(){
    var decks = [];
    for(let key in this.state.tracks){
      var track = this.state.tracks[key];
      if(!track.removed){
        decks.push(<Deck key={track.url} track={track}/>);
      }
    }
    return decks;
  }

  render(){
    return (
        <div>
          <div className={'row'}>
            <div className={'small-12 columns'}>
              <Crate/>
            </div>
          </div>
          <div className={'row'}>
            <div className={'small-12 columns'}>
              {this.getDecks()}
            </div>
          </div>
          <div className={'row'}>
            <div className={'small-12 columns'}>
              <Mixer tracks={this.state.tracks}/>
            </div>
          </div>
        </div>
    );
  }
}

export default Electro;
