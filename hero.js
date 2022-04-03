class Hero{
    constructor(ctx,heroPosX,heroPosY,heroWidth,heroHeight,heroSpeedX,heroSpeedY){
        this.ctx=ctx
        this.heroPos={x:heroPosX, y:heroPosY}
        this.heroSize={w:heroWidth,h:heroHeight}
        this.heroSpeed={x:heroSpeedX, y:heroSpeedY}
        this.bullets=[]
        
        this.heroGravity=0.4
    }
    drawHero(t){
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.heroPos.x,this.heroPos.y,this.heroSize.w,this.heroSize.h)
        this.moveRight()
        this.moveLeft()
        this.bullets.forEach(eachBullet=> eachBullet.drawBullet())
        this.jump(t)
        
    }

    moveRight(){
            this.heroPos.x+=this.heroSpeed.x
    }
    moveLeft(){
            this.heroPos.x-=this.heroSpeed.x
    }
    
    jump(t){
        t=0
        this.heroSpeed.y = 10
        if(t>=0 && t<1) this.moveUp()
        if(t>=1 && t<2) this.moveDown()

        }
    
    moveUp(){
    this.heroSpeed.y*=this.heroGravity
    this.heroPos.y-= this.heroSpeed.y

}
    moveDown(){
        this.heroSpeed.y/=this.heroGravity
        this.heroPos.y+=this.heroSpeed.y

}
   shoot(){
       this.bullets.push(new Bullet(this.ctx, this.heroPos.x,this.heroPos.y, 30, 40, 20))
   }
    
}