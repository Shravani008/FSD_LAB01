class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

let myRectangle = new Rectangle(5, 10);
console.log(myRectangle.area());
