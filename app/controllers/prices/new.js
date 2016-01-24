import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		ddPrice:function(){
			var name= $('select option:selected').text();
			var date=this.get('date'); 
			var price=this.get('price'); 

			console.log(name,date,price);

			 var newPrice = this.store.createRecord('price',{
			 	name:name,
			 	date: new Date(date),
			 	price:price
			 });
			 newPrice.save();

			 this.setProperties({
			 	name:'',
			 	date:'',
			 	price:''
			 });
		}
	}
});
