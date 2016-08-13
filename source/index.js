'use strict';

import electron from 'electron';
import SettingsTemplate from './settings_template.js';
import DispatchProxy from './dispatch_proxy.js';

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const menu = Menu.buildFromTemplate(SettingsTemplate);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('ready', () => {
	Menu.setApplicationMenu(menu);
	var win = new BrowserWindow();
	win.loadURL('file://' + __dirname + '/index.html');
});
