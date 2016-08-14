import electron from 'electron';

const BrowserWindow = electron.BrowserWindow;

let SettingTemplate = [{
		label: 'Electro',
		submenu: [{
			label: 'Settings',
			accelerator: process.platform === 'darwin' ? 'Alt+Command+,' : 'Ctrl+Shift+,',
			click() {
				var win = new BrowserWindow();
				win.loadURL('file://' + __dirname + '/settings.html');
			}
	}, {
			label: 'Toggle Developer Tools',
			accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
			click(item, focusedWindow) {
				if (focusedWindow) focusedWindow.webContents.toggleDevTools()
			}
	}, {
			role: 'quit'
	}]
},
	{
		label: 'Edit',
		submenu: [
			{
				label: 'Undo',
				role: 'undo',
    }, {
				label: 'Redo',
				role: 'redo',
    }, {
				type: 'separator',
    }, {
				label: 'Cut',
				role: 'cut',
    }, {
				label: 'Copy',
				role: 'copy',
    }, {
				label: 'Paste',
				role: 'paste',
    }, {
				type: 'separator',
    }, {
				label: 'Select all',
				role: 'selectall',
    },
	]
}];

export default SettingTemplate;
