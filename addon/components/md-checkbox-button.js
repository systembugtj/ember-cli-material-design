import Ember from "ember";

export default Ember.Component.extend({
  tagName: '',

  joinedClassNames: Ember.computed('classNames', function() {
    var classNames = this.get('classNames');
    if (classNames && classNames.length && classNames.join) {
      return classNames.join(' ');
    }
    return classNames;
  }),

  checked: Ember.computed('value', function(){
    return this.get('value') === true;
  }).readOnly(),

  sendChangedAction() {
    this.sendAction('changed', this.get('value'));
  },

  click() {
    Ember.run.once(this, 'sendChangedAction');
  },

  actions: {
    changed(newValue) {
      this.sendAction('changed', newValue);
    }
  }
});
