import Spline from "@splinetool/react-spline";
export const Hero = () => {
  return (
    <div>
      {/* 90vh - 6rem(header) */}
      <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0"
        >
          {/* Tag box-with gradient border */}
          <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full ">
            <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center">
              <i class="bx  bx-diamond-alt"></i> introducing
            </div>
          </div>

          {/* Main Heading */}
          <h1
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl fonst-semibold tracking-wider my-8 "
          >
            EMAINL FOR
            <br />
            DEVELOPERS
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
            the best way to reach humansw instead of spam folders. deliver
            transactional and marketing emails at scale.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-12 ">
            {/* Btn 1 */}
            <a
              className="border  border-[#2a2a2a] py-2 px-4 sm:px-5 rounded-full  sm:text-lg text-sm font-semibold tracking-wider  transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white"
              href="#"
            >
              Documentation
              <i class="bx  bx-link"></i>
            </a>
            {/* Btn 2 */}
            <a
              className="border border-[#2a2a2a] py-2 px-8 sm:px-10 rounded-full  sm:text-lg text-sm font-semibold tracking-wider  transition-all duration-300 hover:bg-[#1a1a1a]"
              href="#"
            >
              Get Started
              <i class="bx  bx-link"></i>
            </a>
          </div>
        </div>

        {/* 3D Robott Image */}
        <Spline
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-duration="3000"
          data-aos-offset="0"
          className="absolute lg:top-0 top-[-20%] bottom-0 lg:right-[-25%] sm:left-[-2% h-full sm:top-[-20%]]"
          scene="https://prod.spline.design/SuzFqB1X3g1I5YwW/scene.splinecode"
        />
      </main>
    </div>
  );
};
