import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <div className="sidebar">
                <div className="navigation">
                    <div className="menu">Menu</div>
                        <ul>
                            <li>
                            <NavLink exact to="/" activeClassName="navActive">
                                <span>Accueil</span>
                            </NavLink>
                            </li>
                            <li>
                            <NavLink exact to="/competences" activeClassName="navActive">
                                <span>Compétences</span>
                            </NavLink>
                            </li>
                            <li>
                            <NavLink exact to="/portfolio" activeClassName="navActive">
                                {/* <i className="fas fa-images"></i> */}
                                <span>Portfolio</span>
                            </NavLink>
                            </li>
                            <li>
                            <NavLink exact to="/contact" activeClassName="navActive">
                                {/* <i className="fas fa-address-book"></i> */}
                                <span>Contact</span>
                            </NavLink>
                            </li>
                        </ul>
                    </div>
            
            {/* <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="/#" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
                    </li>
                    <li>
                        <a href="/#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    </li>
                    <li>
                        <a href="/#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    </li>
                </ul>
                <div className="signature">
                    <p>corpyright blabla</p>
                </div>
            </div> */}
            </div>
        </div>
    );
};

export default Navigation;