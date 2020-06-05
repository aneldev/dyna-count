"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.count = exports.countFromTo = void 0;
exports.countFromTo = function (from, to) {
    return {
        for: function (cb) {
            for (var index = from; index < to; index++)
                cb(index);
        },
        map: function (cb) {
            var output = [];
            exports.countFromTo(from, to).for(function (index) { return output.push(cb(index)); });
            return output;
        },
    };
};
exports.count = function (countTo) { return exports.countFromTo(0, countTo); };
//# sourceMappingURL=count.js.map