import { TweenMax, Power3 } from "gsap";
import { useEffect, useRef } from "react";
const SimpleTweenMax = () => {
  let textItem = useRef(null);
  let buttonItem = useRef(null);
  useEffect(() => {
    TweenMax.to(buttonItem,1,{
      opacity:1,
      y:-20,
      ease:Power3.easeOut,
    })
    TweenMax.to(textItem, 1, {
      opacity: 1,
      y: -40,
      ease: Power3.easeOut,
      delay: 0.5,
    });
  }, []);
  return (
    <div className="mt-10">
        <p ref={(el)=> {textItem = el}} className="text-3xl bg-red-400 opacity-0">i am safiul azam</p>
        <button ref={el => {buttonItem = el}} className="bg-red-300 border-0 py-2 px-20">gasi</button>
    </div>
  );
};

export default SimpleTweenMax;
