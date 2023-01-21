import React, { useState, useRef } from "react";

const MarkdownEditor = () => {
	const [scale, setScale] = useState(false);
	const scaleWindow = () => {
		(scale ? setScale(false): setScale(true))
		console.log(scale)
	}
	return (
		<div className="markdown-editor">
			<div className="markdown-editor-header-section">
				<header className="markdown-editor-header">
					<i className="fa-solid fa-pen-to-square" id="markdown-header-icon"></i>
					<p>Markdown Editor</p>
					<div className="button-container">
						<button className="scale-window" id="scale" onClick={scaleWindow}>
							<i className="fa-solid fa-up-right-and-down-left-from-center"></i>
						</button>
						<button className="minimize-window" id="minimize">
							<i className="fa-solid fa-minus"></i>
						</button>
					</div>
				</header>
			</div>
			<textarea id="editor" className="editor"></textarea>
		</div>
	)
}

export default MarkdownEditor