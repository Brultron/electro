'use strict';

import React from 'react';
import {Header, Textfield} from 'react-mdl';

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
			<Header>
				<Textfield onKeyUp={this.search} label="Search" expandable expandableIcon="search"/>
			</Header>
		);
	}
}

export default SearchBar;
