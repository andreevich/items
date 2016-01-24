import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('prices', {path:'/'},function() {
    this.route('new');
  });
  this.route('charts');
  this.route('menus', function() {
    this.route('new');
    /*
    this.route('submenus',function() {
    	this.route('new');
    }); 
*/
  });
});

export default Router;
