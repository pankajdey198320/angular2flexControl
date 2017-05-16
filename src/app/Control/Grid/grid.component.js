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
var grid_context_model_1 = require('./Model/grid-context.model');
var grid_style_model_1 = require('./model/grid-style.model');
var grid_helper_1 = require('./Helper/grid.helper');
var grid_column_model_1 = require('./Model/grid-column.model');
var grid_data_row_model_1 = require('./Model/grid-data-row.model');
var g_col_1 = require('./GridColumn/g.col');
var Grid = (function () {
    function Grid(hlper) {
        this.hlper = hlper;
        this.styles = null;
        this.gridColumnModels = [];
        this._data = [];
        ///All events to host components
        this.selected = new core_1.EventEmitter();
        this.sorted = new core_1.EventEmitter();
        this.context = new grid_context_model_1.GridContextModel();
        this.context.sorting = new grid_context_model_1.Sorting();
        this.context.sorting.IsClientSide = true;
        this.context.sorting.SortColumn = 'name';
        this.context.sorting.SortDirection = grid_context_model_1.SortDirection.Asc;
        this.context.paging.PageSize = 10;
        this.styles = new grid_style_model_1.GridStyle();
        this.styles.baseClassName = 'flex-grid';
        this.EnableSelectCheckbox = false;
    }
    Object.defineProperty(Grid.prototype, "Data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            var _this = this;
            data.forEach(function (element, inx) {
                var x = new grid_data_row_model_1.DataRowModel();
                x = element;
                x.index = inx;
                x.selected = false;
                _this._data.push(x);
            });
            this.context.Data = this._data;
            // this._data = data;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Grid.prototype, "StyleClass", {
        set: function (val) {
            if (val != undefined && val.length > 0) {
                this.styles.baseClassName = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Grid.prototype.ngAfterContentInit = function () {
        var _this = this;
        // contentChildren is set
        this.cra.forEach(function (item, idx) {
            var gm = new grid_column_model_1.GridColumnModel(item.col_name, item.Value, item.templateRef, item.Type);
            _this.gridColumnModels.push(gm);
        });
        var x = this.cra;
    };
    Grid.prototype.select = function (item) {
        var selectedArr = this._data.filter(function (v) { return v.selected == true; });
        selectedArr.forEach(function (v) { return v.selected = false; });
        item.selected = true;
        this.selected.emit(item);
    };
    Grid.prototype.SelectAll = function () {
        this._data.forEach(function (v) { return v.selected = true; });
    };
    Grid.prototype.SortClick = function (columnName) {
        if (this.context.sorting.IsClientSide !== true) {
            this.sorted.emit(this.context);
        }
        else {
            this.hlper.Sort(this.context, columnName);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], Grid.prototype, "Data", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], Grid.prototype, "StyleClass", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Grid.prototype, "EnableSelectCheckbox", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Grid.prototype, "selected", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Grid.prototype, "sorted", void 0);
    __decorate([
        core_1.ContentChildren(g_col_1.GriColDirective), 
        __metadata('design:type', core_1.QueryList)
    ], Grid.prototype, "cra", void 0);
    Grid = __decorate([
        core_1.Component({
            selector: 'flex-grid',
            templateUrl: '/app/control/Grid/grid.template.html',
            styleUrls: ['./app/Control/Grid/Style/basic.style.css']
        }), 
        __metadata('design:paramtypes', [grid_helper_1.GridHelper])
    ], Grid);
    return Grid;
}());
exports.Grid = Grid;
//# sourceMappingURL=grid.component.js.map