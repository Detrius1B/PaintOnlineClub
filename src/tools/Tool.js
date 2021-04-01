export default class Tool {
    constructor(canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
        this.destroyEvents()
    }

    destroyEvents() { // заканычиваем функции, чтобы убрать слушатели при изменении инструмента
        this.canvas.onmouseup = null
        this.canvas.onmousedown = null
        this.canvas.onmousemove = null
    }
}