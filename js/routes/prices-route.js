App.PricesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('price');
  }
});
