const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 700,
    height: 812,
    frame: false,
    
    webPreferences: {
      nodeIntegration: false,

    }
  })

  win.loadURL('http://localhost:5173/')
  // win.loadFile('index.html')
}

app.whenReady().then(createWindow)
