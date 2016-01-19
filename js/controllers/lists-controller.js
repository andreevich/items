App.ListsController = Ember.ArrayController.extend({
  isAdding:true,
  actions: {
    createList: function() {
	  var list = this.store.createRecord('list', {
        listName: this.get('listName')
      });
	  list.save();
      this.set('listName', '');
	  console.log('createList', this.get('listName'))
    },
	click:function(){
		/*
		var flag = this.get("isAdding")?false:true;
		this.set("isAdding",true)
		console.log(this.get('model'))
		*/
	}
  }
});
