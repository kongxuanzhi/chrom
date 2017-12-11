
function getTPoint(points, t) {
    let kmid = (pa, pb, t) => {
        return {
            x: (1-t) * pa.x + t * pb.x,
            y: (1-t) * pa.y + t * pb.y
        }
    }
    while(points.length > 1) {
        let newP = [];
        for(let p=0; p<points.length-1; p++) {
            let a = kmid(points[p], points[p+1], t);
            newP.push(a)
        }
        points = newP;
    }
    return points[0];
}