import React from "react"
import { basicSetup, EditorView } from "codemirror"
import { EditorState, Compartment } from "@codemirror/state"
import { javascript } from '@codemirror/lang-javascript'


const Editor = () => {
	//  Editor 
	const editor = document.getElementById("editor")
	let language = new Compartment, tabSize = new Compartment;
	let state = EditorState.create({
		extensions: [
			basicSetup,
			language.of(javascript()),
			tabSize.of(EditorState.tabSize.of(8)),
			EditorView.lineWrapping
		]
	})
	console.log("Rendered")
	let view = new EditorView({
		state,
		parent: editor
	})
	return (
		<div id="editor"></div>
	)
}
export default Editor;