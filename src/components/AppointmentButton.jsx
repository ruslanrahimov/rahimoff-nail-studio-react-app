const AppointmentButton = ({ url, children }) => {
  return (
    <a
      href={url}
      className="block bg-charcoal-900 text-white text-center px-4 py-2 hover:bg-charcoal-300 transition cursor-pointer max-md:w-full "
    >
      {children}
    </a>
  );
};

export default AppointmentButton;
