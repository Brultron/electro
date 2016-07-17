'use strict';

let electron = require('electron');
let app = electron.app;
let BrowserWindow = electron.BrowserWindow;


app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('ready', () => {
	var win = new BrowserWindow({width: 978, height: 1180});
	win.loadURL('file://' + __dirname + '/index.html');
});
