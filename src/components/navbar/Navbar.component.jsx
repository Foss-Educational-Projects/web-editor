import SidebarToggleButton from '../../modules/sidebar-toggle-button/SidebarToggleButton.module'
import ThemeToggleButton from '../../modules/theme-toggle-button/ThemeToggleButton.module'
import './navbar.component.scss'

const Navbar = () => {
    return (
        <nav className="navbar__main dark:bg-zinc-800">
            <SidebarToggleButton />
            <h3 className="navbar__title dark:text-white">Web Editor</h3>
            <ThemeToggleButton />
        </nav>
    )
}
export default Navbar
