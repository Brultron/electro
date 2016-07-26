import yt from 'youtube-audio-stream';
import ac from './ac.js';
import concat from 'array-buffer-concat';
import TrackActions from '../actions/Tracks.js';
import TrackStore from '../stores/Tracks.js';

//TODO should reuse buffers if they are there
const API_KEY = 'AIzaSyBeCNyNTk9jpgXcPoColnQt-ZdqC802zcY';
const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
const DOWNLOAD_URL = 'https://www.youtube.com/watch?v=';
let params = {
	part: 'snippet',
	kind: 'youtube#video',
	key: API_KEY,
	maxResults: 10
}

class Yt {

	download(track) {
		var stream = yt(track.url);
		var master = new ArrayBuffer();

		stream.on('data', (data) => {
			master = concat(master, data);
		});

		stream.on('end', (data) => {
			ac.createSource(master, track, (track) => {
				track.ready = true;
				TrackActions.updateTrack(track);
			});
		});
	}

	search(q) {
		params.q = q;
		params.pageToken = undefined;
		$.get(SEARCH_URL, params).then((resp) => {
			params.pageToken = resp.nextPageToken;
			console.log(resp);
			for (let t of resp.items) {
				let track = {
					id: t.id.videoId,
					url: DOWNLOAD_URL + t.id.videoId,
					title: t.snippet.title,
					description: t.snippet.description,
					thumbnail: t.snippet.thumbnails.high.url,
					search: true
				};
				TrackActions.updateTrack(track)
			}
		});
	}

	getNext() {
		console.log(params.q);
		$.get(SEARCH_URL, params).then((resp) => {
			params.pageToken = resp.nextPageToken;
			for (let t of resp.items) {
				let track = {
					id: t.id.videoId,
					url: DOWNLOAD_URL + t.id.videoId,
					title: t.snippet.title,
					description: t.snippet.description,
					thumbnail: t.snippet.thumbnails.high.url,
					search: true
				};
				TrackActions.updateTrack(track)
			}
			$('.track-thumb').removeClass('loading-spin');
		});

	}

}

let instance = new Yt();
export default instance;
