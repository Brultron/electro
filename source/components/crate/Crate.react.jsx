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
    this.loadSearch = this.loadSearch.bind(this);
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
        items.push(<Item key={key} track={this.props.tracks[key]} onToggle={this.toggleVisible}/>);
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

  //TODO figure out what the importance of this number is... its about 2 pixels
  // off each time on my 13" screen i think
  loadSearch(e){
    if($('.crate-inner').scrollTop() > this.refs.searchResult.scrollHeight - 757) {
      TrackAction.getNextTracks();
    }
  }

  render(){
    return (
      <div>
        <div className='crate lv1_blur'>
          <input
            ref='url'
            type='text'
            onKeyUp={this.enter}
            placeholder='SEARCH'/>
            <a onClick={this.toggleVisible}>
              <i className={this.state.chevron}></i>
            </a>
        </div>
        <div
          ref='searchResult'
          className='search-result'
          style={this.state.visible}
          onScroll={this.loadSearch}>
          {this.getItems()}
        </div>
      </div>
    );
  }
}

export default Crate;
