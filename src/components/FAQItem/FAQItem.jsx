import { clsx } from "clsx";
import "./FAQItem.css";

const FAQItem = ({ data, faqStateUpdateHandler, index }) => {
  const { id, question, answer, state } = data;

  return (
    <div
      className="faq-item border-b border-[#d4d4d0] group hover:bg-[#e8e6dd] transition-all duration-300 px-[20px] -mx-[20px]"
    >
      <button
        onClick={() => faqStateUpdateHandler(id)}
        className="flex items-start justify-between py-[32px] w-full text-start max-md:py-[24px]"
      >
        {/* Number */}
        <span
          className="text-[14px] font-light text-[#999] w-[60px] flex-shrink-0 max-md:text-[12px] max-md:w-[50px]"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Question */}
        <span
          className="flex-1 text-[18px] font-light uppercase text-[#2e2e2e] tracking-wide px-[20px] max-md:text-[14px] max-md:px-[10px]"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          {question}
        </span>

        {/* Icon */}
        <span
          className={`faq-icon text-[24px] font-light text-burgundy-500 flex-shrink-0 transition-transform duration-300 max-md:text-[20px] ${clsx({ 'rotate-45': state === "open" })}`}
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          +
        </span>
      </button>

      {/* Answer */}
      <div
        className={`faq-answer overflow-hidden transition-all duration-500 ease-in-out ${clsx({ 'opened': state === "open" })}`}
      >
        <p
          className="text-[12px] font-normal text-[#666] leading-[1.6] pb-[32px] pl-[80px] pr-[44px] max-md:text-[11px] max-md:pb-[24px] max-md:pl-[60px] max-md:pr-[30px]"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;
