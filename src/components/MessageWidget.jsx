import { useEffect, useRef, useState } from "react";

export default function MessageWidget() {
        const [open, setOpen] = useState(false);
        const ref = useRef(null);

        useEffect(() => {
                if (!open) return;

                const handleClickOutside = (e) => {
                        if (ref.current && !ref.current.contains(e.target)) {
                                setOpen(false);
                        }
                };

                document.addEventListener("mousedown", handleClickOutside);
                return () =>
                        document.removeEventListener("mousedown", handleClickOutside);
        }, [open]);

        return (
                <div ref={ref} className="fixed bottom-4 right-4 z-50 flex flex-col items-center">
                        {/* раскрывающийся блок */}
                        <div
                                className={`
          mb-2 flex w-12 flex-col items-center gap-2 overflow-hidden
          rounded-full border border-[#e6d8c8] bg-[#f8f2ea] shadow-lg
          transition-all duration-300 ease-out
          ${open
                                                ? "max-h-64 opacity-100 translate-y-0 scale-100"
                                                : "max-h-0 opacity-0 translate-y-2 scale-95"}
        `}
                        >
                                {/* Instagram */}
                                <a
                                        href="https://instagram.com/yourprofile"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fbf6f1] text-[#7c6a5a] transition hover:-translate-y-0.5"
                                >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.88a.88.88 0 110 1.75.88.88 0 010-1.75z" />
                                        </svg>
                                </a>

                                {/* WhatsApp */}
                                <a
                                        href="https://wa.me/905xxxxxxxxx"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fbf6f1] text-[#7c6a5a] transition hover:-translate-y-0.5"
                                >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                                <path d="M20.52 3.48A11.91 11.91 0 0012 0 12 12 0 000 12a11.87 11.87 0 001.64 6.02L0 24l6.19-1.62A11.9 11.9 0 0012 24a12 12 0 0012-12 11.91 11.91 0 00-3.48-8.52zM12 22a9.94 9.94 0 01-5.1-1.41l-.37-.22-3.67.96.98-3.57-.24-.38A9.93 9.93 0 0112 2a10 10 0 0110 10 10 10 0 01-10 10z" />
                                        </svg>
                                </a>
                        </div>

                        {/* основная кнопка */}
                        <button
                                onClick={() => setOpen((v) => !v)}
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e6d8c8] bg-[#f6efe7] text-[#7c6a5a] shadow-lg transition hover:-translate-y-0.5"
                        >
                                {/* иконка сообщения */}
                                <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        className="h-6 w-6"
                                >
                                        <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 15a4 4 0 01-4 4H7l-4 4V7a4 4 0 014-4h10a4 4 0 014 4z"
                                        />
                                </svg>
                        </button>
                </div>
        );
}

