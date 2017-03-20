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
var GridColumn = (function () {
    function GridColumn(cr, componentResolver) {
        // this.componentResolver.resolveComponentFactory()
        this.cr = cr;
        this.componentResolver = componentResolver;
        this.Value = 'DefaultValue';
    }
    GridColumn.prototype.ngOnInit = function () {
        //  let x= this.cr.createEmbeddedView(this.ref,null,0);
        //x.context = this.data;
        //Need to create directive to apply  dynamic content.
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], GridColumn.prototype, "Title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', core_1.TemplateRef)
    ], GridColumn.prototype, "ref", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], GridColumn.prototype, "data", void 0);
    GridColumn = __decorate([
        core_1.Component({
            selector: 'flex-grid-column',
            template: "<td>\n     <template [ngTemplateOutlet]=\"ref\" [ngOutletContext]=\"data\"></template>\n\n    </td>\n    "
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.ComponentFactoryResolver])
    ], GridColumn);
    return GridColumn;
}());
exports.GridColumn = GridColumn;
//# sourceMappingURL=grid.column.js.map