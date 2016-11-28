'use strict';

import React from 'react';
import {
	Grid,
	Cell,
	Icon,
	Card,
	CardText,
	CardActions,
	Button
} from 'react-mdl';

import TrackAction from '../../actions/Tracks.js';
import TrackStore from '../../stores/Tracks.js';

class SearchResultItem extends React.Component {

	render() {
		return (
			<Cell col={9} phone={9}>
				<Card>
					<CardText>{this.props.track.title}</CardText>
				</Card>
			</Cell>
		);
	}
}

export default SearchResultItem;
