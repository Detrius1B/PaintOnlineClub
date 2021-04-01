import CanvasState from '../store/canvasState';
import ToolState from '../store/toolState';
import Brush from '../tools/Brush'
import '../style/toolbar.scss';
import Rect from '../tools/Rect';
import Circle from '../tools/Circle';
import Eraser from '../tools/Eraser';
import Line from '../tools/Line';
import toolState from '../store/toolState';
import canvasState from '../store/canvasState';

const Toolbar = () => {

    const changeColor = e => {
        toolState.setStrokeColor(e.target.value)
        toolState.setFillColor(e.target.value)
    }

    return (
        <div className="toolbar">
            <div className="toolbar__line">
                <button className="toolbar__btn brush" onClick={() => ToolState.setTool(new Brush(CanvasState.canvas))}/>
                <button className="toolbar__btn rect" onClick={() => ToolState.setTool(new Rect(CanvasState.canvas))}/>
                <button className="toolbar__btn circle" onClick={() => ToolState.setTool(new Circle(CanvasState.canvas))}/>
                <button className="toolbar__btn eraser" onClick={() => ToolState.setTool(new Eraser(CanvasState.canvas))}/>
                <button className="toolbar__btn line" onClick={() => ToolState.setTool(new Line(CanvasState.canvas))}/>
                <input onChange={e => changeColor(e)} className="toolbar__color" type="color"/>
                <button className="toolbar__btn undo" onClick={() => canvasState.undo()}/>
                <button className="toolbar__btn redo" onClick={() => canvasState.redo()}/>
                <button className="toolbar__btn save" />
            </div>
        </div>
    );
};

export default Toolbar;