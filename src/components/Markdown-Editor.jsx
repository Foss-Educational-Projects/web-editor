// React Core Components
import React, { useState, useEffect, useCallback , useRef } from "react"
import { useDispatch } from "react-redux"

// CodeMirror Components
import CodeMirror, { useCodeMirror } from "@uiw/react-codemirror"
import { okaidia } from '@uiw/codemirror-theme-okaidia'
import { EditorView } from "codemirror"
import  * as md from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import markdown from '@wcj/markdown-to-html'

// Custom Components
import AppBar from "../shared/Appbar"
import { setValue } from "../features/editorSlice"

const MarkdownEditor = () => {
	const [state, setState] = useState("");
	const dispatch = useDispatch();
	const display = useRef(null)
	const container = useRef(null)
	const editor = useRef();
	const extensions = [EditorView.lineWrapping, md.markdown({base: md.markdownLanguage, codeLanguages: languages})];
	useCodeMirror({
		container: editor.current,
		extensions
	});
	const getContent = useCallback((value, _) => {
		
		let data = markdown(value)
		dispatch(setValue(data))
		console.log(typeof(data))
		localStorage.setItem("md-editor-text", value)
	})
	useEffect(() => {
		let val = localStorage.getItem("md-editor-text")
		let data = markdown(val)
		setState(`${val}`)
		dispatch(setValue(data))
	}, [])
	return (
		<div className="markdown-editor" ref={container}>
			<AppBar sharable={false} header="MD Editor" icon="fa-brands fa-markdown" id="html-header-icon" />
			<CodeMirror 
				id="md-editor"
				height="100%"
				value={state}
				className="display-section editor md-editor" 
				ref={display} 
				theme={okaidia}
				extensions={extensions}
				onChange={getContent}
			/>
		</div>
	)
}

export default MarkdownEditor