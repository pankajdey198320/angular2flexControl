"use strict";
var GridUtil = (function () {
    function GridUtil() {
    }
    GridUtil.IsTrue = function (value) {
        if (value !== undefined && value.toString().toLowerCase() == "true") {
            return true;
        }
        return false;
    };
    return GridUtil;
}());
exports.GridUtil = GridUtil;
//# sourceMappingURL=grid.utils.js.map