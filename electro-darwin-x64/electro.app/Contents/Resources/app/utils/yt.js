'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _youtubeAudioStream = require('youtube-audio-stream');

var _youtubeAudioStream2 = _interopRequireDefault(_youtubeAudioStream);

var _ac = require('./ac.js');

var _ac2 = _interopRequireDefault(_ac);

var _arrayBufferConcat = require('array-buffer-concat');

var _arrayBufferConcat2 = _interopRequireDefault(_arrayBufferConcat);

var _Tracks = require('../actions/Tracks.js');

var _Tracks2 = _interopRequireDefault(_Tracks);

var _Tracks3 = require('../stores/Tracks.js');

var _Tracks4 = _interopRequireDefault(_Tracks3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var apiKey = _Tracks4.default.getYtApiKey();
var SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
var DOWNLOAD_URL = 'https://www.youtube.com/watch?v=';
var params = {
	part: 'snippet',
	kind: 'youtube#video',
	key: apiKey,
	maxResults: 10
};

var Yt = function () {
	function Yt() {
		_classCallCheck(this, Yt);

		_Tracks4.default.listen(function () {
			apiKey = _Tracks4.default.getYtApiKey();
		});
	}

	_createClass(Yt, [{
		key: 'download',
		value: function download(track) {
			var stream = (0, _youtubeAudioStream2.default)(track.url);
			var master = new ArrayBuffer();

			stream.on('data', function (data) {
				master = (0, _arrayBufferConcat2.default)(master, data);
			});

			stream.on('end', function (data) {
				_ac2.default.createSource(master, track, function (track) {
					track.ready = true;
					_Tracks2.default.updateTrack(track);
				});
			});
		}
	}, {
		key: 'search',
		value: function search(q) {
			params.q = q;
			params.pageToken = undefined;
			$.get(SEARCH_URL, params).then(function (resp) {
				params.pageToken = resp.nextPageToken;
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = resp.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var t = _step.value;

						var track = {
							id: t.id.videoId,
							url: DOWNLOAD_URL + t.id.videoId,
							title: t.snippet.title,
							description: t.snippet.description,
							thumbnail: t.snippet.thumbnails.high.url,
							search: true
						};
						_Tracks2.default.updateTrack(track);
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			});
		}
	}, {
		key: 'getNext',
		value: function getNext() {
			$.get(SEARCH_URL, params).then(function (resp) {
				params.pageToken = resp.nextPageToken;
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = resp.items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var t = _step2.value;

						var track = {
							id: t.id.videoId,
							url: DOWNLOAD_URL + t.id.videoId,
							title: t.snippet.title,
							description: t.snippet.description,
							thumbnail: t.snippet.thumbnails.high.url,
							search: true
						};
						_Tracks2.default.updateTrack(track);
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}

				$('.track-thumb').removeClass('loading-spin');
			});
		}
	}]);

	return Yt;
}();

