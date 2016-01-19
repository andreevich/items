App.PricesController = Ember.ArrayController.extend({
	names: [
    {firstName: "ЕДА", id: 1,main:true},
    {firstName: " • мясо",   id: 1001},
    {firstName: " • хлеб",   id: 1002},
    {firstName: " • сыр",    id: 1003},
    {firstName: "ОТДЫХ",    id: 2},
    {firstName: " • кино",    id: 2001},
    {firstName: " • кафе",    id: 2001}
  ],
  actions:{
	createPrice:function(){
		var selVal = $('select option:selected').text()
		selVal = ~selVal.indexOf('•')?selVal.substr(3):selVal;
	
		this.store.createRecord('price', {
			price: this.get('price'),
			date:  this.get('date'),
			card:  selVal
		});
		
	  }
	}
});
