"use strict";

function getTPoint(points, t) {
    var kmid = function kmid(pa, pb, t) {
        return {
            x: (1 - t) * pa.x + t * pb.x,
            y: (1 - t) * pa.y + t * pb.y
        };
    };
    while (points.length > 1) {
        var newP = [];
        for (var p = 0; p < points.length - 1; p++) {
            var a = kmid(points[p], points[p + 1], t);
            newP.push(a);
        }
        points = newP;
    }
    return points[0];
}