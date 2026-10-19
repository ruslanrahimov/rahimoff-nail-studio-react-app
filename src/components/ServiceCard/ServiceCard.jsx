import DurationBadge from "./../DurationBadge.jsx";
import "./ServiceCard.css";

const FONT = { fontFamily: "Manrope, sans-serif" };

const ServiceCard = ({ service, categoryLabel, categoryImage, getBookHref, getPriceHref, onOpenDetail }) => {
	const { name, description, duration, details, photo } = service;
	const hasDetails = Boolean(details);
	const photoSrc = photo || categoryImage;

	return (
		<div className="service-card service-item">
			<div className="service-card-photo">
				<img
					src={photoSrc}
					alt={name}
					loading="lazy"
					decoding="async"
					width="1200"
					height="896"
					className="service-card-img"
				/>
				<span className="service-card-cat">{categoryLabel}</span>
			</div>

			<div className="service-card-body">
				<h3
					className="text-[16px] font-light uppercase text-[#2e2e2e] tracking-wide leading-[1.3]"
					style={FONT}
				>
					{name}
				</h3>

				{description && (
					<p className="text-[12.5px] text-[#666] leading-[1.5]" style={FONT}>
						{description}
					</p>
				)}

				{duration != null && (
					<div className="flex items-baseline gap-[10px]">
						<DurationBadge duration={duration} />
					</div>
				)}

				<a
					href={getPriceHref(service)}
					target="_blank"
					rel="noopener noreferrer"
					className="service-card-price-row"
				>
					<span className="service-card-price-label">Fiyat</span>
					<span className="service-card-price-cta">
						Bilgi alın
						<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
							<path d="M3 8h10M9 4l4 4-4 4" />
						</svg>
					</span>
				</a>

				<div className="service-card-buttons">
					<a
						href={getBookHref(service)}
						target="_blank"
						rel="noopener noreferrer"
						className="service-card-book-btn"
					>
						Randevu Al
					</a>
					{hasDetails && (
						<button
							type="button"
							className="service-card-detail-btn"
							onClick={() => onOpenDetail(service.id)}
						>
							Detay
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
