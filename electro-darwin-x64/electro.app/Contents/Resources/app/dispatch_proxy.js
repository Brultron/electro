'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _electron = require('electron');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DispatchProxy = function DispatchProxy() {
  _classCallCheck(this, DispatchProxy);

  _electron.ipcMain.on('action', function (event, action) {
    var windows = _electron.BrowserWindow.getAllWindows();
    windows.forEach(function (w) {
      if (w.id !== event.sender.id) {
        w.webContents.send('action', action);
      }
    });
  });
};

var instance = new DispatchProxy();
exports.default = instance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BhdGNoX3Byb3h5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7O0lBR00sYSxHQUNKLHlCQUFhO0FBQUE7O0FBQ1gsb0JBQVEsRUFBUixDQUFXLFFBQVgsRUFBcUIsVUFBQyxLQUFELEVBQVEsTUFBUixFQUFtQjtBQUN0QyxRQUFJLFVBQVUsd0JBQWMsYUFBZCxFQUFkO0FBQ0EsWUFBUSxPQUFSLENBQWdCLFVBQUMsQ0FBRCxFQUFPO0FBQ3JCLFVBQUcsRUFBRSxFQUFGLEtBQVMsTUFBTSxNQUFOLENBQWEsRUFBekIsRUFBNEI7QUFDMUIsVUFBRSxXQUFGLENBQWMsSUFBZCxDQUFtQixRQUFuQixFQUE2QixNQUE3QjtBQUNEO0FBQ0YsS0FKRDtBQU1ELEdBUkQ7QUFTRCxDOztBQUdILElBQUksV0FBVyxJQUFJLGFBQUosRUFBZjtrQkFDZSxRIiwiZmlsZSI6ImRpc3BhdGNoX3Byb3h5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge2lwY01haW4sIEJyb3dzZXJXaW5kb3d9IGZyb20gJ2VsZWN0cm9uJztcblxuXG5jbGFzcyBEaXNwYXRjaFByb3h5IHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICBpcGNNYWluLm9uKCdhY3Rpb24nLCAoZXZlbnQsIGFjdGlvbikgPT4ge1xuICAgICAgdmFyIHdpbmRvd3MgPSBCcm93c2VyV2luZG93LmdldEFsbFdpbmRvd3MoKTtcbiAgICAgIHdpbmRvd3MuZm9yRWFjaCgodykgPT4ge1xuICAgICAgICBpZih3LmlkICE9PSBldmVudC5zZW5kZXIuaWQpe1xuICAgICAgICAgIHcud2ViQ29udGVudHMuc2VuZCgnYWN0aW9uJywgYWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB9KTtcbiAgfVxufVxuXG5sZXQgaW5zdGFuY2UgPSBuZXcgRGlzcGF0Y2hQcm94eSgpO1xuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG4iXX0=