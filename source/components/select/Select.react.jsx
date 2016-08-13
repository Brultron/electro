'use strict';

import React from 'react';

class Select extends React.Component {

	constructor(props) {
		super(props);
		this.sendSelection = this.sendSelection.bind(this);
	}

	buildOptions() {
		var key = 0;
		return this.props.options.map((item) => {
			if (this.props.selected === item[this.props.value]) {
				return <option key={key++} value={item[this.props.value]} selected>{item[this.props.text]}</option>
			} else {
				return (
					<option key={key++} value={item[this.props.value]}>{item[this.props.text]}</option>
				);
			}
		});
	}

	sendSelection(event) {
		this.props.onSelect(event.target.value);
	}

	render() {
		return (
			<div className='react-select'>
				<select onChange={this.sendSelection}>
					{this.buildOptions()}
				</select>
			</div>
		);
	}
}

export default Select;
