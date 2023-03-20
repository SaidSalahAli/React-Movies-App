import { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollToped(props){
    const location = useLocation();
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
    },[location])
    return (
        <>{props.children}</>
    )
}
export default ScrollToped