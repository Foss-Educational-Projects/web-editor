import React from "react";

const PagePreviewer = () => {
	return (
		<div className="page-previewer window">
			<div className="header-section">
				<header className="header">
					<i className="fa-solid fa-display header-icon" id="markdown-header-icon"></i>
					<p>Preview</p>
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
			<div className="display-section page-preview-display"></div>
		</div>
	)
}

export default PagePreviewer