'use strict';

import React from 'react';
import Crate from './crate/Crate.react.js';
import TrackStore from '../stores/Tracks.js';

class Search extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
        <div>
          <div className='row'>
            <div className='small-12 columns'>
              <Crate/>
            </div>
          </div>
        </div>
    );
  }
}

export default Search;
