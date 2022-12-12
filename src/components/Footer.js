import { useRef } from "react";
import { useFooterHeadLine } from "../hooks/gsap";

const Footer = () => {
  const footerRef = useRef(null);
  const footerHeadLine = useRef(null);

  useFooterHeadLine(footerHeadLine, footerRef);
  return (
    <section className="footer wrapper" ref={footerRef}>
      <h1 ref={footerHeadLine}>Bonjour</h1>
      <p>© {new Date().getFullYear()} Immemorial. Crafted by yours truly</p>
    </section>
  );
};

export default Footer;
