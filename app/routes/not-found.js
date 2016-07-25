import Ember from 'ember';

export default Ember.Route.extend({
  activate() {
    this._super(...arguments);
    this.transitionTo('index');
  }
});
