import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useWindowSize } from "shared/lib";

export const useScroll = () => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef);
  const [width] = useWindowSize();

  const scroll = () => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        //@ts-ignore
        trigger: titleRef.current.parentElement.parentElement,
        start: "top top-=0px",
        //@ts-ignore
        end: "bottom+=200px top",
        scrub: true,
      },
    });

    tl.to(titleRef.current, {
      //@ts-ignore
      x: -titleRef.current.scrollWidth * 1.2,
      duration: 2,
    });
  };

  useEffect(() => {
    if (isInView && width <= 1024) {
      scroll();
    }
  }, [isInView, width]);
  return [titleRef];
};
