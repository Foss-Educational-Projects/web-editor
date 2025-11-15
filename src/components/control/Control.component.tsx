// React Imports
import { useState, useEffect } from 'react'

import { store } from '../../store/store'

import { Select, Checkbox, Card } from 'antd';


// Stylesheet Imports
import './control.component.scss'

// Root Component (Control)
const Control = () => {
    const useStore: any = store((state) => state)
    const [font, setFont] = useState('')

    const handleFontFamily = (e: any) => {
        localStorage.setItem('font-family', e)
        useStore.changeFontFamily(e)
    }
    const handleColorScheme = (e: any) => {
        localStorage.setItem('colorscheme', e)
        useStore.changeScheme(e)
        console.log(e)
    }
    useEffect(
        (e: any) => {
            const fontFamily = localStorage.getItem('font-family')
            setFont(fontFamily)
            if (fontFamily) {
                useStore.changeFontFamily(fontFamily)
            }
        },
        [font]
    )
    const ColorSchemes = [
        { id: 1, label: 'GitHub Light', value: 'github' },
        { id: 2, label: 'Monokai', value: 'monokai' },
        { id: 3, label: 'Twilight', value: 'twilight' },
        { id: 4, label: 'Gruvbox', value: 'gruvbox_dark_hard' },
    ]

    const fontFamilyList = [
        { id: 1, title: 'Ubuntu Mono', value: 'UbuntuMono' },
        { id: 4, title: 'JetBrains Mono', value: 'JetBrainsMono' },
        { id: 5, title: 'Fira Code', value: 'FiraCode' },
    ]

    const fontSizeList = [
        { id: 1, title: '12px', value: 12 },
        { id: 2, title: '14px', value: 14 },
        { id: 3, title: '16px', value: 16 },
        { id: 4, title: '18px', value: 18 },
        { id: 5, title: '20px', value: 20 },
    ]

    const tabWidthList = [
        { id: 1,label: '2', value: 2 },
        { id: 2,label: '4', value: 4 },
        { id: 3,label: '6', value: 8 },
    ]

    return (
       <div>
        <Card title="Editor Settings">
            <Checkbox style={{marginBottom: '5px'}} checked>Enable Autocomplete</Checkbox>
            <Checkbox style={{marginBottom: '5px'}}>Use Space</Checkbox>
            <Checkbox style={{marginBottom: '10px'}} checked>Enable Autosave</Checkbox>
            <Select placeholder='Font Size' options={fontSizeList} size='large' style={{width: '100%', marginBottom: '10px'}} />
            <Select placeholder='Tab Width' options={tabWidthList} size='large' style={{width: '100%', marginBottom: '10px'}} />
            <Select placeholder='Font Family' options={fontFamilyList} size='large' style={{width: '100%', marginBottom: '10px'}} />
            <Select
                    placeholder='Color Scheme'
                    onChange={handleColorScheme}
                    style={{width: '100%', marginBottom: '10px'}}
                    options={ColorSchemes}
                    size='large'
                />
        </Card>
       </div>
    )
}

export default Control
