const AppointmentButton = ({ url, children }) => {
  return (
    <a
      href={url}
      className="bg-charcoal-900 text-white px-4 py-2 hover:bg-charcoal-300 transition cursor-pointer"
    >
      {children}
    </a>
  );
};

export default AppointmentButton;
