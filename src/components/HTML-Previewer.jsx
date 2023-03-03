import React from "react";
import CodeMirror from "@uiw/react-codemirror"
import { langs } from '@uiw/codemirror-extensions-langs'
import { okaidia } from '@uiw/codemirror-theme-okaidia'
import { EditorView } from "codemirror"
import AppBar from "../shared/Appbar";

const HTMLPreviewer = () => {
	const onChange = React.useCallback((value, viewUpdate) => {
	}, []);
	return (
		<div className="html-previewer window">
			<AppBar sharable={false} header="HTML Editor" icon="fa-brands fa-html5" id="html-header-icon" />
			<CodeMirror 
				id="md-editor" 
				height="100%"
				className="display-section editor md-editor"  
				theme={okaidia}
				extensions={[langs.html(), EditorView.lineWrapping]}
			 />
		</div>
	)
}

export default HTMLPreviewer