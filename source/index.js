'use strict';
require('crash-reporter').start();
require('electron-debug')();

let app = require('app');
let remote = require('electron').remote;
let BrowserWindow = require('browser-window');
let windowType = 'crate';
let trackToLoad;


app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('ready', () => {
	var win = new BrowserWindow({width: 978, height: 1180});
	win.loadUrl('file://' + __dirname + '/index.html');
});
