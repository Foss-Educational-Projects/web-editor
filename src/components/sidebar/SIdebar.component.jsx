import { Dropdown } from 'react-bootstrap';

import SidebarToggleButton from '../../modules/sidebar-toggle-button/SidebarToggleButton.module';

import './sidebar.component.scss';
import { useContext } from 'react';

import AppContext from '../../context/App.context';

import Control from './../control/Control.component'

const Sidebar = () => {
    const { show } = useContext(AppContext)

    const sidebarList = [
        { id: 1, title: 'Markdown Converter', url: '' },
        { id: 2, title: 'SCSS Converter', url: '' },
        { id: 3, title: 'Typescript Converter', url: '' },
    ]
    const ColorSchemes = [
        { id: 1, title: 'GitHub Light', value: 'github' },
        { id: 2, title: 'Monokai', value: 'monokai' },
        { id: 3, title: 'Twilight', value: 'twilight' }
    ]
    // Trigger Handlers
    const handleSelect = () => {
        
    }
    return (
        <aside className='sidebar__main' style={{ left: show ? '5px' : '-300px' }}>
            <header className='sidebar__header__title'>
                <h3>Converters</h3>
                <SidebarToggleButton />
            </header>
            <ul className='sidebar__list'>
                {sidebarList.map((item) => {
                    return (
                        <li key={item.id} className='sidebar__list__item'>
                            <a href='#'>{item.title}</a>
                        </li>
                    )
                })}

            </ul>
            <Control />
            <Dropdown>
                <Dropdown.Toggle style={{ width: '100%', borderRadius: '20px' }} variant="secondary" id="dropdown-basic">
                    Change Colorscheme
                </Dropdown.Toggle>

                <Dropdown.Menu variant='dark' style={{ width: '100%' }}>
                    {ColorSchemes.map((schemes) => {
                        return (
                            <Dropdown.Item onSelect={handleSelect(schemes.value)} variant='secondary' key={schemes.id} href="#">{schemes.title}</Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>
            
        </aside>
    )
}
export default Sidebar;