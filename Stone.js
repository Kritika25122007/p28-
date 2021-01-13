class Stone{
    constructor(x,y,width,height){
        var option={
            isStatic:false,
            resitution:0,
            friction:1,
            dedensity:1.2
        }
        this.image = loadImage("Plucking mangoes/stone.png");
        this.body = Bodies.rectangle(x,y,width,height,option)
        this.body.scale=0.1
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        push();
        imageMode(CENTER);
        image(this.image, 150,400, this.width, this.height);
        rect(pos.x,pos.y,this.width,this.height)
        pop();
    }
}