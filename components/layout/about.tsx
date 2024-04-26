import React, { useEffect } from 'react';
import Img from 'next/image';
import { addClickEventToModalItems, addClickEventToModalCloseBtn, addClickEventToOverlay } from '@/components/typescript/testimonials';
import { CloseOutline } from 'react-ionicons'

import { ElementToggleFunction, FilterFunction } from '@/components/typescript/types';

interface AboutProps {
    active: boolean;
  }
  
const about: React.FC<AboutProps> = ({active}) => {
    
    if (active === true ) {
        useEffect(() => {
            addClickEventToModalItems();
            addClickEventToModalCloseBtn();
            addClickEventToOverlay();
        }, []);
    
        return (
            <article className="about active" data-page="about">
                <header>
                    <h2 className="h2 article-title">About me</h2>
                </header>
                <section className="about-text">
                    <p>
                    Hi there i'm lynn and i am a passionate Discord bot/website developer with experience in various programming languages such as Python, JavaScript, and HTML/CSS.
                    I love creating new projects and bringing ideas to life through code. And as an extra i try my best creating twitch discord (chibi) emoji's at an amateur level.
                    </p>
                    <p>
                    I'm constantly learning and exploring new technologies to improve my skills and provide better solutions for my clients.
                    I believe that good communication and attention to detail are essential in creating successful projects.
                    Let's work together to create something amazing!
                    </p>
                </section>
                {/* service */}
                <section className="service">
                    <h3 className="h3 service-title">What i'm doing</h3>
                    <ul className="service-list">
                    <li className="service-item">
                        <div className="service-icon-box">
                            <Img src="/assets/svg/icon-design.svg" alt="design icon" height={40} width="40"/>
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Twitch/Discord emoji design</h4>
                            <p className="service-item-text">Design of average quality twitch and discord emoji's that are created at an amateur level.</p>
                        </div>
                    </li>
                    <li className="service-item">
                        <div className="service-icon-box">
                            <Img src="/assets/svg/icon-dev.svg" alt="design icon" height={40} width="40"/>
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Web design</h4>
                            <p className="service-item-text">Design of average quality created at an amateur level.</p>
                        </div>
                    </li>
                    <li className="service-item">
                        <div className="service-icon-box">
                            <Img src="/assets/svg/icon-dev.svg" alt="Web development icon" height={40} width="40"/>
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Web development</h4>
                            <p className="service-item-text">Development of websites with average quality at an amateur level.</p>
                        </div>
                    </li>
                    <li className="service-item">
                        <div className="service-icon-box">
                            <Img src="/assets/svg/icon-app.svg" alt="mobile app icon" height={40} width="40"/>
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Discord Bots</h4> 
                            <p className="service-item-text">Development of discord bots with average quality at an amateur level.</p>
                        </div> 
                    </li>
                    </ul>
                </section>
                {/* testimonials */}
                <section className="testimonials">
                    <h3 className="h3 testimonials-title">Testimonials</h3>
                    <ul className="testimonials-list has-scrollbar">
                    <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item>
                        <figure className="testimonials-avatar-box">
                            <img src="./assets/images/Mycelia.webp" alt="Mycelia.webp" width="60" data-testimonials-avatar/>
                        </figure>
                        <h4 className="h4 testimonials-item-title" data-testimonials-title>Mycelia</h4>
                        <div className="testimonials-text" data-testimonials-text>
                            <p>Lynnux is a detailed professional who care's deeply for their work. Their Lifeguard Mercy Emotes have engaged and created funny moments in my chat. If you're looking for a passionate artist to deliver your creative vision, look no further!</p>
                        </div>
                        </div>
                    </li>
                    <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item>
                        <figure className="testimonials-avatar-box">
                            <img src="/assets/images/avatar-2.png" alt="PlaceHolder" width="60" data-testimonials-avatar/>
                        </figure>
                        <h4 className="h4 testimonials-item-title" data-testimonials-title>PlaceHolder</h4>
                        <div className="testimonials-text" data-testimonials-text>
                            <p>This is a PlaceHolder because i didnt get any testimonials yet</p>
                        </div>
                        </div>
                    </li>
                    </ul>
                </section>
                {/* testimonials modal */}
                <div className="modal-container" data-modal-container>
                    <div className="overlay" data-overlay></div>
                    <section className="testimonials-modal">
                        <button className="modal-close-btn" data-modal-close-btn>
                            <CloseOutline color={'#ffdb70'} title={'closeOutline'} height={'30px'} width={'30px'}/>
                        </button>
                        <div className="modal-Img-wrapper">
                            <figure className="modal-avatar-box">
                            <img src="/assets/images/avatar-1.png" alt="PlaceHolder" height={80} width="80" data-modal-Img/>
                            </figure>
                            <Img src="/assets/svg/icon-quote.svg" height={40} width={40}alt="quote icon" />
                        </div>
                        <div className="modal-content">
                            <h4 className="h3 modal-title" data-modal-title>PlaceHolder</h4>
                            {/* <time datetime="2021-06-14">NaN</time> */}
                            <div data-modal-text>
                                <p>This is a PlaceHolder because i didnt get much testimonials yet</p>
                            </div>
                        </div>
                    </section>
                </div>
                {/* #clients */}
                <section className="clients">
                    <h3 className="h3 clients-title">Known by</h3>
                    <ul className="clients-list has-scrollbar">
                    <li className="clients-item">
                        <a href="https://twitch.tv/its_toko/">
                        <Img id="responsive-image" src="/assets/images/Toko.webp" alt="Its_Toko Twitch" width="212" height="100"/>
                        </a>
                    </li>
                    <li className="clients-item">
                        <a href="https://www.twitch.tv/myceliaisoffline">
                        <Img id="responsive-image" src="/assets/images/MyceliaBanner.webp" alt="MyceliaIsOffline Twitch" width="212" height="100"/>
                        </a>
                    </li>
                    <li className="clients-item">
                        <a href="https://discord.gg/jtky4tvV6F">
                        <Img id="responsive-image" src="/assets/images/MercyMains.webp" alt="Mercy-Mains Discord Server" width="212" height="100"/>
                        </a>
                    </li>
                    <li className="clients-item">
                        <a href="https://discord.gg/kiriko">
                        <Img id="responsive-image" src="/assets/images/KirikoMains.webp" alt="Kiriko-Mains Discord Server" width="212" height="100"/>
                        </a>
                    </li>
                    <li className="clients-item">
                        <a href="https://discord.gg/xXmB7fF">
                        <Img id="responsive-image" src="/assets/images/BrigitteMains.webp" alt="Brigitte-Mains Discord Server" width="212" height="100"/>
                        </a>
                    </li>
                    </ul>
                </section>
            </article>
        );
    } else {
        return(
            <>
            </>
        )
    }
};

export default about;