import React from 'react';

export default class NavBar extends React.Component {
    render() { return(
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Login</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">About</a>
            </li>
        </ul>
    </nav>
        )
    };
   
}