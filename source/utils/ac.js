import TrackAction from '../actions/Tracks.js';
import TrackStore from '../stores/Tracks.js';


let context;
let mainOutput = TrackStore.getMainOutput();
let cueOutput = TrackStore.getCueOutput();

let buildChannel = function() {
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

}

class AC {

	constructor() {
		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		context = new AudioContext();
		TrackStore.listen(() => {
			mainOutput = TrackStore.getMainOutput();
			cueOutput = TrackStore.getCueOutput();
		});
	}

	createSource(arraybuffer, track, cb) {
		context.decodeAudioData(arraybuffer, (audiobuffer) => {
			track.buffer = audiobuffer;
			var x = buildChannel();
			track.channel = x.channel;
			track.root = x.root;
			cb(track);
		});
	}

	getContext() {
		return context;
	}

}

let instance = new AC();

export default instance;
