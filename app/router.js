import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  didTransition() {
    this._super(...arguments);
    window.scrollTo(0,0);
  }
});

Router.map(function() {
  this.route('chapter-one');
  this.route('chapter-two');
  this.route('chapter-three');
  this.route('chapter-four');
});

export default Router;
