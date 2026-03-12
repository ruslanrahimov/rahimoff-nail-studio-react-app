import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { masters } from "../../data/masters.js";
import { generalPromotions } from "../../data/promotions.js";
import SectionHeading from "../SectionHeading/SectionHeading.jsx";
import "./PromotionsPage.css";

gsap.registerPlugin(ScrollTrigger);

const WA_NUMBER = "905060552137";

const buildWaLink = (msg) =>
	`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

/* ── Icons ──────────────────────────────────────────────── */

const SparkleIcon = () => (
	<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
		<path d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z" />
	</svg>
);

const CalendarIcon = () => (
	<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
		<rect x="3" y="4" width="18" height="18" rx="2" />
		<line x1="16" y1="2" x2="16" y2="6" />
		<line x1="8" y1="2" x2="8" y2="6" />
		<line x1="3" y1="10" x2="21" y2="10" />
	</svg>
);

const ScissorsIcon = () => (
	<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
		<circle cx="6" cy="6" r="2.5" />
		<circle cx="6" cy="18" r="2.5" />
		<line x1="20" y1="4" x2="8.5" y2="15.5" />
		<line x1="14.5" y1="14.5" x2="20" y2="20" />
		<line x1="8.5" y1="8.5" x2="12" y2="12" />
	</svg>
);

const ArrowIcon = () => (
	<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
		<path d="M5 12 H19" />
		<path d="M13 6 L19 12 L13 18" />
	</svg>
);

const StarIcon = () => (
	<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
		<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
	</svg>
);

const GiftIcon = () => (
	<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
		<polyline points="20 12 20 22 4 22 4 12" />
		<rect x="2" y="7" width="20" height="5" />
		<line x1="12" y1="22" x2="12" y2="7" />
		<path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
		<path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
	</svg>
);

const UsersIcon = () => (
	<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
		<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
		<circle cx="9" cy="7" r="4" />
		<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
		<path d="M16 3.13a4 4 0 0 1 0 7.75" />
	</svg>
);

const PromoIcon = ({ type }) => {
	if (type === "gift") return <GiftIcon />;
	if (type === "users") return <UsersIcon />;
	return <StarIcon />;
};

/* ── General Promo Card ─────────────────────────────────── */

const GeneralPromoCard = ({ promo }) => {
	const waMsg = `Merhaba! "${promo.title}" kampanyasından yararlanmak istiyorum. Bilgi alabilir miyim?`;

	return (
		<div className={`general-promo-card general-promo-card--${promo.type}`}>
			<div className="general-promo-accent" />

			<div className="general-promo-discount-area">
				<div className="general-promo-icon-wrap">
					<PromoIcon type={promo.icon} />
				</div>
				<span className="general-promo-discount-value">{promo.discount}</span>
				<span className="general-promo-discount-label">İndirim</span>
			</div>

			<div className="general-promo-content">
				<h3 className="general-promo-title">{promo.title}</h3>
				<p className="general-promo-description">{promo.description}</p>

				<div className="general-promo-meta">
					<span className="general-promo-service-tag">
						<ScissorsIcon />
						{promo.service}
					</span>
					<span className="general-promo-validity">
						<CalendarIcon />
						<span className="general-promo-validity-label">Son:</span>
						{promo.validUntil}
					</span>
				</div>

				{promo.condition && (
					<div className="general-promo-condition">{promo.condition}</div>
				)}
			</div>

			<a
				href={buildWaLink(waMsg)}
				target="_blank"
				rel="noopener noreferrer"
				className="general-promo-cta"
			>
				<span className="general-promo-cta-text">Randevu Al</span>
				<ArrowIcon />
			</a>

			<div className="general-promo-corner" aria-hidden="true" />
		</div>
	);
};

/* ── Master Promo Card (inside group) ───────────────────── */

const MasterPromoCard = ({ promo, masterName }) => {
	const waMsg = `Merhaba! ${masterName} için "${promo.title}" promosyonundan yararlanmak istiyorum. Randevu almak için müsait saatleri paylaşabilir misiniz?`;

	return (
		<div className={`mp-card mp-card--${promo.type}`}>
			<div className="mp-accent" />

			<div className="mp-content">
				<div className="mp-header-row">
					<div className="mp-icon">
						<SparkleIcon />
					</div>
					<h4 className="mp-title">{promo.title}</h4>
				</div>
				<p className="mp-description">{promo.description}</p>
				<div className="mp-meta">
					<span className="mp-service-tag">
						<ScissorsIcon />
						{promo.service}
					</span>
					<span className="mp-validity">
						<CalendarIcon />
						<span className="mp-validity-label">Son:</span>
						{promo.validUntil}
					</span>
				</div>
			</div>

			<div className="mp-discount-area">
				<span className="mp-discount-value">{promo.discount}</span>
				<span className="mp-discount-label">İndirim</span>
			</div>

			<a
				href={buildWaLink(waMsg)}
				target="_blank"
				rel="noopener noreferrer"
				className="mp-cta"
			>
				<span className="mp-cta-text">Randevu Al</span>
				<ArrowIcon />
			</a>
		</div>
	);
};

/* ── Master Promo Group ─────────────────────────────────── */

const MasterPromoGroup = ({ master }) => (
	<div className="master-promo-group">
		<Link
			to={`/masters/${master.id}#promotions`}
			className="master-promo-header"
		>
			<img
				src={master.photo}
				alt={master.name}
				className="master-promo-photo"
			/>
			<div className="master-promo-info">
				<div className="master-promo-badge">
					<SparkleIcon />
					{master.promotions.length} Aktif Teklif
				</div>
				<h3 className="master-promo-name">{master.name}</h3>
				<p className="master-promo-role">{master.role}</p>
			</div>
			<div className="master-promo-link-icon">
				<ArrowIcon />
			</div>
		</Link>

		<div className="master-promo-cards">
			{master.promotions.map((promo, i) => (
				<MasterPromoCard key={i} promo={promo} masterName={master.name} />
			))}
		</div>
	</div>
);

