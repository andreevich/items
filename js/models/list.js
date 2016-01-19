App.List = DS.Model.extend({
  listName: DS.attr('string'),
  cards: DS.hasMany('card', {
    async: true
  })
});


App.List.FIXTURES = [
  {
    id: "1",
    listName: "Еда",
    cards: ["1"]
  },
  {
    id: "2",
    listName: "Развлечения",
    cards: ["3","4","5"]
  },
  {
    id: "3",
    listName: "Прочее",
    cards: []
  }
];
