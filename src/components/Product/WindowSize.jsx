
import { useState, useEffect } from "react";

function WindowSize(){
    const [windowSize, setwindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    useEffect(()=>{
        const handleSize= ()=>{
            setwindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });

        };
       

         window.addEventListener("resize", handleSize  );
        
    }, []);

    return (
        <div>
            <h2>Window Size</h2>
            <p>Width: {windowSize.width}</p>
            <p>Height: {windowSize.height}</p>
        </div>
    )

}
export default WindowSize;

