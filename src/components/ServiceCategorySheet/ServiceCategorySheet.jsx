import { useEffect, useRef, useState } from "react";
import "./ServiceCategorySheet.css";

const ServiceCategorySheet = ({ filters, activeKey, onPick, onClose }) => {
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

	return (
		<div
			className={`cat-sheet-backdrop ${entered ? "entered" : ""}`}
			onClick={(e) => {
				if (e.target === e.currentTarget) onClose();
			}}
		>
			<div role="dialog" aria-modal="true" aria-label="Kategori seçin" className="cat-sheet">
				<div className="cat-sheet-header">
					<div className="cat-sheet-title">Kategori seçin</div>
					<button
						ref={closeBtnRef}
						type="button"
						onClick={onClose}
						aria-label="Kapat"
						className="cat-sheet-close"
					>
						✕
					</button>
				</div>

				<div className="cat-sheet-list">
					{filters.map((f) => {
						const active = f.key === activeKey;
						return (
							<button
								key={f.key}
								type="button"
								onClick={() => onPick(f.key)}
								className={`cat-sheet-row ${active ? "active" : ""}`}
							>
								<span className="flex flex-col gap-[2px]">
									<span className="cat-sheet-row-label">{f.label}</span>
									<span className="cat-sheet-row-count">{f.count} hizmet</span>
								</span>
								{active && (
									<span className="cat-sheet-row-mark" aria-hidden="true">
										✓
									</span>
								)}
							</button>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ServiceCategorySheet;
