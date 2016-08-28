'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Dispatcher = require('../dispatcher/Dispatcher.js');

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

var _yt = require('../utils/yt.js');

var _yt2 = _interopRequireDefault(_yt);

var _electron = require('electron');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tracks = function () {
	function Tracks() {
		_classCallCheck(this, Tracks);

		_electron.ipcRenderer.on('action', function (event, action) {
			_Dispatcher2.default.dispatch(action);
		});
	}

	_createClass(Tracks, [{
		key: 'addTrack',
		value: function addTrack(track) {
			_yt2.default.download(track);
			_Dispatcher2.default.dispatch({
				type: 'update_track',
				track: track
			});
		}
	}, {
		key: 'updateTrack',
		value: function updateTrack(track) {
			_Dispatcher2.default.dispatch({
				type: 'update_track',
				track: track
			});
		}
	}, {
		key: 'removeTrack',
		value: function removeTrack(track) {
			_Dispatcher2.default.dispatch({
				type: 'remove_track',
				track: track
			});
		}
	}, {
		key: 'searchTracks',
		value: function searchTracks(q) {
			_Dispatcher2.default.dispatch({
				type: 'clear_search'
			});
			_yt2.default.search(q);
		}
	}, {
		key: 'getNextTracks',
		value: function getNextTracks() {
			_yt2.default.getNext();
		}
	}, {
		key: 'setRightTrack',
		value: function setRightTrack(track) {
			_Dispatcher2.default.dispatch({
				type: 'set_right_track',
				track: track
			});
		}
	}, {
		key: 'setLeftTrack',
		value: function setLeftTrack(track) {
			_Dispatcher2.default.dispatch({
				type: 'set_left_track',
				track: track
			});
		}
	}, {
		key: 'setCrossfadeValue',
		value: function setCrossfadeValue(value) {
			_Dispatcher2.default.dispatch({
				type: 'set_crossfade_value',
				value: value
			});
		}
	}, {
		key: 'setMainOutput',
		value: function setMainOutput(deviceId) {
			var action = {
				type: 'set_main_output',
				deviceId: deviceId
			};
			_electron.ipcRenderer.send('action', action);
			_Dispatcher2.default.dispatch(action);
		}
	}, {
		key: 'setCueOutput',
		value: function setCueOutput(deviceId) {
			var action = {
				type: 'set_cue_output',
				deviceId: deviceId
			};
			_electron.ipcRenderer.send('action', action);
			_Dispatcher2.default.dispatch(action);
		}
	}, {
		key: 'setYtApiKey',
		value: function setYtApiKey(key) {
			var action = {
				type: 'set_yt_api_key',
				key: key
			};
			_electron.ipcRenderer.send('action', action);
			_Dispatcher2.default.dispatch(action);
		}
	}, {
		key: 'setDevices',
		value: function setDevices(devices) {
			_Dispatcher2.default.dispatch({
				type: 'set_devices',
				devices: devices
			});
		}
	}]);

	return Tracks;
}();

var instance = new Tracks();

