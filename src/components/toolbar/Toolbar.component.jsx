import axios from 'axios'

// Zustand Imports
import { store } from '../../store/store'

// Bootstrap Imports
import { Button } from 'react-bootstrap'

// React Icons Imports
import { FaRunning } from 'react-icons/fa'
import { LuPaintbrush } from 'react-icons/lu'
import { FaWandMagicSparkles } from 'react-icons/fa6'

// Stylesheet Imports
import './toolbar.component.scss'

// Root Component (Toolbar)
const Toolbar = () => {
    const useStore = store((prop) => prop)
    const handleEditorSubmit = (e) => {
        e.preventDefault()
        axios
            .post('http://localhost:3000/api', {
                code: useStore.editorCode,
                lang: useStore.language,
            })
            .then((response) =>
                useStore.captureEditorOutput(response.data.output)
            )
            .catch((error) => console.error(error))
    }

    const languageList = [
        { id: 1, value: 'javascript', title: 'Javascript' },
        { id: 2, value: 'python', title: 'Python' },
        { id: 3, value: 'lua', title: 'Lua' },
    ]

    return (
        <div className="toolbar">
            <div className="editor__main--language--selector">
                <select
                    className="text-warning"
                    onChange={(e) => useStore.changeLanguage(e.target.value)}
                >
                    {languageList.map((item) => {
                        return (
                            <option key={item.id} value={item.value}>
                                {item.title}
                            </option>
                        )
                    })}
                </select>
            </div>
            <div className="editor__main--language--control">
                <Button
                    disabled
                    type="button"
                    className="rounded-pill bg-secondary mx-1"
                >
                    <FaWandMagicSparkles size={20} />
                </Button>
                <Button
                    type="button"
                    onClick={() => useStore.captureEditorOutput('')}
                    className="rounded-pill bg-primary mx-1"
                >
                    <LuPaintbrush size={20} />
                </Button>
                <Button
                    type="submit"
                    onClick={handleEditorSubmit}
                    form="editor-form"
                    className="rounded-pill bg-success mx-1"
                >
                    <FaRunning size={20} />
                </Button>
            </div>
        </div>
    )
}

export default Toolbar
