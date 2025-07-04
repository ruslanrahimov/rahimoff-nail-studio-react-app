const Hero = ({ title, text, image, isReversed, children }) => {
  return (
    <section
      className={`grid grid-cols-2 grid-rows-1 rounded-3xl mb-8 bg-chinese-200 max-md:bg-transparent max-md:grid-cols-1 max-md:grid-rows-2`}
    >
      <div
        className={`hero-image w-full bg-cover row-span-2 bg-center ${isReversed ? "min-lg:col-start-2 min-lg:col-end-3 min-lg:rounded-r-3xl" : "min-lg:col-start-1 min-lg:col-end-2 min-lg:rounded-l-3xl"} max-md:row-span-1`}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="hero-content px-14 py-10  max-md:p-8">
        <h1 className="text-4xl mb-4 leading-snug max-lg:text-xl max-lg:font-light max-lg:text-center">
          {title}
        </h1>
        <p className="mb-8 text-platinum-800 max-lg:text-[14px] max-lg:text-center">{text}</p>
        <div className="flex">{children}</div>
      </div>
    </section>
  );
};

export default Hero;
