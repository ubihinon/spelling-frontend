import React from "react";
import './header.styles.scss';

class Header extends React.Component {
    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top justify-content-between'>
                <h1 className='navbar-brand'>Spelling</h1>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <a href="#" className='nav-link'>Home</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header;
