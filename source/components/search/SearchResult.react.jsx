'use strict';

import React from 'react';
import {
	Grid,
	Cell,
	List
} from 'react-mdl';

import TrackStore from '../../stores/Tracks.js';
import SearchResultItem from './SearchResultItem.react.js';

class SearchResult extends React.Component {

	getSearchResultItems() {
    let items = [];
		for (let key in this.props.tracks) {
			if (this.props.tracks[key].search) {
				items.push(<SearchResultItem key={key} track={this.props.tracks[key]}/>);
			}
		}
    return items;
	}

	render() {
		return (
			<Grid>
				<Cell col={12}>
					{this.getSearchResultItems()}
				</Cell>
			</Grid>
		);
	}
}

export default SearchResult;
