import DurationBadge from "./../DurationBadge.jsx";
import "./ServiceCard.css";

const FONT = { fontFamily: "Manrope, sans-serif" };

const ServiceCard = ({ service, categoryLabel, categoryImage, getBookHref, onOpenDetail }) => {
	const { name, description, price, duration, details, photo } = service;
	const priceText = typeof price === "number" ? `${price} ₺` : price;
	const hasDetails = Boolean(details);
	const photoSrc = photo || categoryImage;

	return (
		<div className="service-card service-item">
			<div
				className="service-card-photo"
				style={{ backgroundImage: `url(${photoSrc})` }}
			>
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

				<div className="flex items-baseline gap-[10px]">
					<span className="text-[19px] font-light text-[#5a4a3a]" style={FONT}>
						{priceText}
					</span>
					{duration != null && <DurationBadge duration={duration} />}
				</div>

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
