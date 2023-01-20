import React from "react";

const MarkdownEditor = () => {
	return (
		<div className="markdown-editor">
			<div className="markdown-editor-header-section">
				<header className="markdown-editor-header">
				<i className="fa-solid fa-pen-to-square"></i>
				<p>Markdown Editor</p>
				<i className="fa-solid fa-up-right-and-down-left-from-center"></i>
				</header>
			</div>
			<textarea id="editor"></textarea>
		</div>
	)
}

export default MarkdownEditor