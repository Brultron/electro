'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSlider = require('react-slider');

var _reactSlider2 = _interopRequireDefault(_reactSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TouchSlider = function (_React$Component) {
  _inherits(TouchSlider, _React$Component);

  function TouchSlider(props) {
    _classCallCheck(this, TouchSlider);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TouchSlider).call(this, props));

    _this.processScroll = _this.processScroll.bind(_this);
    return _this;
  }

  _createClass(TouchSlider, [{
    key: 'processScroll',
    value: function processScroll(e) {
      var position = this.refs.sliderElement.scrollLeft;
      var ratio = position / this.refs.sliderElement.clientWidth;
      var value = this.props.value ? this.props.value : 0;
      var newValue = Math.abs(ratio * this.props.max - this.props.max);
      this.props.onChange(newValue);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          className: 'touch-slider',
          ref: 'sliderElement',
          onScroll: this.processScroll },
        _react2.default.createElement(
          'div',
          { className: 'touch-slider-inner ' + this.props.className },
          _react2.default.createElement('div', { className: 'handle ' + this.props.handleClassName })
        )
      );
    }
  }]);

  return TouchSlider;
}(_react2.default.Component);

exports.default = TouchSlider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWl4ZXIvdG91Y2hfc2xpZGVyL1RvdWNoU2xpZGVyLnJlYWN0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTSxXOzs7QUFFSix1QkFBWSxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsK0ZBQ1YsS0FEVTs7QUFFaEIsVUFBSyxhQUFMLEdBQXFCLE1BQUssYUFBTCxDQUFtQixJQUFuQixPQUFyQjtBQUZnQjtBQUdqQjs7OztrQ0FFYSxDLEVBQUU7QUFDZCxVQUFJLFdBQVcsS0FBSyxJQUFMLENBQVUsYUFBVixDQUF3QixVQUF2QztBQUNBLFVBQUksUUFBUSxXQUFXLEtBQUssSUFBTCxDQUFVLGFBQVYsQ0FBd0IsV0FBL0M7QUFDQSxVQUFJLFFBQVEsS0FBSyxLQUFMLENBQVcsS0FBWCxHQUFtQixLQUFLLEtBQUwsQ0FBVyxLQUE5QixHQUFzQyxDQUFsRDtBQUNBLFVBQUksV0FBVyxLQUFLLEdBQUwsQ0FBVyxRQUFRLEtBQUssS0FBTCxDQUFXLEdBQXJCLEdBQTZCLEtBQUssS0FBTCxDQUFXLEdBQWpELENBQWY7QUFDQSxXQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLFFBQXBCO0FBQ0Q7Ozs2QkFFTztBQUNOLGFBQ0U7QUFBQTtBQUFBO0FBQ0UscUJBQVUsY0FEWjtBQUVFLGVBQUksZUFGTjtBQUdFLG9CQUFVLEtBQUssYUFIakI7QUFJRTtBQUFBO0FBQUEsWUFBSyxXQUFXLHdCQUF3QixLQUFLLEtBQUwsQ0FBVyxTQUFuRDtBQUNFLGlEQUFLLFdBQVksWUFBWSxLQUFLLEtBQUwsQ0FBVyxlQUF4QztBQURGO0FBSkYsT0FERjtBQVdEOzs7O0VBM0J1QixnQkFBTSxTOztrQkE4QmpCLFciLCJmaWxlIjoiY29tcG9uZW50cy9taXhlci90b3VjaF9zbGlkZXIvVG91Y2hTbGlkZXIucmVhY3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdFNsaWRlciBmcm9tICdyZWFjdC1zbGlkZXInO1xuXG5jbGFzcyBUb3VjaFNsaWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnByb2Nlc3NTY3JvbGwgPSB0aGlzLnByb2Nlc3NTY3JvbGwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHByb2Nlc3NTY3JvbGwoZSl7XG4gICAgbGV0IHBvc2l0aW9uID0gdGhpcy5yZWZzLnNsaWRlckVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICBsZXQgcmF0aW8gPSBwb3NpdGlvbiAvIHRoaXMucmVmcy5zbGlkZXJFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIGxldCB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgPyB0aGlzLnByb3BzLnZhbHVlIDogMCA7XG4gICAgbGV0IG5ld1ZhbHVlID0gTWF0aC5hYnMoKCByYXRpbyAqIHRoaXMucHJvcHMubWF4ICkgLSB0aGlzLnByb3BzLm1heCApO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmV3VmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPSd0b3VjaC1zbGlkZXInXG4gICAgICAgIHJlZj0nc2xpZGVyRWxlbWVudCdcbiAgICAgICAgb25TY3JvbGw9e3RoaXMucHJvY2Vzc1Njcm9sbH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsndG91Y2gtc2xpZGVyLWlubmVyICcgKyB0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyAnaGFuZGxlICcgKyB0aGlzLnByb3BzLmhhbmRsZUNsYXNzTmFtZX0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb3VjaFNsaWRlcjtcbiJdfQ==