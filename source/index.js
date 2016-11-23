'use strict';

import electron from 'electron';
import SettingsTemplate from './settings_template.js';
import DispatchProxy from './dispatch_proxy.js';


const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;

// TODO this is a hack because electron doesn't have ffmpeg bundled
process.env.FFMPEG_PATH = '/usr/local/bin/ffmpeg';

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('ready', () => {

	let win = new BrowserWindow({
		'width': 1000,
		'height': 750
	});

	let settings = new SettingsTemplate(win);
	let menu = Menu.buildFromTemplate(settings.template);
	Menu.setApplicationMenu(menu);
	win.loadURL('file://' + __dirname + '/index.html');

});
