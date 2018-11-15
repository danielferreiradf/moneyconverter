import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer className="footer">
            <h1 className="footer__title">Developed by Daniel Ferreira - {date}</h1>
            <div className="footer__social">
                <a href="https://twitter.com/danferreiradfs" target="blank" className="footer__social-icon"><i className="fab fa-twitter-square"></i></a>
                <a href="https://github.com/danielferreiradf" target="blank" className="footer__social-icon"><i className="fab fa-github-square"></i></a>
            </div>
        </footer>
    )
}

export default Footer;
