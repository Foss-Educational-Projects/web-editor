import './playground.component.scss';
import Editor from '../editor/Editor.component';
import Preview from '../preview/Preview.component';


const Playground = () => {
    return (
        <div className="playground__main">
            <Editor />
            <Preview />
        </div>
    )
}
export default Playground;