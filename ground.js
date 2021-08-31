class ground
{
    constructor(x,y,w,h)
    {
        let options = {
            isStatic: true
        };

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }

    show(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        stroke(255);
        fill("yellow");
        rect(0,0,this.w,this.h);
        pop();

    }


    
}