import gsap from "gsap";
import { useEffect } from "react";

const Box = () => {
  useEffect(() => {
    gsap.to(".a", {
      x: 400,
      rotation: 360,
      duration: 4,
      delay:1
    });
  }, []);
  return (
    <div className="space-y-20">
      <div className="w-20 h-20 bg-green-900 a"></div>
      <div className="w-20 h-20 bg-red-900 b"></div>
      <div className="w-20 h-20 bg-yellow-900 c"></div>
    </div>
  );
};

export default Box;
