'use strict';

import React from 'react';
import {Header, HeaderRow, Textfield, Icon} from 'react-mdl';

import TrackActions from '../../actions/Tracks.js';
import TrackStore from '../../stores/Tracks.js';

class SearchBar extends React.Component {

	constructor(props) {
		super(props);
		this.search = this.search.bind(this);
	}

	search(e) {
		if ('Enter' === e.key) {
			TrackActions.searchTracks(e.target.value);
		}
	}

	render() {
		return (
			<Header hideSpacer={true}>
				<HeaderRow hideSpacer={true} style={{padding: '0 16px 0 16px'}}>
					<Icon name="search"/>
					<Textfield onKeyUp={this.search} label="Search"/>
				</HeaderRow>
			</Header>
		);
	}
}

export default SearchBar;