exports.default = instance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvVHJhY2tzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFJTSxNO0FBRUwsbUJBQWE7QUFBQTs7QUFDWix3QkFBSSxFQUFKLENBQU8sUUFBUCxFQUFpQixVQUFDLEtBQUQsRUFBUSxNQUFSLEVBQW1CO0FBQ25DLHdCQUFXLFFBQVgsQ0FBb0IsTUFBcEI7QUFDQSxHQUZEO0FBR0E7Ozs7MkJBRVEsSyxFQUFPO0FBQ2YsZ0JBQUcsUUFBSCxDQUFZLEtBQVo7QUFDQSx3QkFBVyxRQUFYLENBQW9CO0FBQ25CLFVBQU0sY0FEYTtBQUVuQixXQUFPO0FBRlksSUFBcEI7QUFJQTs7OzhCQUVXLEssRUFBTztBQUNsQix3QkFBVyxRQUFYLENBQW9CO0FBQ25CLFVBQU0sY0FEYTtBQUVuQixXQUFPO0FBRlksSUFBcEI7QUFJQTs7OzhCQUVXLEssRUFBTztBQUNsQix3QkFBVyxRQUFYLENBQW9CO0FBQ25CLFVBQU0sY0FEYTtBQUVuQixXQUFPO0FBRlksSUFBcEI7QUFJQTs7OytCQUVZLEMsRUFBRztBQUNmLHdCQUFXLFFBQVgsQ0FBb0I7QUFDbkIsVUFBTTtBQURhLElBQXBCO0FBR0EsZ0JBQUcsTUFBSCxDQUFVLENBQVY7QUFDQTs7O2tDQUVlO0FBQ2YsZ0JBQUcsT0FBSDtBQUNBOzs7Z0NBRWEsSyxFQUFPO0FBQ3BCLHdCQUFXLFFBQVgsQ0FBb0I7QUFDbkIsVUFBTSxpQkFEYTtBQUVuQixXQUFPO0FBRlksSUFBcEI7QUFJQTs7OytCQUVZLEssRUFBTztBQUNuQix3QkFBVyxRQUFYLENBQW9CO0FBQ25CLFVBQU0sZ0JBRGE7QUFFbkIsV0FBTztBQUZZLElBQXBCO0FBSUE7OztvQ0FFaUIsSyxFQUFPO0FBQ3hCLHdCQUFXLFFBQVgsQ0FBb0I7QUFDbkIsVUFBTSxxQkFEYTtBQUVuQixXQUFPO0FBRlksSUFBcEI7QUFJQTs7O2dDQUVhLFEsRUFBVTtBQUN2QixPQUFJLFNBQVM7QUFDWixVQUFNLGlCQURNO0FBRVosY0FBVTtBQUZFLElBQWI7QUFJQSx5QkFBSSxJQUFKLENBQVMsUUFBVCxFQUFtQixNQUFuQjtBQUNBLHdCQUFXLFFBQVgsQ0FBb0IsTUFBcEI7QUFDQTs7OytCQUVZLFEsRUFBVTtBQUN0QixPQUFJLFNBQVM7QUFDWixVQUFNLGdCQURNO0FBRVosY0FBVTtBQUZFLElBQWI7QUFJQSx5QkFBSSxJQUFKLENBQVMsUUFBVCxFQUFtQixNQUFuQjtBQUNBLHdCQUFXLFFBQVgsQ0FBb0IsTUFBcEI7QUFDQTs7OzhCQUVXLEcsRUFBSztBQUNoQixPQUFJLFNBQVM7QUFDWixVQUFNLGdCQURNO0FBRVosU0FBSztBQUZPLElBQWI7QUFJQSx5QkFBSSxJQUFKLENBQVMsUUFBVCxFQUFtQixNQUFuQjtBQUNBLHdCQUFXLFFBQVgsQ0FBb0IsTUFBcEI7QUFDQTs7OzZCQUVVLE8sRUFBUztBQUNuQix3QkFBVyxRQUFYLENBQW9CO0FBQ25CLFVBQU0sYUFEYTtBQUVuQixhQUFTO0FBRlUsSUFBcEI7QUFJQTs7Ozs7O0FBR0YsSUFBTSxXQUFXLElBQUksTUFBSixFQUFqQjs7a0JBRWUsUSIsImZpbGUiOiJhY3Rpb25zL1RyYWNrcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaXNwYXRjaGVyIGZyb20gJy4uL2Rpc3BhdGNoZXIvRGlzcGF0Y2hlci5qcyc7XG5pbXBvcnQgeXQgZnJvbSAnLi4vdXRpbHMveXQuanMnO1xuaW1wb3J0IHtcblx0aXBjUmVuZGVyZXIgYXMgaXBjXG59IGZyb20gJ2VsZWN0cm9uJztcblxuY2xhc3MgVHJhY2tzIHtcblxuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdGlwYy5vbignYWN0aW9uJywgKGV2ZW50LCBhY3Rpb24pID0+IHtcblx0XHRcdERpc3BhdGNoZXIuZGlzcGF0Y2goYWN0aW9uKTtcblx0XHR9KTtcblx0fVxuXG5cdGFkZFRyYWNrKHRyYWNrKSB7XG5cdFx0eXQuZG93bmxvYWQodHJhY2spO1xuXHRcdERpc3BhdGNoZXIuZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ3VwZGF0ZV90cmFjaycsXG5cdFx0XHR0cmFjazogdHJhY2tcblx0XHR9KTtcblx0fVxuXG5cdHVwZGF0ZVRyYWNrKHRyYWNrKSB7XG5cdFx0RGlzcGF0Y2hlci5kaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAndXBkYXRlX3RyYWNrJyxcblx0XHRcdHRyYWNrOiB0cmFja1xuXHRcdH0pO1xuXHR9XG5cblx0cmVtb3ZlVHJhY2sodHJhY2spIHtcblx0XHREaXNwYXRjaGVyLmRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdyZW1vdmVfdHJhY2snLFxuXHRcdFx0dHJhY2s6IHRyYWNrXG5cdFx0fSk7XG5cdH1cblxuXHRzZWFyY2hUcmFja3MocSkge1xuXHRcdERpc3BhdGNoZXIuZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ2NsZWFyX3NlYXJjaCdcblx0XHR9KTtcblx0XHR5dC5zZWFyY2gocSk7XG5cdH1cblxuXHRnZXROZXh0VHJhY2tzKCkge1xuXHRcdHl0LmdldE5leHQoKTtcblx0fVxuXG5cdHNldFJpZ2h0VHJhY2sodHJhY2spIHtcblx0XHREaXNwYXRjaGVyLmRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdzZXRfcmlnaHRfdHJhY2snLFxuXHRcdFx0dHJhY2s6IHRyYWNrXG5cdFx0fSk7XG5cdH1cblxuXHRzZXRMZWZ0VHJhY2sodHJhY2spIHtcblx0XHREaXNwYXRjaGVyLmRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdzZXRfbGVmdF90cmFjaycsXG5cdFx0XHR0cmFjazogdHJhY2ssXG5cdFx0fSk7XG5cdH1cblxuXHRzZXRDcm9zc2ZhZGVWYWx1ZSh2YWx1ZSkge1xuXHRcdERpc3BhdGNoZXIuZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ3NldF9jcm9zc2ZhZGVfdmFsdWUnLFxuXHRcdFx0dmFsdWU6IHZhbHVlXG5cdFx0fSk7XG5cdH1cblxuXHRzZXRNYWluT3V0cHV0KGRldmljZUlkKSB7XG5cdFx0dmFyIGFjdGlvbiA9IHtcblx0XHRcdHR5cGU6ICdzZXRfbWFpbl9vdXRwdXQnLFxuXHRcdFx0ZGV2aWNlSWQ6IGRldmljZUlkXG5cdFx0fTtcblx0XHRpcGMuc2VuZCgnYWN0aW9uJywgYWN0aW9uKTtcblx0XHREaXNwYXRjaGVyLmRpc3BhdGNoKGFjdGlvbik7XG5cdH1cblxuXHRzZXRDdWVPdXRwdXQoZGV2aWNlSWQpIHtcblx0XHR2YXIgYWN0aW9uID0ge1xuXHRcdFx0dHlwZTogJ3NldF9jdWVfb3V0cHV0Jyxcblx0XHRcdGRldmljZUlkOiBkZXZpY2VJZFxuXHRcdH07XG5cdFx0aXBjLnNlbmQoJ2FjdGlvbicsIGFjdGlvbik7XG5cdFx0RGlzcGF0Y2hlci5kaXNwYXRjaChhY3Rpb24pO1xuXHR9XG5cblx0c2V0WXRBcGlLZXkoa2V5KSB7XG5cdFx0dmFyIGFjdGlvbiA9IHtcblx0XHRcdHR5cGU6ICdzZXRfeXRfYXBpX2tleScsXG5cdFx0XHRrZXk6IGtleVxuXHRcdH1cblx0XHRpcGMuc2VuZCgnYWN0aW9uJywgYWN0aW9uKTtcblx0XHREaXNwYXRjaGVyLmRpc3BhdGNoKGFjdGlvbik7XG5cdH1cblxuXHRzZXREZXZpY2VzKGRldmljZXMpIHtcblx0XHREaXNwYXRjaGVyLmRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdzZXRfZGV2aWNlcycsXG5cdFx0XHRkZXZpY2VzOiBkZXZpY2VzXG5cdFx0fSk7XG5cdH1cbn1cblxuY29uc3QgaW5zdGFuY2UgPSBuZXcgVHJhY2tzKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuIl19