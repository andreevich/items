import Ember from 'ember';

export default Ember.Route.extend({
	model() {
	    return Ember.RSVP.hash({
	      menu: this.store.findAll('menu'),
	      submenu: this.store.findAll('submenu')
	    });
  	}
});
