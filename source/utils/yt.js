import yt from 'youtube-audio-stream';
import concat from 'array-buffer-concat';
import TrackActions from '../actions/Tracks.js';

class Yt {

	download(track) {

		var stream = yt(track.url);
		var master = new ArrayBuffer();

		stream.on('data', function(data) {
		  master = concat(master, data);
		});

		stream.on('end', function(data) {
				track.ready = true;
				track.buffer = master;
				TrackActions.trackUploaded(track);
		});
	}

}

let instance = new Yt();
export default instance;
// var concat = require('array-buffer-concat');
//
// (function() {
//
// 	window.AudioContext = window.AudioContext || window.webkitAudioContext;
// 	var context = new AudioContext();
// 	var source = context.createBufferSource();
// var stream = youtubeStream('https://www.youtube.com/watch?v=UR1wUdee7h0');
// var master = new ArrayBuffer();
//
// stream.on('data', function(data) {
//   master = concat(master, data);
// });
//
// stream.on('end', function(data) {
// 	context.decodeAudioData(master, function(buffer) {
// 		source.buffer = buffer;
// 		source.connect(context.destination);
// 		source.playbackRate.value = 1;
// 		source.start(context.currentTime);
// 	});
// })
//
//
//
//
// })()
