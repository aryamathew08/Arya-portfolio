import React from 'react';

const Header = () => {
    return (
        <header className="header-section">
            <div className="container">
                <div className="row align-items-center"> 
                    <div className="col-lg-4 col-md-4">
                        <div className="logo">
                            <a href="/">Portfolio</a>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8"> 
                        <nav className="main-menu">
                            <ul>
                                <li><a href="#about">About</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
