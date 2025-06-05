// React Imports
import { useState } from 'react';


// React Bootstrap Imports
import { Form, InputGroup } from 'react-bootstrap'
import { store } from '../../store/store';
// Stylesheet Imports
import './control.component.scss';

// Root Component (Control)
const Control = () => {
    const useStore = store((state) => state)
    const fontFamilyList = [
        { id: 1, title: 'Ubuntu Mono', value: 'UbuntuMono' },
        { id: 2, title: 'Iosevka', value: 'Iosevka' },
        { id: 3, title: 'Cascadia Code', value: 'CascadiaCode' },
        { id: 4, title: 'Hack', value: 'Hack' },
        { id: 5, title: 'JetBrains Mono', value: 'JetBrainsMono' },
        { id: 6, title: 'Fira Code', value: 'FiraCode' },
        { id: 7, title: 'DejaVu Sans', value: 'DejaVuSans' }
    ]
    const fontSizeList = [
        { id: 1, title: '12px', value: 12 },
        { id: 2, title: '14px', value: 14 },
        { id: 3, title: '16px', value: 16 },
        { id: 4, title: '18px', value: 18 },
        { id: 5, title: '20px', value: 20 }
    ]
    
    const tabWidthList = [
        { id: 1, value: 2 },
        { id: 1, value: 4 },
        { id: 1, value: 8 }
    ]
    return (
        <Form action="" className='editor__control__form'>
            <fieldset className='editor__control__form--settings'>
                <legend>Editor Settings</legend>
                <Form.Check checked={useStore.snippets ? true : false} className='mb-3' type='checkbox' onChange={() => useStore.toggleSnippets()} label='Autocompletion' />
                <Form.Check className='mb-3' type='checkbox' label='Use Spaces Instead of Tabs' />
                <InputGroup className='d-flex justify-center align-items-center mb-3'>
                    <Form.Label id='editor-fontsize' className='mx-1 mb-0'>Font Size : </Form.Label>
                    <Form.Select size='sm' id='editor-fontsize' defaultValue={useStore.fontSize} onChange={(e) => useStore.changeFontSize(e.target.value)}>
                        {fontSizeList.map((item) => {
                            return (
                                <option key={item.id} className='text-center fw-bolder' value={item.value}>{item.title}</option>
                            )
                        })}
                    </Form.Select>
                </InputGroup>
                <InputGroup className='d-flex justify-center align-items-center'>
                    <Form.Label id='editor-tabwidth' className='mx-1 mb-0'>Tab Width : </Form.Label>
                    <Form.Select size='sm' id='editor-tabwidth'>
                        {tabWidthList.map((item) => {
                            return (
                                <option key={item.id} className='text-center fw-bolder' value={item.value}>{item.value}</option>
                            )
                        })}
                    </Form.Select>
                    <Form.Select style={{marginTop: 5}} size='sm' id='editor-fontfamily'>

                        {fontFamilyList.map((item) => {
                            return (
                                <option key={item.id} className='text-center fw-bolder' value={item.value}>{item.title}</option>
                            )
                        })}
                        
                    </Form.Select>
                </InputGroup>
                <InputGroup className='mt-3'>
                    <Form.Check color='orange' reverse label="Autosave" type="switch" id="editor-autosave" />
                </InputGroup>
            </fieldset>
        </Form>

    )
}

export default Control;