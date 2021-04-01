import Tool from "./Tool";

export default class Brush extends Tool {
    constructor(canvas) {
        super(canvas) // вызывает конструктор родительского класса
        this.listen() // после создания объекта, канвас будет слушать все эти функции
    }

    listen() {
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
    }

    mouseUpHandler(e) {
        this.mouseDown = false
    }

    mouseDownHandler(e) {
        this.mouseDown = true
        this.ctx.beginPath() // говорит о том что начали рисковать новую линию
        this.ctx.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop) // перемещение курсор -> получение X Y
    }

    mouseMoveHandler(e) {
        if (this.mouseDown) {
            this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
        }
    }

    draw(x, y) {
        this.ctx.lineTo(x, y)
        this.ctx.stroke()
        console.log('ee');
    }
}