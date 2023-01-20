import React from "react";

const HTMLPreviewer = () => {
	const resizeWindow = (e) => {
		if(e.currentTarget.style.width != 100){
			e.currentTarget.style.width = "100";
		}
		else {
			
		}
		

	}
	return (
		<div className="html-previewer">
			<div className="html-previewer-header-section">
				<h1>HTML Previewer</h1>
			</div>
			<section className="previewer" id="preview"></section>
		</div>
	)
}

export default HTMLPreviewer