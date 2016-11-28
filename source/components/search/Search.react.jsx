'use strict';

import React from 'react';
import {
	Layout,
	ProgressBar,
	Content
} from 'react-mdl';


import SearchBar  from './SearchBar.react.js';
import SearchResult  from './SearchResult.react.js';

class Search extends React.Component {

	render() {
		return (
			<Layout fixedHeader>
				<SearchBar/>
				<Content>
					<SearchResult tracks={this.props.tracks}/>
				</Content>
			</Layout>
		);
	}
}

export default Search;
