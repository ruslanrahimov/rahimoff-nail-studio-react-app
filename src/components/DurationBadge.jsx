import "./DurationBadge.css";

const DurationBadge = ({ duration, className = "" }) => {
        if (duration === null || duration === undefined || duration === "") return null;

        return (
                <span className={`duration-badge ${className}`}>
                        <svg
                                className="duration-badge-icon"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                        >
                                <circle cx="12" cy="12" r="9" />
                                <path d="M12 7 V12 L15.5 14" />
                        </svg>
                        <span>{duration}</span>
                </span>
        );
};

export default DurationBadge;
