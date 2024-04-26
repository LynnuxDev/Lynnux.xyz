export const testimonialsItems = () => typeof window !== 'undefined' ? document.querySelectorAll("[data-testimonials-item]") : null;
export const modalContainer = () => typeof window !== 'undefined' ? document.querySelector("[data-modal-container]") : null;
export const modalCloseBtn = () => typeof window !== 'undefined' ? document.querySelector("[data-modal-close-btn]") : null;
export const overlay = () => typeof window !== 'undefined' ? document.querySelector("[data-overlay]") : null;
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
                console.log(`test = ${titleElem.innerHTML.trim()}`)

              let src: string;
              let alt: string;
              // Check if title is "Mycelia"
              if (titleElem.innerHTML.trim() === "Mycelia") {
                src = "/assets/images/Mycelia.webp";
                alt = "Mycelia.webp";
              } else {
                src = "/assets/images/avatar-2.png";
                alt = "PlaceHolder";
              }
  
              img.innerHTML = '';
  
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
  