import { useState } from "react";

export default function FrequentlyAsked() {
  return (
    <section className="relative flow-root h-full max-md:h-auto">
      <div className="relative flex w-full flex-col justify-center overflow-hidden">
        <div className="relative mt-[200px] mb-[100px] flex w-full justify-center gap-[106px] max-md:mt-[100px] max-md:mb-[110px] max-md:flex-col max-md:gap-0 max-lg:mt-[200px] max-lg:mb-[80px] max-xl:mt-[204px] max-xl:mb-[135px]">
          <div className="ml-12 flex flex-col max-md:ml-0 max-md:items-center">
            <h2 className="w-[323px] font-medium text-[54px] leading-none max-md:text-center max-md:text-[36px] max-lg:text-[48px] text-white">
              Frequently Asked Questions
            </h2>
            <div className="mt-6 w-[396px] text-[14px] text-system-text03 leading-7 max-md:mt-6 max-md:mb-[22px] max-md:w-[259px] max-md:text-center max-md:leading-[22px] max-lg:w-[320px] text-white">
              Find answers to common questions about Vidu AI, including its
              features, usage, pricing, safety, and how to get support.
            </div>
          </div>
          <div className="mr-12 flex flex-col gap-3 max-md:mr-0 max-md:items-center">
            <FAQItem />
          </div>
        </div>
        <div className="relative w-full">
          <div className="relative aspect-video h-[433px] w-full">
            <img
              alt="视频封面"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="h-full w-full object-cover object-center hidden"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: "transparent",
              }}
              src="https://image01.cf.vidu.studio/vidu/landing-page/footerBanner.94245a1e.png"
            />
            <video
              autoPlay
              loop
              playsInline
              webkit-playsinline="true"
              x5-playsinline="true"
              className="h-full w-full object-bottom object-cover block"
            >
              <source
                src="https://image01.cf.vidu.studio/vidu/landing-page/banner.5a9fe413.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="-mt-[2px] relative flex w-full scale-y-[-1] items-center justify-center">
            <div className="relative aspect-video h-[155px] w-full">
              <img
                alt="视频封面"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="h-full w-full object-cover object-center hidden"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  color: "transparent",
                }}
                src="https://image01.cf.vidu.studio/vidu/landing-page/footerBanner.94245a1e.png"
              />
              <video
                autoPlay
                loop
                playsInline
                webkit-playsinline="true"
                x5-playsinline="true"
                className="h-full w-full object-bottom object-cover block"
              >
                <source
                  src="https://image01.cf.vidu.studio/vidu/landing-page/banner.5a9fe413.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="absolute h-[157px] w-full bg-gradient-to-b from-black to-black/60 backdrop-blur-[10px]"></div>
          </div>
        </div>
        <div className="mb-[138px] flex flex-col items-center gap-6">
          <h2 className="font-medium text-[48px] text-white max-md:text-[32px]">
            Free Your Creativity
          </h2>
          <div className="flex gap-4 max-md:flex-col-reverse">
            <a
              target="_self"
              className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-system-blue02 px-10 py-2 font-semibold text-[16px] text-white max-md:text-[14px] max-md:leading-[28px]"
              href="/create"
            >
              Try it now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const FAQItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-system-white08 px-6 py-[10px] max-md:w-[325px] max-md:px-[17px] max-md:py-[14px]">
      <div className="mt-[10px] flex justify-between font-semibold leading-7 text-white">
        <div className="font-medium text-[18px] max-md:w-[260px] max-md:text-[14px] text-white">
          What is Vidu?
        </div>
        {isOpen ? (
          <svg
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="size-4 max-md:size-[12px]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <path
              d="M5 5L19 19"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
            <path
              d="M5 19L19 5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
        ) : (
          <svg
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 25 25"
            xmlns="http://www.w3.org/2000/svg"
            className="size-4 max-md:size-[12px]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <path
              d="M12.28 5.96875L12.2617 19.9688"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
            <path
              d="M5.25 12.9688H19.25"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
        )}
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="w-[592px] text-[14px] leading-5 opacity-60 max-md:w-[291px] max-md:text-[12px] max-md:leading-[14px] max-lg:w-[452px] max-xl:w-[832px] text-white">
          <div>
            <div className="py-3 text-[14px] leading-5 opacity-60 max-md:text-[12px] max-md:leading-[14px]">
              Vidu is a cutting-edge AI video generator that transforms text and
              images into high-quality videos, supporting multiple creation
              modes: Text to Video, Image to Video, and Reference to Video.
              Designed for independent creators and teams, Vidu simplifies the
              production of high-quality videos, 2D animations, and diverse
              artistic styles, empowering users to bring their creative visions
              to life effortlessly.
            </div>
          </div>
          <div>
            <div className="py-3 text-[14px] leading-5 opacity-60 max-md:text-[12px] max-md:leading-[14px]">
              With robust semantic understanding and fast generation speed, Vidu
              eliminates production complexities, allowing creators to focus
              solely on their ideas. From low resolution to stunning 1080p
              outputs, Vidu offers unmatched flexibility and efficiency,
              providing a broader canvas for creativity.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
