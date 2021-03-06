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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var grid_component_1 = require('./Control/Grid/grid.component');
var grid_column_1 = require('./Control/Grid/GridColumn/grid.column');
var grid_row_1 = require('./Control/Grid/Row/grid.row');
var g_col_1 = require('./Control/Grid/GridColumn/g.col');
var g_col_render_1 = require('./Control/Grid/GridColumn/g.col.render');
var testMyComp_1 = require('./testMyComp');
var grid_helper_1 = require('./Control/Grid/Helper/grid.helper');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [app_component_1.AppComponent, grid_component_1.Grid, grid_column_1.GridColumn, grid_row_1.GridRow, g_col_1.GriColDirective, g_col_render_1.RenderDirective, testMyComp_1.testMycomp],
            providers: [grid_helper_1.GridHelper],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map