import Ember from 'ember';

var computed = Ember.computed;

export default Ember.Component.extend({
  tagName: 'input',
  type: 'checkbox',

  // value - required

  // disabled - optional
  // name - optional
  // required - optional
  // radioClass - string
  // radioId - string

  defaultLayout: null, // ie8 support

  attributeBindings: [
    'checked',
    'disabled',
    'name',
    'required',
    'type',
    'value'
  ],

  checked: computed('value', function(){
    return this.get('value') === true;
  }).readOnly(),

  sendChangedAction() {
    this.sendAction('changed', this.get('value'));
  },

  change: function() {
    Ember.run.once(this, 'sendChangedAction');
  }
});
