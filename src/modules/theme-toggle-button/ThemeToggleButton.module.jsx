import { Button } from 'react-bootstrap';
import './ThemeToggleButton.module.scss';
import { useState, useEffect } from 'react';
import { LuMoonStar, LuSun } from "react-icons/lu";

const ThemeToggleButton = () => {
    const [dark, setDark] = useState(true)
    const handleTheme = () => {
        setDark(!dark)
        console.log(dark)
        if(dark) {
            document.querySelector('html').setAttribute('data-bs-theme', 'dark')
            localStorage.setItem('darkmode', dark)
        }
        else {
            document.querySelector('html').setAttribute('data-bs-theme', 'light')
            localStorage.setItem('darkmode', !dark)
        }
    }
    return (
        <div>
            <Button style={{borderRadius: '50px'}} onClick={handleTheme}>
                {dark ? <LuMoonStar size={24} /> : <LuSun size={24} /> }
            </Button>
        </div>
    )
}
export default ThemeToggleButton;
