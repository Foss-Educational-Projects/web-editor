import React from "react";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import 'bootstrap/dist/css/bootstrap.min.css';

import AppBar from "../shared/Appbar";
const PagePreviewer = () => {
	const code = useSelector(state => state.editor.value)
	return (
		<div className="page-previewer window">
			<AppBar sharable={true} header="Previewer" icon="fa-solid fa-display" id="html-header-icon" styles={{gridTemplateColumns: "80px 1fr 120px"}} />
			<div className="display-section page-preview-display">
				<ReactMarkdown children={code} />
			</div>
		</div>
	)
}

export default PagePreviewer