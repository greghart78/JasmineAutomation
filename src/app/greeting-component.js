"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var user_service_1 = require('./user-service');
var GreetingComponent = (function () {
    function GreetingComponent(user) {
        this.user = user;
        this.greeting = 'Enter PIN';
    }
    GreetingComponent.prototype.enter = function () {
        var _this = this;
        this.greeting = 'Processing...';
        this.pending = this.user.getGreeting().then(function (greeting) {
            _this.greeting = greeting;
        });
    };
    GreetingComponent = __decorate([
        core_1.Component({
            selector: 'my-greeting',
            template: "\n    <input [(ngModel)]=\"user.pin\" placeholder=\"1111\" type=\"number\"/>\n    <button (click)=\"enter()\">Enter</button>\n    <h3>Status: {{greeting}}</h3>\n  ",
            styles: ["\n    input {font-family: monospace; font-size: 2em; width: 4em}\n    button {border: 2px solid; height: 2em}\n  "]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], GreetingComponent);
    return GreetingComponent;
}());
exports.GreetingComponent = GreetingComponent;
//# sourceMappingURL=greeting-component.js.map