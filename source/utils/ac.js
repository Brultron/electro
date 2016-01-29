let context;

let buildChannel = function() {
  var channel = {};

  var gain = context.createGain();
  channel.gain = gain;
  gain.connect(context.destination);


	var high = context.createBiquadFilter();
	high.type = 'highshelf';
	high.gain.value = 0;
	high.Q.value = 0;
	high.frequency.value = 3200;
	channel.high = high;
	high.connect(gain);


	var mid = context.createBiquadFilter();
	mid.type = 'peaking';
	mid.gain.value = 0;
	mid.Q.value = 0;
	mid.frequency.value = 1440;
	channel.mid = mid;
	mid.connect(high);


	var low = context.createBiquadFilter();
	low.type = 'lowshelf';
	low.gain.value = 0;
	low.Q.value = 0;
	low.frequency.value = 320;
	channel.low = low;
	low.connect(mid);

	return {root: low, channel: channel};

}

class AC {

	constructor() {
		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		context = new AudioContext();
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
