"use strict";
var testing_1 = require('@angular/core/testing');
var core_1 = require('@angular/core');
testing_1.describe('default test injector', function () {
    testing_1.it('should provide default id', testing_1.inject([core_1.APP_ID], function (id) {
        testing_1.expect(id).toBe('a');
    }));
});
//# sourceMappingURL=using-injector_test.js.map