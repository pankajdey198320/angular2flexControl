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
var AngularDefinations_1 = require('./Definations/AngularDefinations');
var ModelDefinations_1 = require('./Definations/ModelDefinations');
var CommonDefinations_1 = require("./Definations/CommonDefinations");
var g_col_1 = require('./GridColumn/g.col');
var Grid = (function () {
    function Grid(hlper) {
        this.hlper = hlper;
        this.styles = null;
        this.gridColumnModels = [];
        this._data = [];
        ///All events to host components
        this.selected = new AngularDefinations_1.EventEmitter();
        this.sorted = new AngularDefinations_1.EventEmitter();
        this.context = new ModelDefinations_1.GridContextModel();
        this.context.sorting = new ModelDefinations_1.Sorting();
        this.context.sorting.IsClientSide = true;
        this.context.sorting.SortColumn = 'name';
        this.context.sorting.SortDirection = ModelDefinations_1.SortDirection.Asc;
        this.context.paging.PageSize = 10;
        this.styles = new ModelDefinations_1.GridStyle();
        this.styles.baseClassName = 'flex-grid';
        this.EnableSelectCheckbox = false;
        this.EnableMultiSelection = false;
    }
    Object.defineProperty(Grid.prototype, "Data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            var _this = this;
            data.forEach(function (element, inx) {
                var x = new ModelDefinations_1.DataRowModel();
                Object.assign(x, element);
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
    Object.defineProperty(Grid.prototype, "EnableMultiSelection", {
        get: function () {
            return this._enableMultiSelect;
        },
        set: function (val) {
            this._enableMultiSelect = val;
        },
        enumerable: true,
        configurable: true
    });
    Grid.prototype.ngAfterContentInit = function () {
        var _this = this;
        // contentChildren is set
        this.cra.forEach(function (item, idx) {
            var gm = new ModelDefinations_1.GridColumnModel(item.col_name, item.Value, item.templateRef, item.Type);
            _this.gridColumnModels.push(gm);
        });
    };
    Grid.prototype.select = function (item) {
        var selectedArr = this._data.filter(function (v) { return v.selected == true; });
        if (!(CommonDefinations_1.GridUtil.IsTrue(this.EnableSelectCheckbox) && CommonDefinations_1.GridUtil.IsTrue(this._enableMultiSelect)))
            selectedArr.forEach(function (v) { return v.selected = false; });
        item.selected = true;
        this.selected.emit(item);
    };
    Grid.prototype.SelectAll = function (e) {
        if (e.target != undefined && e.target.checked)
            this._data.forEach(function (v) { return v.selected = true; });
        else
            this._data.forEach(function (v) { return v.selected = false; });
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
        AngularDefinations_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], Grid.prototype, "Data", null);
    __decorate([
        AngularDefinations_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], Grid.prototype, "StyleClass", null);
    __decorate([
        AngularDefinations_1.Input(), 
        __metadata('design:type', Boolean)
    ], Grid.prototype, "EnableSelectCheckbox", void 0);
    __decorate([
        AngularDefinations_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], Grid.prototype, "EnableMultiSelection", null);
    __decorate([
        AngularDefinations_1.Output(), 
        __metadata('design:type', AngularDefinations_1.EventEmitter)
    ], Grid.prototype, "selected", void 0);
    __decorate([
        AngularDefinations_1.Output(), 
        __metadata('design:type', AngularDefinations_1.EventEmitter)
    ], Grid.prototype, "sorted", void 0);
    __decorate([
        AngularDefinations_1.ContentChildren(g_col_1.GriColDirective), 
        __metadata('design:type', AngularDefinations_1.QueryList)
    ], Grid.prototype, "cra", void 0);
    Grid = __decorate([
        AngularDefinations_1.Component({
            selector: 'flex-grid',
            templateUrl: '/app/control/Grid/grid.template.html',
            styleUrls: ['./app/Control/Grid/Style/basic.style.css']
        }), 
        __metadata('design:paramtypes', [CommonDefinations_1.GridHelper])
    ], Grid);
    return Grid;
}());
exports.Grid = Grid;
//# sourceMappingURL=grid.component.js.map