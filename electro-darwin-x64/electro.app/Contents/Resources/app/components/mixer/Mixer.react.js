'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSlider = require('react-slider');

var _reactSlider2 = _interopRequireDefault(_reactSlider);

var _SelectorReact = require('./selector/Selector.react.js');

var _SelectorReact2 = _interopRequireDefault(_SelectorReact);

var _TouchSliderReact = require('./touch_slider/TouchSlider.react.js');

var _TouchSliderReact2 = _interopRequireDefault(_TouchSliderReact);

var _Tracks = require('../../stores/Tracks.js');

var _Tracks2 = _interopRequireDefault(_Tracks);

var _Tracks3 = require('../../actions/Tracks.js');

var _Tracks4 = _interopRequireDefault(_Tracks3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mixer = function (_React$Component) {
  _inherits(Mixer, _React$Component);

  function Mixer(props) {
    _classCallCheck(this, Mixer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Mixer).call(this, props));

    _this.state = { toggleStyle: { display: 'none', float: 'right' } };
    _this.selectTrack = _this.selectTrack.bind(_this);
    _this.selectRight = _this.selectRight.bind(_this);
    _this.selectLeft = _this.selectLeft.bind(_this);
    _this.crossfade = _this.crossfade.bind(_this);
    _this.toggleSelector = _this.toggleSelector.bind(_this);
    return _this;
  }

  _createClass(Mixer, [{
    key: 'selectTrack',
    value: function selectTrack(track) {
      this.toggleSelector();
    }
  }, {
    key: 'getLeftTrackImg',
    value: function getLeftTrackImg() {
      if (this.props.leftTrack) {
        return _react2.default.createElement('img', {
          className: 'mixer-img',
          src: this.props.leftTrack.thumbnail });
      } else {
        return _react2.default.createElement('img', {
          className: 'mixer-img',
          src: 'icons/mipmap-xxxhdpi/ic_launcher.png' });
      }
    }
  }, {
    key: 'getRightTrackImg',
    value: function getRightTrackImg() {
      if (this.props.rightTrack) {
        return _react2.default.createElement('img', {
          className: 'mixer-img',
          style: { float: 'right' },
          src: this.props.rightTrack.thumbnail });
      } else {
        return _react2.default.createElement('img', {
          className: 'mixer-img',
          style: { float: 'right' },
          src: 'icons/mipmap-xxxhdpi/ic_launcher.png' });
      }
    }
  }, {
    key: 'buildList',
    value: function buildList() {
      var arr = [];
      for (var k in this.props.tracks) {
        if (this.props.tracks[k].ready && !this.props.tracks[k].removed) {
          arr.push(_react2.default.createElement(_SelectorReact2.default, { track: this.props.tracks[k], onSelect: this.selectTrack, currentSelector: this.state.currentSelector }));
        }
      }
      return arr;
    }
  }, {
    key: 'toggleSelector',
    value: function toggleSelector(float) {
      if (this.state.toggleStyle.display) {
        this.setState({ toggleStyle: { display: undefined, float: float } });
      } else {
        this.setState({ toggleStyle: { display: 'none' } });
      }
    }
  }, {
    key: 'selectRight',
    value: function selectRight(k) {
      this.toggleSelector('right');
      this.setState({ currentSelector: 'right' });
    }
  }, {
    key: 'selectLeft',
    value: function selectLeft(k) {
      this.toggleSelector('left');
      this.setState({ currentSelector: 'left' });
    }
  }, {
    key: 'crossfade',
    value: function crossfade(v) {
      _Tracks4.default.setCrossfadeValue(v);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'mixer' },
        _react2.default.createElement(
          'div',
          {
            style: this.state.toggleStyle,
            className: 'mixer-select' },
          this.buildList()
        ),
        _react2.default.createElement(
          'div',
          { className: 'mixer-ctrl' },
          _react2.default.createElement(
            'a',
            {
              onClick: this.selectLeft,
              style: {
                marginLeft: '0px',
                borderTopRightRadius: '5px',
                borderBottomRightRadius: '5px'
              } },
            this.getLeftTrackImg()
          ),
          _react2.default.createElement(_TouchSliderReact2.default, {
            handleClassName: 'mixer-handle',
            min: 0,
            max: 100,
            value: this.props.crossfadeValue,
            onChange: this.crossfade,
            className: 'mixer-bar' }),
          _react2.default.createElement(
            'a',
            {
              onClick: this.selectRight,
              style: {
                marginRight: '0px',
                borderTopLeftRadius: '5px',
                borderBottomLeftRadius: '5px'
              } },
            this.getRightTrackImg()
          )
        )
      );
    }
  }]);

  return Mixer;
}(_react2.default.Component);

