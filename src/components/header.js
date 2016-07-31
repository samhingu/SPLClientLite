import React, {Component} from 'react'
import { Link } from "react-router"

class Header extends Component {
    render() {
        return (
            <header className="navbar shadow">
                <section className="navbar-section">
                    <Link to="/About" className="btn btn-link btn-lg"><i className="icon icon-people"></i></Link>
                    <Link to="/" className="navbar-brand">SPL Lite</Link>
                </section>
                <section className="navbar-section">
                    <Link to="/Home" className="btn btn-link">Home</Link>
                    <Link to="/About" className="btn btn-primary">About</Link>
                </section>
            </header>
        );
    }
}

export default Header;