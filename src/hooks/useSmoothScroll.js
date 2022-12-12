import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
export const useSmoothScroll = () => {
  const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical", // vertical, horizontal
    smooth: true,
  });

  useEffect(() => {
    function raf(time) {
      //raf = request animation frame
      lenis.raf(time);
      //time ta scrolling are
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
};
