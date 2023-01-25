import React, { useState, useRef } from "react";

const MarkdownEditor = (props) => {
	const display = useRef(null)
	const container = useRef(null)

	const [scale, setScale] = useState(true);
	const [close, setClose] = useState(true);
	const scaleWindow = (e) => {
		(scale ? setScale(false): setScale(true))
		scale ? e.target.className = "fa-solid fa-down-left-and-up-right-to-center" : 
		e.target.className = "fa-solid fa-up-right-and-down-left-from-center"
	}
	const minimizeWindow = (e) => {
		(close ? setClose(false): setClose(true))
		close ? e.target.style.transform = "rotateZ(180deg)" : e.target.style.transform = "rotateZ(0deg)"
		close ? display.current.style.height = "0px" : display.current.style.height = "100%";
		close ? props.containerRef.current.style.grid = "auto" : 
		props.containerRef.current.style.height = "100%";
	}
	return (
		<div className="markdown-editor" ref={container}>
			<div className="header-section">
				<header className="header">
					<i className="fa-brands fa-markdown header-icon" id="markdown-header-icon"></i>
					<p>Markdown Editor</p>
					<div className="button-container">
						<button className="scale-window" id="scale" onClick={scaleWindow}>
							<i className="fa-solid fa-up-right-and-down-left-from-center"></i>
						</button>
						<button className="minimize-window" id="minimize" onClick={minimizeWindow}>
							<i className="fa-solid fa-angle-up"></i>
						</button>
					</div>
				</header>
			</div>
			<textarea id="editor" className="display-section editor" ref={display}></textarea>
		</div>
	)
}

export default MarkdownEditor