var Shape;
(function (Shape) {
    var PI = Math.PI;
    function circle(r) {
        return PI * Math.pow(r, 2);
    }
    Shape.circle = circle;
})(Shape || (Shape = {}));
