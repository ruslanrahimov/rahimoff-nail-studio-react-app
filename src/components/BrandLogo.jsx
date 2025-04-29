const BrandLogo = ({ backgroundImage }) => {
  return (
    <span
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="flex basis-41 h-12 bg-contain bg-no-repeat bg-[50%]"
    ></span>
  );
};

export default BrandLogo;
