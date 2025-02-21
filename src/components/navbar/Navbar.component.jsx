import SidebarToggleButton from '../../modules/SidebarToggleButton.module';
import './navbar.component.scss';

const Navbar = () => {
    return (
        <nav className='navbar__main'>
            <SidebarToggleButton />
            <h3 className='navbar__title'>Language Converter</h3>
        </nav>
    )
}
export default Navbar;