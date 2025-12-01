const Hero = ({ title, text, image, isReversed, children }) => {
  return (
    <section
      className={`
        grid grid-cols-2 grid-rows-1 rounded-3xl mb-8 bg-chinese-200
        max-md:bg-transparent max-md:grid-cols-1 max-md:grid-rows-[auto_auto]
      `}
    >
      {/* IMAGE */}
      <div
        className={`
          hero-image w-full bg-center bg-cover bg-no-repeat row-span-2
          
          /* DESKTOP BORDER RADIUS */
          ${
            isReversed
              ? "min-lg:col-start-2 min-lg:col-end-3 min-lg:rounded-r-3xl"
              : "min-lg:col-start-1 min-lg:col-end-2 min-lg:rounded-l-3xl"
          }
          
          /* MOBILE: NO BORDER RADIUS */
          max-md:row-span-1
          max-md:min-h-[260px]
          max-md:rounded-none
        `}
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      {/* CONTENT */}
      <div
        className={`
          hero-content px-14 py-10
          max-md:p-6 max-md:text-center 
          max-md:rounded-none
        `}
      >
        <h1
          className="text-4xl mb-4 leading-snug
                     max-lg:text-xl max-lg:font-light max-md:text-2xl"
        >
          {title}
        </h1>

        <p className="mb-8 text-platinum-800 max-lg:text-[14px] max-md:text-[15px]">{text}</p>

        <div className="flex justify-start max-md:justify-center">{children}</div>
      </div>
    </section>
  );
};

export default Hero;
