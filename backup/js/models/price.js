App.Price = DS.Model.extend({
  date: DS.attr('string'),
  price:DS.attr('number'),
  card: DS.attr('string')
});

App.Price.FIXTURES = [
  {
    id: "1",
    date: "19.01.2016",
	price:15,
	card:"Еда"
  },
  {
    id: "2",
    date: "19.01.2016",
	price:10,
	card:"кафе"
  },
];
