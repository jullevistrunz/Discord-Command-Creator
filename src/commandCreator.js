const fs = require('fs')

module.exports = {
  create(
    global = true,
    [command, description],
    args = [],
    answer,
    ephemeral = false
  ) {
    if (
      (fs.readdirSync(__dirname + '/commands').includes(command + '.js') &&
        !global) ||
      (fs
        .readdirSync(__dirname + '/globalCommands')
        .includes(command + '.js') &&
        global)
    ) {
      return console.error('Command already exists!')
    }
    let arr = []
    const startString = `const{SlashCommandBuilder}=require("discord.js");module.exports={data:(new SlashCommandBuilder).setName("${command}").setDescription("${description}")`
    const endString = `,execute:async interaction=>await interaction.reply({content:"${answer}",ephemeral:${ephemeral}})};`
    arr.push(startString)
    for (let i = 0; i < args.length; i++) {
      if (!args[i][0] || !args[i][1]) {
        return console.error('Invalid args!')
      }
      arr.push(
        `.addStringOption(option=>option.setName("${
          args[i][0]
        }").setDescription("${args[i][1]}").setRequired(${
          args[i][2] || false
        }))`
      )
    }
    arr.push(endString)
    fs.writeFileSync(
      `${__dirname}/${global ? 'globalCommands' : 'commands'}/${command}.js`,
      arr.join('')
    )
    console.info(
      `Successfully created new Command at src/${
        global ? 'globalCommands' : 'commands'
      }/${command}.js`
    )
  },
}
