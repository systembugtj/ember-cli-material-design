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

  checked: Ember.computed('groupValue', 'value', function(){
    return this.get('groupValue') === this.get('value');
  }).readOnly(),

  sendChangedAction() {
    this.sendAction('changed', this.get('value'));
  },

  click() {
    var value = this.get('value');
    var groupValue = this.get('groupValue');

    if (groupValue !== value){
      this.set('groupValue', value); // violates DDAU
      Ember.run.once(this, 'sendChangedAction');
    }
  },

  actions: {
    changed(newValue) {
      this.sendAction('changed', newValue);
    }
  }
});
