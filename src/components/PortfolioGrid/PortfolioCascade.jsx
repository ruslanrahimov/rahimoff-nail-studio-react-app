import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./PortfolioCascade.css";

gsap.registerPlugin(ScrollTrigger);

const PortfolioCascade = ({ data }) => {
	const containerRef = useRef(null);
	const sectionsRef = useRef([]);
	const wrapperRef = useRef(null);

	useEffect(() => {
		const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		if (prefersReducedMotion) {
			sectionsRef.current.forEach((section) => {
				if (section) {
					gsap.set(section, { opacity: 1, y: 0 });
					const images = section.querySelectorAll(".cascade-section__image");
					gsap.set(images, { opacity: 1, scale: 1, y: 0 });
				}
			});
			return;
		}

		const ctx = gsap.context(() => {
			const sections = sectionsRef.current.filter(Boolean);
			if (sections.length === 0) return;

			// Установить начальное состояние всех секций
			sections.forEach((section, index) => {
				const images = section.querySelectorAll(".cascade-section__image");

				gsap.set(section, {
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100vh",
					zIndex: sections.length - index,
				});

				if (index === 0) {
					// Первая секция сразу видна
					gsap.set(section, { opacity: 1, yPercent: 0 });
					gsap.set(images, { opacity: 1, scale: 1, y: 0 });
				} else {
					// Остальные секции скрыты
					gsap.set(section, { opacity: 0, yPercent: 10 });
					gsap.set(images, { opacity: 0, scale: 0.95, y: 30 });
				}
			});

			// Создать главный timeline
			const mainTimeline = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top top",
					end: `+=${sections.length * 100}%`,
					scrub: 1,
					pin: true,
					pinSpacing: true,
					anticipatePin: 1,
				},
			});

			// Добавить анимации для каждого перехода
			sections.forEach((section, index) => {
				if (index === 0) return; // Пропускаем первую секцию

				const prevSection = sections[index - 1];
				const images = section.querySelectorAll(".cascade-section__image");

				// Время начала для этого перехода
				const startTime = (index - 1) * 1;

				// Предыдущая секция уходит вверх и исчезает
				mainTimeline.to(
					prevSection,
					{
						yPercent: -100,
						opacity: 0,
						duration: 1,
						ease: "power2.inOut",
					},
					startTime
				);

				// Текущая секция появляется
				mainTimeline.fromTo(
					section,
					{
						yPercent: 10,
						opacity: 0,
					},
					{
						yPercent: 0,
						opacity: 1,
						duration: 1,
						ease: "power2.inOut",
					},
					startTime
				);

				// Изображения текущей секции появляются с задержкой
				mainTimeline.to(
					images,
					{
						opacity: 1,
						scale: 1,
						y: 0,
						duration: 0.8,
						stagger: 0.05,
						ease: "power2.out",
					},
					startTime + 0.2
				);
			});

			// Скрыть индикатор прокрутки
			const scrollIndicator = containerRef.current?.querySelector('.portfolio-cascade__scroll-indicator');
			if (scrollIndicator) {
				gsap.to(scrollIndicator, {
					opacity: 0,
					duration: 0.3,
					scrollTrigger: {
						trigger: containerRef.current,
						start: "top top",
						end: "top+=20% top",
						scrub: true,
					},
				});
			}

		}, containerRef);

		return () => ctx.revert();
	}, [data]);

	return (
		<div className="portfolio-cascade" ref={containerRef}>
			<div className="portfolio-cascade__sections" ref={wrapperRef}>
				{data.map((section, index) => (
					<div
						key={section.id}
						ref={(el) => (sectionsRef.current[index] = el)}
						className="cascade-section"
					>
						{/* Portfolio Images Grid */}
						<div className="cascade-section__images">
							{section.images.map((image, imgIndex) => (
								<div key={imgIndex} className="cascade-section__image-wrapper">
									<img
										src={image}
										alt={`Portfolio ${index + 1}-${imgIndex + 1}`}
										className="cascade-section__image"
										loading={index === 0 ? "eager" : "lazy"}
									/>
								</div>
							))}
						</div>

						{/* Section Number */}
						<div className="cascade-section__number">
							{String(index + 1).padStart(2, '0')}
						</div>
					</div>
				))}
			</div>

			{/* Scroll Indicator */}
			<div className="portfolio-cascade__scroll-indicator">
				<span className="scroll-indicator__text">Kaydır</span>
				<div className="scroll-indicator__line" />
			</div>
		</div>
	);
};

export default PortfolioCascade;
