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
	var win = new BrowserWindow({width: 400, height: 800, title: 'crate'});
	win.loadUrl('file://' + __dirname + '/index.html');
});

exports.launchNewDeck = function(track){
	windowType = 'deck';
	trackToLoad = track;
	var win = new BrowserWindow({width: 400, height: 400, title: 'deck'});
	win.loadUrl('file://' + __dirname + '/index.html');
}

exports.getWindowType = function(){
	return windowType;
}

exports.loadTrack = function(){
	return trackToLoad;
}
