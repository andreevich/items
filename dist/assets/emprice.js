"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('emprice/adapters/application', ['exports', 'ember', 'emberfire/adapters/firebase'], function (exports, _ember, _emberfireAdaptersFirebase) {
  var inject = _ember['default'].inject;
  exports['default'] = _emberfireAdaptersFirebase['default'].extend({
    firebase: inject.service()
  });
});
define('emprice/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'emprice/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _empriceConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _empriceConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _empriceConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _empriceConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('emprice/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'emprice/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _empriceConfigEnvironment) {

  var name = _empriceConfigEnvironment['default'].APP.name;
  var version = _empriceConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('emprice/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('emprice/controllers/menus/new', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		actions: {
			addMenu: function addMenu() {
				var name = this.get('name');
				var newMenu = this.store.createRecord('menu', {
					name: name
				});
				newMenu.save();

				this.setProperties({
					name: ''
				});
			}
		}
	});
});
define('emprice/controllers/menus/submenus', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		actions: {
			addSubmenu: function addSubmenu() {
				var name = this.get('name');
				var MenuName = $('select option:selected').text();
				var id = $('select').val();
				console.log(id);
				var self = this;
				var menu = this.store.findRecord('menu', id);

				var newSub = this.store.createRecord('submenu', {
					name: name,
					name2: MenuName,
					menu: menu
				});

				newSub.save();
				/*
    			this.setProperties({
    			 	name:'',
    			 	menu:''
    			});
    */
				//console.log(name,MenuName)
			} }
	});
});
/*
// Пора спать!
deleteSubMenu:function(id){
console.log()
this.store.findRecord('submenu',id).then(function(s){
s.deleteRecord();
	s.save();
})
}
*/
define('emprice/controllers/menus', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		actions: {
			deleteMenu: function deleteMenu(id) {

				this.store.findRecord('menu', id).then(function (menu) {
					menu.deleteRecord();
					menu.save();
				});
			}
		}
	});
});
define('emprice/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('emprice/controllers/prices/new', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		actions: {
			ddPrice: function ddPrice() {
				var name = $('select option:selected').text();
				var date = this.get('date');
				var price = this.get('price');

				console.log(name, date, price);

				var newPrice = this.store.createRecord('price', {
					name: name,
					date: new Date(date),
					price: price
				});
				newPrice.save();

				this.setProperties({
					name: '',
					date: '',
					price: ''
				});
			}
		}
	});
});
define('emprice/controllers/prices', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		actions: {
			deletePrice: function deletePrice(id) {
				console.log(id);
				this.store.findRecord('price', id).then(function (price) {
					price.deleteRecord();

					price.save();
				});
			}
		}
	});
});
define('emprice/helpers/format-date', ['exports', 'ember'], function (exports, _ember) {
	exports.formatDate = formatDate;

	function formatDate(params) {
		return moment(params[0]).format(params[1]);
	}

	exports['default'] = _ember['default'].Helper.helper(formatDate);
});
define('emprice/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'emprice/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _empriceConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_empriceConfigEnvironment['default'].APP.name, _empriceConfigEnvironment['default'].APP.version)
  };
});
define('emprice/initializers/emberfire', ['exports', 'emberfire/initializers/emberfire'], function (exports, _emberfireInitializersEmberfire) {
  exports['default'] = _emberfireInitializersEmberfire['default'];
});
define('emprice/initializers/export-application-global', ['exports', 'ember', 'emprice/config/environment'], function (exports, _ember, _empriceConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_empriceConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _empriceConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_empriceConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('emprice/models/menu', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string'),
    submenu: _emberData['default'].hasMany('submenu')
  });
});
define('emprice/models/price', ['exports', 'ember-data', 'ember', 'emprice/config/environment'], function (exports, _emberData, _ember, _empriceConfigEnvironment) {
    exports['default'] = _emberData['default'].Model.extend({
        name: _emberData['default'].attr('string'),
        price: _emberData['default'].attr('number'),
        date: _emberData['default'].attr('string'),
        created: _emberData['default'].attr('string', {
            defaultValue: function defaultValue() {
                return new Date();
            }
        }),
        myStyle: _ember['default'].computed('price', function () {
            var width = "";
            if (this.get('price') < 1000 && this.get('price') >= 100) width = this.get('price');else if (this.get('price') < 100) width = 80;else if (this.get('price') >= 1000) width = 1000;

            var style = 'width: ' + width + 'px;';
            return style.htmlSafe();
        }),
        redPrice: _ember['default'].computed('price', function () {
            var redPriceClass = 'green';
            if (+this.get('price') > _empriceConfigEnvironment['default'].limit * 2) redPriceClass = 'red';else if (+this.get('price') > _empriceConfigEnvironment['default'].limit) redPriceClass = 'orange';
            return redPriceClass;
        }),
        minWidth: _ember['default'].computed('price', function () {
            return this.get('price') <= 100 ? true : false;;
        })
    });
});
define('emprice/models/submenu', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string'),
    name2: _emberData['default'].attr('string'),
    menu: _emberData['default'].belongsTo('menu')
  });
});
define('emprice/router', ['exports', 'ember', 'emprice/config/environment'], function (exports, _ember, _empriceConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _empriceConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('prices', { path: '/' }, function () {
      this.route('new');
    });
    this.route('charts');
    this.route('menus', function () {
      this.route('new');
      /*
      this.route('submenus',function() {
      	this.route('new');
      }); 
      */
    });
  });

  exports['default'] = Router;
});
define('emprice/routes/charts', ['exports', 'ember', 'emprice/config/environment'], function (exports, _ember, _empriceConfigEnvironment) {
	exports['default'] = _ember['default'].Route.extend({
		/*
  limit:function(){
      return config.limit;
  },
  model:function(){
      return this.store.findAll('price');
  }
  */
		model: function model() {
			return _ember['default'].RSVP.hash({
				price: this.store.findAll('price'),
				limit: _empriceConfigEnvironment['default'].limit,
				limit2: 2 * _empriceConfigEnvironment['default'].limit
			});
		}
	});
});
define('emprice/routes/menus/new', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('emprice/routes/menus/submenus/new', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('emprice/routes/menus/submenus', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return _ember['default'].RSVP.hash({
				menu: this.store.findAll('menu'),
				submenu: this.store.findAll('submenu')
			});
		}
	});
});
define('emprice/routes/menus', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return this.store.findAll('menu');
		}
	});
});
define('emprice/routes/prices/new', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return this.store.findAll('menu'); //["Мясо","Молоко","Пиво","Хлеб","Прочее"];
		}
	});
});
define('emprice/routes/prices', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return this.store.findAll('price');
		}
	});
});
define('emprice/services/firebase', ['exports', 'emberfire/services/firebase', 'emprice/config/environment'], function (exports, _emberfireServicesFirebase, _empriceConfigEnvironment) {

  _emberfireServicesFirebase['default'].config = _empriceConfigEnvironment['default'];

  exports['default'] = _emberfireServicesFirebase['default'];
});
define("emprice/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 15
            },
            "end": {
              "line": 14,
              "column": 43
            }
          },
          "moduleName": "emprice/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Расходы");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 15
            },
            "end": {
              "line": 15,
              "column": 52
            }
          },
          "moduleName": "emprice/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Новая запись");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 16,
              "column": 15
            },
            "end": {
              "line": 16,
              "column": 45
            }
          },
          "moduleName": "emprice/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Диаграмма");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 17,
              "column": 16
            },
            "end": {
              "line": 17,
              "column": 40
            }
          },
          "moduleName": "emprice/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Меню");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 29,
            "column": 10
          }
        },
        "moduleName": "emprice/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("nav");
        dom.setAttribute(el1, "class", "navbar navbar-default");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "navbar-header");
        var el4 = dom.createTextNode("\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "class", "navbar-toggle collapsed");
        dom.setAttribute(el4, "data-toggle", "collapse");
        dom.setAttribute(el4, "data-target", "#navbar");
        dom.setAttribute(el4, "aria-expanded", "false");
        dom.setAttribute(el4, "aria-controls", "navbar");
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "sr-only");
        var el6 = dom.createTextNode("Toggle navigation");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "class", "navbar-brand");
        dom.setAttribute(el4, "href", "/");
        var el5 = dom.createTextNode("emPrice");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "id", "navbar");
        dom.setAttribute(el3, "class", "collapse navbar-collapse");
        var el4 = dom.createTextNode("\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4, "class", "nav navbar-nav");
        var el5 = dom.createTextNode("\n          	");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          	");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          	");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n    	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-12");
        var el4 = dom.createTextNode("\n	    		");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1, 1, 3, 1]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 0, 0);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [7]), 0, 0);
        morphs[4] = dom.createMorphAt(dom.childAt(fragment, [3, 1, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "link-to", ["prices"], [], 0, null, ["loc", [null, [14, 15], [14, 55]]]], ["block", "link-to", ["prices.new"], [], 1, null, ["loc", [null, [15, 15], [15, 64]]]], ["block", "link-to", ["charts"], [], 2, null, ["loc", [null, [16, 15], [16, 57]]]], ["block", "link-to", ["menus"], [], 3, null, ["loc", [null, [17, 16], [17, 52]]]], ["content", "outlet", ["loc", [null, [26, 7], [26, 17]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define("emprice/templates/charts", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 10,
                "column": 2
              },
              "end": {
                "line": 12,
                "column": 2
              }
            },
            "moduleName": "emprice/templates/charts.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("	");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" - ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("b");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("руб.");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [1]);
            var morphs = new Array(4);
            morphs[0] = dom.createAttrMorph(element1, 'style');
            morphs[1] = dom.createAttrMorph(element1, 'class');
            morphs[2] = dom.createMorphAt(element1, 0, 0);
            morphs[3] = dom.createMorphAt(dom.childAt(element1, [2]), 0, 0);
            return morphs;
          },
          statements: [["attribute", "style", ["get", "price.myStyle", ["loc", [null, [11, 24], [11, 37]]]]], ["attribute", "class", ["concat", [["subexpr", "-bind-attr-class", [["get", "price.redPrice", []], "red-price"], [], []]]]], ["content", "price.name", ["loc", [null, [11, 61], [11, 75]]]], ["content", "price.price", ["loc", [null, [11, 81], [11, 96]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 12,
                "column": 2
              },
              "end": {
                "line": 15,
                "column": 2
              }
            },
            "moduleName": "emprice/templates/charts.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("	");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" - ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" - ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("b");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("руб.");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(5);
            morphs[0] = dom.createAttrMorph(element0, 'style');
            morphs[1] = dom.createAttrMorph(element0, 'class');
            morphs[2] = dom.createMorphAt(element0, 0, 0);
            morphs[3] = dom.createMorphAt(element0, 2, 2);
            morphs[4] = dom.createMorphAt(dom.childAt(element0, [4]), 0, 0);
            return morphs;
          },
          statements: [["attribute", "style", ["get", "price.myStyle", ["loc", [null, [13, 24], [13, 37]]]]], ["attribute", "class", ["concat", [["subexpr", "-bind-attr-class", [["get", "price.redPrice", []], "red-price"], [], []]]]], ["content", "price.name", ["loc", [null, [13, 61], [13, 75]]]], ["inline", "format-date", [["get", "price.date", ["loc", [null, [13, 93], [13, 103]]]], "YYYY-MM-DD"], [], ["loc", [null, [13, 78], [13, 118]]]], ["content", "price.price", ["loc", [null, [13, 124], [13, 139]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 2
            },
            "end": {
              "line": 17,
              "column": 1
            }
          },
          "moduleName": "emprice/templates/charts.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("		\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "if", [["get", "price.minWidth", ["loc", [null, [10, 8], [10, 22]]]]], [], 0, 1, ["loc", [null, [10, 2], [15, 9]]]]],
        locals: ["price"],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 6
          }
        },
        "moduleName": "emprice/templates/charts.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Диаграмма превышения лимитов (");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("руб.)");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "class", "red_limit");
        var el3 = dom.createTextNode("2Х ЛИМИТ: ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("руб.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "class", "_limit");
        var el3 = dom.createTextNode("ЛИМИТ: ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("руб.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "class", "no_limit");
        var el3 = dom.createTextNode("НОРМА");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "chart");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [2]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element2, [1]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [3]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [6]), 1, 1);
        return morphs;
      },
      statements: [["content", "model.limit", ["loc", [null, [1, 34], [1, 49]]]], ["content", "model.limit2", ["loc", [null, [3, 35], [3, 51]]]], ["content", "model.limit", ["loc", [null, [4, 29], [4, 44]]]], ["block", "each", [["get", "model.price", ["loc", [null, [9, 19], [9, 30]]]]], [], 0, null, ["loc", [null, [9, 2], [17, 10]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("emprice/templates/menus/new", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "emprice/templates/menus/new.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("form");
        dom.setAttribute(el1, "class", "form-inline");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "form-group");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "class", "btn btn-primary");
        var el4 = dom.createTextNode("Добавить");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [3]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [["inline", "input", [], ["type", "text", "class", "form-control", "value", ["subexpr", "@mut", [["get", "name", ["loc", [null, [3, 49], [3, 53]]]]], [], []]], ["loc", [null, [3, 2], [3, 55]]]], ["element", "action", ["addMenu"], [], ["loc", [null, [4, 10], [4, 30]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("emprice/templates/menus/submenus", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 1
              },
              "end": {
                "line": 8,
                "column": 1
              }
            },
            "moduleName": "emprice/templates/menus/submenus.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("•");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("sup");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("span");
            dom.setAttribute(el3, "class", "label label-danger");
            var el4 = dom.createTextNode(" del ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n		");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("	\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [1]);
            var element2 = dom.childAt(element1, [2]);
            var element3 = dom.childAt(element1, [4, 1]);
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(element2, 1, 1);
            morphs[1] = dom.createMorphAt(dom.childAt(element2, [2]), 0, 0);
            morphs[2] = dom.createElementMorph(element3);
            return morphs;
          },
          statements: [["content", "sub.name", ["loc", [null, [6, 18], [6, 30]]]], ["content", "sub.name2", ["loc", [null, [6, 35], [6, 48]]]], ["element", "action", ["deleteSubMenu", ["get", "sub.id", ["loc", [null, [6, 124], [6, 130]]]]], [], ["loc", [null, [6, 99], [6, 132]]]]],
          locals: ["sub"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "emprice/templates/menus/submenus.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("table");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "model.submenu", ["loc", [null, [4, 9], [4, 22]]]]], [], 0, null, ["loc", [null, [4, 1], [8, 10]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "emprice/templates/menus/submenus.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "alert alert-warning");
          dom.setAttribute(el1, "role", "alert");
          var el2 = dom.createTextNode("\n	");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("strong");
          var el3 = dom.createTextNode("Внимание!");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" Подменю пустое, срочно примите меры по наполнению!\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 20,
              "column": 9
            },
            "end": {
              "line": 22,
              "column": 12
            }
          },
          "moduleName": "emprice/templates/menus/submenus.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("           	 ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'value');
          morphs[1] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "value", ["get", "menu.id", ["loc", [null, [21, 29], [21, 36]]]]], ["content", "menu.name", ["loc", [null, [21, 39], [21, 52]]]]],
        locals: ["menu"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 30,
            "column": 0
          }
        },
        "moduleName": "emprice/templates/menus/submenus.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h4");
        var el2 = dom.createTextNode("Подменю ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("form");
        dom.setAttribute(el1, "class", "form-inline");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "form-group");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "form-group");
        var el4 = dom.createTextNode("\n		  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("select");
        dom.setAttribute(el4, "ng-model", "discussionsSelect");
        dom.setAttribute(el4, "class", "form-control createsub");
        dom.setAttribute(el4, "value", "name");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("          ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "class", "btn btn-primary");
        var el4 = dom.createTextNode("Добавить");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element4 = dom.childAt(fragment, [4, 1]);
        var element5 = dom.childAt(element4, [5]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(dom.childAt(element4, [1, 1]), 1, 1);
        morphs[3] = dom.createMorphAt(element4, 3, 3);
        morphs[4] = dom.createElementMorph(element5);
        return morphs;
      },
      statements: [["content", "model.sumbenu.length", ["loc", [null, [1, 12], [1, 36]]]], ["block", "if", [["get", "model.submenu.length", ["loc", [null, [2, 6], [2, 26]]]]], [], 0, 1, ["loc", [null, [2, 0], [14, 7]]]], ["block", "each", [["get", "model.menu", ["loc", [null, [20, 17], [20, 27]]]]], [], 2, null, ["loc", [null, [20, 9], [22, 21]]]], ["inline", "input", [], ["type", "text", "class", "form-control", "value", ["subexpr", "@mut", [["get", "name", ["loc", [null, [25, 49], [25, 53]]]]], [], []]], ["loc", [null, [25, 2], [25, 55]]]], ["element", "action", ["addSubmenu"], [], ["loc", [null, [26, 10], [26, 33]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("emprice/templates/menus", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 4
            },
            "end": {
              "line": 2,
              "column": 41
            }
          },
          "moduleName": "emprice/templates/menus.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Добавить меню");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 10,
                "column": 1
              },
              "end": {
                "line": 14,
                "column": 1
              }
            },
            "moduleName": "emprice/templates/menus.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode(" • ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("span");
            dom.setAttribute(el3, "class", "label label-danger");
            var el4 = dom.createTextNode(" del ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n		");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("	\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [5, 1]);
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
            morphs[1] = dom.createElementMorph(element1);
            return morphs;
          },
          statements: [["content", "m.name", ["loc", [null, [12, 21], [12, 31]]]], ["element", "action", ["deleteMenu", ["get", "m.id", ["loc", [null, [12, 98], [12, 102]]]]], [], ["loc", [null, [12, 76], [12, 104]]]]],
          locals: ["m"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 16,
              "column": 0
            }
          },
          "moduleName": "emprice/templates/menus.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("table");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "model", ["loc", [null, [10, 9], [10, 14]]]]], [], 0, null, ["loc", [null, [10, 1], [14, 10]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 16,
              "column": 0
            },
            "end": {
              "line": 20,
              "column": 0
            }
          },
          "moduleName": "emprice/templates/menus.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "alert alert-warning");
          dom.setAttribute(el1, "role", "alert");
          var el2 = dom.createTextNode("\n	");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("strong");
          var el3 = dom.createTextNode("Внимание!");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" Меню пустое, срочно примите меры по наполнению!\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 24,
            "column": 0
          }
        },
        "moduleName": "emprice/templates/menus.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Меню");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h4");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]), 0, 0);
        morphs[1] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 10, 10, contextualElement);
        return morphs;
      },
      statements: [["block", "link-to", ["menus.new"], [], 0, null, ["loc", [null, [2, 4], [2, 53]]]], ["block", "if", [["get", "model.length", ["loc", [null, [8, 6], [8, 18]]]]], [], 1, 2, ["loc", [null, [8, 0], [20, 7]]]], ["content", "outlet", ["loc", [null, [23, 0], [23, 10]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("emprice/templates/prices/new", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 12
            },
            "end": {
              "line": 7,
              "column": 12
            }
          },
          "moduleName": "emprice/templates/prices/new.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("           	 ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "item.name", ["loc", [null, [6, 21], [6, 34]]]]],
        locals: ["item"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 19,
            "column": 7
          }
        },
        "moduleName": "emprice/templates/prices/new.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("form");
        dom.setAttribute(el1, "class", "form-inline");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "form-group");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "form-group");
        var el4 = dom.createTextNode("\n		  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("select");
        dom.setAttribute(el4, "ng-model", "discussionsSelect");
        dom.setAttribute(el4, "class", "form-control");
        dom.setAttribute(el4, "value", "name");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("          ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "input-group");
        var el4 = dom.createTextNode("\n    		");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "input-group-addon");
        var el5 = dom.createTextNode("бел.руб");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    	");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "class", "btn btn-primary");
        var el4 = dom.createTextNode("Добавить");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [7]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 1]), 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
        morphs[3] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [["block", "each", [["get", "model", ["loc", [null, [5, 28], [5, 33]]]]], [], 0, null, ["loc", [null, [5, 12], [7, 21]]]], ["inline", "input", [], ["type", "date", "class", "form-control", "value", ["subexpr", "@mut", [["get", "date", ["loc", [null, [11, 49], [11, 53]]]]], [], []]], ["loc", [null, [11, 2], [11, 55]]]], ["inline", "input", [], ["type", "text", "class", "form-control", "value", ["subexpr", "@mut", [["get", "price", ["loc", [null, [13, 53], [13, 58]]]]], [], []], "placeholder", "Стоимость"], ["loc", [null, [13, 6], [13, 84]]]], ["element", "action", ["ddPrice"], [], ["loc", [null, [16, 13], [16, 33]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("emprice/templates/prices", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 18,
                "column": 1
              },
              "end": {
                "line": 27,
                "column": 1
              }
            },
            "moduleName": "emprice/templates/prices.hbs"
          },
          arity: 2,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createElement("button");
            dom.setAttribute(el3, "type", "submit");
            dom.setAttribute(el3, "class", "btn btn-danger btn-xs");
            var el4 = dom.createTextNode("Удалить");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n		");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [11, 0]);
            var morphs = new Array(6);
            morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
            morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
            morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 0, 0);
            morphs[3] = dom.createMorphAt(dom.childAt(element0, [7]), 0, 0);
            morphs[4] = dom.createMorphAt(dom.childAt(element0, [9]), 0, 0);
            morphs[5] = dom.createElementMorph(element1);
            return morphs;
          },
          statements: [["content", "index", ["loc", [null, [20, 7], [20, 16]]]], ["content", "price.name", ["loc", [null, [21, 7], [21, 21]]]], ["content", "price.price", ["loc", [null, [22, 7], [22, 22]]]], ["inline", "format-date", [["get", "price.date", ["loc", [null, [23, 21], [23, 31]]]], "YYYY-MM-DD"], [], ["loc", [null, [23, 7], [23, 46]]]], ["inline", "format-date", [["get", "price.created", ["loc", [null, [24, 21], [24, 34]]]], "YYYY-MM-DD hh:mm:ss"], [], ["loc", [null, [24, 7], [24, 58]]]], ["element", "action", ["deletePrice", ["get", "price.id", ["loc", [null, [25, 38], [25, 46]]]]], [], ["loc", [null, [25, 15], [25, 48]]]]],
          locals: ["price", "index"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 30,
              "column": 0
            }
          },
          "moduleName": "emprice/templates/prices.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("table");
          dom.setAttribute(el1, "class", "table");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("caption");
          var el3 = dom.createTextNode("Расходы:  ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3, "class", "badge");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("thead");
          var el3 = dom.createTextNode("\n	");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("tr");
          var el4 = dom.createTextNode("\n		");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          var el5 = dom.createTextNode("#");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n		");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          var el5 = dom.createTextNode("Наименование");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n		");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          var el5 = dom.createTextNode("Стоимость");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n		");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          var el5 = dom.createTextNode("Дата совершения");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n		");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          var el5 = dom.createTextNode("Дата создания");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n		");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n	");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("tbody");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [0]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(element2, [1, 1]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(element2, [5]), 1, 1);
          return morphs;
        },
        statements: [["content", "model.length", ["loc", [null, [6, 39], [6, 55]]]], ["block", "each", [["get", "model", ["loc", [null, [18, 9], [18, 14]]]]], [], 0, null, ["loc", [null, [18, 1], [27, 10]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 30,
              "column": 0
            },
            "end": {
              "line": 34,
              "column": 0
            }
          },
          "moduleName": "emprice/templates/prices.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "alert alert-warning");
          dom.setAttribute(el1, "role", "alert");
          var el2 = dom.createTextNode("\n	");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("strong");
          var el3 = dom.createTextNode("Внимание!");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" База пуста, срочно примите меры по наполнению!\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 37,
            "column": 0
          }
        },
        "moduleName": "emprice/templates/prices.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Расходы");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("	\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        return morphs;
      },
      statements: [["block", "if", [["get", "model.length", ["loc", [null, [4, 6], [4, 18]]]]], [], 0, 1, ["loc", [null, [4, 0], [34, 7]]]], ["content", "outlet", ["loc", [null, [36, 0], [36, 10]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('emprice/torii-providers/firebase', ['exports', 'emberfire/torii-providers/firebase'], function (exports, _emberfireToriiProvidersFirebase) {
  exports['default'] = _emberfireToriiProvidersFirebase['default'];
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('emprice/config/environment', ['ember'], function(Ember) {
  var prefix = 'emprice';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("emprice/app")["default"].create({"name":"emprice","version":"0.0.0+f55f394f"});
}

/* jshint ignore:end */
//# sourceMappingURL=emprice.map