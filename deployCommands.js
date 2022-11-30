const { REST, Routes } = require('discord.js')
const { clientId, guildId, token } = require('./config.json')
const fs = require('fs')

const rest = new REST({ version: '10' }).setToken(token)

const commands = []
const commandFiles = fs
  .readdirSync('./commands')
  .filter((file) => file.endsWith('.js'))

for (const file of commandFiles) {
  const command = require(`./commands/${file}`)
  commands.push(command.data.toJSON())
}
;(async () => {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.`
    )
    const data = await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      {
        body: commands,
      }
    )
    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`
    )
  } catch (error) {
    console.error(error)
  }
})()

//global commands
const globalCommands = []
const globalCommandFiles = fs
  .readdirSync('./globalCommands')
  .filter((file) => file.endsWith('.js'))
for (const file of globalCommandFiles) {
  const command = require(`./globalCommands/${file}`)
  globalCommands.push(command.data.toJSON())
}
;(async () => {
  try {
    console.log(
      `Started refreshing ${globalCommands.length} application (/) commands.`
    )
    const data = await rest.put(Routes.applicationCommands(clientId), {
      body: globalCommands,
    })
    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`
    )
  } catch (error) {
    console.error(error)
  }
})()