var instance = new Yt();
exports.default = instance;
//# sourceMappingURL=data:application/json;base64,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QUFBQTs7QUFheEMsTUFBRSxjQUFGLEVBQWtCLFdBQWxCLENBQThCLGNBQTlCO0FBQ0EsSUFkRDtBQWdCQTs7Ozs7O0FBSUYsSUFBSSxXQUFXLElBQUksRUFBSixFQUFmO2tCQUNlLFEiLCJmaWxlIjoidXRpbHMveXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeXQgZnJvbSAneW91dHViZS1hdWRpby1zdHJlYW0nO1xuaW1wb3J0IGFjIGZyb20gJy4vYWMuanMnO1xuaW1wb3J0IGNvbmNhdCBmcm9tICdhcnJheS1idWZmZXItY29uY2F0JztcbmltcG9ydCBUcmFja0FjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9UcmFja3MuanMnO1xuaW1wb3J0IFRyYWNrU3RvcmUgZnJvbSAnLi4vc3RvcmVzL1RyYWNrcy5qcyc7XG5cbmxldCBhcGlLZXkgPSBUcmFja1N0b3JlLmdldFl0QXBpS2V5KCk7XG5jb25zdCBTRUFSQ0hfVVJMID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvc2VhcmNoJztcbmNvbnN0IERPV05MT0FEX1VSTCA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PSc7XG5sZXQgcGFyYW1zID0ge1xuXHRwYXJ0OiAnc25pcHBldCcsXG5cdGtpbmQ6ICd5b3V0dWJlI3ZpZGVvJyxcblx0a2V5OiBhcGlLZXksXG5cdG1heFJlc3VsdHM6IDEwXG59XG5cbmNsYXNzIFl0IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRUcmFja1N0b3JlLmxpc3RlbigoKSA9PiB7XG5cdFx0XHRhcGlLZXkgPSBUcmFja1N0b3JlLmdldFl0QXBpS2V5KClcblx0XHR9KTtcblx0fVxuXG5cdGRvd25sb2FkKHRyYWNrKSB7XG5cdFx0dmFyIHN0cmVhbSA9IHl0KHRyYWNrLnVybCk7XG5cdFx0dmFyIG1hc3RlciA9IG5ldyBBcnJheUJ1ZmZlcigpO1xuXG5cdFx0c3RyZWFtLm9uKCdkYXRhJywgKGRhdGEpID0+IHtcblx0XHRcdG1hc3RlciA9IGNvbmNhdChtYXN0ZXIsIGRhdGEpO1xuXHRcdH0pO1xuXG5cdFx0c3RyZWFtLm9uKCdlbmQnLCAoZGF0YSkgPT4ge1xuXHRcdFx0YWMuY3JlYXRlU291cmNlKG1hc3RlciwgdHJhY2ssICh0cmFjaykgPT4ge1xuXHRcdFx0XHR0cmFjay5yZWFkeSA9IHRydWU7XG5cdFx0XHRcdFRyYWNrQWN0aW9ucy51cGRhdGVUcmFjayh0cmFjayk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdHNlYXJjaChxKSB7XG5cdFx0cGFyYW1zLnEgPSBxO1xuXHRcdHBhcmFtcy5wYWdlVG9rZW4gPSB1bmRlZmluZWQ7XG5cdFx0JC5nZXQoU0VBUkNIX1VSTCwgcGFyYW1zKS50aGVuKChyZXNwKSA9PiB7XG5cdFx0XHRwYXJhbXMucGFnZVRva2VuID0gcmVzcC5uZXh0UGFnZVRva2VuO1xuXHRcdFx0Zm9yIChsZXQgdCBvZiByZXNwLml0ZW1zKSB7XG5cdFx0XHRcdGxldCB0cmFjayA9IHtcblx0XHRcdFx0XHRpZDogdC5pZC52aWRlb0lkLFxuXHRcdFx0XHRcdHVybDogRE9XTkxPQURfVVJMICsgdC5pZC52aWRlb0lkLFxuXHRcdFx0XHRcdHRpdGxlOiB0LnNuaXBwZXQudGl0bGUsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IHQuc25pcHBldC5kZXNjcmlwdGlvbixcblx0XHRcdFx0XHR0aHVtYm5haWw6IHQuc25pcHBldC50aHVtYm5haWxzLmhpZ2gudXJsLFxuXHRcdFx0XHRcdHNlYXJjaDogdHJ1ZVxuXHRcdFx0XHR9O1xuXHRcdFx0XHRUcmFja0FjdGlvbnMudXBkYXRlVHJhY2sodHJhY2spXG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRnZXROZXh0KCkge1xuXHRcdCQuZ2V0KFNFQVJDSF9VUkwsIHBhcmFtcykudGhlbigocmVzcCkgPT4ge1xuXHRcdFx0cGFyYW1zLnBhZ2VUb2tlbiA9IHJlc3AubmV4dFBhZ2VUb2tlbjtcblx0XHRcdGZvciAobGV0IHQgb2YgcmVzcC5pdGVtcykge1xuXHRcdFx0XHRsZXQgdHJhY2sgPSB7XG5cdFx0XHRcdFx0aWQ6IHQuaWQudmlkZW9JZCxcblx0XHRcdFx0XHR1cmw6IERPV05MT0FEX1VSTCArIHQuaWQudmlkZW9JZCxcblx0XHRcdFx0XHR0aXRsZTogdC5zbmlwcGV0LnRpdGxlLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiB0LnNuaXBwZXQuZGVzY3JpcHRpb24sXG5cdFx0XHRcdFx0dGh1bWJuYWlsOiB0LnNuaXBwZXQudGh1bWJuYWlscy5oaWdoLnVybCxcblx0XHRcdFx0XHRzZWFyY2g6IHRydWVcblx0XHRcdFx0fTtcblx0XHRcdFx0VHJhY2tBY3Rpb25zLnVwZGF0ZVRyYWNrKHRyYWNrKVxuXHRcdFx0fVxuXHRcdFx0JCgnLnRyYWNrLXRodW1iJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmctc3BpbicpO1xuXHRcdH0pO1xuXG5cdH1cblxufVxuXG5sZXQgaW5zdGFuY2UgPSBuZXcgWXQoKTtcbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuIl19