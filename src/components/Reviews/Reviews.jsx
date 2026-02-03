import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { reviews } from "../../data/reviews";
import SectionHeading from "./../SectionHeading/SectionHeading.jsx";
import "./Reviews.css";

const Star = ({ filled }) => (
        <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="star-icon"
        >
                <path
                        d="M8 1.5L9.708 6.146L14.5 6.5L10.75 9.854L11.916 14.5L8 11.646L4.084 14.5L5.25 9.854L1.5 6.5L6.292 6.146L8 1.5Z"
                        fill={filled ? "#5a4a3a" : "none"}
                        stroke="#5a4a3a"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                />
        </svg>
);

const ReviewCard = ({ review, isActive }) => {
        return (
                <div className={`review-card ${isActive ? "active" : ""}`}>
                        <div className="review-header">
                                <div className="review-avatar">
                                        <div className="avatar-placeholder">
                                                {review.name.charAt(0)}
                                        </div>
                                </div>
                                <div className="review-user-info">
                                        <h3 className="review-name">{review.name}</h3>
                                        <div className="review-rating">
                                                {[...Array(5)].map((_, index) => (
                                                        <Star key={index} filled={index < review.rating} />
                                                ))}
                                        </div>
                                </div>
                        </div>
                        <div className="review-body">
                                <p className="review-text">{review.text}</p>
                        </div>
                </div>
        );
};

const Reviews = () => {
        const [currentPage, setCurrentPage] = useState(0);
        const [isMobile, setIsMobile] = useState(false);
        const reviewsRef = useRef(null);
        const cardsRef = useRef([]);

        useEffect(() => {
                const checkMobile = () => {
                        setIsMobile(window.innerWidth <= 768);
                };

                checkMobile();
                window.addEventListener('resize', checkMobile);

                return () => window.removeEventListener('resize', checkMobile);
        }, []);

        const reviewsPerPage = isMobile ? 1 : 3;
        const totalPages = Math.ceil(reviews.length / reviewsPerPage);

        const currentReviews = reviews.slice(
                currentPage * reviewsPerPage,
                (currentPage + 1) * reviewsPerPage
        );

        useEffect(() => {
                if (cardsRef.current.length > 0) {
                        gsap.fromTo(
                                cardsRef.current,
                                { opacity: 0, x: 30 },
                                {
                                        opacity: 1,
                                        x: 0,
                                        duration: 0.5,
                                        stagger: 0.15,
                                        ease: "power3.out",
                                }
                        );
                }
        }, [currentPage, isMobile]);

        const handlePrevPage = () => {
                setCurrentPage((prev) => {
                        const newPage = prev > 0 ? prev - 1 : totalPages - 1;
                        cardsRef.current = [];
                        return newPage;
                });
        };

        const handleNextPage = () => {
                setCurrentPage((prev) => {
                        const newPage = prev < totalPages - 1 ? prev + 1 : 0;
                        cardsRef.current = [];
                        return newPage;
                });
        };

        return (
                <section id="reviews" ref={reviewsRef} className="reviews-section">
                        <div className="reviews-container">
                                <div className="reviews-header">
                                        <SectionHeading
                                                label="REVIEWS"
                                                title="Yorumlar"
                                        />
                                </div>

                                <div className="reviews-grid">
                                        {currentReviews.map((review, index) => (
                                                <div
                                                        key={review.id}
                                                        ref={(el) => (cardsRef.current[index] = el)}
                                                >
                                                        <ReviewCard review={review} isActive={true} />
                                                </div>
                                        ))}
                                </div>

                                <div className="reviews-actions">
                                        <a
                                                href="https://www.google.com/maps/place/Rahimoff+Nail+Studio+-+Protez+t%C4%B1rnak,+Jel+T%C4%B1rnak,+Kal%C4%B1c%C4%B1+Oje,+Manik%C3%BCr,+Pedik%C3%BCr+Isparta/@37.7704861,30.5517398,17z/data=!3m1!4b1!4m6!3m5!1s0x85c8969360e0bc97:0x10d5a483929223ed!8m2!3d37.7704861!4d30.5517398!16s%2Fg%2F11txvnd292?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="action-button"
                                        >
                                                YORUM YAZ
                                        </a>
                                        <div className="reviews-navigation">
                                                <button
                                                        onClick={handlePrevPage}
                                                        className="nav-button"
                                                        aria-label="Previous reviews"
                                                >
                                                        ←
                                                </button>
                                                <span className="page-indicator">
                                                        {currentPage + 1} / {totalPages}
                                                </span>
                                                <button
                                                        onClick={handleNextPage}
                                                        className="nav-button"
                                                        aria-label="Next reviews"
                                                >
                                                        →
                                                </button>
                                        </div>
                                </div>
                        </div>
                </section>
        );
};

export default Reviews;
