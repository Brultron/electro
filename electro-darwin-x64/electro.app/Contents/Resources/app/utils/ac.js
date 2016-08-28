'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Tracks = require('../actions/Tracks.js');

var _Tracks2 = _interopRequireDefault(_Tracks);

var _Tracks3 = require('../stores/Tracks.js');

var _Tracks4 = _interopRequireDefault(_Tracks3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var context = void 0;
var mainOutput = _Tracks4.default.getMainOutput();
var cueOutput = _Tracks4.default.getCueOutput();

var buildChannel = function buildChannel() {
	var channel = {};

	// METER VIS
	var uvmeter = context.createScriptProcessor(2048, 1, 1);
	channel.uvmeter = uvmeter;
	uvmeter.connect(context.destination);

	var analyser = context.createAnalyser();
	channel.analyser = analyser;
	analyser.smoothingTimeConstant = 0.3;
	analyser.fftSize = 512;
	analyser.connect(uvmeter);

	// MAIN OUTPUT
	var mainOut = context.createMediaStreamDestination();
	var main = new Audio();
	main.src = URL.createObjectURL(mainOut.stream);
	console.log(mainOutput);
	main.setSinkId(mainOutput);
	channel.main = main;

	var crossfade = context.createGain();
	crossfade.gain.value = 0;
	channel.crossfade = crossfade;
	crossfade.connect(analyser);
	crossfade.connect(mainOut);

	//CUE OUTPUT
	var cueOut = context.createMediaStreamDestination();
	var cue = new Audio();
	cue.src = URL.createObjectURL(cueOut.stream);
	cue.setSinkId(cueOutput);
	channel.cue = cue;

	var gain = context.createGain();
	gain.gain.value = 1;
	channel.gain = gain;
	gain.connect(analyser);
	gain.connect(crossfade);
	gain.connect(cueOut);

	var high = context.createBiquadFilter();
	high.type = 'highshelf';
	high.gain.value = 0;
	high.Q.value = 0.0;
	high.frequency.value = 3200;
	channel.high = high;
	high.connect(gain);

	var mid = context.createBiquadFilter();
	mid.type = 'peaking';
	mid.gain.value = 0;
	mid.Q.value = 0.5;
	mid.frequency.value = 1000;
	channel.mid = mid;
	mid.connect(high);

	var low = context.createBiquadFilter();
	low.type = 'lowshelf';
	low.gain.value = 0;
	low.Q.value = 0;
	low.frequency.value = 320;
	channel.low = low;
	low.connect(mid);

	return {
		root: low,
		channel: channel
	};
};

var AC = function () {
	function AC() {
		_classCallCheck(this, AC);

		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		context = new AudioContext();
		_Tracks4.default.listen(function () {
			mainOutput = _Tracks4.default.getMainOutput();
			cueOutput = _Tracks4.default.getCueOutput();
		});
	}

	_createClass(AC, [{
		key: 'createSource',
		value: function createSource(arraybuffer, track, cb) {
			context.decodeAudioData(arraybuffer, function (audiobuffer) {
				track.buffer = audiobuffer;
				var x = buildChannel();
				track.channel = x.channel;
				track.root = x.root;
				cb(track);
			});
		}
	}, {
		key: 'getContext',
		value: function getContext() {
			return context;
		}
	}]);

	return AC;
}();

var instance = new AC();

exports.default = instance;
//# sourceMappingURL=data:application/json;base64,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Q0EsS0FBSSxPQUFKLENBQVksR0FBWjs7QUFFQSxRQUFPO0FBQ04sUUFBTSxHQURBO0FBRU4sV0FBUztBQUZILEVBQVA7QUFLQSxDQTNFRDs7SUE2RU0sRTtBQUVMLGVBQWM7QUFBQTs7QUFDYixTQUFPLFlBQVAsR0FBc0IsT0FBTyxZQUFQLElBQXVCLE9BQU8sa0JBQXBEO0FBQ0EsWUFBVSxJQUFJLFlBQUosRUFBVjtBQUNBLG1CQUFXLE1BQVgsQ0FBa0IsWUFBTTtBQUN2QixnQkFBYSxpQkFBVyxhQUFYLEVBQWI7QUFDQSxlQUFZLGlCQUFXLFlBQVgsRUFBWjtBQUNBLEdBSEQ7QUFJQTs7OzsrQkFFWSxXLEVBQWEsSyxFQUFPLEUsRUFBSTtBQUNwQyxXQUFRLGVBQVIsQ0FBd0IsV0FBeEIsRUFBcUMsVUFBQyxXQUFELEVBQWlCO0FBQ3JELFVBQU0sTUFBTixHQUFlLFdBQWY7QUFDQSxRQUFJLElBQUksY0FBUjtBQUNBLFVBQU0sT0FBTixHQUFnQixFQUFFLE9BQWxCO0FBQ0EsVUFBTSxJQUFOLEdBQWEsRUFBRSxJQUFmO0FBQ0EsT0FBRyxLQUFIO0FBQ0EsSUFORDtBQU9BOzs7K0JBRVk7QUFDWixVQUFPLE9BQVA7QUFDQTs7Ozs7O0FBSUYsSUFBSSxXQUFXLElBQUksRUFBSixFQUFmOztrQkFFZSxRIiwiZmlsZSI6InV0aWxzL2FjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWNrQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvVHJhY2tzLmpzJztcbmltcG9ydCBUcmFja1N0b3JlIGZyb20gJy4uL3N0b3Jlcy9UcmFja3MuanMnO1xuXG5cbmxldCBjb250ZXh0O1xubGV0IG1haW5PdXRwdXQgPSBUcmFja1N0b3JlLmdldE1haW5PdXRwdXQoKTtcbmxldCBjdWVPdXRwdXQgPSBUcmFja1N0b3JlLmdldEN1ZU91dHB1dCgpO1xuXG5sZXQgYnVpbGRDaGFubmVsID0gZnVuY3Rpb24oKSB7XG5cdHZhciBjaGFubmVsID0ge307XG5cblxuXHQvLyBNRVRFUiBWSVNcblx0dmFyIHV2bWV0ZXIgPSBjb250ZXh0LmNyZWF0ZVNjcmlwdFByb2Nlc3NvcigyMDQ4LCAxLCAxKTtcblx0Y2hhbm5lbC51dm1ldGVyID0gdXZtZXRlcjtcblx0dXZtZXRlci5jb25uZWN0KGNvbnRleHQuZGVzdGluYXRpb24pO1xuXG5cdHZhciBhbmFseXNlciA9IGNvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcblx0Y2hhbm5lbC5hbmFseXNlciA9IGFuYWx5c2VyO1xuXHRhbmFseXNlci5zbW9vdGhpbmdUaW1lQ29uc3RhbnQgPSAwLjM7XG5cdGFuYWx5c2VyLmZmdFNpemUgPSA1MTI7XG5cdGFuYWx5c2VyLmNvbm5lY3QodXZtZXRlcik7XG5cblx0Ly8gTUFJTiBPVVRQVVRcblx0dmFyIG1haW5PdXQgPSBjb250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtRGVzdGluYXRpb24oKTtcblx0dmFyIG1haW4gPSBuZXcgQXVkaW8oKTtcblx0bWFpbi5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG1haW5PdXQuc3RyZWFtKTtcblx0Y29uc29sZS5sb2cobWFpbk91dHB1dCk7XG4gIG1haW4uc2V0U2lua0lkKG1haW5PdXRwdXQpO1xuXHRjaGFubmVsLm1haW4gPSBtYWluO1xuXG5cdHZhciBjcm9zc2ZhZGUgPSBjb250ZXh0LmNyZWF0ZUdhaW4oKTtcblx0Y3Jvc3NmYWRlLmdhaW4udmFsdWUgPSAwO1xuXHRjaGFubmVsLmNyb3NzZmFkZSA9IGNyb3NzZmFkZTtcblx0Y3Jvc3NmYWRlLmNvbm5lY3QoYW5hbHlzZXIpO1xuXHRjcm9zc2ZhZGUuY29ubmVjdChtYWluT3V0KTtcblxuXHQvL0NVRSBPVVRQVVRcblx0dmFyIGN1ZU91dCA9IGNvbnRleHQuY3JlYXRlTWVkaWFTdHJlYW1EZXN0aW5hdGlvbigpO1xuXHR2YXIgY3VlID0gbmV3IEF1ZGlvKCk7XG5cdGN1ZS5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGN1ZU91dC5zdHJlYW0pO1xuICBjdWUuc2V0U2lua0lkKGN1ZU91dHB1dCk7XG5cdGNoYW5uZWwuY3VlID0gY3VlO1xuXG5cdHZhciBnYWluID0gY29udGV4dC5jcmVhdGVHYWluKCk7XG5cdGdhaW4uZ2Fpbi52YWx1ZSA9IDE7XG5cdGNoYW5uZWwuZ2FpbiA9IGdhaW47XG5cdGdhaW4uY29ubmVjdChhbmFseXNlcik7XG5cdGdhaW4uY29ubmVjdChjcm9zc2ZhZGUpO1xuXHRnYWluLmNvbm5lY3QoY3VlT3V0KTtcblxuXG5cdHZhciBoaWdoID0gY29udGV4dC5jcmVhdGVCaXF1YWRGaWx0ZXIoKTtcblx0aGlnaC50eXBlID0gJ2hpZ2hzaGVsZic7XG5cdGhpZ2guZ2Fpbi52YWx1ZSA9IDA7XG5cdGhpZ2guUS52YWx1ZSA9IDAuMDtcblx0aGlnaC5mcmVxdWVuY3kudmFsdWUgPSAzMjAwO1xuXHRjaGFubmVsLmhpZ2ggPSBoaWdoO1xuXHRoaWdoLmNvbm5lY3QoZ2Fpbik7XG5cblxuXHR2YXIgbWlkID0gY29udGV4dC5jcmVhdGVCaXF1YWRGaWx0ZXIoKTtcblx0bWlkLnR5cGUgPSAncGVha2luZyc7XG5cdG1pZC5nYWluLnZhbHVlID0gMDtcblx0bWlkLlEudmFsdWUgPSAwLjU7XG5cdG1pZC5mcmVxdWVuY3kudmFsdWUgPSAxMDAwO1xuXHRjaGFubmVsLm1pZCA9IG1pZDtcblx0bWlkLmNvbm5lY3QoaGlnaCk7XG5cblxuXHR2YXIgbG93ID0gY29udGV4dC5jcmVhdGVCaXF1YWRGaWx0ZXIoKTtcblx0bG93LnR5cGUgPSAnbG93c2hlbGYnO1xuXHRsb3cuZ2Fpbi52YWx1ZSA9IDA7XG5cdGxvdy5RLnZhbHVlID0gMDtcblx0bG93LmZyZXF1ZW5jeS52YWx1ZSA9IDMyMDtcblx0Y2hhbm5lbC5sb3cgPSBsb3c7XG5cdGxvdy5jb25uZWN0KG1pZCk7XG5cblx0cmV0dXJuIHtcblx0XHRyb290OiBsb3csXG5cdFx0Y2hhbm5lbDogY2hhbm5lbFxuXHR9O1xuXG59XG5cbmNsYXNzIEFDIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR3aW5kb3cuQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuXHRcdGNvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG5cdFx0VHJhY2tTdG9yZS5saXN0ZW4oKCkgPT4ge1xuXHRcdFx0bWFpbk91dHB1dCA9IFRyYWNrU3RvcmUuZ2V0TWFpbk91dHB1dCgpO1xuXHRcdFx0Y3VlT3V0cHV0ID0gVHJhY2tTdG9yZS5nZXRDdWVPdXRwdXQoKTtcblx0XHR9KTtcblx0fVxuXG5cdGNyZWF0ZVNvdXJjZShhcnJheWJ1ZmZlciwgdHJhY2ssIGNiKSB7XG5cdFx0Y29udGV4dC5kZWNvZGVBdWRpb0RhdGEoYXJyYXlidWZmZXIsIChhdWRpb2J1ZmZlcikgPT4ge1xuXHRcdFx0dHJhY2suYnVmZmVyID0gYXVkaW9idWZmZXI7XG5cdFx0XHR2YXIgeCA9IGJ1aWxkQ2hhbm5lbCgpO1xuXHRcdFx0dHJhY2suY2hhbm5lbCA9IHguY2hhbm5lbDtcblx0XHRcdHRyYWNrLnJvb3QgPSB4LnJvb3Q7XG5cdFx0XHRjYih0cmFjayk7XG5cdFx0fSk7XG5cdH1cblxuXHRnZXRDb250ZXh0KCkge1xuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9XG5cbn1cblxubGV0IGluc3RhbmNlID0gbmV3IEFDKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuIl19