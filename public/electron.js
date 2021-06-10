const ElectronGoogleOAuth2 = require('@getstation/electron-google-oauth2');
const { app, BrowserWindow } = require('electron')
const creds = require('./env-variables.json');
const isDev = require('electron-is-dev');
const path = require('path');

let mainWindow = null;

const winURL = isDev
    ? 'http://localhost:8080'
    : `file://${path.join(__dirname, '../build/index.html')}`

app.whenReady().then(() => {
    const myApiOauth = new ElectronGoogleOAuth2(
        creds.clientId,
        creds.clientSecret,
        creds.scopes
    );
    const refreshToken = '';// Read the saved refresh token from store

    if (refreshToken) {
        myApiOauth.SetTokens({ refresh_token: refreshToken });
    } else {
        myApiOauth.openAuthWindowAndGetTokens()
            .then(token => {
                // save the token.refresh_token secured to use it the next time the app loading
                // use your token.access_token
            });
    }

    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        alwaysOnTop: true,
        useContentSize: false,
        // skipTaskbar: true,
        webPreferences: {
            nodeIntegration: false
        }
    });
    // mainWindow.setSkipTaskbar(true);
    mainWindow.loadURL(winURL);
});
