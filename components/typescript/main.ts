import exp from "constants";
import Image from "next/image";
import React, { useEffect } from "react";
import ReactDOM from 'react-dom';

// Element toggle function
export const elementToggleFunc = (elem: HTMLElement) => {
    elem.classList.toggle("active");
};
  
// Sidebar variables
export const getSidebar = () => typeof window !== 'undefined' ? document.querySelector("[data-sidebar]") as HTMLElement | null : null;
export const getSidebarBtn = () => typeof window !== 'undefined' ? document.querySelector("[data-sidebar-btn]") as HTMLElement | null : null;
  


// testimonials variables
export const testimonialsItems = () => typeof window !== 'undefined' ? document.querySelectorAll("[data-testimonials-item]") : null;
export const modalContainer = () => typeof window !== 'undefined' ? document.querySelector("[data-modal-container]") : null;
export const modalCloseBtn = () => typeof window !== 'undefined' ? document.querySelector("[data-modal-close-btn]") : null;
export const overlay = () => typeof window !== 'undefined' ? document.querySelector("[data-overlay]") : null;

// modal variable
export const modalImg = () => typeof window !== 'undefined' ? document.querySelector("[data-modal-img]") : null;
export const modalTitle = () => typeof window !== 'undefined' ? document.querySelector("[data-modal-title]") : null;
export const modalText = () => typeof window !== 'undefined' ? document.querySelector("[data-modal-text]") : null;

// modal toggle function
export const testimonialsModalFunc = () => {
    const container = modalContainer();
    const overlayElem = overlay();
    if (container && overlayElem) {
      container.classList.toggle("active");
      overlayElem.classList.toggle("active");
    }
  };
  
// add click event to all modal items
export const addClickEventToModalItems = () => {
    const items = testimonialsItems();
    if (items) {
        items.forEach((item: Element) => {
            item.addEventListener("click", () => {
                const img = modalImg();
                if (img) {
                    const avatar = item.querySelector("[data-testimonials-avatar]") as HTMLImageElement | null;
                    const titleElem = item.querySelector("[data-testimonials-title]");
                    const textElem = item.querySelector("[data-testimonials-text]");
                    const title = modalTitle();
                    const text = modalText();
                    
                    if (avatar && titleElem && textElem && title && text) {
                        let src: string;
                        let alt: string;
                        // Check if title is "Mycelia"
                        if (title.innerHTML.trim() === "Mycelia") {
                          src = "/assets/images/Mycelia.webp";
                          alt = "Mycelia.webp";
                        } else {
                          src = "/assets/images/avatar-2.png";
                          alt = "PlaceHolder";
                        }
            
                        img.innerHTML = ''; // Clear previous content
            
                        // Set src and alt attributes directly
                        avatar.src = src;
                        avatar.alt = alt;
            
                        title.innerHTML = titleElem.innerHTML;
                        text.innerHTML = textElem.innerHTML;
                        testimonialsModalFunc();
                    }
        
                }
            });
        });
    }
};
      
  // add click event to modal close button
  export const addClickEventToModalCloseBtn = () => {
    const closeBtn = modalCloseBtn();
    if (closeBtn) {
      closeBtn.addEventListener("click", testimonialsModalFunc);
    }
  };
  
  // add click event to overlay
  export const addClickEventToOverlay = () => {
    const overlayElem = overlay();
    if (overlayElem) {
      overlayElem.addEventListener("click", testimonialsModalFunc);
    }
  };
  

// page navigation variables
export const setupPageNavigation = () => {
    // Page navigation variables
    const navigationLinks = document.querySelectorAll<HTMLDivElement>("[data-nav-link]");
    const pages = document.querySelectorAll<HTMLDivElement>("[data-page]");
  
    // Add event listener to all navigation links
    for (let i = 0; i < navigationLinks.length; i++) {
        navigationLinks[i].addEventListener("click", function () {
  
            for (let j = 0; j < pages.length; j++) {
                if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
                    pages[j].classList.add("active");
                    navigationLinks[j].classList.add("active");
                    window.scrollTo(0, 0);
                } else {
                    pages[j].classList.remove("active");
                    navigationLinks[j].classList.remove("active");
                }
            }
        });
    }
};

// custom select variables
export const getSelect = () => typeof window !== 'undefined' ? document.querySelector("[data-select]") : null;
export const getSelectItems = () => typeof window !== 'undefined' ? document.querySelectorAll("[data-select-item]") : null;
export const getSelectValue = () => typeof window !== 'undefined' ? document.querySelector("[data-selecct-value]") : null;
export const getFilterBtn = () => typeof window !== 'undefined' ? document.querySelectorAll("[data-filter-btn]") : null;
export const getFilterItems = () => typeof window !== 'undefined' ? document.querySelectorAll("[data-filter-item]") : null;

export const checkMessageSuccess = () => {
    // Check if the URL contains the messageSuccess query parameter
    if (window.location.href.includes("/?messageSuccess")) {
      alert("Your message has been sent successfully!");
      
      const newUrl = window.location.href.replace("?messageSuccess", "");
      history.pushState({}, document.title, newUrl);
    }
  };
  
