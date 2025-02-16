import { Button } from 'antd';

import { LayoutOutlined } from '@ant-design/icons'

import './navbar.component.scss';

const Navbar = () => {
    return (
        <nav className='navbar__main'>
            <Button size='large' type='primary'><LayoutOutlined style={{fontSize: '24px'}} /></Button>
            <h1 className='navbar__title'>Web Language Converter</h1>
        </nav>
    )
}
export default Navbar;