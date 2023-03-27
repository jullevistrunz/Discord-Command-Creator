# Discord Command Creator

Create your own Discord `/` Commands using Discord.js


## How to use it

#### `build.js`

1. Import `src/commandCreator.js`
```js
const commandCreator = require('./src/commandCreator')
```

2. Create a command
```js
commandCreator.create(
  global: boolean,
  [command: string, commandDescription: string],
  [
    [optionName: string, optionDescription: string, required?: boolean],
  ],
  answer: string,
  ephemeral?: boolean
)
```
- `command` must be all lowercased (see [discord.js documentation](https://discord.js.org/#/docs/builders/main/class/SlashCommandBuilder) for more information)
- You can add as many options as you want, they just need to be named differently
- You can use options in `answer` by typing `${$i}` with `i` being the number of the option starting at 0

Example: 
```js
const commandCreator = require('./src/commandCreator')

commandCreator.create(
  true,
  ['test', 'test command'],
  [
    ['arg0', 'first option', true],
    ['arg1', 'second option', false],
  ],
  'testAnswer\narg0: ${$0}\narg1: ${$1}',
  false
)
```

3. Build the command
- Run `build.bat` **or**
- Run `build.js` with 
``` 
node build.js
```

---

#### `config.json`
```json
{
  "token": "YOUR_TOKEN",
  "clientId": "YOUR_ID",
  "guildId": "YOUR_SERVER_ID"
}
```
- You can find `token` and `clientId` in the [Discord Developer Portal](https://discord.com/developers/applications)
- Copy `guildId` by right-clicking your server on Discord (you need to have developer mode enabled)

---

#### Deploy commands
- Run `deployCommands.bat` **or**
- Run `deployCommands.js` (from `src` directory) with
```
node deployCommands.js
``` 
- You can remove old commands by running `removeCommands.bat` **or** `removeAllCommands.js`

---

#### Run the Bot
- Run `start.bat` **or**
- Run `index.js` (from `src` directory) with
```
node index.js
``` 
