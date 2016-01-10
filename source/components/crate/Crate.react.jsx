'use strict';

import React from 'react';

class Crate extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className={'row'} >
        <div className={'medium-12 columns'}>
          <label>URL
            <input type={'text'} />
          </label>
        </div>
      </div>
    );
  }
}

export default Crate;
