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
var testing_1 = require('@angular/core/testing');
var core_1 = require('@angular/core');
var border_component_1 = require('../app/border-component');
var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent = __decorate([
        core_1.Component({
            template: '',
            directives: [border_component_1.BorderComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
describe('greeting component', function () {
    it('should wrap content', testing_1.async(testing_1.inject([testing_1.TestComponentBuilder], function (tcb) {
        tcb.overrideTemplate(TestComponent, '<my-fancy-border>Content</my-fancy-border>')
            .createAsync(TestComponent).then(function (fixture) {
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;
            expect(compiled).toContainText('Content');
        });
    })));
    it('should include a title', testing_1.async(testing_1.inject([testing_1.TestComponentBuilder], function (tcb) {
        tcb.overrideTemplate(TestComponent, '<my-fancy-border title="ABC"></my-fancy-border>')
            .createAsync(TestComponent).then(function (fixture) {
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;
            expect(compiled).toContainText('ABC');
        });
    })));
});
//# sourceMappingURL=border-component_test.js.map