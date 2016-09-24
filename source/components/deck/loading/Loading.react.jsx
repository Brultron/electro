'use strict';

import React from 'react';

let tempBPM;

class Loading extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className='loading lv1_blur'>
				<h2>{this.props.track.title}</h2>
				<div className="load-bar">
					<div className="bar"></div>
					<div className="bar"></div>
					<div className="bar"></div>
				</div>
			</div>
		);
	}
}

export default Loading;
