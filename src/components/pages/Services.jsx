import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { tabContent } from "../../data/services.js";
import { NavLink, useSearchParams } from "react-router";
import SectionHeading from "./../SectionHeading/SectionHeading.jsx";
import ServiceCard from "./../ServiceCard/ServiceCard.jsx";
import ServiceDetailPanel from "./../ServiceDetailPanel/ServiceDetailPanel.jsx";
import ServiceCategorySheet from "./../ServiceCategorySheet/ServiceCategorySheet.jsx";

const WA_NUMBER = "905060552137";

const buildWaLink = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const getBookHref = (service) =>
	buildWaLink(`Merhaba! ${service.name} için randevu almak istiyorum.`);

const GENERAL_BOOK_HREF = buildWaLink("Merhaba! Randevu almak istiyorum.");

const CATEGORY_KEYS = Object.keys(tabContent);

const Services = () => {
	const [searchParams] = useSearchParams();
	const tabFromUrl = searchParams.get("tab");
	const initialFilter = tabFromUrl && tabContent[tabFromUrl] ? tabFromUrl : "all";

	const [activeFilter, setActiveFilter] = useState(initialFilter);
	const [openServiceId, setOpenServiceId] = useState(searchParams.get("open"));
	const [catSheetOpen, setCatSheetOpen] = useState(false);
	const isInitialMount = useRef(true);

	const pageRef = useRef(null);
	const headerRef = useRef(null);
	const filtersRef = useRef(null);
	const gridRef = useRef(null);
	const footerNoteRef = useRef(null);

	const flatServices = useMemo(
		() =>
			CATEGORY_KEYS.flatMap((key) =>
				tabContent[key].services.map((service, i) => ({
					...service,
					category: key,
					categoryLabel: tabContent[key].title,
					categoryImage: tabContent[key].image,
					index: `${tabContent[key].title.toUpperCase()} · ${String(i + 1).padStart(2, "0")}`,
				}))
			),
		[]
	);

	const countOf = (key) =>
		key === "all"
			? flatServices.length
			: flatServices.filter((s) => s.category === key).length;

	const filterDefs = [
		{ key: "all", label: "Tümü" },
		...CATEGORY_KEYS.map((key) => ({
			key,
			label: key === "NAIL_ART" ? "Tırnak Süsleme" : tabContent[key].title,
		})),
	].map((f) => ({ ...f, count: countOf(f.key) }));

	const activeLabel = filterDefs.find((f) => f.key === activeFilter)?.label ?? "Tümü";

	const visibleServices = useMemo(
		() =>
			activeFilter === "all"
				? flatServices
				: flatServices.filter((s) => s.category === activeFilter),
		[flatServices, activeFilter]
	);

	const openService = openServiceId
		? flatServices.find((s) => s.id === openServiceId) ?? null
		: null;

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		ScrollTrigger.getAll().forEach((trigger) => {
			if (trigger.vars.id?.startsWith("services-")) trigger.kill();
		});

		const ctx = gsap.context(() => {
			const ease = "power3.out";

			if (headerRef.current) {
				gsap.fromTo(
					headerRef.current,
					{ opacity: 0, y: 30 },
					{ opacity: 1, y: 0, duration: 0.6, ease, delay: 0.15 }
				);
			}

			if (filtersRef.current) {
				const chips = filtersRef.current.querySelectorAll(".filter-chip");
				gsap.fromTo(
					chips,
					{ opacity: 0, y: 16 },
					{ opacity: 1, y: 0, duration: 0.4, ease, stagger: 0.06, delay: 0.35 }
				);
			}

			if (gridRef.current) {
				const cards = gridRef.current.querySelectorAll(".service-item");
				gsap.fromTo(
					cards,
					{ opacity: 0, y: 24 },
					{
						opacity: 1,
						y: 0,
						duration: 0.5,
						ease,
						stagger: 0.06,
						scrollTrigger: {
							trigger: gridRef.current,
							start: "top 85%",
							once: true,
							id: "services-grid",
						},
					}
				);
			}

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
							id: "services-footer",
						},
					}
				);
			}
		}, pageRef);

		return () => ctx.revert();
	}, []);

	// Filtre değiştiğinde ızgarayı yeniden canlandır (ilk yüklemede atla)
	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
			return;
		}
		if (!gridRef.current) return;

		const cards = gridRef.current.querySelectorAll(".service-item");
		gsap.fromTo(
			cards,
			{ opacity: 0, y: 14 },
			{ opacity: 1, y: 0, duration: 0.4, ease: "power3.out", stagger: 0.04 }
		);
	}, [activeFilter]);

	return (
		<div
			ref={pageRef}
			className="services-page bg-[#fcfbf7] min-h-screen pt-[114px] pb-[80px] px-[30px] max-md:pt-[94px] max-md:px-[20px] max-sm:pb-[112px]"
		>
			<div className="max-w-[1140px] mx-auto">
				<div ref={headerRef}>
					<SectionHeading label="SERVICES" title="Hizmetlerimiz" />
				</div>

				{/* Filtreler */}
				<div className="relative">
					<div
						ref={filtersRef}
						className="flex gap-[10px] overflow-x-auto pb-[6px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
					>
						{filterDefs.map((f) => {
							const active = f.key === activeFilter;
							return (
								<button
									key={f.key}
									type="button"
									onClick={() => setActiveFilter(f.key)}
									className={`filter-chip inline-flex items-center gap-[7px] rounded-full px-[18px] py-[10px] text-[13px] font-medium uppercase tracking-wide whitespace-nowrap transition-colors duration-300 max-md:text-[12px] ${
										active
											? "bg-[#6c2521] text-white border border-[#6c2521]"
											: "bg-white text-[#2e2e2e] border border-[#d4d4d0] hover:border-[#6c2521]"
									}`}
									style={{ fontFamily: "Manrope, sans-serif" }}
								>
									<span>{f.label}</span>
									<span
										className={`text-[11px] leading-none px-[6px] py-[2px] rounded-full ${
											active ? "bg-white/20 text-white" : "bg-[#f2ede3] text-[#8e8479]"
										}`}
									>
										{f.count}
									</span>
								</button>
							);
						})}
					</div>
					<div className="pointer-events-none absolute top-0 right-0 h-full w-[28px] bg-gradient-to-r from-transparent to-[#fcfbf7] sm:hidden" />
				</div>

				{/* Aktif kategori + sonuç sayısı */}
				<div className="flex items-center justify-between gap-[12px] mt-[12px] mb-[28px] max-md:mb-[22px]">
					<span className="text-[13px] text-[#8e8479]" style={{ fontFamily: "Manrope, sans-serif" }}>
						{activeLabel} · {visibleServices.length} hizmet
					</span>
					{activeFilter !== "all" && (
						<button
							type="button"
							onClick={() => setActiveFilter("all")}
							className="text-[13px] text-[#6c2521] underline min-h-[32px]"
							style={{ fontFamily: "Manrope, sans-serif" }}
						>
							filtreyi temizle
						</button>
					)}
				</div>

				{/* Hizmet ızgarası */}
				<div
					ref={gridRef}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]"
				>
					{visibleServices.map((service) => (
						<ServiceCard
							key={service.id}
							service={service}
							categoryLabel={service.categoryLabel}
							categoryImage={service.categoryImage}
							getBookHref={getBookHref}
							onOpenDetail={setOpenServiceId}
						/>
					))}
				</div>

				{/* Alt not */}
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

			{/* Mobil: her an erişilebilir kategori + randevu çubuğu */}
			<div
				className="fixed bottom-0 left-0 right-0 z-40 flex items-center gap-[10px] px-[14px] py-[12px] bg-[#fcfbf7] border-t border-[#e4ded2] sm:hidden"
				style={{ boxShadow: "0 -8px 20px rgba(42,37,35,.06)" }}
			>
				<button
					type="button"
					onClick={() => setCatSheetOpen(true)}
					className="flex-1 flex items-center justify-between gap-[10px] min-w-0 bg-white border border-[#d4c9b3] min-h-[52px] px-[14px] text-left"
					style={{ fontFamily: "Manrope, sans-serif" }}
				>
					<span className="flex flex-col gap-[1px] min-w-0">
						<span className="text-[10px] tracking-[0.16em] text-[#9a9086]">KATEGORİ</span>
						<span className="truncate text-[14px] text-[#2e2e2e]">
							{activeLabel} · {visibleServices.length} hizmet
						</span>
					</span>
					<span className="text-[#6c2521] text-[12px]">▲</span>
				</button>
				<a
					href={GENERAL_BOOK_HREF}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center bg-[#6c2521] text-white px-[20px] min-h-[52px] text-[13px] tracking-[0.08em] uppercase"
					style={{ fontFamily: "Manrope, sans-serif" }}
				>
					Randevu
				</a>
			</div>

			{openService && (
				<ServiceDetailPanel
					service={openService}
					getBookHref={getBookHref}
					onClose={() => setOpenServiceId(null)}
				/>
			)}

			{catSheetOpen && (
				<ServiceCategorySheet
					filters={filterDefs}
					activeKey={activeFilter}
					onPick={(key) => {
						setActiveFilter(key);
						setCatSheetOpen(false);
					}}
					onClose={() => setCatSheetOpen(false)}
				/>
			)}
		</div>
	);
};

export default Services;
