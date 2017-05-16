"use strict";
var Paging = (function () {
    function Paging() {
        this.Enabled = true;
    }
    return Paging;
}());
(function (SortDirection) {
    SortDirection[SortDirection["Asc"] = 0] = "Asc";
    SortDirection[SortDirection["Desc"] = 1] = "Desc";
})(exports.SortDirection || (exports.SortDirection = {}));
var SortDirection = exports.SortDirection;
var Sorting = (function () {
    function Sorting() {
        this.IsClientSide = false;
    }
    return Sorting;
}());
exports.Sorting = Sorting;
var GridContextModel = (function () {
    function GridContextModel() {
        this.paging = new Paging();
        this.sorting = new Sorting();
    }
    return GridContextModel;
}());
exports.GridContextModel = GridContextModel;
//# sourceMappingURL=grid-context.model.js.map