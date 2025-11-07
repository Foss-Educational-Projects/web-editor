import SidebarToggleButton from '../../modules/sidebar-toggle-button/SidebarToggleButton.module'

import AppContext from '../../context/App.context'

import Control from '../control/Control.component'

// Store Import
import { store } from '../../store/store'

// React Imports
import { useState, useEffect, useContext } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

// Stylesheet Import
import './sidebar.component.scss'

// Root Component (Sidebar)
const Sidebar = () => {
    const useStore = store((state) => state)
    const [theme, setTheme] = useState('')
    const handleColorScheme = (e) => {
        localStorage.setItem('colorscheme', e.target.value)
        useStore.changeTheme(e.target.value)
    }

    useEffect(() => {
        const colorScheme = localStorage.getItem('colorscheme')
        setTheme(colorScheme)
        if (colorScheme) {
            useStore.changeTheme(colorScheme)
        }
    }, [])

    const { show } = useContext(AppContext)

    const sidebarList = [
        { id: 1, title: 'Markdown Converter', url: '' },
        { id: 2, title: 'SCSS Converter', url: '' },
        { id: 3, title: 'Typescript Converter', url: '' },
    ]

    const ColorSchemes = [
        { id: 1, title: 'GitHub Light', value: 'github' },
        { id: 2, title: 'Monokai', value: 'monokai' },
        { id: 3, title: 'Twilight', value: 'twilight' },
        { id: 4, title: 'Gruvbox', value: 'gruvbox_dark_hard' },
    ]

    return (
        <aside
            className="sidebar__main text-white dark:bg-zinc-800/50 bg-gray-200/50 backdrop-blur-sm"
            style={{ left: show ? '5px' : '-300px' }}
        >
            <header className="sidebar__header--title">
                <h3>Converters</h3>
                <SidebarToggleButton />
            </header>
            <ul className="sidebar__list">
                {sidebarList.map((item) => {
                    return (
                        <li key={item.id} className="sidebar__list--item">
                            <a href="#">{item.title}</a>
                        </li>
                    )
                })}
            </ul>
            <Control />
            <select
                className="sidebar__list--colorscheme text-white"
                onChange={handleColorScheme}
                style={{ width: '100%', marginTop: '0' }}
            >
                {ColorSchemes.map((schemes) => {
                    return (
                        <option
                            selected={schemes.value === theme ? 'selected' : ''}
                            variant="secondary"
                            key={schemes.id}
                            href="#"
                            value={schemes.value}
                        >
                            {schemes.title}
                        </option>
                    )
                })}
            </select>
            <Menu>
                <MenuButton>My account</MenuButton>
                <MenuItems anchor="bottom" className="z-10">
                    <MenuItem>
                        <a className="block data-focus:bg-blue-100" href="/settings">
                            Settings
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a className="block data-focus:bg-blue-100" href="/support">
                            Support
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a className="block data-focus:bg-blue-100" href="/license">
                            License
                        </a>
                    </MenuItem>
                </MenuItems>
            </Menu>
        </aside>
    )
}

export default Sidebar
