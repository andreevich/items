import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
	/*
	limit:function(){
	    return config.limit;
	},
	model:function(){
	    return this.store.findAll('price');
	}
	*/
	model() {
		return Ember.RSVP.hash({
	      price: this.store.findAll('price'),
	      limit: config.limit,
	      limit2: 2*config.limit,
	    });
	}
});