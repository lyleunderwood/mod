sentry = require 'sentry'
exec = require('child_process').exec

task 'test', 'start test runner', (options) ->
  callback = (filename) ->
    exec 'sleep .4 && vows spec/all_spec.js --spec --color', (err, stdout, stderr) ->
      console.log stdout
      console.log err if err?

  sentry.watch 'spec/**/*_spec.coffee', callback
  sentry.watch 'src/**/*.coffee', callback