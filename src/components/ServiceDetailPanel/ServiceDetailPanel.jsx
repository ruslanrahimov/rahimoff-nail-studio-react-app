import { useEffect, useRef, useState } from "react";
import DurationBadge from "./../DurationBadge.jsx";
import "./ServiceDetailPanel.css";

const FONT = { fontFamily: "Manrope, sans-serif" };

const CheckCircleIcon = ({ className }) => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
		<circle cx="12" cy="12" r="9" />
		<path d="M8 12.5l2.5 2.5L16 9.5" />
	</svg>
);

const CrossCircleIcon = ({ className }) => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
		<circle cx="12" cy="12" r="9" />
		<path d="M9.3 9.3l5.4 5.4M14.7 9.3l-5.4 5.4" />
	</svg>
);

const InfoIcon = ({ className }) => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
		<circle cx="12" cy="12" r="9" />
		<path d="M12 7.5v6" />
		<circle cx="12" cy="16.3" r="0.9" fill="currentColor" stroke="none" />
	</svg>
);

const DropletIcon = ({ className }) => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
		<path d="M12 3.5c3.5 4.2 6 7.4 6 10.4a6 6 0 1 1-12 0c0-3 2.5-6.2 6-10.4Z" />
	</svg>
);

const StepsTimeline = ({ items }) => {
	if (!Array.isArray(items) || items.length === 0) return null;
	return (
		<div>
			<h4 className="detail-heading">Neler dahil</h4>
			<ol className="steps-timeline">
				{items.map((item, i) => (
					<li key={i} className="steps-timeline-item">
						<span className="steps-timeline-dot" aria-hidden="true">
							{i + 1}
						</span>
						<span className="steps-timeline-text">{item}</span>
					</li>
				))}
			</ol>
		</div>
	);
};

const TagGroup = ({ title, items, tone }) => {
	if (!Array.isArray(items) || items.length === 0) return null;
	const Icon = tone === "good" ? CheckCircleIcon : CrossCircleIcon;
	return (
		<div>
			<h4 className="detail-heading">{title}</h4>
			<div className="tag-group">
				{items.map((item, i) => (
					<span key={i} className={`tag tag--${tone}`}>
						<Icon className="tag-icon" />
						{item}
					</span>
				))}
			</div>
		</div>
	);
};

const NoteStrip = ({ items }) => {
	if (!Array.isArray(items) || items.length === 0) return null;
	return (
		<div className="note-strip">
			<InfoIcon className="note-strip-icon" />
			<ul className="note-strip-list">
				{items.map((item, i) => (
					<li key={i}>{item}</li>
				))}
			</ul>
		</div>
	);
};

const ServiceDetailPanel = ({ service, onClose, getBookHref }) => {
	const [entered, setEntered] = useState(false);
	const closeBtnRef = useRef(null);

	useEffect(() => {
		const raf = requestAnimationFrame(() => setEntered(true));
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		closeBtnRef.current?.focus();

		const onKeyDown = (e) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKeyDown);

		return () => {
			cancelAnimationFrame(raf);
			document.body.style.overflow = previousOverflow;
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [onClose]);

	if (!service) return null;
	const { name, description, price, duration, details, index } = service;
	const priceText = typeof price === "number" ? `${price} ₺` : price;

	return (
		<div
			className={`service-detail-backdrop ${entered ? "entered" : ""}`}
			onClick={(e) => {
				if (e.target === e.currentTarget) onClose();
			}}
		>
			<div
				role="dialog"
				aria-modal="true"
				aria-label={name}
				className="service-detail-panel"
			>
				<div className="service-detail-header">
					<div className="flex flex-col gap-[6px]">
						{index != null && (
							<span className="text-[11px] tracking-[0.2em] text-[#9a9086]" style={FONT}>
								{index}
							</span>
						)}
						<h3
							className="font-normal text-[24px] leading-[1.2] text-[#2e2e2e]"
							style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
						>
							{name}
						</h3>
					</div>
					<button
						ref={closeBtnRef}
						type="button"
						onClick={onClose}
						aria-label="Kapat"
						className="service-detail-close"
					>
						✕
					</button>
				</div>

				<div className="service-detail-scroll">
					{description && (
						<p className="text-[13px] leading-[1.55] text-[#5e5751]" style={FONT}>
							{description}
						</p>
					)}

					{details?.summary && (
						<p className="service-summary">
							<span className="service-summary-mark" aria-hidden="true">
								&ldquo;
							</span>
							{details.summary}
						</p>
					)}

					<StepsTimeline items={details?.includes} />

					<div className="grid gap-[16px] sm:grid-cols-2">
						<TagGroup title="Kimlere uygun" items={details?.goodFor} tone="good" />
						<TagGroup title="Uygun değil" items={details?.notFor} tone="bad" />
					</div>

					<NoteStrip items={details?.notes} />

					{details?.aftercare && (
						<div className="aftercare-note">
							<DropletIcon className="aftercare-icon" />
							<p>
								<span className="aftercare-label">Sonrası bakım — </span>
								{details.aftercare}
							</p>
						</div>
					)}
				</div>

				<div className="service-detail-footer">
					<div className="service-detail-footer-price">
						<span className="text-[20px] font-light text-[#6c2521] whitespace-nowrap" style={FONT}>
							{priceText}
						</span>
						{duration != null && <DurationBadge duration={duration} />}
					</div>
					<a
						href={getBookHref(service)}
						target="_blank"
						rel="noopener noreferrer"
						className="service-detail-book-btn"
					>
						Randevu Al
					</a>
				</div>
			</div>
		</div>
	);
};

export default ServiceDetailPanel;
