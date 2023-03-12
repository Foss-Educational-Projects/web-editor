import { useState, useRef } from "react"

const AppBar = (props) => {
	const [scale, setScale] = useState(false);
	const [close, setClose] = useState(false);
	
	const minimizeRef = useRef(null)
	const scaleWindow = () => {
		(scale ? setScale(false) : setScale(true))
	}
	const minimizeWindow = (e) => {
		(close ? setClose(false) : setClose(true))
		close ? 
			minimizeRef.current.style.transform = "rotateZ(180deg)" :
			minimizeRef.current.style.transform = "rotateZ(0deg)"
	}
	return (
		<div className="header-section">
			<header className="header" style={props.styles}>
				<i className={`${props.icon} header-icon`} id={props.id}></i>
				<p>{props.header}</p>
				<div className="button-container">
					{(() => {
						if (props.sharable) {
							return (
								<button  
									className="minimize-window" 
									id="minimize" 
								>
									<a href="/preview">
										<i className="fa-solid fa-arrow-up-right-from-square"></i>
									</a>
								</button>
							)
						}
						if(props.expandable) {
							return(
								<button className="scale-window" id="scale" onClick={scaleWindow}>
									<i className={scale ? "fa-solid fa-down-left-and-up-right-to-center" : "fa-solid fa-up-right-and-down-left-from-center"}></i>
								</button>
							)
						}
						if(props.shrinkable) {
							return(
								<button className="minimize-window" id="minimize" onClick={minimizeWindow}>
									<i id="minimize-icon" ref={minimizeRef} className="fa-solid fa-angle-up"></i>
								</button>
							)
						}
					})()}
					
					
				</div>
			</header>
		</div>
	)
}
export default AppBar;