/* ── Page ───────────────────────────────────────────────── */

const PromotionsPage = () => {
	const pageRef = useRef(null);
	const heroLineRef = useRef(null);
	const generalCardsRef = useRef(null);
	const masterGroupsRef = useRef(null);

	const mastersWithPromos = masters.filter((m) => m.promotions?.length > 0);

	useEffect(() => {
		if (!pageRef.current) return;

		const ctx = gsap.context(() => {
			// Hero label line
			if (heroLineRef.current) {
				gsap.fromTo(
					heroLineRef.current,
					{ scaleX: 0, transformOrigin: "left center" },
					{ scaleX: 1, duration: 1.2, ease: "power3.out", delay: 0.4 }
				);
			}

			// Hero stagger
			gsap.fromTo(
				".promotions-hero-inner > *",
				{ opacity: 0, y: 22 },
				{
					opacity: 1,
					y: 0,
					duration: 0.7,
					ease: "power3.out",
					stagger: 0.11,
					delay: 0.1,
				}
			);

			// General promo cards
			if (generalCardsRef.current) {
				const cards =
					generalCardsRef.current.querySelectorAll(".general-promo-card");
				gsap.fromTo(
					cards,
					{ opacity: 0, y: 28 },
					{
						opacity: 1,
						y: 0,
						duration: 0.65,
						ease: "power3.out",
						stagger: 0.12,
						scrollTrigger: {
							trigger: generalCardsRef.current,
							start: "top 82%",
							once: true,
						},
					}
				);
			}

			// Master groups
			if (masterGroupsRef.current) {
				const groups =
					masterGroupsRef.current.querySelectorAll(".master-promo-group");
				gsap.fromTo(
					groups,
					{ opacity: 0, y: 28 },
					{
						opacity: 1,
						y: 0,
						duration: 0.65,
						ease: "power3.out",
						stagger: 0.15,
						scrollTrigger: {
							trigger: masterGroupsRef.current,
							start: "top 82%",
							once: true,
						},
					}
				);
			}
		}, pageRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={pageRef} className="promotions-page">
			{/* ── HERO ── */}
			<div className="promotions-hero">
				<div className="promotions-hero-inner">
					<div className="promotions-hero-label">
						<span className="promotions-hero-label-text">KAMPANYALAR</span>
						<div ref={heroLineRef} className="promotions-hero-label-line" />
					</div>

					<h1 className="promotions-hero-title">
						Özel Teklifler
						<br />
						<em>& Kampanyalar</em>
					</h1>

					<p className="promotions-hero-subtitle">
						Rahimoff Studio'da sizi bekleyen özel fırsatları keşfedin. Hem
						stüdyo geneli kampanyalarımızdan hem de ustalarımızın kişisel
						tekliflerinden yararlanın.
					</p>

					<div ref={generalCardsRef} className="general-promos-grid">
						{generalPromotions.map((promo) => (
							<GeneralPromoCard key={promo.id} promo={promo} />
						))}
					</div>
				</div>

				<div className="promotions-hero-decor" aria-hidden="true" />
			</div>

			{/* ── MASTER PROMOTIONS ── */}
			{mastersWithPromos.length > 0 && (
				<div className="promotions-section promotions-section--masters">
					<div className="promotions-container">
						<SectionHeading
							label="USTA KAMPANYALARI"
							title="Uzmanlara Özel Teklifler"
						/>
						<div ref={masterGroupsRef} className="master-promos-list">
							{mastersWithPromos.map((master) => (
								<MasterPromoGroup key={master.id} master={master} />
							))}
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default PromotionsPage;
