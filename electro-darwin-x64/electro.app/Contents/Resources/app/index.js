'use strict';

var _electron = require('electron');

var _electron2 = _interopRequireDefault(_electron);

var _settings_template = require('./settings_template.js');

var _settings_template2 = _interopRequireDefault(_settings_template);

var _dispatch_proxy = require('./dispatch_proxy.js');

var _dispatch_proxy2 = _interopRequireDefault(_dispatch_proxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = _electron2.default.app;
var BrowserWindow = _electron2.default.BrowserWindow;
var Menu = _electron2.default.Menu;
var menu = Menu.buildFromTemplate(_settings_template2.default);

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('ready', function () {
	Menu.setApplicationMenu(menu);
	var win = new BrowserWindow({
		'width': 1000,
		'height': 750
	});
	win.loadURL('file://' + __dirname + '/index.html');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxNQUFNLG1CQUFTLEdBQXJCO0FBQ0EsSUFBTSxnQkFBZ0IsbUJBQVMsYUFBL0I7QUFDQSxJQUFNLE9BQU8sbUJBQVMsSUFBdEI7QUFDQSxJQUFNLE9BQU8sS0FBSyxpQkFBTCw2QkFBYjs7QUFFQSxJQUFJLEVBQUosQ0FBTyxtQkFBUCxFQUE0QixZQUFNO0FBQ2pDLEtBQUksUUFBUSxRQUFSLEtBQXFCLFFBQXpCLEVBQW1DO0FBQ2xDLE1BQUksSUFBSjtBQUNBO0FBQ0QsQ0FKRDs7QUFNQSxJQUFJLEVBQUosQ0FBTyxPQUFQLEVBQWdCLFlBQU07QUFDckIsTUFBSyxrQkFBTCxDQUF3QixJQUF4QjtBQUNBLEtBQUksTUFBTSxJQUFJLGFBQUosQ0FBa0I7QUFDM0IsV0FBUyxJQURrQjtBQUUzQixZQUFVO0FBRmlCLEVBQWxCLENBQVY7QUFJQSxLQUFJLE9BQUosQ0FBWSxZQUFZLFNBQVosR0FBd0IsYUFBcEM7QUFDQSxDQVBEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgZWxlY3Ryb24gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IFNldHRpbmdzVGVtcGxhdGUgZnJvbSAnLi9zZXR0aW5nc190ZW1wbGF0ZS5qcyc7XG5pbXBvcnQgRGlzcGF0Y2hQcm94eSBmcm9tICcuL2Rpc3BhdGNoX3Byb3h5LmpzJztcblxuY29uc3QgYXBwID0gZWxlY3Ryb24uYXBwO1xuY29uc3QgQnJvd3NlcldpbmRvdyA9IGVsZWN0cm9uLkJyb3dzZXJXaW5kb3c7XG5jb25zdCBNZW51ID0gZWxlY3Ryb24uTWVudTtcbmNvbnN0IG1lbnUgPSBNZW51LmJ1aWxkRnJvbVRlbXBsYXRlKFNldHRpbmdzVGVtcGxhdGUpO1xuXG5hcHAub24oJ3dpbmRvdy1hbGwtY2xvc2VkJywgKCkgPT4ge1xuXHRpZiAocHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ2RhcndpbicpIHtcblx0XHRhcHAucXVpdCgpO1xuXHR9XG59KTtcblxuYXBwLm9uKCdyZWFkeScsICgpID0+IHtcblx0TWVudS5zZXRBcHBsaWNhdGlvbk1lbnUobWVudSk7XG5cdHZhciB3aW4gPSBuZXcgQnJvd3NlcldpbmRvdyh7XG5cdFx0J3dpZHRoJzogMTAwMCxcblx0XHQnaGVpZ2h0JzogNzUwXG5cdH0pO1xuXHR3aW4ubG9hZFVSTCgnZmlsZTovLycgKyBfX2Rpcm5hbWUgKyAnL2luZGV4Lmh0bWwnKTtcbn0pO1xuIl19