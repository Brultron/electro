'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _electron = require('electron');

var _electron2 = _interopRequireDefault(_electron);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BrowserWindow = _electron2.default.BrowserWindow;

var SettingTemplate = [{
	label: 'Electro',
	submenu: [{
		label: 'Settings',
		accelerator: process.platform === 'darwin' ? 'Alt+Command+,' : 'Ctrl+Shift+,',
		click: function click() {
			var win = new BrowserWindow();
			win.loadURL('file://' + __dirname + '/settings.html');
		}
	}, {
		label: 'Toggle Developer Tools',
		accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
		click: function click(item, focusedWindow) {
			if (focusedWindow) focusedWindow.webContents.toggleDevTools();
		}
	}, {
		role: 'quit'
	}]
}, {
	label: 'Edit',
	submenu: [{
		label: 'Undo',
		role: 'undo'
	}, {
		label: 'Redo',
		role: 'redo'
	}, {
		type: 'separator'
	}, {
		label: 'Cut',
		role: 'cut'
	}, {
		label: 'Copy',
		role: 'copy'
	}, {
		label: 'Paste',
		role: 'paste'
	}, {
		type: 'separator'
	}, {
		label: 'Select all',
		role: 'selectall'
	}]
}];

exports.default = SettingTemplate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzX3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNLGdCQUFnQixtQkFBUyxhQUEvQjs7QUFFQSxJQUFJLGtCQUFrQixDQUFDO0FBQ3JCLFFBQU8sU0FEYztBQUVyQixVQUFTLENBQUM7QUFDVCxTQUFPLFVBREU7QUFFVCxlQUFhLFFBQVEsUUFBUixLQUFxQixRQUFyQixHQUFnQyxlQUFoQyxHQUFrRCxjQUZ0RDtBQUdULE9BSFMsbUJBR0Q7QUFDUCxPQUFJLE1BQU0sSUFBSSxhQUFKLEVBQVY7QUFDQSxPQUFJLE9BQUosQ0FBWSxZQUFZLFNBQVosR0FBd0IsZ0JBQXBDO0FBQ0E7QUFOUSxFQUFELEVBT1A7QUFDRCxTQUFPLHdCQUROO0FBRUQsZUFBYSxRQUFRLFFBQVIsS0FBcUIsUUFBckIsR0FBZ0MsZUFBaEMsR0FBa0QsY0FGOUQ7QUFHRCxPQUhDLGlCQUdLLElBSEwsRUFHVyxhQUhYLEVBRzBCO0FBQzFCLE9BQUksYUFBSixFQUFtQixjQUFjLFdBQWQsQ0FBMEIsY0FBMUI7QUFDbkI7QUFMQSxFQVBPLEVBYVA7QUFDRCxRQUFNO0FBREwsRUFiTztBQUZZLENBQUQsRUFtQnJCO0FBQ0MsUUFBTyxNQURSO0FBRUMsVUFBUyxDQUNSO0FBQ0MsU0FBTyxNQURSO0FBRUMsUUFBTTtBQUZQLEVBRFEsRUFJSjtBQUNILFNBQU8sTUFESjtBQUVILFFBQU07QUFGSCxFQUpJLEVBT0o7QUFDSCxRQUFNO0FBREgsRUFQSSxFQVNKO0FBQ0gsU0FBTyxLQURKO0FBRUgsUUFBTTtBQUZILEVBVEksRUFZSjtBQUNILFNBQU8sTUFESjtBQUVILFFBQU07QUFGSCxFQVpJLEVBZUo7QUFDSCxTQUFPLE9BREo7QUFFSCxRQUFNO0FBRkgsRUFmSSxFQWtCSjtBQUNILFFBQU07QUFESCxFQWxCSSxFQW9CSjtBQUNILFNBQU8sWUFESjtBQUVILFFBQU07QUFGSCxFQXBCSTtBQUZWLENBbkJxQixDQUF0Qjs7a0JBZ0RlLGUiLCJmaWxlIjoic2V0dGluZ3NfdGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWxlY3Ryb24gZnJvbSAnZWxlY3Ryb24nO1xuXG5jb25zdCBCcm93c2VyV2luZG93ID0gZWxlY3Ryb24uQnJvd3NlcldpbmRvdztcblxubGV0IFNldHRpbmdUZW1wbGF0ZSA9IFt7XG5cdFx0bGFiZWw6ICdFbGVjdHJvJyxcblx0XHRzdWJtZW51OiBbe1xuXHRcdFx0bGFiZWw6ICdTZXR0aW5ncycsXG5cdFx0XHRhY2NlbGVyYXRvcjogcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ2RhcndpbicgPyAnQWx0K0NvbW1hbmQrLCcgOiAnQ3RybCtTaGlmdCssJyxcblx0XHRcdGNsaWNrKCkge1xuXHRcdFx0XHR2YXIgd2luID0gbmV3IEJyb3dzZXJXaW5kb3coKTtcblx0XHRcdFx0d2luLmxvYWRVUkwoJ2ZpbGU6Ly8nICsgX19kaXJuYW1lICsgJy9zZXR0aW5ncy5odG1sJyk7XG5cdFx0XHR9XG5cdH0sIHtcblx0XHRcdGxhYmVsOiAnVG9nZ2xlIERldmVsb3BlciBUb29scycsXG5cdFx0XHRhY2NlbGVyYXRvcjogcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ2RhcndpbicgPyAnQWx0K0NvbW1hbmQrSScgOiAnQ3RybCtTaGlmdCtJJyxcblx0XHRcdGNsaWNrKGl0ZW0sIGZvY3VzZWRXaW5kb3cpIHtcblx0XHRcdFx0aWYgKGZvY3VzZWRXaW5kb3cpIGZvY3VzZWRXaW5kb3cud2ViQ29udGVudHMudG9nZ2xlRGV2VG9vbHMoKVxuXHRcdFx0fVxuXHR9LCB7XG5cdFx0XHRyb2xlOiAncXVpdCdcblx0fV1cbn0sXG5cdHtcblx0XHRsYWJlbDogJ0VkaXQnLFxuXHRcdHN1Ym1lbnU6IFtcblx0XHRcdHtcblx0XHRcdFx0bGFiZWw6ICdVbmRvJyxcblx0XHRcdFx0cm9sZTogJ3VuZG8nLFxuICAgIH0sIHtcblx0XHRcdFx0bGFiZWw6ICdSZWRvJyxcblx0XHRcdFx0cm9sZTogJ3JlZG8nLFxuICAgIH0sIHtcblx0XHRcdFx0dHlwZTogJ3NlcGFyYXRvcicsXG4gICAgfSwge1xuXHRcdFx0XHRsYWJlbDogJ0N1dCcsXG5cdFx0XHRcdHJvbGU6ICdjdXQnLFxuICAgIH0sIHtcblx0XHRcdFx0bGFiZWw6ICdDb3B5Jyxcblx0XHRcdFx0cm9sZTogJ2NvcHknLFxuICAgIH0sIHtcblx0XHRcdFx0bGFiZWw6ICdQYXN0ZScsXG5cdFx0XHRcdHJvbGU6ICdwYXN0ZScsXG4gICAgfSwge1xuXHRcdFx0XHR0eXBlOiAnc2VwYXJhdG9yJyxcbiAgICB9LCB7XG5cdFx0XHRcdGxhYmVsOiAnU2VsZWN0IGFsbCcsXG5cdFx0XHRcdHJvbGU6ICdzZWxlY3RhbGwnLFxuICAgIH0sXG5cdF1cbn1dO1xuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nVGVtcGxhdGU7XG4iXX0=