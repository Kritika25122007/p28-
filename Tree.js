class Tree{
    constructor(x,y,width,height){
        var option = {
            isStatic:true
        }
        
      this.image = loadImage("Plucking mangoes/tree.png");
        this.body = Bodies.rectangle(x,y,width,height,option)
        this.body.scale=0.1
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position
        push();
        imageMode(CENTER);
        image(this.image,650,600, this.width, this.height);
        rect(pos.x,pos.y,this.width,this.height)
        pop();
    }
}