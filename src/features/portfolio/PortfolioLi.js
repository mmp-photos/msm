import { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const PortfoliLi = (item) => {
    const [ height, setHeight ] = useState('400px');
    const [ isFirstLi, setisFirstLi ] = useState(false);
    const ref = useRef(null);
    const [ firstLoad, setFirstLoad ] = useState(true);

    ;

    useEffect(() => {
        setHeight(ref.current.clientHeight)
        console.log(height)
        setFirstLoad(false)
        }, [firstLoad])
    let angerGenerator = "angerGenerator";
    const handleHover = (e) => {
        const listItem = e.currentTarget;
        const image = listItem.querySelector('img');
        const heading = listItem.querySelector('h2');
        const button = listItem.querySelector('button');
        
        listItem.style = 'maxHeight:'+ height + 'px';
        image.style.transform = 'translateY(-35px)';
        heading.style.transform = 'translateY(-35px)';
        button.style.display = 'block';
        button.style.transform = 'translateY(-35px)';

    
    }
    const handleBlur = (e) => {
        const listItem = e.currentTarget;
        const image = listItem.querySelector('img');
        const heading = listItem.querySelector('h2');
        const button = listItem.querySelector('button');
    
        image.style.transform = 'translateY(0px)';
        heading.style.transform = 'translateY(0px)';
        button.style.display = 'none';
    
    }
    // const setRef = () => {
    //     if(isFirstLi){
    //         setisFirstLi(!isFirstLi)
    //         return {liForHeight}
    //     } else {
    //         return null
    //     }
    // };

    const visitSite = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const launchSite = (url) => {
        console.log(url);
        if(!url){
            return null
        } else
        return(
            <button onClick={() => visitSite(url)}>
                Visit Site
            </button>
        )
    };

    return (
            <li ref={ref} key={item.id} style={{visibility: "visible"}} onMouseEnter={handleHover} onMouseLeave={handleBlur} >
                <img style={{width: "200px"}} className="portfolio-thumbs-image"
                src={item.images[0]}
                alt={item.title} />
                <h2 className="test-h2">{item.title}</h2>
                {launchSite(item.url)}
                <button style={{display: "none"}}>
                    <Link to={"/portfolio/" + item.params}>More Info</Link>    
                </button>
            </li>
    )
};

export default PortfoliLi