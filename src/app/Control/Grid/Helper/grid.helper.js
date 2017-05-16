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
var grid_context_model_1 = require('../Model/grid-context.model');
var GridHelper = (function () {
    function GridHelper() {
    }
    GridHelper.prototype.Sort = function (context, columnName) {
        if (context !== undefined && context !== null) {
            this.ToggleSort(context, columnName);
            context.sorting.SortColumn = columnName;
            context.Data = this.OrderByArray(context.Data, columnName, context.sorting.SortDirection);
        }
    };
    GridHelper.prototype.OrderByArray = function (values, orderType, sortDirection) {
        return values.sort(function (a, b) {
            var valLt = a[orderType];
            var valRt = b[orderType];
            if (typeof (valLt) === "string") {
                valLt = a[orderType].toLowerCase();
                valRt = b[orderType].toLowerCase();
            }
            if (sortDirection === grid_context_model_1.SortDirection.Asc) {
                if (valLt < valRt) {
                    return -1;
                }
                if (valLt > valRt) {
                    return 1;
                }
            }
            else if (sortDirection === grid_context_model_1.SortDirection.Desc) {
                if (valLt < valRt) {
                    return 1;
                }
                if (valLt > valRt) {
                    return -1;
                }
            }
            return 0;
        });
    };
    GridHelper.prototype.ToggleSort = function (context, columnName) {
        if (context.sorting.SortColumn === columnName)
            if (context.sorting.SortDirection === grid_context_model_1.SortDirection.Asc) {
                context.sorting.SortDirection = grid_context_model_1.SortDirection.Desc;
            }
            else {
                context.sorting.SortDirection = grid_context_model_1.SortDirection.Asc;
            }
        else {
            context.sorting.SortColumn = columnName;
            context.sorting.SortDirection = grid_context_model_1.SortDirection.Asc;
        }
    };
    GridHelper = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GridHelper);
    return GridHelper;
}());
exports.GridHelper = GridHelper;
//# sourceMappingURL=grid.helper.js.map