import toolState from '../store/toolState';
import '../style/toolbar.scss';

const SettingBar = () => {
    return (
        <div className="setting-bar">
            <label htmlFor="line-width">Line Width</label>
            <input
                onChange={e => toolState.setLineWidth(e.target.value)} 
                id="line-width" type="number" defaultValue={1} min={1} max={50}/>
            
            <label htmlFor="stroke-color">Stroke Color</label>
            <input onChange={e => toolState.setStrokeColor(e.target.value)} id="stroke-color" type="color"/>
        </div>
    );
};

export default SettingBar;