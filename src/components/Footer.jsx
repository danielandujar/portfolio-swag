import React from 'react'
import {ReactComponent as WordpressIcon} from '../styles/img/wordpress.svg'
import {ReactComponent as LinkedinIcon } from '../styles/img/linkedin.svg'
import {ReactComponent as StackoverflowIcon} from '../styles/img/stack-overflow.svg'
import {ReactComponent as GithubIcon } from '../styles/img/github-logo.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer__icons">
                <li className="footer__icon" key="wordpress">
                    <a href="http://crystudios.com" className="footer__social--link">
                        <WordpressIcon className="footer__social--icon" />
                    </a>
                </li>
                <li className="footer__icon" key="stackoverflow">
                    <a href="http://crystudios.com" className="footer__social--link">
                        <StackoverflowIcon className="footer__social--icon" />
                    </a>
                </li>
                <li className="footer__icon" key="linkedin">
                    <a href="http://crystudios.com" className="footer__social--link">
                        <LinkedinIcon className="footer__social--icon" />
                    </a>
                </li>
                <li className="footer__icon" key="github">
                    <a href="http://www.github.com/danielandujar" className="footer__social--link" >
                        <GithubIcon className="footer__social--icon" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer