import SidebarToggleButton from '../../modules/SidebarToggleButton.module';

import './sidebar.component.scss';
import { useContext } from 'react';

import AppContext from '../../context/App.context';


const Sidebar = () => {
    const { show } = useContext(AppContext)
    const sidebarList = [
        { id: 1, title: 'Markdown Converter', url: '' },
        { id: 2, title: 'SCSSConverter', url: '' },
        { id: 3, title: 'Typescript Converter', url: '' },
    ]
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
        </aside>
    )
}
export default Sidebar;