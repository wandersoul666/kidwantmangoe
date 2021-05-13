class slingshot{

//kidthrowing
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

//attached to point b as in boys hand
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
//reset 
    attach(body){
        this.sling.bodyA = body;
    }
    
//stone flying
    fly(){
        this.sling.bodyA = null;
    }

    
//display
    display(){
       
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
               
            }
            pop();
        }
    }
    
}