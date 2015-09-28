'use strict';

var path = require('path');
var fs   = require('fs');

function EmberCLIMaterialDesign(project) {
  this.project = project;
  this.name    = 'Ember CLI Material Design';
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

  app.import(path.join(app.bowerDirectory, 'bootstrap-material-design/dist/css/material-fullpalette.css'));
  app.import(path.join(app.bowerDirectory, 'bootstrap-material-design/dist/css/material-fullpalette.css'));
  app.import(path.join(app.bowerDirectory, 'bootstrap-material-design/dist/css/roboto.css'));
  app.import(path.join(app.bowerDirectory, 'bootstrap-material-design/dist/css/ripples.css'));
};

module.exports = EmberCLIMaterialDesign;
