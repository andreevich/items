import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		deleteMenu:function(id){
			
			this.store.findRecord('menu',id).then(function(menu){
				menu.deleteRecord();
				menu.save();
			});
			
		}
	}
});
