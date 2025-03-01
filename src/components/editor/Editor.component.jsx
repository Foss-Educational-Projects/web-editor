import AceEditor from 'react-ace'

import './editor.component.scss';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import 'ace-builds/src-noconflict/theme-gruvbox_dark_hard';

const Editor = () => {
    return (
        <div className='container editor__main'>
            <AceEditor
                enableLiveAutocompletion
                mode="javascript"
                theme="gruvbox_dark_hard"
                height='100%'
                width='100%'
                // onChange={onChange}
                name="editor"
                editorProps={{ $blockScrolling: true }}
                className='ace__editor__main'
            />
        </div>
    )
}
export default Editor;