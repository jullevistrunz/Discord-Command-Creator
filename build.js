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
