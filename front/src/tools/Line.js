import Tool from "./Tool";

export default class Line extends Tool {
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
        this.currentX = e.pageX - e.target.offsetLeft;
        this.currentY = e.pageY - e.target.offsetTop;
        this.ctx.beginPath() // говорит о том что начали рисковать новую линию
        this.ctx.moveTo(this.currentX, this.currentY) // перемещение курсор -> получение X Y
        this.saved = this.canvas.toDataURL(); // сохраняем изображение с канваса
    }

    mouseMoveHandler(e) {
        if (this.mouseDown) {
            this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
        }
    }

    draw(x, y) {
        const img = new Image();
        img.src = this.saved;
        img.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()
            this.ctx.moveTo(this.currentX, this.currentY);
            this.ctx.lineTo(x, y);
            this.ctx.stroke();
        }
        console.log('line');
    }
}