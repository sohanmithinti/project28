class Slingshot{
    constructor(bodyA, point2){
        var options = {
            bodyA: bodyA,
            pointB: point2,
            stiffness: 0.04,
            length: 10
        }
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }

    display(){
        if (this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.slingshot.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    fly(){
        this.slingshot.bodyA = null;
    }
}