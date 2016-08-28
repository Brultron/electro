'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tracks = require('../actions/Tracks.js');

var _Tracks2 = _interopRequireDefault(_Tracks);

var _Tracks3 = require('../stores/Tracks.js');

var _Tracks4 = _interopRequireDefault(_Tracks3);

var _SelectReact = require('./select/Select.react.js');

var _SelectReact2 = _interopRequireDefault(_SelectReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Settings = function (_React$Component) {
	_inherits(Settings, _React$Component);

	function Settings(props) {
		_classCallCheck(this, Settings);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Settings).call(this, props));

		_this.onChange = _this.onChange.bind(_this);
		_this.state = {
			devices: _Tracks4.default.getDevices()
		};

		loadDevices();
		return _this;
	}

	_createClass(Settings, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			_Tracks4.default.listen(function () {
				_this2.onChange();
			});
		}
	}, {
		key: 'onChange',
		value: function onChange() {
			var devices = _Tracks4.default.getDevices();
			var ytApiKey = _Tracks4.default.getYtApiKey();
			this.setState({ devices: devices, ytApiKey: ytApiKey });
		}
	}, {
		key: 'setMainOutput',
		value: function setMainOutput(deviceId) {
			_Tracks2.default.setMainOutput(deviceId);
		}
	}, {
		key: 'setCueOutput',
		value: function setCueOutput(deviceId) {
			_Tracks2.default.setCueOutput(deviceId);
		}
	}, {
		key: 'setYtApiKey',
		value: function setYtApiKey(event) {
			if (event.key === 'Enter') {
				_Tracks2.default.setYtApiKey(event.target.value);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'setting-container' },
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h1',
						null,
						'Settings'
					)
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement('input', { type: 'text', onKeyUp: this.setYtApiKey, defaultValue: _Tracks4.default.getYtApiKey() }),
					_react2.default.createElement(
						'label',
						null,
						'YouTube API key'
					)
				),
				_react2.default.createElement(
					'label',
					null,
					'Main Output'
				),
				_react2.default.createElement(_SelectReact2.default, {
					options: this.state.devices,
					text: 'label',
					value: 'deviceId',
					selected: _Tracks4.default.getMainOutput(),
					onSelect: this.setMainOutput }),
				_react2.default.createElement(
					'label',
					null,
					'Cue Output'
				),
				_react2.default.createElement(_SelectReact2.default, {
					options: this.state.devices,
					text: 'label',
					value: 'deviceId',
					selected: _Tracks4.default.getCueOutput(),
					onSelect: this.setCueOutput })
			);
		}
	}]);

	return Settings;
}(_react2.default.Component);

function loadDevices() {
	navigator.mediaDevices.enumerateDevices().then(function (devices) {
		var audioOutputs = devices.filter(function (d) {
			return d.kind === 'audiooutput';
		});
		_Tracks2.default.setDevices(audioOutputs);
	});
}

