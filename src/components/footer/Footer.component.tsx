// Ant Design Imports
import { Card } from "antd"

// React Icons Imports
import { FaHeart } from "react-icons/fa";

// Stylesheet Imports
import './footer.component.scss'

// Root Component (Footer)
const Footer = () => {
    const year = new Date().getFullYear();
    return(
        <Card size="small" style={{marginTop: "10px", fontFamily: "Montserrat"}} >
           <p style={{display: "flex", alignItems: "center"}}>With <FaHeart style={{marginLeft: "5px"}} /></p>
           <a href="https://shankhashubhrachatterjee.netlify.app" target="_" style={{fontWeight:"bold"}}>Shankha S. Chatterjee</a>
           <br/>
           <b>Copyright &copy; {year}</b>
            
        </Card>
    )
}
export default Footer;