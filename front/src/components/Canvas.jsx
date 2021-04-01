import React, {useEffect, useRef, useState} from 'react';
import "../style/canvas.scss"
import {observer} from "mobx-react-lite";
import CanvasState from '../store/canvasState';
import Brush from '../tools/Brush';
import toolState from '../store/toolState';
import canvasState from '../store/canvasState';

const Canvas = observer(() => {
    const canvasRef = useRef()

    useEffect(() => {
        CanvasState.setCanvas(canvasRef.current)
        toolState.setTool(new Brush(canvasRef.current))
    }, [])

    const mouseDownHandler = () => {
        canvasState.pushToUndo(canvasRef.current.toDataURL())
    }

    return (
        <div className="canvas">
            <canvas onMouseDown={() => mouseDownHandler()} ref={canvasRef} width={800} height={600}/>
        </div>
    );
});

export default Canvas;