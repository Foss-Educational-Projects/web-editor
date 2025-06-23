// React Imports
import { useState, useEffect } from 'react'

// React Bootstrap Imports
import { Form, InputGroup } from 'react-bootstrap'
import { store } from '../../store/store'
// Stylesheet Imports
import './control.component.scss'

// Root Component (Control)
const Control = () => {
    const useStore = store((state) => state)
    const [font, setFont] = useState('')

    const handleFontFamily = (e) => {
        localStorage.setItem('font-family', e.target.value)
        useStore.changeFontFamily(e.target.value)
    }
    useEffect(
        (e) => {
            const fontFamily = localStorage.getItem('font-family')
            setFont(fontFamily)
            if (fontFamily) {
                useStore.changeFontFamily(fontFamily)
            }
        },
        [font]
    )
    const fontFamilyList = [
        { id: 1, title: 'Ubuntu Mono', value: 'UbuntuMono' },
        { id: 2, title: 'Cascadia Code', value: 'CascadiaCode' },
        { id: 3, title: 'Hack', value: 'Hack' },
        { id: 4, title: 'JetBrains Mono', value: 'JetBrainsMono' },
        { id: 5, title: 'Fira Code', value: 'FiraCode' },
        { id: 6, title: 'DejaVu Sans', value: 'DejaVuSans' },
    ]

    const fontSizeList = [
        { id: 1, title: '12px', value: 12 },
        { id: 2, title: '14px', value: 14 },
        { id: 3, title: '16px', value: 16 },
        { id: 4, title: '18px', value: 18 },
        { id: 5, title: '20px', value: 20 },
    ]

    const tabWidthList = [
        { id: 1, value: 2 },
        { id: 2, value: 4 },
        { id: 3, value: 8 },
    ]

    return (
        <Form action="" className="editor__control--form">
            <fieldset className="editor__control--form--settings">
                <legend>Editor Settings</legend>
                <Form.Check
                    checked={useStore.snippets ? true : false}
                    className="mb-3"
                    type="checkbox"
                    onChange={() => useStore.toggleSnippets()}
                    label="Autocompletion"
                />
                <Form.Check
                    className="mb-3"
                    type="checkbox"
                    label="Use Spaces Instead of Tabs"
                    checked={useStore.useSpace ? true : false}
                    onChange={() => useStore.toggleSpacing()}
                />
                <InputGroup className="d-flex justify-center align-items-center mb-3">
                    <Form.Label id="editor-fontsize" className="mx-1 mb-0">
                        Font Size :{' '}
                    </Form.Label>
                    <Form.Select
                        className="editor__control--select text-white"
                        size="sm"
                        id="editor-fontsize"
                        defaultValue={useStore.fontSize}
                        onChange={(e) =>
                            useStore.changeFontSize(e.target.value)
                        }
                    >
                        {fontSizeList.map((item) => {
                            return (
                                <option
                                    key={item.id}
                                    className="text-center fw-bolder"
                                    value={item.value}
                                >
                                    {item.title}
                                </option>
                            )
                        })}
                    </Form.Select>
                </InputGroup>
                <InputGroup className="d-flex justify-center align-items-center">
                    <Form.Label id="editor-tabwidth" className="mx-1 mb-0">
                        Tab Width :{' '}
                    </Form.Label>
                    <Form.Select
                        className="editor__control--select text-white"
                        size="sm"
                        id="editor-tabwidth"
                        onChange={(e) =>
                            useStore.changeTabWidth(e.target.value)
                        }
                    >
                        {tabWidthList.map((item) => {
                            return (
                                <option
                                    key={item.id}
                                    className="text-center fw-bolder"
                                    value={item.value}
                                >
                                    {item.value}
                                </option>
                            )
                        })}
                    </Form.Select>
                </InputGroup>
                <InputGroup>
                    <Form.Select
                        className="editor__control--select text-white"
                        style={{ marginTop: 15 }}
                        size="sm"
                        id="editor-fontfamily"
                        onChange={handleFontFamily}
                    >
                        {fontFamilyList.map((item) => {
                            return (
                                <option
                                    selected={
                                        item.value === font ? 'selected' : ''
                                    }
                                    key={item.id}
                                    className="text-center fw-bolder"
                                    value={item.value}
                                >
                                    {item.title}
                                </option>
                            )
                        })}
                    </Form.Select>
                </InputGroup>
                <InputGroup className="mt-3">
                    <Form.Check
                        color="secondary"
                        defaultChecked
                        reverse
                        label="Autosave"
                        type="switch"
                        id="editor-autosave"
                    />
                </InputGroup>
            </fieldset>
        </Form>
    )
}

export default Control
