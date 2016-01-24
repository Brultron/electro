'use strict';

import React from 'react';
import TrackActions  from '../../../actions/Tracks.js';

class Item extends React.Component {

  constructor(props) {
    super(props);
    this.loadDeck = this.loadDeck.bind(this);
  }

  loadDeck(){
    TrackActions.setActiveTrack(this.props.track);
  }

  getElement(){
    var li;
    if(this.props.track.ready){
      li = <div className={'row'}><a onClick={this.loadDeck}>{this.props.track.url} <i className="fa fa-check-square"></i></a></div>;
    }else{
      li =  <div className={'row'}>{this.props.track.url} <i className={'fa fa-circle-o-notch fa-spin'}></i></div>
    }
    return li;
  }


  render(){
    return (
      this.getElement()
    );
  }
}

export default Item;