exports.default = Mixer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWl4ZXIvTWl4ZXIucmVhY3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU0sSzs7O0FBRUosaUJBQVksS0FBWixFQUFrQjtBQUFBOztBQUFBLHlGQUNWLEtBRFU7O0FBRWhCLFVBQUssS0FBTCxHQUFhLEVBQUMsYUFBYSxFQUFDLFNBQVMsTUFBVixFQUFrQixPQUFNLE9BQXhCLEVBQWQsRUFBYjtBQUNBLFVBQUssV0FBTCxHQUFtQixNQUFLLFdBQUwsQ0FBaUIsSUFBakIsT0FBbkI7QUFDQSxVQUFLLFdBQUwsR0FBbUIsTUFBSyxXQUFMLENBQWlCLElBQWpCLE9BQW5CO0FBQ0EsVUFBSyxVQUFMLEdBQWtCLE1BQUssVUFBTCxDQUFnQixJQUFoQixPQUFsQjtBQUNBLFVBQUssU0FBTCxHQUFpQixNQUFLLFNBQUwsQ0FBZSxJQUFmLE9BQWpCO0FBQ0EsVUFBSyxjQUFMLEdBQXNCLE1BQUssY0FBTCxDQUFvQixJQUFwQixPQUF0QjtBQVBnQjtBQVFqQjs7OztnQ0FFVyxLLEVBQU07QUFDaEIsV0FBSyxjQUFMO0FBQ0Q7OztzQ0FFZ0I7QUFDZixVQUFHLEtBQUssS0FBTCxDQUFXLFNBQWQsRUFBd0I7QUFDdEIsZUFDRTtBQUNFLHFCQUFVLFdBRFo7QUFFRSxlQUFLLEtBQUssS0FBTCxDQUFXLFNBQVgsQ0FBcUIsU0FGNUIsR0FERjtBQU1ELE9BUEQsTUFPSztBQUNILGVBQ0k7QUFDRSxxQkFBVSxXQURaO0FBRUUsZUFBSSxzQ0FGTixHQURKO0FBTUQ7QUFDRjs7O3VDQUVpQjtBQUNoQixVQUFHLEtBQUssS0FBTCxDQUFXLFVBQWQsRUFBeUI7QUFDdkIsZUFDRTtBQUNFLHFCQUFVLFdBRFo7QUFFRSxpQkFBTyxFQUFDLE9BQU8sT0FBUixFQUZUO0FBR0UsZUFBSyxLQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLFNBSDdCLEdBREY7QUFPRCxPQVJELE1BUUs7QUFDTCxlQUNNO0FBQ0UscUJBQVUsV0FEWjtBQUVFLGlCQUFPLEVBQUMsT0FBTyxPQUFSLEVBRlQ7QUFHRSxlQUFJLHNDQUhOLEdBRE47QUFPQztBQUNGOzs7Z0NBRVU7QUFDVCxVQUFJLE1BQU0sRUFBVjtBQUNBLFdBQUksSUFBSSxDQUFSLElBQWEsS0FBSyxLQUFMLENBQVcsTUFBeEIsRUFBK0I7QUFDN0IsWUFBRyxLQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLENBQWxCLEVBQXFCLEtBQXJCLElBQThCLENBQUMsS0FBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixDQUFsQixFQUFxQixPQUF2RCxFQUErRDtBQUM3RCxjQUFJLElBQUosQ0FDRSx5REFBVSxPQUFPLEtBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsQ0FBbEIsQ0FBakIsRUFBdUMsVUFBVSxLQUFLLFdBQXRELEVBQW1FLGlCQUFpQixLQUFLLEtBQUwsQ0FBVyxlQUEvRixHQURGO0FBR0Q7QUFDRjtBQUNELGFBQU8sR0FBUDtBQUNEOzs7bUNBRWMsSyxFQUFNO0FBQ25CLFVBQUcsS0FBSyxLQUFMLENBQVcsV0FBWCxDQUF1QixPQUExQixFQUFrQztBQUNoQyxhQUFLLFFBQUwsQ0FBYyxFQUFDLGFBQWMsRUFBQyxTQUFTLFNBQVYsRUFBcUIsT0FBTyxLQUE1QixFQUFmLEVBQWQ7QUFDRCxPQUZELE1BRUs7QUFDSCxhQUFLLFFBQUwsQ0FBYyxFQUFDLGFBQWEsRUFBQyxTQUFTLE1BQVYsRUFBZCxFQUFkO0FBQ0Q7QUFDRjs7O2dDQUVXLEMsRUFBRTtBQUNaLFdBQUssY0FBTCxDQUFvQixPQUFwQjtBQUNBLFdBQUssUUFBTCxDQUFjLEVBQUMsaUJBQWlCLE9BQWxCLEVBQWQ7QUFDRDs7OytCQUVVLEMsRUFBRTtBQUNYLFdBQUssY0FBTCxDQUFvQixNQUFwQjtBQUNBLFdBQUssUUFBTCxDQUFjLEVBQUMsaUJBQWlCLE1BQWxCLEVBQWQ7QUFDRDs7OzhCQUdTLEMsRUFBRTtBQUNWLHVCQUFhLGlCQUFiLENBQStCLENBQS9CO0FBQ0Q7Ozs2QkFFTztBQUNOLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxPQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsbUJBQU8sS0FBSyxLQUFMLENBQVcsV0FEcEI7QUFFRSx1QkFBVSxjQUZaO0FBR0csZUFBSyxTQUFMO0FBSEgsU0FERjtBQU1FO0FBQUE7QUFBQSxZQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQTtBQUNFLHVCQUFTLEtBQUssVUFEaEI7QUFFRSxxQkFBTztBQUNMLDRCQUFZLEtBRFA7QUFFTCxzQ0FBc0IsS0FGakI7QUFHTCx5Q0FBeUI7QUFIcEIsZUFGVDtBQU9HLGlCQUFLLGVBQUw7QUFQSCxXQURGO0FBVUU7QUFDRSw2QkFBZ0IsY0FEbEI7QUFFRSxpQkFBSyxDQUZQO0FBR0UsaUJBQUssR0FIUDtBQUlFLG1CQUFPLEtBQUssS0FBTCxDQUFXLGNBSnBCO0FBS0Usc0JBQVUsS0FBSyxTQUxqQjtBQU1FLHVCQUFVLFdBTlosR0FWRjtBQWlCRTtBQUFBO0FBQUE7QUFDRSx1QkFBUyxLQUFLLFdBRGhCO0FBRUUscUJBQU87QUFDTCw2QkFBYSxLQURSO0FBRUwscUNBQXFCLEtBRmhCO0FBR0wsd0NBQXdCO0FBSG5CLGVBRlQ7QUFPRyxpQkFBSyxnQkFBTDtBQVBIO0FBakJGO0FBTkYsT0FERjtBQW9DRDs7OztFQTlIaUIsZ0JBQU0sUzs7a0JBaUlYLEsiLCJmaWxlIjoiY29tcG9uZW50cy9taXhlci9NaXhlci5yZWFjdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0U2xpZGVyIGZyb20gJ3JlYWN0LXNsaWRlcic7XG5pbXBvcnQgU2VsZWN0b3IgZnJvbSAnLi9zZWxlY3Rvci9TZWxlY3Rvci5yZWFjdC5qcyc7XG5pbXBvcnQgVG91Y2hTbGlkZXIgZnJvbSAnLi90b3VjaF9zbGlkZXIvVG91Y2hTbGlkZXIucmVhY3QuanMnO1xuaW1wb3J0IFRyYWNrU3RvcmUgZnJvbSAnLi4vLi4vc3RvcmVzL1RyYWNrcy5qcyc7XG5pbXBvcnQgVHJhY2tBY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMvVHJhY2tzLmpzJztcblxuY2xhc3MgTWl4ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt0b2dnbGVTdHlsZToge2Rpc3BsYXk6ICdub25lJywgZmxvYXQ6J3JpZ2h0J319O1xuICAgIHRoaXMuc2VsZWN0VHJhY2sgPSB0aGlzLnNlbGVjdFRyYWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWxlY3RSaWdodCA9IHRoaXMuc2VsZWN0UmlnaHQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlbGVjdExlZnQgPSB0aGlzLnNlbGVjdExlZnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyb3NzZmFkZSA9IHRoaXMuY3Jvc3NmYWRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVTZWxlY3RvciA9IHRoaXMudG9nZ2xlU2VsZWN0b3IuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNlbGVjdFRyYWNrKHRyYWNrKXtcbiAgICB0aGlzLnRvZ2dsZVNlbGVjdG9yKCk7XG4gIH1cblxuICBnZXRMZWZ0VHJhY2tJbWcoKXtcbiAgICBpZih0aGlzLnByb3BzLmxlZnRUcmFjayl7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPSdtaXhlci1pbWcnXG4gICAgICAgICAgc3JjPXt0aGlzLnByb3BzLmxlZnRUcmFjay50aHVtYm5haWx9PlxuICAgICAgICA8L2ltZz5cbiAgICAgICk7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbWl4ZXItaW1nJ1xuICAgICAgICAgICAgc3JjPSdpY29ucy9taXBtYXAteHh4aGRwaS9pY19sYXVuY2hlci5wbmcnPlxuICAgICAgICAgIDwvaW1nPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBnZXRSaWdodFRyYWNrSW1nKCl7XG4gICAgaWYodGhpcy5wcm9wcy5yaWdodFRyYWNrKXtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9J21peGVyLWltZydcbiAgICAgICAgICBzdHlsZT17e2Zsb2F0OiAncmlnaHQnfX1cbiAgICAgICAgICBzcmM9e3RoaXMucHJvcHMucmlnaHRUcmFjay50aHVtYm5haWx9PlxuICAgICAgICA8L2ltZz5cbiAgICAgICk7XG4gICAgfWVsc2V7XG4gICAgcmV0dXJuIChcbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9J21peGVyLWltZydcbiAgICAgICAgICAgIHN0eWxlPXt7ZmxvYXQ6ICdyaWdodCd9fVxuICAgICAgICAgICAgc3JjPSdpY29ucy9taXBtYXAteHh4aGRwaS9pY19sYXVuY2hlci5wbmcnPlxuICAgICAgICAgIDwvaW1nPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBidWlsZExpc3QoKXtcbiAgICB2YXIgYXJyID0gW11cbiAgICBmb3IodmFyIGsgaW4gdGhpcy5wcm9wcy50cmFja3Mpe1xuICAgICAgaWYodGhpcy5wcm9wcy50cmFja3Nba10ucmVhZHkgJiYgIXRoaXMucHJvcHMudHJhY2tzW2tdLnJlbW92ZWQpe1xuICAgICAgICBhcnIucHVzaChcbiAgICAgICAgICA8U2VsZWN0b3IgdHJhY2s9e3RoaXMucHJvcHMudHJhY2tzW2tdfSBvblNlbGVjdD17dGhpcy5zZWxlY3RUcmFja30gY3VycmVudFNlbGVjdG9yPXt0aGlzLnN0YXRlLmN1cnJlbnRTZWxlY3Rvcn0gLz5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgdG9nZ2xlU2VsZWN0b3IoZmxvYXQpe1xuICAgIGlmKHRoaXMuc3RhdGUudG9nZ2xlU3R5bGUuZGlzcGxheSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHt0b2dnbGVTdHlsZSA6IHtkaXNwbGF5OiB1bmRlZmluZWQsIGZsb2F0OiBmbG9hdH19KTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RvZ2dsZVN0eWxlOiB7ZGlzcGxheTogJ25vbmUnfX0pO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdFJpZ2h0KGspe1xuICAgIHRoaXMudG9nZ2xlU2VsZWN0b3IoJ3JpZ2h0Jyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFNlbGVjdG9yOiAncmlnaHQnfSk7XG4gIH1cblxuICBzZWxlY3RMZWZ0KGspe1xuICAgIHRoaXMudG9nZ2xlU2VsZWN0b3IoJ2xlZnQnKTtcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50U2VsZWN0b3I6ICdsZWZ0J30pO1xuICB9XG5cblxuICBjcm9zc2ZhZGUodil7XG4gICAgVHJhY2tBY3Rpb25zLnNldENyb3NzZmFkZVZhbHVlKHYpO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtaXhlcic+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17dGhpcy5zdGF0ZS50b2dnbGVTdHlsZX1cbiAgICAgICAgICBjbGFzc05hbWU9J21peGVyLXNlbGVjdCc+XG4gICAgICAgICAge3RoaXMuYnVpbGRMaXN0KCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWl4ZXItY3RybCc+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2VsZWN0TGVmdH1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcwcHgnICxcbiAgICAgICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6ICc1cHgnLFxuICAgICAgICAgICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogJzVweCdcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAge3RoaXMuZ2V0TGVmdFRyYWNrSW1nKCl9XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxUb3VjaFNsaWRlclxuICAgICAgICAgICAgaGFuZGxlQ2xhc3NOYW1lPSdtaXhlci1oYW5kbGUnXG4gICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICBtYXg9ezEwMH1cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmNyb3NzZmFkZVZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY3Jvc3NmYWRlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPSdtaXhlci1iYXInLz5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZWxlY3RSaWdodH1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMHB4JyxcbiAgICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogJzVweCcsXG4gICAgICAgICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6ICc1cHgnXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIHt0aGlzLmdldFJpZ2h0VHJhY2tJbWcoKX1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNaXhlcjtcbiJdfQ==