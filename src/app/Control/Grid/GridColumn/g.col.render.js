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
var RenderDirective = (function () {
    function RenderDirective(templateRef, viewContainerRef) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
    }
    Object.defineProperty(RenderDirective.prototype, "render", {
        set: function (ref) {
            this.viewContainerRef.createEmbeddedView(ref);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', core_1.TemplateRef), 
        __metadata('design:paramtypes', [core_1.TemplateRef])
    ], RenderDirective.prototype, "render", null);
    RenderDirective = __decorate([
        core_1.Directive({
            selector: '[render]'
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef])
    ], RenderDirective);
    return RenderDirective;
}());
exports.RenderDirective = RenderDirective;
//# sourceMappingURL=g.col.render.js.map