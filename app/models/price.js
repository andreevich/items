import DS from 'ember-data';
import Ember from 'ember';
import config from '../config/environment';

export default DS.Model.extend({
  	name:DS.attr('string'),
  	price:DS.attr('number'),
  	date:DS.attr('string'),
  	created:DS.attr('string',{
  		defaultValue:function(){
  			return new Date();
  		}
  	}),
  	myStyle: Ember.computed('price', function() {
  	  let width ="";
      if (this.get('price')<1000 && this.get('price')>=100)  
          width = this.get('price');
      else
         if (this.get('price')<100) 
          width = 80;
     else 
        if (this.get('price')>=1000) 
          width = 1000;

  	  let style = `width: ${width}px\;`;
  	  return style.htmlSafe();
	  }),
    redPrice: Ember.computed('price', function() {
      let redPriceClass='green';
      if (+this.get('price') > config.limit*2 )
          redPriceClass='red';
      else
      if (+this.get('price') > config.limit)
          redPriceClass='orange';
      return redPriceClass;
    }),
    minWidth: Ember.computed('price', function() {
      return this.get('price')<=100? true:false;;
    }),
});
