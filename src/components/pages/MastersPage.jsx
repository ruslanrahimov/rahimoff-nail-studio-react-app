import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { masters } from "../../data/masters.js";
import MasterCard from "../MasterCard.jsx";
import SectionHeading from "./../SectionHeading/SectionHeading.jsx";

gsap.registerPlugin(ScrollTrigger);

const MastersPage = () => {
  const pageRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gridRef.current.querySelectorAll(".master-card-animate");

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={pageRef}
      className="bg-[#fcfbf7] min-h-screen pt-[94px] pb-[80px] px-[30px] max-md:px-[20px] max-md:pt-[74px]"
    >
      <div className="max-w-[1140px] mx-auto">
        <SectionHeading
          label="MASTERS"
          title="Uzmanlarımız"
        />

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-md:gap-6"
        >
          {masters.map((master) => (
            <MasterCard key={master.id} {...master} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MastersPage;
