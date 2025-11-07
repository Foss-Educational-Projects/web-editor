// React Imports
import { useState, useContext } from 'react'

// React Bootstrap Imports
import { Button } from 'react-bootstrap'
// React Icons Imports
import { BsLayoutSidebar } from 'react-icons/bs'

// Stylesheet Imports
import './sidebarToggleButton.module.scss'

// User Context Imports
import AppContext from '../../context/App.context'

// Root Component (SidebarToggleButton)
const SidebarToggleButton = () => {
    const { show, setShow } = useContext(AppContext)
    return (
        <Button
            onClick={() => {
                setShow(!show)
            }}
            variant="dark"
            className="align__icon sidebar__button"
            size="lg"
        >
            <BsLayoutSidebar />
        </Button>
    )
}

export default SidebarToggleButton
