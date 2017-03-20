import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('admin', function() {
    this.route('schools');
  });
  this.route('profile');

  // ERROR PAGES
  this.route('errors/404', {path: '/*path'});
});

export default Router;
