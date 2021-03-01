import React from 'react';
import Navigation from '../components/Navigation';
import AutresComp from '../components/test/AutresComp';
import Comp from '../components/test/Comp';
import Parcours from '../components/test/Parcours';
import PasseTemps from '../components/test/PasseTemps';


const Test = () => {
    return (
        <div className="test">
            <Navigation /> 
            <div className="test-container">
                <AutresComp />
                <Comp /> 
                <Parcours />
                <PasseTemps />
            </div> 
        </div>
    );
};

export default Test;