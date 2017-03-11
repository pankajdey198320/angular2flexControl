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
var grid_data_service_1 = require('./Service/grid-data.service');
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
        this.DataSrc = [];
        var ds = new grid_data_service_1.DataService();
        this.DataSrc = ds.getData();
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Hello {{name}}</h1>\n  <flex-grid [Data]=\"DataSrc\">\n    <flex-grid-column *TemplateRef  Title = 'name'><div>asdas</div></flex-grid-column>\n    <flex-grid-column *TemplateRef  Title = 'salary'>asdasd</flex-grid-column>\n  \n    <flex-grid-column *TemplateRef  Title = 'age'>asdasd</flex-grid-column>\n    <template></template>\n  </flex-grid>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map