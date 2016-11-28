'use strict';

import electron from 'electron';
import SettingsTemplate from './settings_template.js';
import DispatchProxy from './dispatch_proxy.js';
import Config from 'configstore';


const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;

// TODO this is a hack because electron doesn't have ffmpeg bundled

let conf = new Config('electro');
let ffmpegPath = conf.get('ffmpeg_path');

if (ffmpegPath) {
	process.env.FFMPEG_PATH = ffmpegPath;
} else {
	process.env.FFMPEG_PATH = '/usr/local/bin/ffmpeg';
	conf.set('ffmpeg_path', process.env.FFMPEG_PATH);
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('ready', () => {

	// let main = new BrowserWindow({
	// 	'width': 1000,
	// 	'height': 750
	// });
	//
	// let settings = new SettingsTemplate(main);
	// let menu = Menu.buildFromTemplate(settings.template);
	// Menu.setApplicationMenu(menu);
	// main.loadURL('file://' + __dirname + '/index.html');


	let search = new BrowserWindow({
		'width': 1000,
		'height': 750
	});

	search.loadURL('file://' + __dirname + '/search.html');

});
