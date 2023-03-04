// React Core Components
import React, { useState, useCallback , useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
// CodeMirror Components
import CodeMirror, { useCodeMirror  } from "@uiw/react-codemirror"
import { markdown } from '@codemirror/lang-markdown'
import { okaidia } from '@uiw/codemirror-theme-okaidia'
import { EditorView } from "codemirror"

// Custom Components
import AppBar from "../shared/Appbar"
import { setValue } from "../features/editorSlice"
const MarkdownEditor = () => {
	const dispatch = useDispatch();
	const HTMLValue = useSelector(state => state.editor.HTMLValue)
	const display = useRef(null)
	const container = useRef(null)
	const editor = useRef();
	const extensions = [markdown()];
	const { setContainer } = useCodeMirror({
		container: editor.current,
		extensions
	});
	const getContent = useCallback((value, viewUpdate) => {
		dispatch(setValue(value))
	})
	return (
		<div className="markdown-editor" ref={container}>
			<AppBar sharable={false} header="MD Editor" icon="fa-brands fa-markdown" id="html-header-icon" />
			<CodeMirror 
				id="md-editor"
				value={HTMLValue}
				height="100%"
				className="display-section editor md-editor" 
				ref={display} 
				theme={okaidia}
				extensions={[EditorView.lineWrapping]}
				onChange={getContent}
			/>
		</div>
	)
}

export default MarkdownEditor