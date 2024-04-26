import React, { useState } from 'react';
import Img from 'next/image';
import { ChevronDownOutline, MailOutline, CalendarOutline, LocationOutline } from 'react-ionicons';

const sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
  return (
    <aside className={`sidebar ${isOpen ? 'active' : ''}`} data-sidebar>
        <div className="sidebar-info">
        <figure className="avatar-box">
            <Img src="/assets/images/my-avatar_120.webp" alt="Lynnux" height={150} width={150} layout="responsive" objectFit="cover"/>
        </figure>
        <div className="info-content">
            <h1 className="name" title="Lynnux">Lynnux</h1>
            <p className="title">Developer / Artist</p>
        </div>
        <button className="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>
            <ChevronDownOutline color={'#ffdb70'} title={'dropdown'} height="30px" width="30px" />
        </button>
        </div>
        <div className="sidebar-info_more">
        <div className="separator"></div>
        <ul className="contacts-list">
            <li className="contact-item">
                <div className="icon-box">
                <MailOutline color={'#ffdb70'} title={'mail'} height="30px" width="30px"/>
                </div>
                <div className="contact-info">
                    <p className="contact-title">Email</p>
                    <a href="mailto:contact.lynnux@gmail.com" className="contact-link">contact.lynnux@gmail.com</a>
                </div>
            </li>
            <li className="contact-item">
                <div className="icon-box">
                <CalendarOutline color={'#ffdb70'} title={'calendar'} height="30px" width="30px"/>
                </div>
                <div className="contact-info">
                    <p className="contact-title">Birthday</p>
                    <time dateTime="2004-05-17">may 17, 2004</time>
                </div>
            </li>
            <li className="contact-item">
            <div className="icon-box">
            <LocationOutline color={'#ffdb70'} title={'location'} height="30px" width="30px"/>
            </div>
            <div className="contact-info">
                <p className="contact-title">Location</p>
                <address>Antwerpen, Belgium</address>
            </div>
            </li>
        </ul>
        <div className="separator"></div>
        </div>
    </aside>

  );
};

export default sidebar;