import { useEffect } from "react";
import gsap, { Expo } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
//hero likha animation
export const useGsapShutterUnveil = (item, delay = 0, trigger) => {
  //heroRef trigger hisabe use kora hoase akhane
  //trigger bolte animate jayga ta bojhai....oi jayga tekhe bar hoa abar fire gele animate hoi
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        height: "100%",
      },
      {
        height: 0,
        duration: 2,
        ease: Expo.easeInOut,
        delay: delay,
        scrollTrigger: {
          trigger: trigger.current,
          //view port a dhukle animation play hobe bar hole off hobe aitar jonno toggleAction
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

//navbar animation
export const useGsapDownStagger = (arr, delay = 0) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        y: "-100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        //koto time dhore animate hobe tar jonno duration
        duration: 1.2,
        //array item gula kotokhon por por ashbe tar jonno stagger set kora hoi
        stagger: 0.2,
        ease: Expo.easeIn,
        delay: delay,
      }
    );
  }, []);
};

//hero Image drop animation

export const useGsapPhotoDropping = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        y: "-100vh",
        scale: 0,
      },
      {
        y: 0,
        //pic soto tekhe boro hoar jonno scale use kora
        scale: 1,
        duration: 1.7,
        stagger: 0.2,
        ease: Expo.easeIn,
        delay: 2,
      }
    );
  }, []);
};

export const useGsapPhotoLevitate = (arr, trigger) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        y: 0,
      },
      {
        y: "-100%",
        ease: Expo.easeInOut,

        scrollTrigger: {
          trigger: trigger.current,
          //scrub value 1 mane true
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapFeatureLeftShutterUnveil = (item, trigger) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        height: "100%",
      },
      {
        height: 0,
        duration: 1.3,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trigger.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapFeatureRightShutterUnveil = (item, trigger) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        width: "100%",
      },
      {
        width: 0,
        duration: 1.3,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trigger.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapGalleryImage = (item) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        x: 0,
        width: 0,
      },
      {
        x: "30%",
        width: "100%",
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};
export const useGsapGalleryTitle = (item, trigger) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        x: "30%",
      },
      {
        x: 0,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trigger.current,
          start: "top center",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapGalleryCategory = (item, trigger) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        x: "-100vw",
      },
      {
        x: "0",

        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trigger.current,
          start: "top center",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useFooterHeadLine = (item, trigger) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        y: "-100%",
      },
      {
        y: 0,
        duration: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trigger.current,
          toggleActions: "play",
        },
      }
    );
  }, []);
};

export const useGsapNotFoundHeadline = (item, vw = "-100vw") => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: vw,
      },
      {
        x: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
      }
    );
  }, []);
};

export const useGsapNotFoundImg = (item) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        scale: 0,
        borderRadius: "50%",
      },
      {
        scale: 1,
        borderRadius: 0,
        duration: 4,
        delay: 1,
        ease: "elastic",
      }
    );
  }, []);
};
