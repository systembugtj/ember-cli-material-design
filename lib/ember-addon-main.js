'use strict';

var path = require('path');
var fs   = require('fs');

function EmberCLIMaterialDesign(project) {
  this.project = project;
  this.name    = 'Ember CLI Super Number';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLIMaterialDesign.prototype.treeFor = function treeFor(name) {
  var treePath =  path.join('node_modules', 'ember-cli-material-design', name + '-addon');

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLIMaterialDesign.prototype.included = function included(app) {
  this.app = app;

  this.app.import('vendor/ember-cli-super-number/styles/style.css');
};

module.exports = EmberCLIMaterialDesign;
