import React from "react";

const HTMLPreviewer = () => {
	return (
		<div className="html-previewer window">
			<div className="header-section">
				<header className="header">
					<i className="fa-brands fa-html5 header-icon" id="markdown-header-icon"></i>
					<p>HTML Editor</p>
					<div className="button-container">
						<button className="scale-window" id="scale">
							<i className="fa-solid fa-up-right-and-down-left-from-center"></i>
						</button>
						<button className="minimize-window" id="minimize">
							<i className="fa-solid fa-minus"></i>
						</button>
					</div>
				</header>
			</div>
			<textarea id="editor" className="display-section editor"></textarea>
		</div>
	)
}

export default HTMLPreviewer