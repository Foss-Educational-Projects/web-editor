import SidebarToggleButton from '../../modules/sidebar-toggle-button/SidebarToggleButton.module'

import './sidebar.component.scss'
import { useContext } from 'react'

import AppContext from '../../context/App.context'

import Control from '../control/Control.component'

import { store } from '../../store/store'

import { useEffect } from 'react'
import { useState } from 'react'

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
            className="sidebar__main bg-black text-white"
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
        </aside>
    )
}

export default Sidebar
