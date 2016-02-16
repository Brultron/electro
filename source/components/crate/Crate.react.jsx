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
      visible: {display: 'none'},
      chevron: 'fa fa-chevron-left'
    }

    this.toggleVisible = this.toggleVisible.bind(this);
    this.enter = this.enter.bind(this);

  }

  enter(e){
    if('Enter' === e.key){
      TrackAction.searchTracks(e.target.value);
      this.setState({visible: {}, chevron: 'fa fa-chevron-down'});
      e.target.value = '';
    }
  }

  onChange(){
    this.setState({tracks: TrackStore.getTracks()});
  }

  getItems(){
    let items = []
    for(let key in this.props.tracks){
      if(this.props.tracks[key].search){
        items.push(<Item key={key} track={this.props.tracks[key]}/>);
      }
    }
    return items;
  }

  toggleVisible(){
    if(!this.state.visible.display){
      this.setState({visible: {display: 'none'}, chevron: 'fa fa-chevron-left'});
    }else{
      this.setState({visible: {}, chevron: 'fa fa-chevron-down'});
    }
  }

  render(){
    return (
      <div className='crate'>
        <div className='row'>
          <div className={'medium-10 columns'}>
            <label>
              <input ref='url' type={'text'} onKeyUp={this.enter} placeholder='SEARCH'/>
            </label>
          </div>
          <div className={'medium-2 columns'}>
            <a onClick={this.toggleVisible} className='button'><i className={this.state.chevron}></i></a>
          </div>
        </div>
        <div className='crate-inner' style={this.state.visible}>
          {this.getItems()}
          <div className='item-mask'></div>
        </div>
      </div>
    );
  }
}

export default Crate;
