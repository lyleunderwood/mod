
(function() {
  var Feature, Mod, assert, expect, jsdom, sinon, with_dom;

  Feature = require("vows-bdd").Feature;

  assert = require("assert");

  Mod = require("../lib/Mod.js").Mod;

  expect = require('expect.js');

  jsdom = require('jsdom-nocontextifiy');

  sinon = require('sinon');

  with_dom = function(routine) {
    return jsdom.env('<p></p>', function(errors, win) {
      window = win;      return routine.call(win, win);
    });
  };

  with_dom(function(window) {
    return Feature("Toolbar").scenario("Creating a new Toolbar").when("I create the default Toolbar", function() {
      this.toolbar = new Mod.Toolbar;
      return this.callback();
    }).then("it should have default options", function() {
      return expect(this.toolbar.options).to.be.an('object');
    }).and("it should setup the default node", function() {
      return expect(this.toolbar.node).to.be.ok();
    }).and("the node should have the mod_toolbar class", function() {
      return expect(this.toolbar.node.className).to.contain('mod_toolbar');
    }).complete().scenario("Creating a new Toolbar given a node").when("I pass it a node", function() {
      this.node = window.document.createElement('div');
      this.toolbar = new Mod.Toolbar(this.node);
      return this.callback();
    }).then("the target node should be set", function() {
      return expect(this.toolbar.node).to.be(this.node);
    }).and("the node should have the mod_toolbar class added", function() {
      return expect(this.toolbar.node.className).to.contain('mod_toolbar');
    }).complete().scenario("Creating a new Toolbar given some options").when("I pass it some options", function() {
      this.toolbar = new Mod.Toolbar(null, 'test');
      return this.callback();
    }).then("options should be set", function() {
      return expect(this.toolbar.options).to.equal('test');
    }).complete().finish(module);
  });

}).call(this);
