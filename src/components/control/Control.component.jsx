// React Bootstrap Imports
import { Form, InputGroup } from 'react-bootstrap'

// Stylesheet Imports
import './control.component.scss';

// Root Component (Control)
const Control = () => {
    return (
        <Form action="" className='editor__control__form'>
            <fieldset className='editor__control__form--settings'>
                <legend>Editor Settings</legend>
                <Form.Check className='mb-3' type='checkbox' label='Autocompletion' />
                <Form.Check className='mb-3' type='checkbox' label='Use Spaces Instead of Tabs' />
                <InputGroup className='d-flex justify-center align-items-center mb-3'>
                    <Form.Label id='editor-fontsize' className='mx-1 mb-0'>Font Size : </Form.Label>
                    <Form.Select size='sm' id='editor-fontsize'>
                        <option className='text-center fw-bolder' value="1">12px</option>
                        <option className='text-center fw-bolder' value="2">14px</option>
                        <option className='text-center fw-bolder' value="3">16px</option>
                    </Form.Select>
                </InputGroup>
                <InputGroup className='d-flex justify-center align-items-center'>
                    <Form.Label id='editor-tabwidth' className='mx-1 mb-0'>Tab Width : </Form.Label>
                    <Form.Select size='sm' id='editor-tabwidth'>
                        <option className='text-center fw-bolder' value="2">2</option>
                        <option className='text-center fw-bolder' value="4">4</option>
                        <option className='text-center fw-bolder' value="6">6</option>
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