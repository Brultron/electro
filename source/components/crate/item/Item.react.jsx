'use strict';

import React from 'react';
import Remote from 'remote';

class Item extends React.Component {

  constructor(props) {
    super(props);
    this.launchDeck = this.launchDeck.bind(this);
  }

  launchDeck(){
    Remote.require('./index').launchNewDeck(this.props.track);
  }

  getElement(){
    var li;
    if(this.props.track.ready){
      li = <li><a onClick={this.launchDeck}>{this.props.track.url} <i className="fa fa-check-square"></i></a></li>
    }else{
      li =  <li>{this.props.track.url} <i className={'fa fa-circle-o-notch fa-spin'}></i></li>
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
