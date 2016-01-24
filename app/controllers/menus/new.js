import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		addMenu:function(){
			var name=this.get('name'); 
			var newMenu = this.store.createRecord('menu',{
			 	name:name
			});
			newMenu.save();

			this.setProperties({
			 	name:''
			});
		}
	}
});
