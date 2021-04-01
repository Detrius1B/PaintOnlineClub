import React, {useEffect, useRef, useState} from 'react';
import "../style/canvas.scss"
import {observer} from "mobx-react-lite";
import CanvasState from '../store/canvasState';
// import ToolState from '../store/toolState';
import Brush from '../tools/Brush';
import toolState from '../store/toolState';

const Canvas = observer(() => {
    const canvasRef = useRef()

    useEffect(() => {
        CanvasState.setCanvas(canvasRef.current)
        // ToolState.setTool(new Brush(canvasRef.current))
        toolState.setTool(new Brush(canvasRef.current))
    }, [])

    return (
        <div className="canvas">
            <canvas ref={canvasRef} width={800} height={600}/>
        </div>
    );
});

export default Canvas;