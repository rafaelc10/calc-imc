import { useEffect, useState } from "react"
import './DarkMode.css'
const DarkMode = () => {
    const getTheme = () => {
        return JSON.parse(localStorage.getItem('darkMode') || '{}');
    }
    const [darkMode, setDarkMode] = useState(getTheme());

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode))
        { darkMode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark') }
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className={darkMode ? 'toggle shadow-toggle active' : 'toggle shadow-toggle'} onClick={toggleDarkMode}>
            <i className='indicator shadow-indicator'></i>
        </div>
    );
}

export { DarkMode };