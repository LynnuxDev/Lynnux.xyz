import React, { useEffect } from 'react';
import Head from 'next/head';
import Img from 'next/image';

import Sidebar from '@/components/layout/sidebar';
import Navbar from '@/components/layout/navbar';
import About from '@/components/layout/about';


/**
 * React-IonIcons
 */
import { ChevronDownOutline } from 'react-ionicons'
import { MailOutline } from 'react-ionicons'
import { CalendarOutline } from 'react-ionicons'
import { LocationOutline } from 'react-ionicons'
import { CloseOutline } from 'react-ionicons'
import { BookOutline } from 'react-ionicons'


const Index = () => {
    return (
        <>
            <main>
            {/* #SIDEBAR */}
            <Sidebar/>
            {/* #main-content */}
            <div className="main-content">
                {/* #NAVBAR */}
                <Navbar/>
                {/* #ABOUT */}
                <About active={true}/>
                        
                {/* #resume */}
                        <article className="resume" data-page="resume">
                        <header>
                            <h2 className="h2 article-title">Resume</h2>
                        </header>
                        <section className="timeline">
                            <div className="title-wrapper">
                            <div className="icon-box">
                                <BookOutline color={'#ffdb70'} title={'bookOutline'} height={'250px'} width={'250px'}/>
                            </div>
                            <h3 className="h3">Education</h3>
                            </div>
                            <ol className="timeline-list">
                            <li className="timeline-item">
                                <h4 className="h4 timeline-item-title">Self-Educated develper</h4>
                                <span>2019 — Present</span>
                                <p className="timeline-text">I have used online resources such as tutorials, coding communities, and personal projects to learn the skills I need for my projects.</p>
                            </li>
                            <li className="timeline-item">
                                <h4 className="h4 timeline-item-title">Self-Educated Artist</h4>
                                <span>2022 — Present</span>
                                <p className="timeline-text">I have used online resources such as tutorials, art communities, and personal projects to learn the skills I need for my art.</p>
                            </li>
                            </ol>
                        </section>
                        <section className="timeline">
                            <div className="title-wrapper">
                            <div className="icon-box">
                            <BookOutline color={'#ffdb70'} title={'bookOutline'} height={'250px'} width={'250px'}/>
                            </div>
                            <h3 className="h3">Experience</h3>
                            </div>
                            <ol className="timeline-list">
                            <li className="timeline-item">
                                <h4 className="h4 timeline-item-title">No development experience</h4>
                                <span>2019 — Present</span>
                                <p className="timeline-text">I personaly don't really have any experience developing. But try to do my best.</p>
                            </li>
                            <li className="timeline-item">
                                <h4 className="h4 timeline-item-title">Chibi twitch emote experience</h4>
                                <span>2023 — Present</span>
                                <p className="timeline-text">I create some  free to use chibi emoji's related to video games i'm playing at that time.</p>
                            </li>
                            </ol>
                        </section>

                        <section className="skill">
                            <h3 className="h3 skills-title">My skills</h3>

                            <ul className="skills-list content-card">
                            <li className="skills-item">
                                <div className="title-wrapper">
                                <h5 className="h5">Artistics</h5>
                                <data value="11">13%</data>
                                </div>
                                <div className="skill-progress-bg">
                                <div className="skill-progress-fill" style={{ width: '13%' }}></div>
                                </div>
                            </li>
                            <li className="skills-item">
                                <div className="title-wrapper">
                                <h5 className="h5">Web design/development</h5>
                                <data value="70">23%</data>
                                </div>
                                <div className="skill-progress-bg">
                                <div className="skill-progress-fill" style={{ width: '23%' }}></div>
                                </div>
                            </li>
                            <li className="skills-item">
                                <div className="title-wrapper">
                                <h5 className="h5">Bot Development</h5>
                                <data value="90">36%</data>
                                </div>
                                <div className="skill-progress-bg">
                                <div className="skill-progress-fill" style={{ width: '36%' }}></div>
                                </div>
                            </li>
                            </ul>
                        </section>
                        </article>

                </div>
            </main>
        </>
    );
}
export default Index;