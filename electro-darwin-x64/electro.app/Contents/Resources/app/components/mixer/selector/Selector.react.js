'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tracks = require('../../../actions/Tracks.js');

var _Tracks2 = _interopRequireDefault(_Tracks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Selector = function (_React$Component) {
  _inherits(Selector, _React$Component);

  function Selector(props) {
    _classCallCheck(this, Selector);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Selector).call(this, props));

    _this.selectTrack = _this.selectTrack.bind(_this);
    return _this;
  }

  _createClass(Selector, [{
    key: 'selectTrack',
    value: function selectTrack() {
      if (this.props.currentSelector === 'right') {
        _Tracks2.default.setRightTrack(this.props.track);
      } else {
        _Tracks2.default.setLeftTrack(this.props.track);
      }
      this.props.onSelect(this.props.track);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'a',
        { onClick: this.selectTrack, className: 'selector' },
        _react2.default.createElement('img', {
          key: this.props.track.id,
          className: '',
          src: this.props.track.thumbnail })
      );
    }
  }]);

  return Selector;
}(_react2.default.Component);

exports.default = Selector;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWl4ZXIvc2VsZWN0b3IvU2VsZWN0b3IucmVhY3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNLFE7OztBQUVKLG9CQUFZLEtBQVosRUFBa0I7QUFBQTs7QUFBQSw0RkFDVixLQURVOztBQUVoQixVQUFLLFdBQUwsR0FBbUIsTUFBSyxXQUFMLENBQWlCLElBQWpCLE9BQW5CO0FBRmdCO0FBR2pCOzs7O2tDQUVZO0FBQ1gsVUFBRyxLQUFLLEtBQUwsQ0FBVyxlQUFYLEtBQStCLE9BQWxDLEVBQTBDO0FBQ3hDLHlCQUFhLGFBQWIsQ0FBMkIsS0FBSyxLQUFMLENBQVcsS0FBdEM7QUFDRCxPQUZELE1BRUs7QUFDSCx5QkFBYSxZQUFiLENBQTBCLEtBQUssS0FBTCxDQUFXLEtBQXJDO0FBQ0Q7QUFDRCxXQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLEtBQUssS0FBTCxDQUFXLEtBQS9CO0FBQ0Q7Ozs2QkFFTztBQUNOLGFBQ0U7QUFBQTtBQUFBLFVBQUcsU0FBUyxLQUFLLFdBQWpCLEVBQThCLFdBQVUsVUFBeEM7QUFDRTtBQUNFLGVBQUssS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixFQUR4QjtBQUVFLHFCQUFVLEVBRlo7QUFHRSxlQUFLLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsU0FIeEI7QUFERixPQURGO0FBU0Q7Ozs7RUExQm9CLGdCQUFNLFM7O2tCQThCZCxRIiwiZmlsZSI6ImNvbXBvbmVudHMvbWl4ZXIvc2VsZWN0b3IvU2VsZWN0b3IucmVhY3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUcmFja0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9UcmFja3MuanMnO1xuXG5jbGFzcyBTZWxlY3RvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnNlbGVjdFRyYWNrID0gdGhpcy5zZWxlY3RUcmFjay5iaW5kKHRoaXMpXG4gIH1cblxuICBzZWxlY3RUcmFjaygpe1xuICAgIGlmKHRoaXMucHJvcHMuY3VycmVudFNlbGVjdG9yID09PSAncmlnaHQnKXtcbiAgICAgIFRyYWNrQWN0aW9ucy5zZXRSaWdodFRyYWNrKHRoaXMucHJvcHMudHJhY2spO1xuICAgIH1lbHNle1xuICAgICAgVHJhY2tBY3Rpb25zLnNldExlZnRUcmFjayh0aGlzLnByb3BzLnRyYWNrKTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vblNlbGVjdCh0aGlzLnByb3BzLnRyYWNrKTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8YSBvbkNsaWNrPXt0aGlzLnNlbGVjdFRyYWNrfSBjbGFzc05hbWU9J3NlbGVjdG9yJz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGtleT17dGhpcy5wcm9wcy50cmFjay5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9JydcbiAgICAgICAgICBzcmM9e3RoaXMucHJvcHMudHJhY2sudGh1bWJuYWlsfT5cbiAgICAgICAgPC9pbWc+XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdG9yO1xuIl19