'use strict';
require('crash-reporter').start();
require('electron-debug')();

let app = require('app');
let remote = require('electron').remote;
let BrowserWindow = require('browser-window');
let win = null;

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('ready', () => {
	win = new BrowserWindow({width: 400, height: 800});
	win.loadUrl('file://' + __dirname + '/index.html');
});
