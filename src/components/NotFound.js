// const NotFound = () => {
//   return (
//     <section className="wrapper">
//       <div className="not-found">
//         <div className="box box1">
//           <div className="box-1-row-1">
//             <div className="box-1-child-1">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
//               repudiandae!
//             </div>
//             <div className="box-1-child-2">
//               <div className="box-1st-child">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
//                 repudiandae!
//               </div>
//               <div className="box-2st-child">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
//                 repudiandae!
//               </div>
//             </div>
//           </div>
//           <div className="box-1-row-2">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
//             vitae inventore incidunt eligendi soluta. Vero, laboriosam facere in
//             velit rerum libero repellat quidem animi nam voluptatem laborum
//             eveniet delectus assumenda.
//           </div>
//         </div>

//         <div className="box box2">Lorem ipsum dolor sit amet.</div>
//         <div className="box box3">
//           <div className="box-3-row-1">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
//             pariatur impedit obcaecati eos consequatur esse sequi quasi,
//             incidunt itaque temporibus.
//           </div>
//           <div className="box-3-row-2">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
//             pariatur impedit obcaecati eos consequatur esse sequi quasi,
//             incidunt itaque temporibus.
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NotFound;

import { useRef } from "react";
import { useGsapNotFoundHeadline, useGsapNotFoundImg } from "../hooks/gsap";

const NotFound = () => {
  const leftHeadlineRef = useRef(null);
  const rightHeadlineRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);

  useGsapNotFoundHeadline(leftHeadlineRef);
  useGsapNotFoundHeadline(rightHeadlineRef, "100vw");
  useGsapNotFoundImg(leftImgRef);
  useGsapNotFoundImg(rightImgRef);

  return (
    <section className="not-found wrapper">
      <div className="headline-1" ref={leftHeadlineRef}>
        Sorry, we couldn't
      </div>
      <div className="img-1" ref={rightImgRef}>
        <img
          src="https://images.pexels.com/photos/13262992/pexels-photo-13262992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Woman Sitting on a Hood of an Old Volkswagen Golf Car"
        />
      </div>
      <div className="img-2" ref={leftImgRef}>
        <img
          src="https://images.pexels.com/photos/5808388/pexels-photo-5808388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Woman showing retro photo camera and holding blooming flower"
        />
      </div>
      <div className="headline-2" ref={rightHeadlineRef}>
        Find that page
      </div>
    </section>
  );
};

export default NotFound;
