"use strict";
var GridColumnModel = (function () {
    function GridColumnModel(Title, Value, ref) {
        if (Value === void 0) { Value = 'DefaultValue'; }
        this.Title = Title;
        this.Value = Value;
        this.ref = ref;
    }
    return GridColumnModel;
}());
exports.GridColumnModel = GridColumnModel;
//# sourceMappingURL=grid-column.model.js.map