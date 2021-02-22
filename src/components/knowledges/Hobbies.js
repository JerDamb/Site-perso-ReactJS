import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>centres d'Intérêts</h3>
                <div className="hobbies">
                    <ul>
                        <li>
                        <i className="fas fa-language"></i>
                            <span>Apprentissage Japonais</span>
                        </li>
                        <li>
                        <i className="fas fa-book-reader"></i>
                            <span>Lecture</span>
                        </li>
                        <li>
                        <i className="fas fa-running"></i>
                            <span>Course à pied</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <i className="fas fa-film"></i>
                            <span>Films</span>
                        </li>
                        <li>
                        <i className="fas fa-plane"></i>
                            <span>Voyages</span>
                        </li>
                        <li>
                        <i className="fas fa-space-shuttle"></i>
                            <span>Astrophysique</span>
                        </li>
                    </ul>
                </div>
        </div>
    );
};

export default Hobbies;