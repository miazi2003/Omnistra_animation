import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FaChevronRight } from "react-icons/fa6";
import "../../styles/components/StickyScrollBoxes.css"
import nice from "../../assets/images/NICE_Logo.png";
import end from "../../assets/images/end_point.png";
import salesforce from "../../assets/images/salesforce-logo.png";
import channel from "../../assets/images/channel_payments_logo.png";
import orig from "../../assets/images/orig.png";
import tri from "../../assets/images/tri.png";
import lattitude from "../../assets/images/Latitude-Cloud-Logo.png";
import lolo from "../../assets/images/lolo.png";
import solution from "../../assets/images/solution.png";
import text_sol from "../../assets/images/text_sol.png";
import finalLogo from "../../assets/images/final_logo.png";

export default function StickyScrollBoxes() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  });

  const boxes = [
    { x: -500, y: -160, img: nice },
    { x: -480, y: -30, img: end },
    { x: -400, y: 160, img: salesforce },
    { x: -480, y: 360, img: channel },
    { x: 380, y: -160, img: lolo },
    { x: 355, y: -15, img: solution },
    { x: 340, y: 380, img: text_sol },
    { x: -200, y: -140, img: tri },
    { x: 50, y: -160, img: lattitude },
    { x: -50, y: 400, img: orig },
  ];

  const mobileBoxes = [
    { x: -135, y: -15, img: nice },
    { x: -85, y: -115, img: end },
    { x: -100, y: 265, img: salesforce },
    { x: -165, y: 195, img: channel },
    { x: 65, y: -145, img: lolo },
    { x: 85, y: 280, img: solution },
    { x: 120, y: 200, img: text_sol },
    { x: -10, y: -25, img: tri },
    { x: 115, y: -15, img: lattitude },
    { x: -25, y: 205, img: orig },
  ];

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const activeBoxes = isMobile ? mobileBoxes : boxes;
  const logoBoxSize = isMobile ? "50px" : "101px";
  const logoAnchorLeft = isMobile ? "43%" : "46%";
  const logoAnchorTop = isMobile ? "63%" : "50%";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth scroll
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.8,
  });

  // Final logo opacity
  const finalOpacity = useTransform(smoothProgress, [0.72, 0.80], [0, 1]);

  // Text fade out + move up when final logo appears
  const textOpacity = useTransform(smoothProgress, [0.70, 0.82], [1, 0]);
  const textY = useTransform(smoothProgress, [0.70, 0.82], [0, -80]); // move up 80px

  // Logo transforms
  const boxTransforms = activeBoxes.map((box, index) => {
    const delay = index * 0.03;
    const x = useTransform(smoothProgress, [0 + delay, 0.70], [box.x, 0]);
    const y = useTransform(smoothProgress, [0 + delay, 0.70], [box.y, 0]);
    const opacity = useTransform(smoothProgress, [0.65, 0.75], [1, 0]);
    return { x, y, opacity };
  });

  return (
    <>


      {/* Sticky Scroll Section */}
      <div
        ref={containerRef}
        className="rounded-[28px] border border-[#1d2941] bg-[radial-gradient(110%_90%_at_50%_0%,#0f1f3d_0%,#060c19_50%,#030712_100%)]"
        style={{
          height: "200vh", 
          position: "relative",
          width: isMobile ? "100%" : "1200px",
          margin: "60px auto",
        }}
      >
        <motion.div
          style={{
            position: "sticky",
            top: 0,
            height: "60vh",
            width: "100%",
          }}
        >
          {/* Text + Button Layer */}
          <motion.div
            style={{
              opacity: textOpacity,
              y: textY,
            }}
            className="text-field flex flex-col justify-center items-center w-full min-h-screen bg-transparent"
          >
            <h2 className="lg:text-[54px] text-white">One platform,</h2>
            <h2 className="lg:text-[54px] text-[#dbeafe]">Unlimited integrations</h2>
            <br />
<div className="hover-div">
   <button className="hover-btn" type="button">
     <span className="btn-text btn-text-primary">View all integrations</span>
     <span className="btn-text btn-text-secondary">View all integrations</span>
   </button>
   <span className="round-icon"><FaChevronRight size={10} /></span>
</div>
          </motion.div>

          {/* Normal Logos */}

          {activeBoxes.map((box, index) => {
            const { x, y, opacity } = boxTransforms[index];
            return (
              <motion.div
                key={index}
                style={{
                  width: logoBoxSize,
                  height: logoBoxSize,
                  position: "absolute",
                  background: "#0b1220",
                  top: logoAnchorTop,
                  left: logoAnchorLeft,
                  transform: "translate(-50%, -50%)",
                  x,
                  y,
                  opacity,
                  borderRadius: "12px",
                  border: "1px solid #223252",
                  boxShadow: "rgba(2,6,23,0.65) 0px 8px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={box.img}
                  alt=""
                  style={{
                    width: "90%",
                    height: "90%",
                    objectFit: "contain",
                  }}
                />
              </motion.div>
            );
          })}

          {/* Final Logo */}

          <motion.div
            style={{
              width: logoBoxSize,
              height: logoBoxSize,
              position: "absolute",
              background: "#0b1220",
              top: logoAnchorTop,
              left: logoAnchorLeft,
              transform: "translate(-50%, -50%)",
              borderRadius: "12px",
              border: "1px solid #223252",
              boxShadow: "rgba(2,6,23,0.65) 0px 8px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: finalOpacity,
            }}
            animate={{ scale: [1, 1.08] }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <img
              src={finalLogo}
              alt=""
              style={{
                width: "90%",
                height: "90%",
                objectFit: "contain",
              }}
            />
          </motion.div>
        </motion.div>
      </div>



    </>
  );
}

