'use strict';
import React from 'react';
import ReactSlider from 'react-slider';

class TouchSlider extends React.Component {

  constructor(props){
    super(props);
    this.processScroll = this.processScroll.bind(this);
  }

  processScroll(e){
    let position = this.refs.sliderElement.scrollLeft;
    let ratio = position / this.refs.sliderElement.clientWidth;
    let value = this.props.value ? this.props.value : 0 ;
    let newValue = Math.abs(( ratio * this.props.max ) - this.props.max );
    this.props.onChange(newValue);
  }

  render(){
    return (
      <div
        className='touch-slider'
        ref='sliderElement'
        onScroll={this.processScroll}>
        <div className={'touch-slider-inner ' + this.props.className}>
          <div className={ 'handle ' + this.props.handleClassName}>
          </div>
        </div>
      </div>
    );
  }
}

export default TouchSlider;
