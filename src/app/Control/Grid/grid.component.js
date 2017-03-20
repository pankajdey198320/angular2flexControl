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
var grid_column_model_1 = require('./Model/grid-column.model');
var Grid = (function () {
    function Grid(cr) {
        this.cr = cr;
        this.gridColumnModels = [];
        this.Data = [];
        // this.Data.push({index:0,fileds:
        //   [{fieldName:'Name',filedValue:'Pankaj Dey' },
        //   {fieldName:'salary',filedValue:'3300' },
        //   {fieldName:'Age',filedValue:'33' }]});
        // this.Data.push({index:0,
        //   fileds:[{fieldName:'Name',filedValue:'Rahul' },
        //   {fieldName:'salary',filedValue:'343' },
        //   {fieldName:'Age',filedValue:'22' }]});
        // this.Data.push({index:0,fileds:[{fieldName:'Name',filedValue:'Prateek' },{fieldName:'salary',filedValue:'2342' },{fieldName:'Age',filedValue:'45' }]});
    }
    Grid.prototype.ngAfterContentInit = function () {
        var _this = this;
        // contentChildren is set
        this.contentChildren.forEach(function (item, idx) {
            _this.gridColumnModels.push(new grid_column_model_1.GridColumnModel(item.Title, item.Value, item));
            //this.cr.createEmbeddedView(item,null,null);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Grid.prototype, "Data", void 0);
    __decorate([
        core_1.ContentChildren(core_1.TemplateRef), 
        __metadata('design:type', core_1.QueryList)
    ], Grid.prototype, "contentChildren", void 0);
    Grid = __decorate([
        core_1.Component({
            selector: 'flex-grid',
            templateUrl: '/app/control/Grid/grid.template.html'
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], Grid);
    return Grid;
}());
exports.Grid = Grid;
//# sourceMappingURL=grid.component.js.map