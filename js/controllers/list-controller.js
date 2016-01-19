App.ListController = Ember.ObjectController.extend({
isAdding:false,
actions: {
    removeList: function() {
      var list = this.get('model');
      list.destroyRecord();
	},
	createCard: function() {
		var list = this.get('model'),
        card;
		card = this.store.createRecord('card', {
        description: this.get('cardDescription'),
        list: list
      });
	  card.save();
		
		
		this.set('cardDescription', '');
		//this.set("isAdding",false)
	},
	addInput:function(){
		var flag = this.get("isAdding")?false:true;
		this.set("isAdding",flag)
	}
}
});
