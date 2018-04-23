import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const Header = () => (
    <header>
        <div className={"main-menu"}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/books'>Books</Link></li>
                <li><Link to='/bookstores'>Book Stores</Link></li>
            </ul>
        </div>
    </header>
);

export default Header;