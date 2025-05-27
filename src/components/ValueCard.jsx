const ValueCard = ({ title, backgroundImage, children }) => {
  return (
    <div
      className="card grid gap-2 p-8 rounded-2xl bg-[50%] bg-no-repeat bg-cover text-platinum-300 max-lg:gap-1"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h3 className="text-lg font-medium max-lg:uppercase">{title}</h3>
      <p>{children}</p>
    </div>
  );
};

export default ValueCard;
