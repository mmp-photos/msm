import {useState, useEffect} from 'react';

const HideMenu = (event) => {
    const [mouseCoordinates, setMouseCoordinates] = useState({x:0, y:0});
    const [xValue, setXValue] = useState(0);
	
    const mouseMoveHandler = (event) => {
        console.log(`The mouse pointer is at ${xValue} across.`);
        // console.log(event.clientX);
      setMouseCoordinates({
          x:event.clientX,
          y:event.clientY
      });
      setXValue(event.clientX);
    }
      
    useEffect(()=>{
      window.addEventListener('click', mouseMoveHandler);
      return(()=>{
          window.removeEventListener('click', mouseMoveHandler);
      })
    }, [])  
}

export default HideMenu;