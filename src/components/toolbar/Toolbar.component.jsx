// Zustand Imports
import { store } from '../../store/store';

// Stylesheet Imports
import './toolbar.component.scss';
import { useState } from 'react';

// Root Component (Toolbar)
const Toolbar = () => {
    const useStore = store((prop) => prop)

    const languageList = [
        { id: 1, value: 'javascript', title: 'Javascript' },
        { id: 2, value: 'python', title: 'Python' },
        { id: 3, value: 'lua', title: 'Lua' },
        { id: 4, value: 'ruby', title: 'Ruby' }
    ]

    return (
        <div className="toolbar">
            <div className='editor__main--language--selector'>
                <select className='text-warning' onChange={(e) => useStore.changeLanguage(e.target.value)}>
                    {languageList.map((item) => {
                        return (
                            <option key={item.id} value={item.value}>{item.title}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}
export default Toolbar;