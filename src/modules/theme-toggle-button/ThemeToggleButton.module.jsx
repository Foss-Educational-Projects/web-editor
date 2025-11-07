import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { LuMoonStar, LuSun } from 'react-icons/lu'

import './ThemeToggleButton.module.scss'

// Root Component (Theme Toggle Button)
const ThemeToggleButton = () => {
    const [dark, setDark] = useState(false)
    let darkMode = localStorage.getItem('darkmode')
    let systemThemeIsDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
    ).matches
    useEffect(() => {
        console.log(systemThemeIsDark)
        if (darkMode === 'true') {
            setDark(true)
            document.querySelector('html').setAttribute('data-theme', 'dark')
        } else if (!systemThemeIsDark && darkMode == undefined) {
            document
                .querySelector('html')
                .setAttribute('data-bs-theme', 'light')
        } else if (systemThemeIsDark && darkMode == undefined) {
            document.querySelector('html').setAttribute('data-theme', 'dark')
        } else {
            document
                .querySelector('html')
                .setAttribute('data-theme', 'light')
        }
    }, [])

    const handleTheme = () => {
        console.log('Working')

        if (dark) {
            console.log('Light Mode Is True: ' + dark)
            document
                .querySelector('html')
                .setAttribute('data-theme', 'light')
            localStorage.setItem('darkmode', false)
        } else {
            console.log('Dark Mode Is True: ' + dark)
            document.querySelector('html').setAttribute('data-theme', 'dark')
            localStorage.setItem('darkmode', true)
        }
        setDark(!dark)
    }
    return (
        <div>
            <Button
                style={{ borderRadius: '50px' }}
                onClick={handleTheme}
                className="theme__toggle--button"
            >
                {dark ? <LuMoonStar size={24} /> : <LuSun size={24} />}
            </Button>
        </div>
    )
}

export default ThemeToggleButton
