define('emprice/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/application.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('emprice/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('emprice/tests/controllers/menus/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/menus');
  QUnit.test('controllers/menus/new.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/menus/new.js should pass jshint.');
  });
});
define('emprice/tests/controllers/menus/submenus.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/menus');
  QUnit.test('controllers/menus/submenus.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/menus/submenus.js should pass jshint.\ncontrollers/menus/submenus.js: line 9, col 28, Missing semicolon.\ncontrollers/menus/submenus.js: line 10, col 17, \'self\' is defined but never used.\ncontrollers/menus/submenus.js: line 7, col 27, \'$\' is not defined.\ncontrollers/menus/submenus.js: line 8, col 22, \'$\' is not defined.\n\n4 errors');
  });
});
define('emprice/tests/controllers/menus.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/menus.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/menus.js should pass jshint.');
  });
});
define('emprice/tests/controllers/prices/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/prices');
  QUnit.test('controllers/prices/new.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/prices/new.js should pass jshint.\ncontrollers/prices/new.js: line 6, col 23, \'$\' is not defined.\n\n1 error');
  });
});
define('emprice/tests/controllers/prices.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/prices.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/prices.js should pass jshint.\ncontrollers/prices.js: line 6, col 28, Missing semicolon.\ncontrollers/prices.js: line 11, col 15, Missing semicolon.\n\n2 errors');
  });
});
define('emprice/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('emprice/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('emprice/tests/helpers/format-date.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/format-date.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/format-date.js should pass jshint.\nhelpers/format-date.js: line 4, col 12, \'moment\' is not defined.\n\n1 error');
  });
});
define('emprice/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'emprice/tests/helpers/start-app', 'emprice/tests/helpers/destroy-app'], function (exports, _qunit, _empriceTestsHelpersStartApp, _empriceTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _empriceTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _empriceTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('emprice/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('emprice/tests/helpers/resolver', ['exports', 'ember/resolver', 'emprice/config/environment'], function (exports, _emberResolver, _empriceConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _empriceConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _empriceConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('emprice/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('emprice/tests/helpers/start-app', ['exports', 'ember', 'emprice/app', 'emprice/config/environment'], function (exports, _ember, _empriceApp, _empriceConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _empriceConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _empriceApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('emprice/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('emprice/tests/models/menu.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/menu.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/menu.js should pass jshint.');
  });
});
define('emprice/tests/models/price.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/price.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/price.js should pass jshint.\nmodels/price.js: line 17, col 11, Expected \'{\' and instead saw \'width\'.\nmodels/price.js: line 20, col 11, Expected \'{\' and instead saw \'width\'.\nmodels/price.js: line 23, col 11, Expected \'{\' and instead saw \'width\'.\nmodels/price.js: line 31, col 11, Expected \'{\' and instead saw \'redPriceClass\'.\nmodels/price.js: line 34, col 11, Expected \'{\' and instead saw \'redPriceClass\'.\nmodels/price.js: line 38, col 49, Unreachable \';\' after \'return\'.\nmodels/price.js: line 38, col 49, Unnecessary semicolon.\n\n7 errors');
  });
});
define('emprice/tests/models/submenu.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/submenu.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/submenu.js should pass jshint.');
  });
});
define('emprice/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('emprice/tests/routes/charts.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/charts.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/charts.js should pass jshint.');
  });
});
define('emprice/tests/routes/menus/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/menus');
  QUnit.test('routes/menus/new.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/menus/new.js should pass jshint.');
  });
});
define('emprice/tests/routes/menus/submenus/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/menus/submenus');
  QUnit.test('routes/menus/submenus/new.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/menus/submenus/new.js should pass jshint.');
  });
});
define('emprice/tests/routes/menus/submenus.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/menus');
  QUnit.test('routes/menus/submenus.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/menus/submenus.js should pass jshint.');
  });
});
define('emprice/tests/routes/menus.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/menus.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/menus.js should pass jshint.');
  });
});
define('emprice/tests/routes/prices/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/prices');
  QUnit.test('routes/prices/new.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/prices/new.js should pass jshint.\nroutes/prices/new.js: line 5, col 42, Missing semicolon.\n\n1 error');
  });
});
define('emprice/tests/routes/prices.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/prices.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/prices.js should pass jshint.\nroutes/prices.js: line 5, col 43, Missing semicolon.\n\n1 error');
  });
});
define('emprice/tests/test-helper', ['exports', 'emprice/tests/helpers/resolver', 'ember-qunit'], function (exports, _empriceTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_empriceTestsHelpersResolver['default']);
});
define('emprice/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('emprice/tests/unit/controllers/menus/new-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:menus/new', 'Unit | Controller | menus/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('emprice/tests/unit/controllers/menus/new-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/menus');
  QUnit.test('unit/controllers/menus/new-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/menus/new-test.js should pass jshint.');
  });
});
define('emprice/tests/unit/controllers/menus/submenus-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:menus/submenus', 'Unit | Controller | menus/submenus', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('emprice/tests/unit/controllers/menus/submenus-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/menus');
  QUnit.test('unit/controllers/menus/submenus-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/menus/submenus-test.js should pass jshint.');
  });
});
define('emprice/tests/unit/controllers/menus-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:menus', 'Unit | Controller | menus', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('emprice/tests/unit/controllers/menus-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/menus-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/menus-test.js should pass jshint.');
  });
});
define('emprice/tests/unit/controllers/prices/new-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:prices/new', 'Unit | Controller | prices/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('emprice/tests/unit/controllers/prices/new-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/prices');
  QUnit.test('unit/controllers/prices/new-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/prices/new-test.js should pass jshint.');
  });
});
define('emprice/tests/unit/controllers/prices-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:prices', 'Unit | Controller | prices', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('emprice/tests/unit/controllers/prices-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/prices-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/prices-test.js should pass jshint.');
  });
});
define('emprice/tests/unit/models/menu-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('menu', 'Unit | Model | menu', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('emprice/tests/unit/models/menu-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/menu-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/menu-test.js should pass jshint.');
  });
});
define('emprice/tests/unit/models/price-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('price', 'Unit | Model | price', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('emprice/tests/unit/models/price-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/price-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/price-test.js should pass jshint.');
  });
});
define('emprice/tests/unit/models/submenu-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('submenu', 'Unit | Model | submenu', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('emprice/tests/unit/models/submenu-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/submenu-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/submenu-test.js should pass jshint.');
  });
});
define('emprice/tests/unit/routes/charts-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:charts', 'Unit | Route | charts', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('emprice/tests/unit/routes/charts-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/charts-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/charts-test.js should pass jshint.');
  });
});
define('emprice/tests/unit/routes/menus/new-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:menus/new', 'Unit | Route | menus/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('emprice/tests/unit/routes/menus/new-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/menus');
  QUnit.test('unit/routes/menus/new-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/menus/new-test.js should pass jshint.');
  });
});
define('emprice/tests/unit/routes/menus/sub-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:menus/sub', 'Unit | Route | menus/sub', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('emprice/tests/unit/routes/menus/sub-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/menus');
  QUnit.test('unit/routes/menus/sub-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/menus/sub-test.js should pass jshint.');
  });
});
define('emprice/tests/unit/routes/menus-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:menus', 'Unit | Route | menus', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('emprice/tests/unit/routes/menus-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/menus-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/menus-test.js should pass jshint.');
  });
});
define('emprice/tests/unit/routes/prices/new-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:prices/new', 'Unit | Route | prices/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('emprice/tests/unit/routes/prices/new-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/prices');
  QUnit.test('unit/routes/prices/new-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/prices/new-test.js should pass jshint.');
  });
});
define('emprice/tests/unit/routes/prices-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:prices', 'Unit | Route | prices', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('emprice/tests/unit/routes/prices-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/prices-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/prices-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('emprice/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map