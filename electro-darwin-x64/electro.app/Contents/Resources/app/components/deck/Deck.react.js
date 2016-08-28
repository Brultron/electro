'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSlider = require('react-slider');

var _reactSlider2 = _interopRequireDefault(_reactSlider);

var _Tracks = require('../../actions/Tracks.js');

var _Tracks2 = _interopRequireDefault(_Tracks);

var _ac = require('../../utils/ac.js');

var _ac2 = _interopRequireDefault(_ac);

var _EqReact = require('../eq/Eq.react.js');

var _EqReact2 = _interopRequireDefault(_EqReact);

var _BpmReact = require('./bpm/Bpm.react.js');

var _BpmReact2 = _interopRequireDefault(_BpmReact);

var _UVMeterReact = require('../meters/UVMeter.react.js');

var _UVMeterReact2 = _interopRequireDefault(_UVMeterReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var context = void 0;
var source = void 0;
var position = 0;
var tempBPM = void 0;

var Deck = function (_React$Component) {
  _inherits(Deck, _React$Component);

  function Deck(props) {
    _classCallCheck(this, Deck);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Deck).call(this, props));

    _this.pitch = 1;
    _this.setPitch = _this.setPitch.bind(_this);
    _this.pushUp = _this.pushUp.bind(_this);
    _this.pushDown = _this.pushDown.bind(_this);
    _this.resetPitch = _this.resetPitch.bind(_this);
    _this.removeTrack = _this.removeTrack.bind(_this);
    _this.playPause = _this.playPause.bind(_this);
    _this.cueTrack = _this.cueTrack.bind(_this);

    _this.state = { bpm: 0, playClass: 'fa fa-play', cueStyle: { color: 'white' } };
    _this.surferRendered = false;

    return _this;
  }

  _createClass(Deck, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.track.buffer && !this.surferRendered) {

        this.wavesurfer = Object.create(WaveSurfer);
        this.wavesurfer.init({
          audioContext: _ac2.default.getContext(),
          container: this.refs.deck,
          waveColor: '#f50057',
          cursorColor: '#03A9F4',
          progressColor: '#0277BD',
          scrollParent: true,
          normalize: true,
          destination: this.props.track.root,
          cursorWidth: 3
        });
        this.wavesurfer.loadDecodedBuffer(this.props.track.buffer);
        this.surferRendered = true;
      }
    }
  }, {
    key: 'setPitch',
    value: function setPitch(value) {
      this.pitch = 1 + value / 1000;
      this.wavesurfer.setPlaybackRate(this.pitch);
      this.props.track.bpm = this.props.track.tappedBpm * this.pitch;
      _Tracks2.default.updateTrack(this.props.track);
    }
    //TODO push bpm adjustment out

  }, {
    key: 'pushDown',
    value: function pushDown() {
      this.oldPitch = this.pitch;
      this.wavesurfer.setPlaybackRate(this.pitch * 0.95);
      this.bumpBpm(0.95);
    }
  }, {
    key: 'pushUp',
    value: function pushUp() {
      this.oldPitch = this.pitch;
      this.wavesurfer.setPlaybackRate(this.pitch * 1.05);
      this.bumpBpm(1.05);
    }
  }, {
    key: 'resetPitch',
    value: function resetPitch() {
      this.wavesurfer.setPlaybackRate(this.oldPitch);
      this.bumpBpm();
    }
  }, {
    key: 'bumpBpm',
    value: function bumpBpm(amt) {
      if (this.props.track.bpm) {
        if (amt) {
          tempBPM = this.props.track.bpm;
          this.props.track.bpm = this.props.track.bpm * amt;
        } else {
          this.props.track.bpm = tempBPM;
        }
        _Tracks2.default.updateTrack(this.props.track);
      }
    }
  }, {
    key: 'playPause',
    value: function playPause() {
      this.wavesurfer.playPause();
      if (this.wavesurfer.isPlaying()) {
        this.setState({ playClass: 'fa fa-pause' });
        this.props.track.channel.main.play();
      } else {
        this.setState({ playClass: 'fa fa-play' });
        this.props.track.channel.main.pause();
      }
    }
  }, {
    key: 'removeTrack',
    value: function removeTrack() {
      if (this.wavesurfer.isPlaying()) this.wavesurfer.playPause();
      _Tracks2.default.removeTrack(this.props.track);
    }
  }, {
    key: 'cueTrack',
    value: function cueTrack() {
      if (this.props.track.channel.cue.paused && this.props.track.channel.cue.duration > 0) {
        this.props.track.channel.cue.play();
        this.setState({ cueStyle: { color: '#f50057' } });
      } else {
        this.props.track.channel.cue.pause();
        this.setState({ cueStyle: { color: 'white' } });
      }
    }
  }, {
    key: 'setControls',
    value: function setControls() {
      if (this.props.track.ready) {

        var background = {
          background: 'url(' + this.props.track.thumbnail + ')',
          backgroundSize: '105%',
          backgroundPosition: 'center'
        };

        return _react2.default.createElement(
          'div',
          { className: 'deck lv1_blur' },
          _react2.default.createElement(
            'h1',
            { className: 'track-title' },
            this.props.track.title
          ),
          _react2.default.createElement(
            'div',
            { className: 'controls-panel' },
            _react2.default.createElement(
              'div',
              { className: 'left-cntrls' },
              _react2.default.createElement(
                'a',
                { onClick: this.playPause, className: 'ctrl-btn' },
                _react2.default.createElement('i', { className: this.state.playClass })
              ),
              _react2.default.createElement(
                'a',
                { onClick: this.cueTrack, className: 'ctrl-btn' },
                _react2.default.createElement('i', { className: 'fa fa-headphones', style: this.state.cueStyle })
              ),
              _react2.default.createElement(_BpmReact2.default, { track: this.props.track }),
              _react2.default.createElement(_EqReact2.default, { track: this.props.track })
            ),
            _react2.default.createElement(_UVMeterReact2.default, { track: this.props.track }),
            _react2.default.createElement(
              'div',
              { className: 'pitch-cntrl' },
              _react2.default.createElement(
                'a',
                {
                  className: 'pitch-bump ctrl-btn',
                  style: {
                    marginRight: '0px',
                    borderTopLeftRadius: '5px',
                    borderBottomLeftRadius: '5px'
                  },
                  onMouseDown: this.pushDown,
                  onMouseUp: this.resetPitch },
                _react2.default.createElement('i', { className: 'fa fa-minus' })
              ),
              _react2.default.createElement(_reactSlider2.default, {
                handleClassName: 'pitch-handel',
                className: 'pitch-bar',
                max: 150,
                min: -150,
                onChange: this.setPitch }),
              _react2.default.createElement(
                'a',
                {
                  className: 'pitch-bump ctrl-btn',
                  style: {
                    marginLeft: '0px',
                    borderTopRightRadius: '5px',
                    borderBottomRightRadius: '5px'
                  },
                  onMouseDown: this.pushUp,
                  onMouseUp: this.resetPitch },
                _react2.default.createElement('i', { className: 'fa fa-plus' })
              )
            )
          ),
          _react2.default.createElement('div', { ref: 'deck', className: 'wave-display' }),
          _react2.default.createElement(
            'a',
            { onClick: this.removeTrack, className: 'track-exit' },
            _react2.default.createElement('i', { className: 'fa fa-times-circle fa-lg' })
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'deck lv1_blur', style: { height: '128px' } },
          _react2.default.createElement(
            'h5',
            null,
            this.props.track.title
          ),
          _react2.default.createElement('img', { className: 'yt-img', src: this.props.track.thumbnail }),
          _react2.default.createElement('img', { src: 'images/balls.svg' })
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.setControls();
    }
  }]);

  return Deck;
}(_react2.default.Component);

