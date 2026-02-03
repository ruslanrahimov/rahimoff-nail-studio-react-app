import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useLocation } from "react-router";
import SectionHeader from "./../SectionHeader.jsx";
import Values from "./../Values.jsx";
import Brands from "./../Brands/Brands.jsx";
import { faqData } from "../../data/faq.js";
import FAQItem from "./../FAQItem/FAQItem.jsx";
import PortfolioCascade from "./../PortfolioGrid/PortfolioCascade.jsx";
import { portfolioCascadeData } from "../../data/portfolioCascadeData.js";
import { tabContent } from "../../data/services.js";
import HeroList from "./../HeroList.jsx";
import Reviews from "./../Reviews/Reviews.jsx";
import About from "./../About/About.jsx";
import SectionHeading from "./../SectionHeading/SectionHeading.jsx";

const Home = () => {
        const [currentFAQData, setCurrentFAQData] = useState(faqData);
        const [goalsInView, setGoalsInView] = useState(false);
        const location = useLocation();

        const services = Object.keys(tabContent).map((key, index) => ({
                id: index + 1,
                name: tabContent[key].title,
                key: key,
        }));

        const pageRef = useRef(null);
        // Create refs for each section
        const portfolioRef = useRef(null);
        const servicesPreviewRef = useRef(null);
        const goalsRef = useRef(null);
        const brandsRef = useRef(null);
        const brandsInnerRef = useRef(null);
        const faqRef = useRef(null);
        const faqListRef = useRef(null);

        useEffect(() => {
                if (!goalsRef.current) return;

                const observer = new IntersectionObserver(
                        ([entry]) => {
                                if (entry.isIntersecting) {
                                        setGoalsInView(true);
                                        observer.disconnect();
                                }
                        },
                        { rootMargin: "-100px 0px" },
                );

                observer.observe(goalsRef.current);

                return () => observer.disconnect();
        }, []);

        useEffect(() => {
                gsap.registerPlugin(ScrollTrigger);

                // Clear any existing ScrollTriggers
                ScrollTrigger.getAll().forEach(trigger => {
                        if (trigger.vars.id?.startsWith('home-')) {
                                trigger.kill();
                        }
                });

                const ctx = gsap.context(() => {
                        const ease = "power3.out";

                        // Portfolio section has its own GSAP animations within PortfolioCascade component

                        if (servicesPreviewRef.current) {
                                const serviceItems = servicesPreviewRef.current.querySelectorAll(".service-preview-item");

                                gsap.fromTo(
                                        serviceItems,
                                        { opacity: 0, x: -20 },
                                        {
                                                opacity: 1,
                                                x: 0,
                                                duration: 0.5,
                                                ease,
                                                stagger: 0.1,
                                                scrollTrigger: {
                                                        trigger: servicesPreviewRef.current,
                                                        start: "top 80%",
                                                        once: true,
                                                        id: 'home-services-preview',
                                                },
                                        },
                                );
                        }

                        if (brandsRef.current && brandsInnerRef.current) {
                                gsap.fromTo(
                                        brandsInnerRef.current,
                                        { opacity: 0, y: 30 },
                                        {
                                                opacity: 1,
                                                y: 0,
                                                duration: 0.6,
                                                ease,
                                                scrollTrigger: {
                                                        trigger: brandsRef.current,
                                                        start: "top 80%",
                                                        once: true,
                                                        id: 'home-brands',
                                                },
                                        },
                                );
                        }

                        if (faqRef.current && faqListRef.current) {
                                const faqItems = faqListRef.current.querySelectorAll(".faq-item");

                                gsap.fromTo(
                                        faqItems,
                                        { opacity: 0, x: -20 },
                                        {
                                                opacity: 1,
                                                x: 0,
                                                duration: 0.5,
                                                ease,
                                                stagger: 0.08,
                                                scrollTrigger: {
                                                        trigger: faqRef.current,
                                                        start: "top 80%",
                                                        once: true,
                                                        id: 'home-faq',
                                                },
                                        },
                                );
                        }
                }, pageRef);

                return () => ctx.revert();
        }, []);

        useEffect(() => {
                if (!location.hash) return;
                const targetId = location.hash.slice(1);
                if (!targetId) return;
                const target = document.getElementById(targetId);
                if (target) {
                        target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
        }, [location.hash]);

        function faqStateUpdateHandler(id) {
                setCurrentFAQData((prevState) =>
                        prevState.map((faq) => {
                                if (id === faq.id) {
                                        const nextFaqState = faq.state === "closed" ? "open" : "closed";
                                        return { ...faq, state: nextFaqState };
                                }
                                return faq;
                        }),
                );
        }

        return (
                <div ref={pageRef} className="home-container mt-[54px] w-full mx-auto max-md:mt-[54px]">
                        <section ref={servicesPreviewRef} className="services-preview bg-[#fcfbf7] pt-0 pb-[80px] px-[30px] min-h-[100vh] max-md:pb-[60px] max-md:px-[20px]">
                                <HeroList />
                                <div className="max-w-[1140px] mx-auto">
                                        <SectionHeading
                                                label="SERVICES"
                                                title="Hizmetlerimiz"
                                        />

                                        <div className="border-t border-[#d4d4d0]">
                                                {services.map((service) => (
                                                        <Link
                                                                key={service.id}
                                                                to={`/services?tab=${service.key}`}
                                                                className="service-preview-item flex items-center justify-between py-[28px] border-b border-[#d4d4d0] group hover:bg-[#e8e6dd] transition-all duration-300 px-[20px] -mx-[20px] max-md:py-[20px]"
                                                        >
                                                                <span
                                                                        className="text-[14px] font-light text-[#999] w-[50px] max-md:text-[12px] max-md:w-[40px]"
                                                                        style={{ fontFamily: "Manrope, sans-serif" }}
                                                                >
                                                                        {String(service.id).padStart(2, "0")}
                                                                </span>
                                                                <span
                                                                        className="flex-1 text-[24px] font-light uppercase text-[#2e2e2e] tracking-wide max-md:text-[16px]"
                                                                        style={{ fontFamily: "Manrope, sans-serif" }}
                                                                >
                                                                        {service.name}
                                                                </span>
                                                                <span
                                                                        className="text-[#2e2e2e] transform group-hover:translate-x-[5px] group-hover:-translate-y-[5px] transition-transform duration-300"
                                                                        aria-hidden="true"
                                                                >
                                                                        <svg
                                                                                className="w-[24px] h-[24px] max-md:w-[20px] max-md:h-[20px]"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                stroke="currentColor"
                                                                                strokeWidth="1.6"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                        >
                                                                                <path d="M7 17 L17 7" />
                                                                                <path d="M10 7 H17 V14" />
                                                                        </svg>
                                                                </span>
                                                        </Link>
                                                ))}
                                        </div>

                                </div>
                        </section>
                        <section id="portfolio" ref={portfolioRef} className="salon">
                                <PortfolioCascade data={portfolioCascadeData} />
                        </section>
                        <About />
                        <section ref={goalsRef} className="goals bg-[#fcfbf7] pt-[40px] pb-[60px] px-[30px] max-md:pt-[30px] max-md:pb-[40px] max-md:px-[20px]">
                                <div className="max-w-[1140px] mx-auto">
                                        <SectionHeading
                                                label="VALUES"
                                                title="Diğerlerimiz"
                                        />
                                        <Values inView={goalsInView} />
                                </div>
                        </section>
                        <section ref={brandsRef} className="brands py-[60px] px-[30px] max-md:py-[40px] max-md:px-[20px]">
                                <div className="max-w-[1140px] mx-auto">
                                        <SectionHeading
                                                label="BRANDS"
                                                title="Çalıştığımız Markalar"
                                        />
                                        <div ref={brandsInnerRef}>
                                                <Brands />
                                        </div>
                                </div>
                        </section>
                        <Reviews />
                        <section ref={faqRef} className="faq bg-[#fcfbf7] py-[60px] px-[30px] max-md:py-[40px] max-md:px-[20px]">
                                <div className="max-w-[1140px] mx-auto">
                                        <SectionHeading
                                                label="FAQ"
                                                title="Sıkça Sorulan Sorular"
                                        />
                                        <div ref={faqListRef} className="faq-list border-t border-[#d4d4d0]">
                                                {currentFAQData.map((data, index) => (
                                                        <FAQItem
                                                                key={data.id}
                                                                data={data}
                                                                index={index}
                                                                faqStateUpdateHandler={faqStateUpdateHandler}
                                                        />
                                                ))}
                                        </div>
                                </div>
                        </section>
                </div>
        );
};

export default Home;
