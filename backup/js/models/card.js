App.Card = DS.Model.extend({
  description: DS.attr('string'),
  list: DS.belongsTo('list'),
 // price:DS.belongsTo('price')
});

App.Card.FIXTURES = [
  {
    id: "1",
    description: "Мясо",
    list: 1
  },{
    id: "3",
    description: "Кино",
    list: 2
  },
  {
    id: "4",
    description: "Театр",
    list: 2
  },
  {
    id: "5",
    description: "Кафе",
    list: 2
  }
];
