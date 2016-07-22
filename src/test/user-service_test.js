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
describe('user service', function () {
    beforeEach(function () {
        testing_1.addProviders([login_service_1.LoginService, user_service_1.UserService]);
    });
    it('should validate pins', testing_1.inject([user_service_1.UserService], function (service) {
        service.pin = 12345;
        expect(service.isValidPin()).toBe(false);
        service.pin = 0;
        expect(service.isValidPin()).toBe(true);
        service.pin = 9999;
        expect(service.isValidPin()).toBe(true);
        service.pin = -50;
        expect(service.isValidPin()).toBe(false);
    }));
    it('should greet when pin is wrong', testing_1.async(testing_1.inject([user_service_1.UserService], function (service) {
        service.pin = 9999;
        service.getGreeting().then(function (greeting) {
            expect(greeting).toEqual('Login failure!');
        });
    })), 3000);
    it('should greet when pin is right', testing_1.async(testing_1.inject([user_service_1.UserService], function (service) {
        service.pin = 2015;
        service.getGreeting().then(function (greeting) {
            expect(greeting).toEqual('Welcome!');
        });
    })), 3000);
});
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
describe('with mocked login', function () {
    beforeEach(function () {
        testing_1.addProviders([core_1.provide(login_service_1.LoginService, { useClass: MockLoginService }), user_service_1.UserService]);
    });
    it('should greet', testing_1.async(testing_1.inject([user_service_1.UserService], function (service) {
        service.getGreeting().then(function (greeting) {
            expect(greeting).toEqual('Welcome!');
        });
    })));
});
describe('with fake async', function () {
    beforeEach(function () {
        testing_1.addProviders([login_service_1.LoginService, user_service_1.UserService]);
    });
    it('should greet (with fakeAsync)', testing_1.fakeAsync(testing_1.inject([user_service_1.UserService], function (service) {
        var greeting;
        service.getGreeting().then(function (value) {
            greeting = value;
        });
        testing_1.tick(2000);
        expect(greeting).toEqual('Login failure!');
    })));
});
//# sourceMappingURL=user-service_test.js.map