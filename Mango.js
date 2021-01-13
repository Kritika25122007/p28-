class Mango{
    constructor(x,y){
        var option={
            isStatic:true,
            resitution:0,
            friction:1
        }
         this.image = loadImage("Plucking mangoes/mango.png");
        this.body = Bodies.circle(x,y,20,option)
        this.body.scale=0.1
        World.add(world,this.body);
    }
    
    display(){
        push();
        imageMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,20,20)
         pop();
    }
        

    }
