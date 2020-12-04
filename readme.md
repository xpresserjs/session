# Xpresser Session Plugin

Official Xpresser Session Plugin.

At version 1.0.0, Xpresser will stop shipping with sessions out of the box. However this plugin re-enables the curent
Session system and is simply **Plug & Play** with advanced options todo more.

## Installation
```shell
npm i @xpresser/session
// OR
yarn add @xpresser/session
```

## Register Plugin
Add plugin to your `plugins.json` file. if you don't have one create one at `backend/plugins.json`.
```json
[
  "npm://@xpresser/session"
]
```
The plugin should come before other plugins that requires `session`;

## Import Configs
```shell
xjs import session configs
```

Session is enabled by and sqlite is used as store by default.
Check imported config file for more info. **configs/session.js**