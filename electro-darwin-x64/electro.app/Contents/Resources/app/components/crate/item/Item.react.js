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

var Item = function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item(props) {
    _classCallCheck(this, Item);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Item).call(this, props));

    _this.loadTrack = _this.loadTrack.bind(_this);
    return _this;
  }

  _createClass(Item, [{
    key: 'loadTrack',
    value: function loadTrack() {
      this.props.track.search = false;
      _Tracks2.default.addTrack(this.props.track);
      this.props.onToggle();
    }
  }, {
    key: 'render',
    value: function render() {

      var background = {
        background: 'url(' + this.props.track.thumbnail + ')',
        backgroundSize: '105%',
        backgroundPosition: 'center'
      };

      return _react2.default.createElement(
        'div',
        { className: 'crate-item lv1_blur' },
        _react2.default.createElement('div', {
          style: background,
          className: 'img-div' }),
        _react2.default.createElement(
          'div',
          { className: 'item-title' },
          this.props.track.title
        ),
        _react2.default.createElement(
          'a',
          { onClick: this.loadTrack,
            className: 'track-thumb' },
          _react2.default.createElement('i', { className: 'fa fa-cloud-download fa-3x lv2_blur' })
        )
      );
    }
  }]);

  return Item;
}(_react2.default.Component);

exports.default = Item;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY3JhdGUvaXRlbS9JdGVtLnJlYWN0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTSxJOzs7QUFFSixnQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0ZBQ1gsS0FEVzs7QUFFakIsVUFBSyxTQUFMLEdBQWlCLE1BQUssU0FBTCxDQUFlLElBQWYsT0FBakI7QUFGaUI7QUFHbEI7Ozs7Z0NBR1U7QUFDVCxXQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLE1BQWpCLEdBQTBCLEtBQTFCO0FBQ0EsdUJBQWEsUUFBYixDQUFzQixLQUFLLEtBQUwsQ0FBVyxLQUFqQztBQUNBLFdBQUssS0FBTCxDQUFXLFFBQVg7QUFDRDs7OzZCQUVPOztBQUVOLFVBQUksYUFBYTtBQUNiLDZCQUFtQixLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLFNBQXBDLE1BRGE7QUFFYix3QkFBZ0IsTUFGSDtBQUdiLDRCQUFvQjtBQUhQLE9BQWpCOztBQU1BLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxxQkFBZjtBQUNFO0FBQ0EsaUJBQU8sVUFEUDtBQUVBLHFCQUFVLFNBRlYsR0FERjtBQUlFO0FBQUE7QUFBQSxZQUFLLFdBQVUsWUFBZjtBQUNHLGVBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUI7QUFEcEIsU0FKRjtBQU9JO0FBQUE7QUFBQSxZQUFHLFNBQVMsS0FBSyxTQUFqQjtBQUNFLHVCQUFVLGFBRFo7QUFFRSwrQ0FBRyxXQUFVLHFDQUFiO0FBRkY7QUFQSixPQURGO0FBY0Q7Ozs7RUFwQ2dCLGdCQUFNLFM7O2tCQXVDVixJIiwiZmlsZSI6ImNvbXBvbmVudHMvY3JhdGUvaXRlbS9JdGVtLnJlYWN0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUcmFja0FjdGlvbnMgIGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvVHJhY2tzLmpzJztcblxuY2xhc3MgSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5sb2FkVHJhY2sgPSB0aGlzLmxvYWRUcmFjay5iaW5kKHRoaXMpO1xuICB9XG5cblxuICBsb2FkVHJhY2soKXtcbiAgICB0aGlzLnByb3BzLnRyYWNrLnNlYXJjaCA9IGZhbHNlO1xuICAgIFRyYWNrQWN0aW9ucy5hZGRUcmFjayh0aGlzLnByb3BzLnRyYWNrKTtcbiAgICB0aGlzLnByb3BzLm9uVG9nZ2xlKCk7XG4gIH1cblxuICByZW5kZXIoKXtcblxuICAgIHZhciBiYWNrZ3JvdW5kID0ge1xuICAgICAgICBiYWNrZ3JvdW5kOiBgdXJsKCR7dGhpcy5wcm9wcy50cmFjay50aHVtYm5haWx9KWAsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnMTA1JScsXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcidcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NyYXRlLWl0ZW0gbHYxX2JsdXInPlxuICAgICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXtiYWNrZ3JvdW5kfVxuICAgICAgICBjbGFzc05hbWU9J2ltZy1kaXYnPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbS10aXRsZSc+XG4gICAgICAgICAge3RoaXMucHJvcHMudHJhY2sudGl0bGV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMubG9hZFRyYWNrfVxuICAgICAgICAgICAgY2xhc3NOYW1lPSd0cmFjay10aHVtYic+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jbG91ZC1kb3dubG9hZCBmYS0zeCBsdjJfYmx1clwiPjwvaT5cbiAgICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW07XG4iXX0=