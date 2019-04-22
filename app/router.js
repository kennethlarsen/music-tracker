import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('artists', function() {
    this.route('artist', { path: '/:artist_id'}, function() {
      this.route('albums', function() {
        this.route('album', { path: '/:album_id'});
      });
    });
  });
  this.route('users', function() {
    this.route('user', { path: '/:user_id' }, function() {
      this.route('collection');
    });
  });
});

export default Router;
