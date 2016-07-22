import Ember from 'ember';

const { computed } = Ember;
const { service } = Ember.inject;

export default Ember.Component.extend({
  tableOfContents: service(),
  classNames: ['toc'],
  classNameBindings: ['tableOfContents.isHidden:is-hidden'],
  actions: {
    tocTrigger() {
      this.toggleProperty('tableOfContents.isHidden');
    }
  }
});
