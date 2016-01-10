'use strict';
import app from 'app';
import BrowserWindow from 'browser-window';
import CrashReporter from 'crash-reporter';
require('crash-reporter').start();
require('electron-debug')();

let mainWindow;

// function onClosed() {
// 	mainWindow = null;
// }

// function createMainWindow() {
// 	const win = new BrowserWindow({
// 		width: 600,
// 		height: 400
// 	});
//
// 	win.loadUrl(`file://${__dirname}/index.html`);
// 	win.on('closed', onClosed);
// 	return win;
// }

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

// app.on('activate-with-no-open-windows', () => {
// 	if (!mainWindow) {
// 		mainWindow = createMainWindow();
// 	}
// });

app.on('ready', () => {
	// mainWindow = createMainWindow();
});