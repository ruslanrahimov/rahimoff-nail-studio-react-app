import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { tabContent } from "../../data/services.js";
import { NavLink, useSearchParams } from "react-router";
import SectionHeading from "./../SectionHeading/SectionHeading.jsx";

const Services = () => {
	const [searchParams] = useSearchParams();
	const tabFromUrl = searchParams.get("tab");
	const initialTab = tabFromUrl && tabContent[tabFromUrl] ? tabFromUrl : "MANICURE";
	const [activeTab, setActiveTab] = useState(initialTab);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const isInitialMount = useRef(true);
	const pageRef = useRef(null);
	const headerRef = useRef(null);
	const tabsRef = useRef(null);
	const imageRef = useRef(null);
	const servicesListRef = useRef(null);
	const footerNoteRef = useRef(null);

	// Handle tab change with animation
	const handleTabChange = (newTab) => {
		if (newTab === activeTab || isTransitioning) return;

		setIsTransitioning(true);
		const ease = "power3.out";

		// Animate out current content
		const timeline = gsap.timeline({
			onComplete: () => {
				setActiveTab(newTab);
				setIsTransitioning(false);
			}
		});

		if (imageRef.current) {
			timeline.to(imageRef.current, {
				opacity: 0,
				scale: 0.98,
				y: -10,
				duration: 0.3,
				ease,
			}, 0);
		}

		if (servicesListRef.current) {
			const serviceItems = servicesListRef.current.querySelectorAll(".service-item");
			timeline.to(serviceItems, {
				opacity: 0,
				x: -10,
				duration: 0.25,
				ease,
				stagger: 0.03,
			}, 0);
		}
	};

	// Update active tab when URL parameter changes
	useEffect(() => {
		if (tabFromUrl && tabContent[tabFromUrl] && tabFromUrl !== activeTab) {
			handleTabChange(tabFromUrl);
		}
	}, [tabFromUrl]);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Clear any existing ScrollTriggers
		ScrollTrigger.getAll().forEach(trigger => {
			if (trigger.vars.id?.startsWith('services-')) {
				trigger.kill();
			}
		});

		const ctx = gsap.context(() => {
			const ease = "power3.out";

			// Set initial states immediately
			if (imageRef.current) {
				gsap.set(imageRef.current, { opacity: 0, scale: 0.95 });
			}

			// Header animation
			if (headerRef.current) {
				gsap.fromTo(
					headerRef.current,
					{ opacity: 0, y: 30 },
					{
						opacity: 1,
						y: 0,
						duration: 0.6,
						ease,
						delay: 0.2,
					}
				);
			}

			// Tabs animation
			if (tabsRef.current) {
				const tabButtons = tabsRef.current.querySelectorAll(".tab-button");
				gsap.fromTo(
					tabButtons,
					{ opacity: 0, y: 20 },
					{
						opacity: 1,
						y: 0,
						duration: 0.5,
						ease,
						stagger: 0.08,
						delay: 0.4,
					}
				);
			}

			// Initial image animation
			if (imageRef.current) {
				gsap.to(imageRef.current, {
					opacity: 1,
					scale: 1,
					duration: 0.8,
					ease,
					delay: 0.6,
				});
			}

			// Services list animation
			if (servicesListRef.current) {
				const serviceItems = servicesListRef.current.querySelectorAll(".service-item");
				gsap.fromTo(
					serviceItems,
					{ opacity: 0, x: -20 },
					{
						opacity: 1,
						x: 0,
						duration: 0.5,
						ease,
						stagger: 0.08,
						scrollTrigger: {
							trigger: servicesListRef.current,
							start: "top 80%",
							once: true,
							id: 'services-list',
						},
					}
				);
			}

			// Footer note animation
			if (footerNoteRef.current) {
				gsap.fromTo(
					footerNoteRef.current,
					{ opacity: 0, y: 20 },
					{
						opacity: 1,
						y: 0,
						duration: 0.6,
						ease,
						scrollTrigger: {
							trigger: footerNoteRef.current,
							start: "top 90%",
							once: true,
							id: 'services-footer',
						},
					}
				);
			}
		}, pageRef);

		return () => ctx.revert();
	}, []);

	// Animate transitions when tab changes (skip initial mount)
	useEffect(() => {
		// Skip animation on initial mount
		if (isInitialMount.current) {
			isInitialMount.current = false;
			return;
		}

		const ease = "power3.out";

		// Animate image transition - fade in from current position
		if (imageRef.current) {
			gsap.to(imageRef.current, {
				opacity: 1,
				scale: 1,
				y: 0,
				duration: 0.6,
				ease,
			});
		}

		// Animate service items transition
		if (servicesListRef.current) {
			const serviceItems = servicesListRef.current.querySelectorAll(".service-item");
			gsap.fromTo(
				serviceItems,
				{ opacity: 0, x: -15, y: 10 },
				{
					opacity: 1,
					x: 0,
					y: 0,
					duration: 0.5,
					ease,
					stagger: 0.06,
					delay: 0.1,
				}
			);
		}
	}, [activeTab]);

	return (
		<div ref={pageRef} className="services-page bg-[#fcfbf7] min-h-screen pt-[114px] pb-[80px] px-[30px] max-md:pt-[94px] max-md:pb-[60px] max-md:px-[20px]">
			<div className="max-w-[1140px] mx-auto">
				{/* Header */}
				<div ref={headerRef}>
					<SectionHeading
						label="SERVICES"
						title="Hizmetlerimiz"
					/>
				</div>

				{/* Tabs Navigation */}
				<div ref={tabsRef} className="tabs-container mb-[50px] max-md:mb-[40px]">
					<div className="flex gap-[12px] border-b border-[#d4d4d0] pb-[20px] overflow-x-auto max-md:gap-[8px] max-md:pb-[15px]">
						{Object.keys(tabContent).map((key) => (
							<button
								key={key}
								onClick={() => handleTabChange(key)}
								disabled={isTransitioning}
								className={`tab-button px-[24px] py-[10px] text-[13px] font-medium uppercase tracking-wide transition-all duration-300 whitespace-nowrap max-md:px-[16px] max-md:py-[8px] max-md:text-[11px] ${
									key === activeTab
										? "bg-[#6c2521] text-white shadow-md border-2 border-[#5a1f1c]"
										: "bg-transparent text-[#2e2e2e] border border-[#d4d4d0] hover:bg-[#e8e6dd]"
								} ${isTransitioning ? "opacity-50 cursor-not-allowed" : ""}`}
								style={{ fontFamily: "Manrope, sans-serif" }}
							>
								{tabContent[key].title}
							</button>
						))}
					</div>
				</div>

				{/* Service Image */}
				<div
					ref={imageRef}
					className="service-image-wrapper mb-[60px] max-md:mb-[40px]"
				>
					<div
						className="service-image h-[500px] bg-cover bg-center bg-no-repeat max-md:h-[300px]"
						style={{
							backgroundImage: `url(${tabContent[activeTab].image})`,
							filter: "grayscale(10%)",
						}}
					></div>
				</div>

				{/* Services List */}
				<div ref={servicesListRef} className="services-list">
					<div className="border-t border-[#d4d4d0]">
						{tabContent[activeTab].services.map((service, index) => (
							<div
								key={service.id}
								className="service-item flex items-start justify-between py-[32px] border-b border-[#d4d4d0] group hover:bg-[#e8e6dd] transition-all duration-300 px-[20px] -mx-[20px] max-md:py-[24px] max-md:flex-col max-md:gap-[12px]"
							>
								{/* Number */}
								<span
									className="text-[14px] font-light text-[#999] w-[60px] flex-shrink-0 max-md:text-[12px] max-md:w-auto"
									style={{ fontFamily: "Manrope, sans-serif" }}
								>
									{String(index + 1).padStart(2, "0")}
								</span>

								{/* Service Details */}
								<div className="flex-1 px-[20px] max-md:px-0">
									<h3
										className="text-[18px] font-light uppercase text-[#2e2e2e] mb-[8px] tracking-wide max-md:text-[16px]"
										style={{ fontFamily: "Manrope, sans-serif" }}
									>
										{service.name}
									</h3>
									<p
										className="text-[12px] font-normal text-[#666] leading-[1.5] max-w-[600px] max-md:text-[11px]"
										style={{ fontFamily: "Manrope, sans-serif" }}
									>
										{service.description}
									</p>
								</div>

								{/* Price */}
								<div className="flex items-center gap-[12px] flex-shrink-0 max-md:w-full max-md:justify-between max-md:pl-0">
									<span
										className="text-[20px] font-light text-[#5a4a3a] max-md:text-[18px]"
										style={{ fontFamily: "Manrope, sans-serif" }}
									>
										{typeof service.price === 'number' ? `${service.price} ₺` : service.price}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Footer Note */}
				<div
					ref={footerNoteRef}
					className="footer-note mt-[60px] pt-[40px] border-t border-[#d4d4d0] max-md:mt-[40px] max-md:pt-[30px]"
				>
					<p
						className="text-[12px] font-normal text-[#666] leading-[1.6] max-md:text-[11px]"
						style={{ fontFamily: "Manrope, sans-serif" }}
					>
						Fiyatlar uzmana göre değişiklik gösterebilir. Detaylı bilgi almak için{" "}
						<NavLink
							to="/masters"
							className="text-[#5a4a3a] underline hover:text-[#2e2e2e] transition-colors duration-300"
						>
							lütfen uzman seçiniz
						</NavLink>
						.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Services;
