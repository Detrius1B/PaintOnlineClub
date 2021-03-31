import '../style/toolbar.scss';

const Toolbar = () => {
    return (
        <div className="toolbar">
            <div className="toolbar__line">
                <button className="toolbar__btn brush" />
                <button className="toolbar__btn rect" />
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