App.CardController = Ember.ObjectController.extend({
 isAdding:false,
 actions: {
    deleteCard: function(card) {
      card.destroyRecord();
    },
	getCard:function(){
		
		//this.set("isAdding",true)
			console.log(this.get('list').get('listName')+"."+this.get('model').get("description"),
				this.get('id'),
				this.get('list').get('id')
			);
			
		var card = this.get('model'),
        price;
		/*price = this.store.createRecord('price', {
        price: 20,
        date: this.get('list').get('listName')+"."+this.get('model').get("description"),
        card: card
      });
		price.save();	
		*/
		//price = this.store.find('price', 1)
		//console.log(price, price.get('model'))
		//price.deleteRecord();
		
		/*
		
		price = this.store.createRecord('price', {
			price: 20,
			date: this.get('list').get('listName')+"."+this.get('model').get("description"),
			card: card
		});
		price.save();
		*/
	}
} 

});
