import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class MenuComponent extends Component {
    
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.google.com" className="navbar-brand">Best Friend</a></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/todo">Todo</Link></li>
                        <li><Link className="nav-link" to="/add-todo">Add Todo</Link></li>
                    </ul>
                </nav>
            </header>
        )

    }

}

export default MenuComponent