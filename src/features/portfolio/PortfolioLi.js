import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const PortfoliLi = (item) => {

    const handleHover = (e) => {
        const listItem = e.currentTarget;
        const h2Header = listItem.querySelector('h2');
        const buttons = listItem.querySelector('div');
        const summary = listItem.querySelector('p');
        buttons.style.opacity = '1';
        summary.style.transform = 'translateY(0px)';
    };
    const handleBlur = (e) => {
        const listItem = e.currentTarget;
        const h2Header = listItem.querySelector('h2');
        const buttons = listItem.querySelector('div');
        const summary = listItem.querySelector('p');
        buttons.style.opacity = '0';
        summary.style.transform = 'translateY(-24px)'
    };
    const visitSite = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    const launchSite = (url) => {
        // console.log(url);
        if(!url){
            return null
        } else
        return(
            <button onClick={() => visitSite(url)}>
                Visit Site
            </button>
        )
    };
    let url = `/portfolio/${item.params}`;
    function ButtonLink({ to, children }) {
        let url = `/portfolio/${to}`;
        return <Link to={url}><button>{children}</button></Link>;
    }

    return (
            <li key={item.id} onMouseEnter={handleHover} onMouseLeave={handleBlur}>
                <a href={url}><img className="portfolio-thumbs-image"
                src={item.images[0]}
                alt={item.title} />
                </a>
                <h2 className="test-h2" style={{display: "block"}}>{item.title}</h2>
                <div className="portfolio-buttons">
                    <ButtonLink to={item.params}><i className="fa-solid fa-info"></i></ButtonLink>
                    {item.url ? <button onClick={() => visitSite(item.url)}><i className="fa-solid fa-globe"></i>
                                </button>
                              : null}
                    {item.github ? <button onClick={() => visitSite(item.github)}>
                                   <i className="fa-brands fa-github"></i>
                                   </button>
                                 :null}
                    {item.download ? <button>
                                     <a href={item.download}>
                                     <i className="fa-solid fa-arrow-down"></i></a>
                                     </button>
                                   : null}
                    {/* {launchSite(item.url)} */}
                </div>
                <p>{item.summary}</p>
            </li>
    )
};

export default PortfoliLi