console.log("Editor Markdown");

const { app, BrowserWindow } = require('electron');

let mainWindow = null

app.on('ready', () => {
	mainWindow = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false
		},

		icon: __dirname + '/markdown.ico'
	});
	mainWindow.loadFile(__dirname + '/index.html');

	mainWindow.once('ready-to-show', () => {
		mainWindow.show();
		//mainWindow.webContents.openDevTools();
	})

   mainWindow.setMenuBarVisibility(false);

	mainWindow.on('closed', () => {
		mainWindow = null;
	})
})