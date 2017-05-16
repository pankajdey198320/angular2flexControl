"use strict";
var GridColumnModel = (function () {
    function GridColumnModel(Title, Value, ref, Type) {
        if (Value === void 0) { Value = 'DefaultValue'; }
        this.Title = Title;
        this.Value = Value;
        this.ref = ref;
        this.Type = Type;
    }
    return GridColumnModel;
}());
exports.GridColumnModel = GridColumnModel;
//# sourceMappingURL=grid-column.model.js.map