import React from 'react';

interface blogProps {
    active: boolean;
}
  
const blog: React.FC<blogProps> = ({active}) => {
    
    if (active === true ) {
        return (
            <article className="blog active" data-page="blog">
            <header>
              <h2 className="h2 article-title">Blog</h2>
            </header>
            <section className="blog-posts">
              <ul className="blog-posts-list">
                <li className="blog-post-item">
                  <a href="./blog/Chibi-Emotes">
                    <figure className="blog-banner-box">
                      <img src="https://lynnux.xyz/emotes/" alt="Chibi Emote's" loading="lazy"/>
                    </figure>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <p className="blog-category">Design</p>
                        <span className="dot"></span>
                        <time dateTime="2022-02-23">Feb 23, 2022</time>
                      </div>
                      <h3 className="h3 blog-item-title">Chibi emote's</h3>
                      <p className="blog-text">All chibi emote's are free to use.<br/>Click for more info.</p>
                    </div>
                  </a>
                </li>
                <li className="blog-post-item">
                  <a href="./blog/Commisions">
                    <figure className="blog-banner-box">
                      <img src="/assets/images/Commisions_Closed.png" alt="Mercy Chibi Emote's" loading="lazy"/>
                    </figure>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <p className="blog-category">Personal</p>
                        <span className="dot"></span>
                        <time dateTime="2022-02-23">Oct 6, 2023</time>
                      </div>
                      <h3 className="h3 blog-item-title">Art Commissions</h3>
                      <p className="blog-text">Why I've Decided to Step Away.<br/>Click for more info.</p>
                    </div>
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

export default blog;