import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Box = () => {
  useEffect(() => {
    gsap.to(".c", {
      scrollTrigger:{
        trigger:".c",
        toggleActions:"play none none none"
      },
      x: 400,
      rotation: 360,
      duration: 4,
      delay: 1,
    });
  }, []);
  return (
    <div className="overflow-y-scroll h-40 border">
      <div className="w-20 h-20 bg-green-900 a"></div>
      <div className="w-20 h-20 bg-red-900 b"></div>
      <div className="w-20 h-20 bg-yellow-900 c"></div>
    </div>
  );
};

export default Box;
