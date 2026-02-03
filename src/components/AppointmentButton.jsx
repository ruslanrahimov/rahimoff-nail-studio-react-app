const AppointmentButton = ({ url, children, className = "" }) => {
  return (
    <a
      href={url}
      className={`block bg-burgundy-500 text-white text-center px-8 py-3 text-[13px] font-medium uppercase tracking-wider transition-all duration-300 hover:bg-burgundy-600 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 ${className}`}
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      {children}
    </a>
  );
};

export default AppointmentButton;
