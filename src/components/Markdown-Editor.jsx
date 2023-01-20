import React from "react";

const MarkdownEditor = () => {
	return (
		<div className="markdown-editor">
			<div className="markdown-editor-header-section">
				<header className="markdown-editor-header">
					<i className="fa-solid fa-pen-to-square" id="markdown-header-icon"></i>
					<p>Markdown Editor</p>
					<button className="scale-window-icon">
						<i className="fa-solid fa-up-right-and-down-left-from-center"></i>
					</button>
				</header>
			</div>
			<textarea rows={15} id="editor"></textarea>
		</div>
	)
}

export default MarkdownEditor