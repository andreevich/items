import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		addSubmenu:function(){
			var name=this.get('name');
			var MenuName= $('select option:selected').text();
			var id = $('select').val();	
			console.log(id)
			var self = this;
			var menu = this.store.findRecord('menu', id);

		
			
			var newSub = this.store.createRecord('submenu',{
			 	name:name,
			 	name2:MenuName,
			 	menu:menu
			});

			newSub.save();
/*
			this.setProperties({
			 	name:'',
			 	menu:''
			});
*/
			//console.log(name,MenuName)
		},/*

		// Пора спать!
		deleteSubMenu:function(id){
			console.log()
			this.store.findRecord('submenu',id).then(function(s){
				s.deleteRecord();

				s.save();
			})
		}
*/
	}
});