exports.default = Deck;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGVjay9EZWNrLnJlYWN0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxnQkFBSjtBQUNBLElBQUksZUFBSjtBQUNBLElBQUksV0FBVyxDQUFmO0FBQ0EsSUFBSSxnQkFBSjs7SUFFTSxJOzs7QUFFSixnQkFBWSxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsd0ZBQ1YsS0FEVTs7QUFHaEIsVUFBSyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFVBQUssUUFBTCxHQUFnQixNQUFLLFFBQUwsQ0FBYyxJQUFkLE9BQWhCO0FBQ0EsVUFBSyxNQUFMLEdBQWMsTUFBSyxNQUFMLENBQVksSUFBWixPQUFkO0FBQ0EsVUFBSyxRQUFMLEdBQWdCLE1BQUssUUFBTCxDQUFjLElBQWQsT0FBaEI7QUFDQSxVQUFLLFVBQUwsR0FBa0IsTUFBSyxVQUFMLENBQWdCLElBQWhCLE9BQWxCO0FBQ0EsVUFBSyxXQUFMLEdBQW1CLE1BQUssV0FBTCxDQUFpQixJQUFqQixPQUFuQjtBQUNBLFVBQUssU0FBTCxHQUFpQixNQUFLLFNBQUwsQ0FBZSxJQUFmLE9BQWpCO0FBQ0EsVUFBSyxRQUFMLEdBQWdCLE1BQUssUUFBTCxDQUFjLElBQWQsT0FBaEI7O0FBRUEsVUFBSyxLQUFMLEdBQWEsRUFBQyxLQUFLLENBQU4sRUFBUyxXQUFXLFlBQXBCLEVBQWtDLFVBQVUsRUFBQyxPQUFPLE9BQVIsRUFBNUMsRUFBYjtBQUNBLFVBQUssY0FBTCxHQUFzQixLQUF0Qjs7QUFiZ0I7QUFlakI7Ozs7eUNBRW1CO0FBQ2xCLFVBQUcsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixNQUFqQixJQUEyQixDQUFDLEtBQUssY0FBcEMsRUFBbUQ7O0FBRWpELGFBQUssVUFBTCxHQUFrQixPQUFPLE1BQVAsQ0FBYyxVQUFkLENBQWxCO0FBQ0Es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QTlDLEdBRkY7QUFHRSxpREFBSyxLQUFJLGtCQUFUO0FBSEYsU0FERjtBQU9EO0FBQ0o7Ozs2QkFFTztBQUNOLGFBQU8sS0FBSyxXQUFMLEVBQVA7QUFDRDs7OztFQWhMZ0IsZ0JBQU0sUzs7a0JBbUxWLEkiLCJmaWxlIjoiY29tcG9uZW50cy9kZWNrL0RlY2sucmVhY3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0U2xpZGVyIGZyb20gJ3JlYWN0LXNsaWRlcic7XG5pbXBvcnQgVHJhY2tBY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMvVHJhY2tzLmpzJztcbmltcG9ydCBBQyBmcm9tICcuLi8uLi91dGlscy9hYy5qcydcbmltcG9ydCBFUSBmcm9tICcuLi9lcS9FcS5yZWFjdC5qcydcbmltcG9ydCBCUE0gZnJvbSAnLi9icG0vQnBtLnJlYWN0LmpzJ1xuaW1wb3J0IFVWTWV0ZXIgZnJvbSAnLi4vbWV0ZXJzL1VWTWV0ZXIucmVhY3QuanMnXG5cbmxldCBjb250ZXh0O1xubGV0IHNvdXJjZTtcbmxldCBwb3NpdGlvbiA9IDA7XG5sZXQgdGVtcEJQTTtcblxuY2xhc3MgRGVjayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5waXRjaCA9IDE7XG4gICAgdGhpcy5zZXRQaXRjaCA9IHRoaXMuc2V0UGl0Y2guYmluZCh0aGlzKTtcbiAgICB0aGlzLnB1c2hVcCA9IHRoaXMucHVzaFVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wdXNoRG93biA9IHRoaXMucHVzaERvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2V0UGl0Y2ggPSB0aGlzLnJlc2V0UGl0Y2guYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbW92ZVRyYWNrID0gdGhpcy5yZW1vdmVUcmFjay5iaW5kKHRoaXMpO1xuICAgIHRoaXMucGxheVBhdXNlID0gdGhpcy5wbGF5UGF1c2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmN1ZVRyYWNrID0gdGhpcy5jdWVUcmFjay5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHticG06IDAsIHBsYXlDbGFzczogJ2ZhIGZhLXBsYXknLCBjdWVTdHlsZToge2NvbG9yOiAnd2hpdGUnfX07XG4gICAgdGhpcy5zdXJmZXJSZW5kZXJlZCA9IGZhbHNlO1xuXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKXtcbiAgICBpZih0aGlzLnByb3BzLnRyYWNrLmJ1ZmZlciAmJiAhdGhpcy5zdXJmZXJSZW5kZXJlZCl7XG5cbiAgICAgIHRoaXMud2F2ZXN1cmZlciA9IE9iamVjdC5jcmVhdGUoV2F2ZVN1cmZlcik7XG4gICAgICB0aGlzLndhdmVzdXJmZXIuaW5pdCh7XG4gICAgICAgIGF1ZGlvQ29udGV4dDogQUMuZ2V0Q29udGV4dCgpLFxuICAgICAgICBjb250YWluZXI6IHRoaXMucmVmcy5kZWNrLFxuICAgICAgICB3YXZlQ29sb3I6ICcjZjUwMDU3JyxcbiAgICAgICAgY3Vyc29yQ29sb3I6ICcjMDNBOUY0JyxcbiAgICAgICAgcHJvZ3Jlc3NDb2xvcjogJyMwMjc3QkQnLFxuICAgICAgICBzY3JvbGxQYXJlbnQ6IHRydWUsXG4gICAgICAgIG5vcm1hbGl6ZTogdHJ1ZSxcbiAgICAgICAgZGVzdGluYXRpb24gOiB0aGlzLnByb3BzLnRyYWNrLnJvb3QsXG4gICAgICAgIGN1cnNvcldpZHRoOiAzXG4gICAgICB9KTtcbiAgICAgIHRoaXMud2F2ZXN1cmZlci5sb2FkRGVjb2RlZEJ1ZmZlcih0aGlzLnByb3BzLnRyYWNrLmJ1ZmZlcik7XG4gICAgICB0aGlzLnN1cmZlclJlbmRlcmVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBzZXRQaXRjaCh2YWx1ZSkge1xuICAgIHRoaXMucGl0Y2ggPSAxICsgKHZhbHVlIC8gMTAwMCk7XG4gICAgdGhpcy53YXZlc3VyZmVyLnNldFBsYXliYWNrUmF0ZSh0aGlzLnBpdGNoKTtcbiAgICB0aGlzLnByb3BzLnRyYWNrLmJwbSA9IHRoaXMucHJvcHMudHJhY2sudGFwcGVkQnBtICogdGhpcy5waXRjaDtcbiAgICBUcmFja0FjdGlvbnMudXBkYXRlVHJhY2sodGhpcy5wcm9wcy50cmFjayk7XG4gIH1cbiAgLy9UT0RPIHB1c2ggYnBtIGFkanVzdG1lbnQgb3V0XG4gIHB1c2hEb3duKCl7XG4gICAgdGhpcy5vbGRQaXRjaCA9IHRoaXMucGl0Y2g7XG4gICAgdGhpcy53YXZlc3VyZmVyLnNldFBsYXliYWNrUmF0ZSh0aGlzLnBpdGNoICogMC45NSk7XG4gICAgdGhpcy5idW1wQnBtKDAuOTUpO1xuICB9XG5cbiAgcHVzaFVwKCl7XG4gICAgdGhpcy5vbGRQaXRjaCA9IHRoaXMucGl0Y2g7XG4gICAgdGhpcy53YXZlc3VyZmVyLnNldFBsYXliYWNrUmF0ZSh0aGlzLnBpdGNoICogMS4wNSk7XG4gICAgdGhpcy5idW1wQnBtKDEuMDUpO1xuICB9XG5cbiAgcmVzZXRQaXRjaCgpe1xuICAgIHRoaXMud2F2ZXN1cmZlci5zZXRQbGF5YmFja1JhdGUodGhpcy5vbGRQaXRjaCk7XG4gICAgdGhpcy5idW1wQnBtKCk7XG4gIH1cblxuICBidW1wQnBtKGFtdCl7XG4gICAgaWYodGhpcy5wcm9wcy50cmFjay5icG0pe1xuICAgICAgaWYoYW10KXtcbiAgICAgICAgdGVtcEJQTSA9IHRoaXMucHJvcHMudHJhY2suYnBtO1xuICAgICAgICB0aGlzLnByb3BzLnRyYWNrLmJwbSA9IHRoaXMucHJvcHMudHJhY2suYnBtICogYW10O1xuICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMucHJvcHMudHJhY2suYnBtID0gdGVtcEJQTTtcbiAgICAgIH1cbiAgICAgIFRyYWNrQWN0aW9ucy51cGRhdGVUcmFjayh0aGlzLnByb3BzLnRyYWNrKTtcbiAgICB9XG4gIH1cblxuICBwbGF5UGF1c2UoKXtcbiAgICB0aGlzLndhdmVzdXJmZXIucGxheVBhdXNlKCk7XG4gICAgaWYodGhpcy53YXZlc3VyZmVyLmlzUGxheWluZygpKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3BsYXlDbGFzczogJ2ZhIGZhLXBhdXNlJ30pO1xuICAgICAgdGhpcy5wcm9wcy50cmFjay5jaGFubmVsLm1haW4ucGxheSgpO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7cGxheUNsYXNzOiAnZmEgZmEtcGxheSd9KTtcbiAgICAgIHRoaXMucHJvcHMudHJhY2suY2hhbm5lbC5tYWluLnBhdXNlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlVHJhY2soKXtcbiAgICBpZih0aGlzLndhdmVzdXJmZXIuaXNQbGF5aW5nKCkpIHRoaXMud2F2ZXN1cmZlci5wbGF5UGF1c2UoKTtcbiAgICBUcmFja0FjdGlvbnMucmVtb3ZlVHJhY2sodGhpcy5wcm9wcy50cmFjayk7XG4gIH1cblxuICBjdWVUcmFjaygpe1xuICAgIGlmKHRoaXMucHJvcHMudHJhY2suY2hhbm5lbC5jdWUucGF1c2VkICYmIHRoaXMucHJvcHMudHJhY2suY2hhbm5lbC5jdWUuZHVyYXRpb24gPiAwKXtcbiAgICAgIHRoaXMucHJvcHMudHJhY2suY2hhbm5lbC5jdWUucGxheSgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VlU3R5bGU6IHtjb2xvcjogJyNmNTAwNTcnfX0pO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5wcm9wcy50cmFjay5jaGFubmVsLmN1ZS5wYXVzZSgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VlU3R5bGU6IHtjb2xvcjogJ3doaXRlJ319KTtcbiAgICB9XG4gIH1cblxuICBzZXRDb250cm9scygpe1xuICAgICAgaWYodGhpcy5wcm9wcy50cmFjay5yZWFkeSl7XG5cbiAgICAgICAgdmFyIGJhY2tncm91bmQgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBgdXJsKCR7dGhpcy5wcm9wcy50cmFjay50aHVtYm5haWx9KWAsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJzEwNSUnLFxuICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJ1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RlY2sgbHYxX2JsdXInPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RyYWNrLXRpdGxlJz57dGhpcy5wcm9wcy50cmFjay50aXRsZX08L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9scy1wYW5lbCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGVmdC1jbnRybHMnPlxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnBsYXlQYXVzZX0gY2xhc3NOYW1lPSdjdHJsLWJ0bic+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnBsYXlDbGFzc30+PC9pPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuY3VlVHJhY2t9IGNsYXNzTmFtZT0nY3RybC1idG4nPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtaGVhZHBob25lcycgc3R5bGU9e3RoaXMuc3RhdGUuY3VlU3R5bGV9PjwvaT5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8QlBNIHRyYWNrPXt0aGlzLnByb3BzLnRyYWNrfS8+XG4gICAgICAgICAgICAgIDxFUSB0cmFjaz17dGhpcy5wcm9wcy50cmFja30vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPFVWTWV0ZXIgdHJhY2s9e3RoaXMucHJvcHMudHJhY2t9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGl0Y2gtY250cmwnPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3BpdGNoLWJ1bXAgY3RybC1idG4nXG4gICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogJzVweCcsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6ICc1cHgnXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5wdXNoRG93bn1cbiAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXt0aGlzLnJlc2V0UGl0Y2h9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtbWludXMnPjwvaT5cbiAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgIDxSZWFjdFNsaWRlclxuICAgICAgICAgICAgICAgIGhhbmRsZUNsYXNzTmFtZT17J3BpdGNoLWhhbmRlbCd9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsncGl0Y2gtYmFyJ31cbiAgICAgICAgICAgICAgICBtYXg9ezE1MH1cbiAgICAgICAgICAgICAgICBtaW49ey0xNTB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2V0UGl0Y2h9Lz5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3BpdGNoLWJ1bXAgY3RybC1idG4nXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcwcHgnICxcbiAgICAgICAgICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAnNXB4JyxcbiAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAnNXB4J1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMucHVzaFVwfVxuICAgICAgICAgICAgICAgIG9uTW91c2VVcD17dGhpcy5yZXNldFBpdGNofT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXBsdXMnPjwvaT5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiByZWY9J2RlY2snIGNsYXNzTmFtZT0nd2F2ZS1kaXNwbGF5Jz48L2Rpdj5cbiAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnJlbW92ZVRyYWNrfSBjbGFzc05hbWU9J3RyYWNrLWV4aXQnPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGltZXMtY2lyY2xlIGZhLWxnXCI+PC9pPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGVjayBsdjFfYmx1cicgc3R5bGU9e3toZWlnaHQ6ICcxMjhweCd9fT5cbiAgICAgICAgICAgIDxoNT57dGhpcy5wcm9wcy50cmFjay50aXRsZX08L2g1PlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J3l0LWltZycgc3JjPXt0aGlzLnByb3BzLnRyYWNrLnRodW1ibmFpbH0+PC9pbWc+XG4gICAgICAgICAgICA8aW1nIHNyYz0naW1hZ2VzL2JhbGxzLnN2ZycgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiB0aGlzLnNldENvbnRyb2xzKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVjaztcbiJdfQ==