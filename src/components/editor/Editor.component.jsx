// Import Ace Editor
import AceEditor from 'react-ace'

/* Import Ace Editor Colorscheme */
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import 'ace-builds/src-noconflict/theme-gruvbox_dark_hard';

/* Import Ace Editor Language */
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";

// Import Zustand Store
import { store } from '../../store/store';

// Import Stylesheet
import './editor.component.scss';

// Root Component (Editor)
const Editor = () => {
    const useStore = store((prop) => prop)
    return (
        <div className='container editor__main'>
            <AceEditor
                enableLiveAutocompletion={useStore.snippets}
                mode={useStore.language}
                theme={useStore.themeing}
                height='100%'
                width='100%'
                fontSize={useStore.fontSize}
                name="editor"
                editorProps={{ $blockScrolling: true }}
                className='ace__editor--main'
            />
        </div>
    )
}
export default Editor;