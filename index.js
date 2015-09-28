'use strict';

var path = require('path');
var fs   = require('fs');

module.exports = {
  name: 'ember-cli-material-design',

  included: function (app) {
    this.app = app;
    app.import(path.join(app.bowerDirectory, 'bootstrap-material-design/dist/css/material-fullpalette.css'));
    app.import(path.join(app.bowerDirectory, 'bootstrap-material-design/dist/css/roboto.css'));
    app.import(path.join(app.bowerDirectory, 'bootstrap-material-design/dist/css/ripples.css'));
  },

  isDevelopingAddon: function() {
    return true;
  }
};;
