
import {ipcMain, BrowserWindow} from 'electron';


class DispatchProxy {
  constructor(){
    ipcMain.on('action', (event, action) => {
      var windows = BrowserWindow.getAllWindows();
      windows.forEach((w) => {
        if(w.id !== event.sender.id){
          w.webContents.send('action', action);
        }
      });

    });
  }
}

let instance = new DispatchProxy();
export default instance;
