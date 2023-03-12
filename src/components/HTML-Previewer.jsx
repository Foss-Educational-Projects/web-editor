import { useSelector } from "react-redux";

import CodeMirror from "@uiw/react-codemirror"
import { okaidia } from '@uiw/codemirror-theme-okaidia'
import { EditorView } from "codemirror"
import { html } from '@codemirror/lang-html'
import AppBar from "../shared/Appbar";

const HTMLPreviewer = () => {

	const value = useSelector(state => state.editor.value) 
	return (
		<div className="html-previewer window">
			<AppBar sharable={false} header="HTML Preview" icon="fa-brands fa-html5" id="html-header-icon" />
			<CodeMirror 
				id="md-editor" 
				height="100%"
				value={value}
				className="display-section editor md-editor"
				theme={okaidia}
				readOnly={true}
				extensions={[html(), EditorView.lineWrapping]}
			 />
		</div>
	)
}

export default HTMLPreviewer