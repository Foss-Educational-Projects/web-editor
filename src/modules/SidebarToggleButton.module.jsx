import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { BsLayoutSidebar } from "react-icons/bs";
import './sidebarToggleButton.module.scss';
import AppContext from '../context/App.context';
import { useContext } from 'react';

const SidebarToggleButton = () => {
    const {show, setShow} = useContext(AppContext)
    return (
        <Button onClick={() => { setShow(!show) }} variant='secondary' className='align__icon sidebar__button' size='lg'><BsLayoutSidebar /></Button>
    )
}

export default SidebarToggleButton;