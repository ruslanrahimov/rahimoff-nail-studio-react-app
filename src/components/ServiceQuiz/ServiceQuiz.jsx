import { useState } from "react";
import { tabContent } from "../../data/services.js";
import "./ServiceQuiz.css";

const FONT = { fontFamily: "Manrope, sans-serif" };

const allServices = Object.values(tabContent).flatMap((cat) => cat.services);
const findService = (id) => allServices.find((s) => s.id === id);

const QUESTIONS = [
	{
		q: "Neyi yaptırmak istiyorsunuz?",
		opts: [
			{ label: "El", v: "el" },
			{ label: "Ayak", v: "ayak" },
		],
	},
	{
		q: "Ne kadar kalıcı olsun?",
		opts: [
			{ label: "Ojesiz, doğal", v: "dogal" },
			{ label: "2-3 hafta kalıcı", v: "orta" },
			{ label: "Boyunu da uzatmak istiyorum", v: "uzun" },
		],
	},
	{
		q: "Tırnaklarınız nasıl?",
		opts: [
			{ label: "Sağlam", v: "saglam" },
			{ label: "İnce, kırılgan", v: "kirilgan" },
			{ label: "Kısa, uzatmak istiyorum", v: "kisa" },
		],
	},
];

const recommend = (a) => {
	if (a[0] === "ayak") {
		return a[1] === "dogal" ? "pedicure-kane-basic" : "pedicure-kane-kalici-oje";
	}
	if (a[2] === "kisa" || a[1] === "uzun") return "manicure-protez-jel";
	if (a[1] === "dogal") return "manicure-basic";
	return "manicure-gel-guc-kalici";
};

const ServiceQuiz = ({ getBookHref, onOpenDetail }) => {
	const [answers, setAnswers] = useState([]);
	const done = answers.length === QUESTIONS.length;
	const result = done ? findService(recommend(answers)) : null;

	const pick = (value) => setAnswers((prev) => [...prev, value]);
	const reset = () => setAnswers([]);

	return (
		<div className="service-quiz">
			<div className="service-quiz-eyebrow">3 SORU · 20 SANİYE</div>

			{!done && (
				<div className="flex flex-col gap-[14px]">
					<div className="flex items-center gap-[12px]">
						<span className="text-[12px] tracking-[0.16em] opacity-70" style={FONT}>
							SORU {answers.length + 1}/{QUESTIONS.length}
						</span>
					</div>
					<div className="service-quiz-question">{QUESTIONS[answers.length].q}</div>
					<div className="service-quiz-options">
						{QUESTIONS[answers.length].opts.map((o) => (
							<button
								key={o.v}
								type="button"
								className="service-quiz-option"
								onClick={() => pick(o.v)}
							>
								{o.label}
							</button>
						))}
					</div>
				</div>
			)}

			{done && result && (
				<div className="flex flex-col gap-[12px]">
					<div className="service-quiz-eyebrow" style={{ marginBottom: -4 }}>
						SİZE ÖNERİMİZ
					</div>
					<div className="service-quiz-result-name">{result.name}</div>
					<div className="text-[14px] opacity-85" style={FONT}>
						{typeof result.price === "number" ? `${result.price} ₺` : result.price}
						{result.duration ? ` · ${result.duration}` : ""}
					</div>
					<div className="service-quiz-actions">
						<a
							href={getBookHref(result)}
							target="_blank"
							rel="noopener noreferrer"
							className="service-quiz-book-btn"
						>
							Randevu Al
						</a>
						{result.details && (
							<button
								type="button"
								className="service-quiz-detail-btn"
								onClick={() => onOpenDetail(result.id)}
							>
								Detay
							</button>
						)}
					</div>
					<button type="button" className="service-quiz-reset" onClick={reset}>
						baştan başla
					</button>
				</div>
			)}
		</div>
	);
};

export default ServiceQuiz;
