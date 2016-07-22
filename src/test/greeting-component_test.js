"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var testing_1 = require('@angular/core/testing');
var core_1 = require('@angular/core');
var user_service_1 = require('../app/user-service');
var login_service_1 = require('../app/login-service');
var greeting_component_1 = require('../app/greeting-component');
var MockLoginService = (function (_super) {
    __extends(MockLoginService, _super);
    function MockLoginService() {
        _super.apply(this, arguments);
    }
    MockLoginService.prototype.login = function (pin) {
        return Promise.resolve(true);
    };
    return MockLoginService;
}(login_service_1.LoginService));
describe('greeting component', function () {
    var builder;
    beforeEach(function () {
        testing_1.addProviders([
            core_1.provide(login_service_1.LoginService, { useClass: MockLoginService }),
            user_service_1.UserService
        ]);
    });
    beforeEach(testing_1.inject([testing_1.TestComponentBuilder], function (tcb) {
        builder = tcb;
    }));
    it('should ask for PIN', testing_1.async(function () {
        builder.createAsync(greeting_component_1.GreetingComponent).then(function (fixture) {
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;
            expect(compiled).toContainText('Enter PIN');
            expect(compiled.querySelector('h3')).toHaveText('Status: Enter PIN');
        });
    }));
    it('should change greeting', testing_1.async(function () {
        builder.createAsync(greeting_component_1.GreetingComponent).then(function (fixture) {
            fixture.detectChanges();
            fixture.debugElement.componentInstance.greeting = 'Foobar';
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelector('h3')).toHaveText('Status: Foobar');
        });
    }));
    it('should override the template', testing_1.async(function () {
        builder.overrideTemplate(greeting_component_1.GreetingComponent, "<span>{{greeting}}<span>")
            .createAsync(greeting_component_1.GreetingComponent).then(function (fixture) {
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;
            expect(compiled).toHaveText('Enter PIN');
        });
    }));
    it('should accept pin', testing_1.async(function () {
        builder.createAsync(greeting_component_1.GreetingComponent).then(function (fixture) {
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;
            compiled.querySelector('button').click();
            fixture.debugElement.componentInstance.pending.then(function () {
                fixture.detectChanges();
                expect(compiled.querySelector('h3')).toHaveText('Status: Welcome!');
            });
        });
    }));
    it('should accept pin (with fakeAsync)', testing_1.fakeAsync(function () {
        var fixture;
        builder.createAsync(greeting_component_1.GreetingComponent).then(function (rootFixture) {
            fixture = rootFixture;
        });
        testing_1.tick();
        var compiled = fixture.debugElement.nativeElement;
        compiled.querySelector('button').click();
        testing_1.tick();
        fixture.detectChanges();
        expect(compiled.querySelector('h3')).toHaveText('Status: Welcome!');
    }));
});
//# sourceMappingURL=greeting-component_test.js.map