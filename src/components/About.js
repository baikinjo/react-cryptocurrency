import React from 'react';

const About = () => {
    return (
        <div className="center">
            <h3>About</h3>
            <p>List of multiple cryptocurrency application built on React.js</p>
            <p>Tools used:</p>

            <ul>
                <li>Framework: <a target="_blank" href="https://reactjs.org/" rel="noopener noreferrer">React.js</a></li>
                <li>Styling: <a target="_blank" href="http://materializecss.com/" rel="noopener noreferrer">Materialize-CSS</a></li>
                <li>API: <a target="_blank" href="https://coinmarketcap.com/api/" rel="noopener noreferrer">Cryptocurrency Market Capitalizations</a></li>
                <li>Coin icon image: <a target="_blank" href="https://github.com/cjdowner/cryptocurrency-icons" rel="noopener noreferrer">cjdowner's repo</a></li>
                <li>Deployment: <a target="_blank" href="http://reactcrypto.injobaik.ca/" rel="noopener noreferrer">Heroku</a></li>
                <li>Source Code: <a target="_blank" href="https://github.com/baikinjo/react-cryptocurrency" rel="noopener noreferrer">GitHub</a></li>
            </ul>

        </div>
    );
};

export default About;

