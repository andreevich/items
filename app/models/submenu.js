import DS from 'ember-data';

export default DS.Model.extend({
  	name:DS.attr('string'),
  	name2:DS.attr('string'),
  	menu:DS.belongsTo('menu')
});
