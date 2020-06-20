"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.count = exports.countFromTo = void 0;
exports.countFromTo = function (from, to, step) {
    if (step === void 0) { step = 1; }
    return {
        for: function (cb) {
            var _loop_1 = function (index) {
                var shouldBreak = false;
                var cbBreak = function () { return shouldBreak = true; };
                cb(index, cbBreak);
                if (shouldBreak)
                    return "break";
            };
            for (var index = from; index < to; index += step) {
                var state_1 = _loop_1(index);
                if (state_1 === "break")
                    break;
            }
        },
        map: function (cb) {
            var output = [];
            exports.countFromTo(from, to).for(function (index) { return output.push(cb(index)); });
            return output;
        },
        reduce: function (cb, initialValue) {
            var output = initialValue;
            exports.countFromTo(from, to).for(function (index) { return output = cb(output, index); });
            return output;
        },
    };
};
exports.count = function (countTo, step) {
    if (step === void 0) { step = 1; }
    return exports.countFromTo(0, countTo, step);
};
//# sourceMappingURL=count.js.map