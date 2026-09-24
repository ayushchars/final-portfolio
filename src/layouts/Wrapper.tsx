
import { useEffect } from "react";
import { animationCreate } from "../utils/utils";


const Wrapper = ({ children }: any) => {
  useEffect(() => {
    // animation
    const timer = setTimeout(() => {
      animationCreate();
    }, 100);

    return () => clearTimeout(timer);
  }, []);



  return <>
    {children}
  </>;
};

export default Wrapper;
