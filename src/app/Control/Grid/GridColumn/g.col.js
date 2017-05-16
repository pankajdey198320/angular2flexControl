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
var grid_column_type_model_1 = require('../Model/grid-column-type.model');
var GriColDirective = (function () {
    function GriColDirective(templateRef, viewContainerRef) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.col_name = '';
    }
    Object.defineProperty(GriColDirective.prototype, "colP", {
        set: function (columnName) {
            this.col_name = columnName;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], GriColDirective.prototype, "colP", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], GriColDirective.prototype, "Type", void 0);
    GriColDirective = __decorate([
        core_1.Directive({
            selector: '[colP]'
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef])
    ], GriColDirective);
    return GriColDirective;
}());
exports.GriColDirective = GriColDirective;
//# sourceMappingURL=g.col.js.map