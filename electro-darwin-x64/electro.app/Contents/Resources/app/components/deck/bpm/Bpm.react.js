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

var time = void 0;
var movingBpm = [];

var Bpm = function (_React$Component) {
  _inherits(Bpm, _React$Component);

  function Bpm(props) {
    _classCallCheck(this, Bpm);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Bpm).call(this, props));

    _this.setBPM = _this.setBPM.bind(_this);
    return _this;
  }

  _createClass(Bpm, [{
    key: 'setBPM',
    value: function setBPM(e) {
      var incoming = new Date().getTime();
      if (time) {
        movingBpm.push(1000 * 60 / (incoming - time));
        this.props.track.bpm = movingBpm.reduce(function (a, b) {
          return a + b;
        }) / movingBpm.length;
        this.props.track.tappedBpm = this.props.track.bpm;
        if (movingBpm.length > 5) movingBpm = movingBpm.slice(1);
        _Tracks2.default.updateTrack(this.props.track);
      }

      time = incoming;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'a',
        { onClick: this.setBPM, className: 'ctrl-btn' },
        _react2.default.createElement(
          'p',
          null,
          Math.round(this.props.track.bpm ? this.props.track.bpm : '')
        )
      );
    }
  }]);

  return Bpm;
}(_react2.default.Component);

exports.default = Bpm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGVjay9icG0vQnBtLnJlYWN0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJLGFBQUo7QUFDQSxJQUFJLFlBQVksRUFBaEI7O0lBRU0sRzs7O0FBRUosZUFBWSxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsdUZBQ1YsS0FEVTs7QUFFaEIsVUFBSyxNQUFMLEdBQWMsTUFBSyxNQUFMLENBQVksSUFBWixPQUFkO0FBRmdCO0FBR2pCOzs7OzJCQUVNLEMsRUFBRTtBQUNQLFVBQUksV0FBVyxJQUFJLElBQUosR0FBVyxPQUFYLEVBQWY7QUFDQSxVQUFHLElBQUgsRUFBUTtBQUNOLGtCQUFVLElBQVYsQ0FBZ0IsT0FBTyxFQUFSLElBQWUsV0FBVyxJQUExQixDQUFmO0FBQ0EsYUFBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixHQUFqQixHQUF1QixVQUFVLE1BQVYsQ0FBaUIsVUFBQyxDQUFELEVBQUcsQ0FBSDtBQUFBLGlCQUFTLElBQUksQ0FBYjtBQUFBLFNBQWpCLElBQW1DLFVBQVUsTUFBcEU7QUFDQSxhQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLFNBQWpCLEdBQTZCLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsR0FBOUM7QUFDQSxZQUFHLFVBQVUsTUFBVixHQUFtQixDQUF0QixFQUEwQixZQUFZLFVBQVUsS0FBVixDQUFnQixDQUFoQixDQUFaO0FBQzFCLHlCQUFhLFdBQWIsQ0FBeUIsS0FBSyxLQUFMLENBQVcsS0FBcEM7QUFDRDs7QUFFRCxhQUFPLFFBQVA7QUFDRDs7OzZCQUVPO0FBQ04sYUFDSTtBQUFBO0FBQUEsVUFBRyxTQUFTLEtBQUssTUFBakIsRUFBeUIsV0FBVSxVQUFuQztBQUNFO0FBQUE7QUFBQTtBQUNHLGVBQUssS0FBTCxDQUFXLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsR0FBakIsR0FBdUIsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixHQUF4QyxHQUE4QyxFQUF6RDtBQURIO0FBREYsT0FESjtBQU9EOzs7O0VBNUJlLGdCQUFNLFM7O2tCQStCVCxHIiwiZmlsZSI6ImNvbXBvbmVudHMvZGVjay9icG0vQnBtLnJlYWN0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHJhY2tBY3Rpb25zIGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvVHJhY2tzLmpzJztcblxubGV0IHRpbWU7XG5sZXQgbW92aW5nQnBtID0gW107XG5cbmNsYXNzIEJwbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnNldEJQTSA9IHRoaXMuc2V0QlBNLmJpbmQodGhpcyk7XG4gIH1cblxuICBzZXRCUE0oZSl7XG4gICAgdmFyIGluY29taW5nID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICBpZih0aW1lKXtcbiAgICAgIG1vdmluZ0JwbS5wdXNoKCgxMDAwICogNjApIC8gKGluY29taW5nIC0gdGltZSkpO1xuICAgICAgdGhpcy5wcm9wcy50cmFjay5icG0gPSBtb3ZpbmdCcG0ucmVkdWNlKChhLGIpID0+IGEgKyBiKSAvIG1vdmluZ0JwbS5sZW5ndGg7XG4gICAgICB0aGlzLnByb3BzLnRyYWNrLnRhcHBlZEJwbSA9IHRoaXMucHJvcHMudHJhY2suYnBtO1xuICAgICAgaWYobW92aW5nQnBtLmxlbmd0aCA+IDUgKSBtb3ZpbmdCcG0gPSBtb3ZpbmdCcG0uc2xpY2UoMSk7XG4gICAgICBUcmFja0FjdGlvbnMudXBkYXRlVHJhY2sodGhpcy5wcm9wcy50cmFjayk7XG4gICAgfVxuXG4gICAgdGltZSA9IGluY29taW5nO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGEgb25DbGljaz17dGhpcy5zZXRCUE19IGNsYXNzTmFtZT0nY3RybC1idG4nPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAge01hdGgucm91bmQodGhpcy5wcm9wcy50cmFjay5icG0gPyB0aGlzLnByb3BzLnRyYWNrLmJwbSA6ICcnKX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvYT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJwbTtcbiJdfQ==