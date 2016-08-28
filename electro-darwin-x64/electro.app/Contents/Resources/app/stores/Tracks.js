'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _configstore = require('configstore');

var _configstore2 = _interopRequireDefault(_configstore);

var _BaseStore2 = require('./BaseStore.js');

var _BaseStore3 = _interopRequireDefault(_BaseStore2);

var _Dispatcher = require('../dispatcher/Dispatcher.js');

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var conf = new _configstore2.default('electro');
var tracks = {};
var rightTrack = void 0;
var leftTrack = void 0;
var crossfadeValue = 50;
var mainOutput = conf.get('main_output');
var cueOutput = conf.get('cue_output');
var ytApiKey = conf.get('yt_api_key');
var devices = [];

var Tracks = function (_BaseStore) {
	_inherits(Tracks, _BaseStore);

	function Tracks() {
		_classCallCheck(this, Tracks);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Tracks).apply(this, arguments));
	}

	_createClass(Tracks, [{
		key: 'getTracks',
		value: function getTracks() {
			return tracks;
		}
	}, {
		key: 'getTrack',
		value: function getTrack(id) {
			return tracks[id];
		}
	}, {
		key: 'getRightTrack',
		value: function getRightTrack() {
			return rightTrack;
		}
	}, {
		key: 'getLeftTrack',
		value: function getLeftTrack() {
			return leftTrack;
		}
	}, {
		key: 'getCrossfadeValue',
		value: function getCrossfadeValue() {
			return crossfadeValue;
		}
	}, {
		key: 'getMainOutput',
		value: function getMainOutput() {
			return mainOutput;
		}
	}, {
		key: 'getCueOutput',
		value: function getCueOutput() {
			return cueOutput;
		}
	}, {
		key: 'getYtApiKey',
		value: function getYtApiKey() {
			return ytApiKey;
		}
	}, {
		key: 'getDevices',
		value: function getDevices() {
			return devices;
		}
	}]);

	return Tracks;
}(_BaseStore3.default);

function setCrossfadeValue() {

	var c = crossfadeValue / 100;
	var l = Math.cos(c * 0.5 * Math.PI);
	var r = Math.cos((1.0 - c) * 0.5 * Math.PI);
	if (rightTrack) {
		rightTrack.channel.crossfade.gain.value = r;
	}
	if (leftTrack) {
		leftTrack.channel.crossfade.gain.value = l;
	}
}

var instance = new Tracks();

instance.dispatchToken = _Dispatcher2.default.register(function (action) {
	switch (action.type) {
		case 'update_track':
			tracks[action.track.id] = action.track;
			instance.emitChange();
			break;
		case 'remove_track':
			delete tracks[action.track.id];
			if (rightTrack && action.track.id === rightTrack.id) rightTrack = undefined;
			if (leftTrack && action.track.id === leftTrack.id) leftTrack = undefined;
			instance.emitChange();
			break;
		case 'clear_search':
			for (var key in tracks) {
				if (tracks[key].search && !tracks[key].ready) {
					delete tracks[key];
				}
			}
			break;
		case 'set_right_track':
			rightTrack = action.track;
			setCrossfadeValue();
			instance.emitChange();
			break;
		case 'set_left_track':
			leftTrack = action.track;
			setCrossfadeValue();
			instance.emitChange();
			break;
		case 'set_crossfade_value':
			crossfadeValue = action.value;
			setCrossfadeValue();
			instance.emitChange();
			break;
		case 'set_main_output':
			mainOutput = action.deviceId;
			conf.set('main_output', mainOutput);
			instance.emitChange();
			break;
		case 'set_cue_output':
			cueOutput = action.deviceId;
			conf.set('cue_output', cueOutput);
			instance.emitChange();
			break;
		case 'set_devices':
			devices = action.devices;
			instance.emitChange();
			break;
		case 'set_yt_api_key':
			ytApiKey = action.key;
			conf.set('yt_api_key', ytApiKey);
			instance.emitChange();
			break;
	}
});

exports.default = instance;
//# sourceMappingURL=data:application/json;base64,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QUFDQSxRQUFLLEdBQUwsQ0FBUyxhQUFULEVBQXdCLFVBQXhCO0FBQ0EsWUFBUyxVQUFUO0FBQ0E7QUFDRCxPQUFLLGdCQUFMO0FBQ0MsZUFBWSxPQUFPLFFBQW5CO0FBQ0EsUUFBSyxHQUFMLENBQVMsWUFBVCxFQUF1QixTQUF2QjtBQUNBLFlBQVMsVUFBVDtBQUNBO0FBQ0QsT0FBSyxhQUFMO0FBQ0MsYUFBVSxPQUFPLE9BQWpCO0FBQ0EsWUFBUyxVQUFUO0FBQ0E7QUFDRCxPQUFLLGdCQUFMO0FBQ0MsY0FBVyxPQUFPLEdBQWxCO0FBQ0EsUUFBSyxHQUFMLENBQVMsWUFBVCxFQUF1QixRQUF2QjtBQUNBLFlBQVMsVUFBVDtBQUNBO0FBckRGO0FBdURBLENBeER3QixDQUF6Qjs7a0JBMERlLFEiLCJmaWxlIjoic3RvcmVzL1RyYWNrcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWcgZnJvbSAnY29uZmlnc3RvcmUnO1xuaW1wb3J0IEJhc2VTdG9yZSBmcm9tICcuL0Jhc2VTdG9yZS5qcyc7XG5pbXBvcnQgRGlzcGF0Y2hlciBmcm9tICcuLi9kaXNwYXRjaGVyL0Rpc3BhdGNoZXIuanMnO1xuXG5sZXQgY29uZiA9IG5ldyBDb25maWcoJ2VsZWN0cm8nKTtcbmxldCB0cmFja3MgPSB7fTtcbmxldCByaWdodFRyYWNrO1xubGV0IGxlZnRUcmFjaztcbmxldCBjcm9zc2ZhZGVWYWx1ZSA9IDUwO1xubGV0IG1haW5PdXRwdXQgPSBjb25mLmdldCgnbWFpbl9vdXRwdXQnKTtcbmxldCBjdWVPdXRwdXQgPSBjb25mLmdldCgnY3VlX291dHB1dCcpO1xubGV0IHl0QXBpS2V5ID0gY29uZi5nZXQoJ3l0X2FwaV9rZXknKTtcbmxldCBkZXZpY2VzID0gW107XG5cbmNsYXNzIFRyYWNrcyBleHRlbmRzIEJhc2VTdG9yZSB7XG5cblx0Z2V0VHJhY2tzKCkge1xuXHRcdHJldHVybiB0cmFja3M7XG5cdH1cblxuXHRnZXRUcmFjayhpZCkge1xuXHRcdHJldHVybiB0cmFja3NbaWRdO1xuXHR9XG5cblx0Z2V0UmlnaHRUcmFjaygpIHtcblx0XHRyZXR1cm4gcmlnaHRUcmFjaztcblx0fVxuXG5cdGdldExlZnRUcmFjaygpIHtcblx0XHRyZXR1cm4gbGVmdFRyYWNrO1xuXHR9XG5cblx0Z2V0Q3Jvc3NmYWRlVmFsdWUoKSB7XG5cdFx0cmV0dXJuIGNyb3NzZmFkZVZhbHVlO1xuXHR9XG5cblx0Z2V0TWFpbk91dHB1dCgpIHtcblx0XHRyZXR1cm4gbWFpbk91dHB1dDtcblx0fVxuXG5cdGdldEN1ZU91dHB1dCgpIHtcblx0XHRyZXR1cm4gY3VlT3V0cHV0O1xuXHR9XG5cblx0Z2V0WXRBcGlLZXkoKSB7XG5cdFx0cmV0dXJuIHl0QXBpS2V5O1xuXHR9XG5cblx0Z2V0RGV2aWNlcygpIHtcblx0XHRyZXR1cm4gZGV2aWNlcztcblx0fVxuXG59XG5cbmZ1bmN0aW9uIHNldENyb3NzZmFkZVZhbHVlKCkge1xuXG5cdHZhciBjID0gY3Jvc3NmYWRlVmFsdWUgLyAxMDA7XG5cdHZhciBsID0gTWF0aC5jb3MoYyAqIDAuNSAqIE1hdGguUEkpO1xuIFx0dmFyIHIgPSBNYXRoLmNvcygoMS4wIC0gYykgKiAwLjUqTWF0aC5QSSk7XG5cdGlmIChyaWdodFRyYWNrKSB7XG5cdFx0cmlnaHRUcmFjay5jaGFubmVsLmNyb3NzZmFkZS5nYWluLnZhbHVlID0gcjtcblx0fVxuXHRpZiAobGVmdFRyYWNrKSB7XG5cdFx0bGVmdFRyYWNrLmNoYW5uZWwuY3Jvc3NmYWRlLmdhaW4udmFsdWUgPSBsO1xuXHR9XG59XG5cbmNvbnN0IGluc3RhbmNlID0gbmV3IFRyYWNrcygpO1xuXG5pbnN0YW5jZS5kaXNwYXRjaFRva2VuID0gRGlzcGF0Y2hlci5yZWdpc3RlcihhY3Rpb24gPT4ge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSAndXBkYXRlX3RyYWNrJzpcblx0XHRcdHRyYWNrc1thY3Rpb24udHJhY2suaWRdID0gYWN0aW9uLnRyYWNrO1xuXHRcdFx0aW5zdGFuY2UuZW1pdENoYW5nZSgpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAncmVtb3ZlX3RyYWNrJzpcblx0XHRcdGRlbGV0ZSB0cmFja3NbYWN0aW9uLnRyYWNrLmlkXTtcblx0XHRcdGlmIChyaWdodFRyYWNrICYmIGFjdGlvbi50cmFjay5pZCA9PT0gcmlnaHRUcmFjay5pZClcblx0XHRcdFx0cmlnaHRUcmFjayA9IHVuZGVmaW5lZDtcblx0XHRcdGlmIChsZWZ0VHJhY2sgJiYgYWN0aW9uLnRyYWNrLmlkID09PSBsZWZ0VHJhY2suaWQpXG5cdFx0XHRcdGxlZnRUcmFjayA9IHVuZGVmaW5lZDtcblx0XHRcdGluc3RhbmNlLmVtaXRDaGFuZ2UoKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2NsZWFyX3NlYXJjaCc6XG5cdFx0XHRmb3IgKGxldCBrZXkgaW4gdHJhY2tzKSB7XG5cdFx0XHRcdGlmICh0cmFja3Nba2V5XS5zZWFyY2ggJiYgIXRyYWNrc1trZXldLnJlYWR5KSB7XG5cdFx0XHRcdFx0ZGVsZXRlIHRyYWNrc1trZXldO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdzZXRfcmlnaHRfdHJhY2snOlxuXHRcdFx0cmlnaHRUcmFjayA9IGFjdGlvbi50cmFjaztcblx0XHRcdHNldENyb3NzZmFkZVZhbHVlKCk7XG5cdFx0XHRpbnN0YW5jZS5lbWl0Q2hhbmdlKCk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdzZXRfbGVmdF90cmFjayc6XG5cdFx0XHRsZWZ0VHJhY2sgPSBhY3Rpb24udHJhY2s7XG5cdFx0XHRzZXRDcm9zc2ZhZGVWYWx1ZSgpO1xuXHRcdFx0aW5zdGFuY2UuZW1pdENoYW5nZSgpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnc2V0X2Nyb3NzZmFkZV92YWx1ZSc6XG5cdFx0XHRjcm9zc2ZhZGVWYWx1ZSA9IGFjdGlvbi52YWx1ZTtcblx0XHRcdHNldENyb3NzZmFkZVZhbHVlKCk7XG5cdFx0XHRpbnN0YW5jZS5lbWl0Q2hhbmdlKCk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdzZXRfbWFpbl9vdXRwdXQnOlxuXHRcdFx0bWFpbk91dHB1dCA9IGFjdGlvbi5kZXZpY2VJZDtcblx0XHRcdGNvbmYuc2V0KCdtYWluX291dHB1dCcsIG1haW5PdXRwdXQpO1xuXHRcdFx0aW5zdGFuY2UuZW1pdENoYW5nZSgpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnc2V0X2N1ZV9vdXRwdXQnOlxuXHRcdFx0Y3VlT3V0cHV0ID0gYWN0aW9uLmRldmljZUlkO1xuXHRcdFx0Y29uZi5zZXQoJ2N1ZV9vdXRwdXQnLCBjdWVPdXRwdXQpO1xuXHRcdFx0aW5zdGFuY2UuZW1pdENoYW5nZSgpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnc2V0X2RldmljZXMnOlxuXHRcdFx0ZGV2aWNlcyA9IGFjdGlvbi5kZXZpY2VzO1xuXHRcdFx0aW5zdGFuY2UuZW1pdENoYW5nZSgpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnc2V0X3l0X2FwaV9rZXknOlxuXHRcdFx0eXRBcGlLZXkgPSBhY3Rpb24ua2V5O1xuXHRcdFx0Y29uZi5zZXQoJ3l0X2FwaV9rZXknLCB5dEFwaUtleSk7XG5cdFx0XHRpbnN0YW5jZS5lbWl0Q2hhbmdlKCk7XG5cdFx0XHRicmVhaztcblx0fVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuIl19