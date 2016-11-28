'use strict';

import React from 'react';
import {
	Layout,
	Grid,
	Cell,
	List,
	ListItem,
	ListItemContent,
	ListItemAction,
	ProgressBar
} from 'react-mdl';


import SearchBar  from './SearchBar.react.js';
import SearchResult  from './SearchResult.react.js';

class Search extends React.Component {

	render() {
		return (
			<Layout fixedHeader>
				<SearchBar/>
				<SearchResult tracks={this.props.tracks}/>
			</Layout>
		);
	}
}

export default Search;
