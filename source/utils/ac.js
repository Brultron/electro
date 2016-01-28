let context;
let channel = {};

const EQ = [{
	name:'low',
	f: 320,
	type: 'lowshelf'
},{
	name:'mid',
	f: 1440,
	type: 'peaking'
}, {
	name:'high',
	f: 3200,
	type: 'highshelf'
}];

let buildChannel = function() {

	var gain = context.createGain();
  var eqChain = EQ.map((band) => {
    var filter = context.createBiquadFilter();
    filter.type = band.type;
    filter.gain.value = 0;
    filter.Q.value = 1;
    filter.frequency.value = band.f
		channel[band.name] = filter;
    return filter;
  }).reduce((prev, curr) => {
    prev.connect(curr);
    return curr;
  });

  gain.connect(eqChain);
  eqChain.connect(context.destination);
	return eqChain;

}

class AC {

	constructor() {
		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		context = new AudioContext();
	}

	createSource(arraybuffer, cb) {
		context.decodeAudioData(arraybuffer, (audiobuffer) => {
			cb(audiobuffer, buildChannel(), channel);
		});
	}

	getContext() {
		return context;
	}

}

let instance = new AC();

export default instance;
