import React from 'react'

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about__title">
                <h2 className="about__title--text">About me:</h2>
            </div>
            <div className="about__separator"></div>
            <div className="about__content">
                <p className="about__content--text1">
                Software Engineering is something that, beyond being my career and day to day job, I consider it to be more like my passion, While I don't consider myself an "Expert" because i think there's just too much to learn and life is too short, I will definitely improve myself everyday and code my way to knowledge.
                <br /><br />
                I am a Mobile-Focused Software Engineer with a strong experience in Android Applications. I have a Bachelor's degree in Computer Science and working towards a Master's degree in Cybersecurity. I've been working in software development for the past 8+ years and have worked with every part of the tech stack, from database development, to backend to web application development and to (obviously) mobile apps.
                </p>
            </div>
        </section>
    )
}

export default About