const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    fullscreen: true,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.setIgnoreMouseEvents(true, { forward: true });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);