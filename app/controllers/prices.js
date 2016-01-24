import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		deletePrice:function(id){
			console.log(id)
			this.store.findRecord('price',id).then(function(price){
				price.deleteRecord();

				price.save();
			})
		}
	}
});
