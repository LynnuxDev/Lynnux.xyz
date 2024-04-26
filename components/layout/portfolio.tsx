import React from 'react';
import { ChevronDownOutline, EyeOutline } from 'react-ionicons'

interface portfolioProps {
    active: boolean;
}
  
const portfolio: React.FC<portfolioProps> = ({active}) => {
    
    if (active === true ) {
        return (
            <article className="portfolio active" data-page="portfolio">
            <header>
              <h2 className="h2 article-title">Portfolio</h2>
            </header>
            <section className="projects">
              <ul className="filter-list">
                <li className="filter-item">
                  <button className="active" data-filter-btn>All</button>
                </li>
                <li className="filter-item">
                  <button data-filter-btn>Art designs</button>
                </li>
                <li className="filter-item">
                  <button data-filter-btn>Applications</button>
                </li>
                <li className="filter-item">
                  <button data-filter-btn>Web development</button>
                </li>
              </ul>
              <div className="filter-select-box">
                <button className="filter-select" data-select>
                  <div className="select-value" data-select-value>Select category</div>
                  <div className="select-icon">
                  <ChevronDownOutline color={'#ffdb70'} title={'bookoutline'} height="30px" width="30px" />
                  </div>
                </button>
                <ul className="select-list">
                  <li className="select-item">
                    <button data-select-item>All</button>
                  </li>
                  <li className="select-item">
                    <button data-select-item>Art designs</button>
                  </li>
                  <li className="select-item">
                    <button data-select-item>Applications</button>
                  </li>
                  <li className="select-item">
                    <button data-select-item>Web development</button>
                  </li>
                </ul>
              </div>
              <ul className="project-list">
                <li className="project-item active" data-filter-item data-category="applications">
                  <a href="https://discord.com/application-directory/738057910923296839">
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                      <EyeOutline color={'#ffdb70'} title={'bookoutline'} height="30px" width="30px" />
                      </div>
                      <img src="https://cdn.lynnux.xyz/images/Akira-App-Directory.png" alt="Akira" loading="lazy"/>
                    </figure>
                    <h3 className="project-title">Akira</h3>
                    <p className="project-category">Discord Bot Development</p>
                  </a>
                </li>
                <li className="project-item active" data-filter-item data-category="web development">
                  <a href="https://akira.lynnux.xyz">
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                      <EyeOutline color={'#ffdb70'} title={'bookoutline'} height="30px" width="30px" />
                      </div>
                      <img src="https://cdn.lynnux.xyz/images/AkiraSitePreview.webp" alt="Akira Site" loading="lazy"/>
                    </figure>
                    <h3 className="project-title">Akira Website</h3>
                    <p className="project-category">Web development</p>
                  </a>
                </li>
                <li className="project-item active" data-filter-item data-category="art designs">
                  <a href="https://lynnux.xyz/emotes">
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                      <EyeOutline color={'#ffdb70'} title={'bookoutline'} height="30px" width="30px" />
                      </div>
                      <img src="https://cdn.lynnux.xyz/images/EmotesSitePreview.webp" alt="Emoji's" loading="lazy"/>
                    </figure>
                    <h3 className="project-title">Emote's</h3>
                    <p className="project-category">Art designs</p>
                  </a>
                </li>
                <li className="project-item active" data-filter-item data-category="web development">
                  <a href="https://overwatchaimbot.com">
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                      <EyeOutline color={'#ffdb70'} title={'bookoutline'} height="30px" width="30px" />
                      </div>
                      <img src="https://cdn.lynnux.xyz/images/OWAimbotSitePreview.webp" alt="OverwatchAimbot.com" loading="lazy"/>
                    </figure>
                    <h3 className="project-title">OverwatchAimbot.com</h3>
                    <p className="project-category">Web development</p>
                  </a>
                </li>
                <li className="project-item active" data-filter-item data-category="web development">
                  <a href="./helper/discord/coloredtext/">
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                      <EyeOutline color={'#ffdb70'} title={'bookoutline'} height="30px" width="30px" />
                      </div>
                      <img src="https://cdn.lynnux.xyz/images/ColorTextSitePreview.webp" alt="Discord ColoredText Generator" loading="lazy"/>
                    </figure>
                    <h3 className="project-title">Discord ColoredText Generator</h3>
                    <p className="project-category">Web development</p>
                  </a>
                </li>
                <li className="project-item active" data-filter-item data-category="web development">
                  <a href="./helper/discord/timestamp/">
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                      <EyeOutline color={'#ffdb70'} title={'bookoutline'} height="30px" width="30px" />
                      </div>
                      <img src="https://cdn.lynnux.xyz/images/timestampSitePreview.webp" alt="Discord Timestamp Generator" loading="lazy"/>
                    </figure>
                    <h3 className="project-title">Discord Timestamp Generator</h3>
                    <p className="project-category">Web development</p>
                  </a>
                </li>
                <li className="project-item active" data-filter-item data-category="web development">
                  <a href="./helper/discord/webhook/">
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                      <EyeOutline color={'#ffdb70'} title={'bookoutline'} height="30px" width="30px" />
                      </div>
                      <img src="https://cdn.lynnux.xyz/images/webhookSitePreview.webp" alt="Discord Webhook Sender" loading="lazy"/>
                    </figure>
                    <h3 className="project-title">Discord Webhook Sender</h3>
                    <p className="project-category">Web development</p>
                  </a>
                </li>
                <li className="project-item active" data-filter-item data-category="web development">
                  <a href="https://frames.lynnux.xyz">
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                      <EyeOutline color={'#ffdb70'} title={'bookoutline'} height="30px" width="30px" />
                      </div>
                      <img src="https://cdn.lynnux.xyz/images/FramesSitePreview.webp" alt="frames.lynnux.xyz" loading="lazy"/>
                    </figure>
                    <h3 className="project-title">frames.lynnux.xyz</h3>
                    <p className="project-category">Web development</p>
                  </a>
                </li>
                <li className="project-item active" data-filter-item data-category="web development">
                  <a href="https://cdn.lynnux.xyz">
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                      <EyeOutline color={'#ffdb70'} title={'bookoutline'} height="30px" width="30px" />
                      </div>
                      <img src="https://cdn.lynnux.xyz/images/cdnSitePreview.webp" alt="cdn.lynnux.xyz" loading="lazy"/>
                    </figure>
                    <h3 className="project-title">cdn.lynnux.xyz</h3>
                    <p className="project-category">Web development</p>
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

export default portfolio;