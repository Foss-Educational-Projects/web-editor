// Import Ace Editor
import AceEditor from 'react-ace'

/* Import Ace Editor Colorscheme */
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/theme-twilight'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/theme-gruvbox_dark_hard'

/* Import Ace Editor Language */
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-lua'
import 'ace-builds/src-noconflict/mode-ruby'

// Import Zustand Store
import { store } from '../../store/store'

// Import Stylesheet
import './editor.component.scss'
import { useState, useEffect } from 'react'

// Root Component (Editor)
const Editor = () => {
    const useStore = store((state) => state)
    const [code, setCode] = useState('')
    const handleEditorSubmit = (value) => {
        useStore.captureEditorCode(value)
        localStorage.setItem('editor-code-value', value)
        setCode(value)
    }
    useEffect(() => {
        const userTypedData = localStorage.getItem('editor-code-value')
        setCode(userTypedData)
    }, [])

    return (
        <div className="container editor__main">
            <AceEditor
                enableLiveAutocompletion={useStore.snippets}
                enableBasicAutocompletion={useStore.snippets}
                enableSnippets={false}
                mode={useStore.language}
                theme={useStore.theme}
                value={code}
                height="100%"
                width="100%"
                onChange={handleEditorSubmit}
                tabSize={useStore.tabWidth}
                fontSize={parseInt(useStore.fontSize)}
                setOptions={{
                    fontFamily: `${useStore.fontFamily}, monospace`,
                    useSoftTabs: useStore.useSpace,
                }}
                wrapEnabled
                name="editor"
                editorProps={{ $blockScrolling: true }}
                className="ace__editor--main"
            />
            <form
                method="post"
                id="editor-form"
                action=""
                style={{ display: 'none' }}
                onSubmit={handleEditorSubmit}
            >
                <textarea
                    readOnly
                    name="editor_input"
                    value={code}
                    id="editor-form-textarea"
                ></textarea>
            </form>
        </div>
    )
}
export default Editor
