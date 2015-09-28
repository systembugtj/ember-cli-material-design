module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('bootstrap-material-design', '~0.3.0');
  }
};
