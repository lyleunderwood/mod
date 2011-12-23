Feature = require("vows-bdd").Feature
assert = require("assert")
Mod = require("../lib/Mod.js").Mod
expect = require('expect.js')
jsdom = require('jsdom-nocontextifiy')
sinon = require('sinon')

with_dom = (routine) ->
  jsdom.env '<p></p>', (errors, win) ->
    `window = win`
    routine.call(win, win)