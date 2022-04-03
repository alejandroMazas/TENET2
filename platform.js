class Platform{
    constructor(ctx,gameSizeWidth, gameSizeHeight){
        this.ctx=ctx
        this.gameSize={w:gameSizeWidth, h:gameSizeHeight}
    }
    drawPlatform(){
        this.ctx.fillStyle='black'
        // borde inferior
        this.ctx.fillRect(0, this.gameSize.h - this.gameSize.h/20,this.gameSize.w,this.gameSize.h/20)
        // borde superior
        this.ctx.fillRect(0, 0,this.gameSize.w,this.gameSize.h/20)
        // borde izquierdo
        this.ctx.fillRect(0, 0, this.gameSize.h/20,this.gameSize.w)
        // borde derecho
        this.ctx.fillRect(this.gameSize.w-this.gameSize.h/20, 0,this.gameSize.h/20,this.gameSize.h)
        // plataforma 1
        this.ctx.fillRect(this.gameSize.w/3, 3*this.gameSize.h/4 - this.gameSize.h/20,2*this.gameSize.w/3,this.gameSize.h/20)
        // plataforma 2
        this.ctx.fillRect(0, 2*this.gameSize.h/4 - this.gameSize.h/20,2*this.gameSize.w/3,this.gameSize.h/20)
        // plataforma 3
        this.ctx.fillRect(this.gameSize.w/3, this.gameSize.h/4 - this.gameSize.h/20,2*this.gameSize.w/3,this.gameSize.h/20)
    }
}