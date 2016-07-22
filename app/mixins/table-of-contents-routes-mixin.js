import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Mixin.create({
  tableOfContents: service(),
  actions: {
    didTransition() {
      this.set('tableOfContents.isHidden', true);
    }
  }
});
