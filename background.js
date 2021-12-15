export default class Background {
    constructor() {

    }

    isColliding(obj1, obj2) {
        let y1 = obj1.maxY;
        let y2 = obj2.minY;
        if (y1 > y2 && y1 <= y2 + y2Height) {
            y1 = y2 - y2Height;
        }
        return y1;
    }
}