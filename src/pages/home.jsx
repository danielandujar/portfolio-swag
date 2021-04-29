import React from 'react'
import logo from '../styles/img/logo.png'

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home__logo-box">
                <img src={logo} alt="Home Logo" className="home__logo"/>
            </div>
            <div className="home__content">
                <h1 className="home__content-name">
                    Daniel Andujar
                </h1>
                <h3 className="home__content-jobtitle">Mobile Software Engineer</h3>
                <a href="/" className="btn btn-resume">Resume</a>
                <a href="/" className="btn btn-cv">CV</a>
            </div>
        </section>
    )
}

export default Home