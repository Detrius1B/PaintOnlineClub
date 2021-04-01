import CanvasState from '../store/canvasState';
import ToolState from '../store/toolState';
import Brush from '../tools/Brush'
import '../style/toolbar.scss';
import Rect from '../tools/Rect';

const Toolbar = () => {
    return (
        <div className="toolbar">
            <div className="toolbar__line">
                <button className="toolbar__btn brush" onClick={() => ToolState.setTool(new Brush(CanvasState.canvas))}/>
                <button className="toolbar__btn rect" onClick={() => ToolState.setTool(new Rect(CanvasState.canvas))}/>
                <button className="toolbar__btn circle" />
                <button className="toolbar__btn eraser" />
                <button className="toolbar__btn line" />
                <input className="toolbar__color" type="color"/>
                <button className="toolbar__btn undo" />
                <button className="toolbar__btn redo" />
                <button className="toolbar__btn save" />
            </div>
        </div>
    );
};

export default Toolbar;