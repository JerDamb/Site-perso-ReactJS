import React from 'react';

const OtherSkills = () => {
    return (
            <div className="otherSkills">
                <h3>Autres compétences</h3>
                <div className="list">
                    <ul>
                        <li>
                            <span>Anglais Courant</span>
                        </li>
                        <li>
                            <span>Github</span>
                        </li>
                        <li>
                            <span>Codepen</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span>Notions de Japonais</span>
                        </li>
                        <li>
                            <span>UX Design</span>
                        </li>
                        <li>
                            <span>Photoshop</span>
                            {/* <i className="fas fa-check-square">Photoshop</i> */}
                        </li>
                    </ul>
                </div>
            </div>
    );
};

export default OtherSkills;