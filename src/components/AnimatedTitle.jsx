import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AnimatedTitle = ({ children, className, style, delay = 0 }) => {
  const ref = useRef(null);

  // Split text into words for staggered animation
  const text = typeof children === "string" ? children : String(children);
  const words = text.split(" ");

  useEffect(() => {
    if (!ref.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const spans = ref.current.querySelectorAll("[data-word]");
      if (!spans.length) return;

      gsap.set(spans, { opacity: 0, y: 50, filter: "blur(10px)" });

      gsap.to(spans, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        delay,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          once: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [delay, text]);

  return (
    <h2
      ref={ref}
      className={className}
      style={style}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          data-word
          style={{
            display: "inline-block",
            marginRight: index < words.length - 1 ? "0.3em" : "0"
          }}
        >
          {word}
        </span>
      ))}
    </h2>
  );
};

export default AnimatedTitle;
