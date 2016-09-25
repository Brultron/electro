import electron from 'electron';

const BrowserWindow = electron.BrowserWindow;

let win;

class SettingTemplate {


	constructor(parent) {
		this.template = [{
			label: 'Electro',
			submenu: [{
				label: 'Settings',
				accelerator: process.platform === 'darwin' ? 'Alt+Command+,' : 'Ctrl+Shift+,',
				click() {
					if (!win) {
						console.log('create window');
						win = new BrowserWindow({parent: parent});
						win.loadURL('file://' + __dirname + '/settings.html');
						win.on('close', (e) => {
							e.preventDefault();
							console.log('window hide');
							win.hide()
						});
					} else {
						console.log('window show');
						win.show()
					}
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
		}, {
			label: 'Edit',
			submenu: [{
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
			}, ]
		}]
	};
}



export default SettingTemplate;
