export var countFromTo = function (from, to, step) {
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
            countFromTo(from, to).for(function (index) { return output.push(cb(index)); });
            return output;
        },
        reduce: function (cb, initialValue) {
            var output = initialValue;
            countFromTo(from, to).for(function (index) { return output = cb(output, index); });
            return output;
        },
    };
};
export var count = function (countTo, step) {
    if (step === void 0) { step = 1; }
    return countFromTo(0, countTo, step);
};
//# sourceMappingURL=count.js.map