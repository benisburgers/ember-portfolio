import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('cases', function() {
    this.route('show', { path: '/:case_id' });
  });
  this.route('contact');
  this.route('not found', { path: '/*path' });
});

export default Router;
