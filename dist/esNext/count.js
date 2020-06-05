export var countFromTo = function (from, to) {
    return {
        for: function (cb) {
            for (var index = from; index < to; index++)
                cb(index);
        },
        map: function (cb) {
            var output = [];
            countFromTo(from, to).for(function (index) { return output.push(cb(index)); });
            return output;
        },
    };
};
export var count = function (countTo) { return countFromTo(0, countTo); };
//# sourceMappingURL=count.js.map