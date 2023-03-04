import React from "react";
import { useDispatch } from "react-redux";

import CodeMirror from "@uiw/react-codemirror"
import { okaidia } from '@uiw/codemirror-theme-okaidia'
import { EditorView } from "codemirror"
import { html } from '@codemirror/lang-html'
import TurndownService from "turndown";
import AppBar from "../shared/Appbar";

import { setHTMLValue } from "../features/editorSlice";

const HTMLPreviewer = () => {
	const turnDownService = new TurndownService()

	const dispatch = useDispatch()
	const getHTMLValue = React.useCallback((value, viewUpdate) => {
		const transformedHTML = turnDownService.turndown(value)
		dispatch(setHTMLValue(transformedHTML))
	}, []);
	return (
		<div className="html-previewer window">
			<AppBar sharable={false} header="HTML Editor" icon="fa-brands fa-html5" id="html-header-icon" />
			<CodeMirror 
				id="md-editor" 
				height="100%"
				className="display-section editor md-editor"
				theme={okaidia}
				extensions={[html(), EditorView.lineWrapping]}
				onChange={getHTMLValue}
			 />
		</div>
	)
}

export default HTMLPreviewer