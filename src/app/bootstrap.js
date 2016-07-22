"use strict";
///<reference path="../../typings/browser.d.ts"/>
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var user_service_1 = require('./user-service');
var app_component_1 = require('./app-component');
var login_service_1 = require('./login-service');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [login_service_1.LoginService, user_service_1.UserService]);
//# sourceMappingURL=bootstrap.js.map