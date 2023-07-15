import React, { useState } from 'react';
import Head from './Head.jsx';
import "../header.css";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const Header = () => {
    const [click, setClick] = useState(false)
    return (
        <>
            <Head />
            <header>
                <Router>
                    <nav className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
                        <ul className='flexSB'>
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="/about">A propos</Link></li>
                            <li><Link to="/actualites">Actualites</Link></li>
                            <li><Link to="/evenements">Evenements</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                        <div className='start'>
                            <button className="button">Se connecter</button>
                        </div>
                        <button className='toggle' onClick={() => setClick(!click)}>
                            {click ? <i className='fa fa-times'></i> : <i className='fa fa-times'></i>}
                        </button>
                    </nav>
                </Router>
            </header>
        </>

    )
}
export default Header;