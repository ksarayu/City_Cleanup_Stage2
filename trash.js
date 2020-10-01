class TrashRects{
    constructor(x,y,width,height){
        var options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);

        this.visibility = 225;
        this.width = width;
        this.height = height;
    }
    display(){
        rectMode(CENTER);
        var pos = this.body.position;
        fill("white");
        rect(pos.x, pos.y, this.width, this.height);
    }
}