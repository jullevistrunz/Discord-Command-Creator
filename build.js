const commandCreator = require('./src/commandCreator')

commandCreator.create(
  false,
  ['testCommand', 'test command'],
  [['arg0', 'first option']],
  'testAnswer',
  false
)
