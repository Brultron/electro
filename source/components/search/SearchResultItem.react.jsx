'use strict';

import React from 'react';
import {
	ListItem,
	ListItemContent,
	ListItemAction,
	ProgressBar
} from 'react-mdl';

import TrackAction from '../../actions/Tracks.js';
import TrackStore from '../../stores/Tracks.js';

class SearchResultItem extends React.Component {

	render() {
		return (
			<ListItem>
				<ListItemContent avatar={<img src= {this.props.track.thumbnail}/>}>
				{this.props.track.title}
				</ListItemContent>
				<ListItemAction></ListItemAction>
			</ListItem>
		);
	}
}

export default SearchResultItem;
