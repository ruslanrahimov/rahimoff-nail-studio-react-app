const BrandLogo = ({ backgroundImage }) => {
  return (
    <span
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="inline-block min-w-41 max-w-66 h-12 bg-contain bg-no-repeat bg-[50%]"
    ></span>
  );
};

export default BrandLogo;