exports.default = Settings;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2V0dGluZ3MucmVhY3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTSxROzs7QUFFTCxtQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEZBQ1osS0FEWTs7QUFFbEIsUUFBSyxRQUFMLEdBQWdCLE1BQUssUUFBTCxDQUFjLElBQWQsT0FBaEI7QUFDQSxRQUFLLEtBQUwsR0FBYTtBQUNaLFlBQVMsaUJBQVcsVUFBWDtBQURHLEdBQWI7O0FBSUE7QUFQa0I7QUFRbEI7Ozs7c0NBRW1CO0FBQUE7O0FBQ25CLG9CQUFXLE1BQVgsQ0FBa0IsWUFBTTtBQUN2QixXQUFLLFFBQUw7QUFDQSxJQUZEO0FBR0E7Ozs2QkFFVTtBQUNWLE9BQUksVUFBVSxpQkFBVyxVQUFYLEVBQWQ7QUFDQSxPQUFJLFdBQVcsaUJBQVcsV0FBWCxFQUFmO0FBQ0EsUUFBSyxRQUFMLENBQWMsRUFBQyxTQUFTLE9BQVYsRUFBbUIsVUFBVSxRQUE3QixFQUFkO0FBQ0E7OztnQ0FFYSxRLEVBQVU7QUFDdkIsb0JBQWEsYUFBYixDQUEyQixRQUEzQjtBQUNBOzs7K0JBRVksUSxFQUFVO0FBQ3RCLG9CQUFhLFlBQWIsQ0FBMEIsUUFBMUI7QUFDQTs7OzhCQUVXLEssRUFBTTtBQUNqQixPQUFHLE1BQU0sR0FBTixLQUFjLE9BQWpCLEVBQXlCO0FBQ3hCLHFCQUFhLFdBQWIsQ0FBeUIsTUFBTSxNQUFOLENBQWEsS0FBdEM7QUFDQTtBQUNEOzs7MkJBRVE7QUFDUixVQUNDO0FBQUE7QUFBQSxNQUFLLFdBQVUsbUJBQWY7QUFDQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsS0FERDtBQUlDO0FBQUE7QUFBQTtBQUNDLDhDQUFRLE1BQUssTUFBYixFQUFvQixTQUFTLEtBQUssV0FBbEMsRUFBK0MsY0FBYyxpQkFBVyxXQUFYLEVBQTdELEdBREQ7QUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkQsS0FKRDtBQVFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FSRDtBQVNDO0FBQ0MsY0FBUyxLQUFLLEtBQUwsQ0FBVyxPQURyQjtBQUVDLFdBQUssT0FGTjtBQUdDLFlBQU0sVUFIUDtBQUlDLGVBQVUsaUJBQVcsYUFBWCxFQUpYO0FBS0MsZUFBVSxLQUFLLGFBTGhCLEdBVEQ7QUFlQztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBZkQ7QUFnQkM7QUFDQyxjQUFTLEtBQUssS0FBTCxDQUFXLE9BRHJCO0FBRUMsV0FBSyxPQUZOO0FBR0MsWUFBTSxVQUhQO0FBSUMsZUFBVSxpQkFBVyxZQUFYLEVBSlg7QUFLQyxlQUFVLEtBQUssWUFMaEI7QUFoQkQsSUFERDtBQXlCQTs7OztFQWhFcUIsZ0JBQU0sUzs7QUFtRTdCLFNBQVMsV0FBVCxHQUF1QjtBQUN0QixXQUFVLFlBQVYsQ0FBdUIsZ0JBQXZCLEdBQTBDLElBQTFDLENBQStDLFVBQUMsT0FBRCxFQUFhO0FBQzNELE1BQUksZUFBZSxRQUFRLE1BQVIsQ0FBZSxhQUFLO0FBQ3RDLFVBQU8sRUFBRSxJQUFGLEtBQVcsYUFBbEI7QUFDQSxHQUZrQixDQUFuQjtBQUdBLG1CQUFhLFVBQWIsQ0FBd0IsWUFBeEI7QUFDQSxFQUxEO0FBTUE7O2tCQUVjLFEiLCJmaWxlIjoiY29tcG9uZW50cy9TZXR0aW5ncy5yZWFjdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHJhY2tBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvVHJhY2tzLmpzJztcbmltcG9ydCBUcmFja1N0b3JlIGZyb20gJy4uL3N0b3Jlcy9UcmFja3MuanMnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL3NlbGVjdC9TZWxlY3QucmVhY3QuanMnO1xuXG5jbGFzcyBTZXR0aW5ncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0ZGV2aWNlczogVHJhY2tTdG9yZS5nZXREZXZpY2VzKClcblx0XHR9O1xuXG5cdFx0bG9hZERldmljZXMoKTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdFRyYWNrU3RvcmUubGlzdGVuKCgpID0+IHtcblx0XHRcdHRoaXMub25DaGFuZ2UoKVxuXHRcdH0pO1xuXHR9XG5cblx0b25DaGFuZ2UoKSB7XG5cdFx0dmFyIGRldmljZXMgPSBUcmFja1N0b3JlLmdldERldmljZXMoKTtcblx0XHR2YXIgeXRBcGlLZXkgPSBUcmFja1N0b3JlLmdldFl0QXBpS2V5KCk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7ZGV2aWNlczogZGV2aWNlcywgeXRBcGlLZXk6IHl0QXBpS2V5fSk7XG5cdH1cblxuXHRzZXRNYWluT3V0cHV0KGRldmljZUlkKSB7XG5cdFx0VHJhY2tBY3Rpb25zLnNldE1haW5PdXRwdXQoZGV2aWNlSWQpO1xuXHR9XG5cblx0c2V0Q3VlT3V0cHV0KGRldmljZUlkKSB7XG5cdFx0VHJhY2tBY3Rpb25zLnNldEN1ZU91dHB1dChkZXZpY2VJZCk7XG5cdH1cblxuXHRzZXRZdEFwaUtleShldmVudCl7XG5cdFx0aWYoZXZlbnQua2V5ID09PSAnRW50ZXInKXtcblx0XHRcdFRyYWNrQWN0aW9ucy5zZXRZdEFwaUtleShldmVudC50YXJnZXQudmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3NldHRpbmctY29udGFpbmVyJz5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8aDE+U2V0dGluZ3M8L2gxPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8aW5wdXQgIHR5cGU9J3RleHQnIG9uS2V5VXA9e3RoaXMuc2V0WXRBcGlLZXl9IGRlZmF1bHRWYWx1ZT17VHJhY2tTdG9yZS5nZXRZdEFwaUtleSgpfS8+XG5cdFx0XHRcdFx0PGxhYmVsPllvdVR1YmUgQVBJIGtleTwvbGFiZWw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8bGFiZWw+TWFpbiBPdXRwdXQ8L2xhYmVsPlxuXHRcdFx0XHQ8U2VsZWN0XG5cdFx0XHRcdFx0b3B0aW9ucz17dGhpcy5zdGF0ZS5kZXZpY2VzfVxuXHRcdFx0XHRcdHRleHQ9J2xhYmVsJ1xuXHRcdFx0XHRcdHZhbHVlPSdkZXZpY2VJZCdcblx0XHRcdFx0XHRzZWxlY3RlZD17VHJhY2tTdG9yZS5nZXRNYWluT3V0cHV0KCl9XG5cdFx0XHRcdFx0b25TZWxlY3Q9e3RoaXMuc2V0TWFpbk91dHB1dH0vPlxuXHRcdFx0XHQ8bGFiZWw+Q3VlIE91dHB1dDwvbGFiZWw+XG5cdFx0XHRcdDxTZWxlY3Rcblx0XHRcdFx0XHRvcHRpb25zPXt0aGlzLnN0YXRlLmRldmljZXN9XG5cdFx0XHRcdFx0dGV4dD0nbGFiZWwnXG5cdFx0XHRcdFx0dmFsdWU9J2RldmljZUlkJ1xuXHRcdFx0XHRcdHNlbGVjdGVkPXtUcmFja1N0b3JlLmdldEN1ZU91dHB1dCgpfVxuXHRcdFx0XHRcdG9uU2VsZWN0PXt0aGlzLnNldEN1ZU91dHB1dH0vPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5mdW5jdGlvbiBsb2FkRGV2aWNlcygpIHtcblx0bmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKCkudGhlbigoZGV2aWNlcykgPT4ge1xuXHRcdHZhciBhdWRpb091dHB1dHMgPSBkZXZpY2VzLmZpbHRlcihkID0+IHtcblx0XHRcdHJldHVybiBkLmtpbmQgPT09ICdhdWRpb291dHB1dCdcblx0XHR9KVxuXHRcdFRyYWNrQWN0aW9ucy5zZXREZXZpY2VzKGF1ZGlvT3V0cHV0cyk7XG5cdH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5ncztcbiJdfQ==