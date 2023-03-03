import React from "react";
import { useState, useRef } from "react";
import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const PagePreviewer = () => {
	return (
		<div className="page-previewer window">
			<div className="header-section">
				<header className="page-previewer-header header">
					<i className="fa-solid fa-display header-icon" id="markdown-header-icon"></i>
					<p>Preview</p>
					<div className="button-container">
						<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Preview</Tooltip>}>
							<button  
								className="minimize-window" 
								id="minimize" 
							>
								<i className="fa-solid fa-arrow-up-right-from-square"></i>
							</button>
						</OverlayTrigger>

						<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Scale</Tooltip>}>
							<button 
								className="scale-window" 
								id="scale"
							>
								<i className="fa-solid fa-up-right-and-down-left-from-center"></i>
							</button>
						</OverlayTrigger>
						
						<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Minimize</Tooltip>}>
							<button 
								className="minimize-window" 
								id="minimize"
							>
								<i className="fa-solid fa-minus"></i>
							</button>
						</OverlayTrigger>
					</div>
				</header>
			</div>
			<div className="display-section page-preview-display"></div>
		</div>
	)
}

export default PagePreviewer