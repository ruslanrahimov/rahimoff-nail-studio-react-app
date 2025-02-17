const AppointmentButton = ({ children }) => {
  const whatsappChatUrl = "#";

  return (
    <a
      href={whatsappChatUrl}
      className="bg-forest-500 text-white px-4 py-2 hover:bg-forest-300 transition cursor-pointer"
    >
      {children}
    </a>
  );
};

export default AppointmentButton;
