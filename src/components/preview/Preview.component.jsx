// Custom User Imports
import Toolbar from '../toolbar/Toolbar.component';

// Import Zustand Store
import { store } from '../../store/store';

import './preview.component.scss';

const Preview = () => {
    const useStore = store((prop) => prop)
    return (
        <div className='container preview__main'>
            <Toolbar />
            <div className='container preview__main--output'>
                {useStore.editorOutput}
            </div>
        </div>
    )
}
export default Preview;