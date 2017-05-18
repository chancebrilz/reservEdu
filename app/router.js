import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin', function() {
    this.route('payments');
    this.route('facilities');
    this.route('reservations');
  });
  this.route('profile', { path: '/profile/:user_id' });
  this.route('school', { path: '/school/:school_id' });
  this.route('facility', { path: '/facility/:facility_id' });

  // ERROR PAGES
  this.route('errors/404', {path: '/*path'});
});

export default Router;
