// Custom User Imports
import Toolbar from '../toolbar/Toolbar.component';

import './preview.component.scss';

const Preview = () => {
    return (
        <div className='container preview__main'>
            <Toolbar />
            <div className='container preview__main--output'>

            </div>
        </div>
    )
}
export default Preview;