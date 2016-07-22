import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['flip_pages'],
  previousLink: computed('prev', 'prevLabel', function() {
    return this.get('prev') && this.get('prevLabel');
  }),
  nextLink: computed('next', 'nextLabel', function() {
    return this.get('next') && this.get('nextLabel');
  })
});
