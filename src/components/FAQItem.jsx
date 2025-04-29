import { clsx } from "clsx";
import "./FAQItem.css";

const FAQItem = ({ data, faqStateUpdateHandler }) => {
  const { id, question, answer, state } = data;

  return (
    <li key={id} className="faq-list-item rounded-2xl p-5 mb-4 bg-chinese-300">
      <button
        onClick={() => faqStateUpdateHandler(id)}
        className="flex justify-between cursor-pointer w-full text-start text-xl"
      >
        {question}
        <span className={`faq-icon text-2xl ${clsx({ rotated: state === "open" })}`}>+</span>
      </button>
      <p className={`faq-answer text-charcoal-400 ${clsx({ opened: state === "open" })}`}>
        {answer}
      </p>
    </li>
  );
};

export default FAQItem;
