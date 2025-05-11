import React from "react";
import image1 from '../assets/WhyViDu/banner2.39b0f5fa.png';
import image2 from '../assets/WhyViDu/banner1.7a71aefe.png';
import image3 from '../assets/WhyViDu/banner5.771bdc66.png';
import image4 from '../assets/WhyViDu/ability1.72782fe0.png';
import image5 from '../assets/WhyViDu/ability2.c48cdf53.png';
import image6 from '../assets/WhyViDu/ability3.85e5423d.png';
import image7 from '../assets/WhyViDu/advantage1.90b2057f.png';
import image8 from '../assets/WhyViDu/advantage2.596755e7.png';
import image9 from '../assets/WhyViDu/advantage3.dc2ec0be.png';
import image10 from '../assets/WhyViDu/scene1.bef8bc68.png';
import image11 from '../assets/WhyViDu/scene3.f6cd1517.png';
import image12 from '../assets/WhyViDu/scene2.a0d4400d.png';
import image13 from '../assets/WhyViDu/last.944c30c3.png';

const content = [
  {
    title: "Instant Video",
    subTitle: "Creation",
    description:
      "Generate videos in just 10 seconds—fast, effortless, and efficient.",
    image:
      "https://image01.cf.vidu.studio/vidu/landing-page/banner1.7a71aefe.png",
    icon: (
      <svg
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="size-6"
      >
        <path
          d="M9.60749 14.3901H6.07333C5.61191 14.3901 5.29362 13.9283 5.45781 13.4974L8.96959 4.27957C9.0171 4.15486 9.10137 4.04753 9.21125 3.97179C9.32113 3.89605 9.45143 3.85549 9.58488 3.85547H15.5109C15.9784 3.85547 16.2972 4.32918 16.1207 4.76228L14.0759 9.78123H17.9253C18.4914 9.78123 18.7935 10.4486 18.4201 10.874L8.98232 21.6279C8.52354 22.1508 7.67292 21.6977 7.85095 21.0254L9.60749 14.3901Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "Superior Anime",
    subTitle: "Generation",
    description:
      "Create high-quality anime videos with natural character animation.",
    image:
      "https://image01.cf.vidu.studio/vidu/landing-page/ability1.72782fe0.png",
    icon: (
      <svg
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="size-6"
      >
        <path
          d="M9.63828 15.8C5.96558 15.8 2.98828 12.8227 2.98828 9.15C2.98828 5.4773 5.96558 2.5 9.63828 2.5C13.311 2.5 16.2883 5.4773 16.2883 9.15"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M21.5121 9.1499H9.16211V21.4999H21.5121V9.1499Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
      </svg>
    ),
  },
  {
    title: "Unlimited Free",
    subTitle: "Generation",
    description:
      "Enjoy unlimited free video creation in Non-Peak Mode—no credits required.",
    image:
      "https://image01.cf.vidu.studio/vidu/landing-page/banner2.39b0f5fa.png",
    icon: (
      <svg
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="size-6"
      >
        <path
          d="M9.72725 14.2222C8.8182 15.1111 7.9091 16 6.0909 16C4.27272 16 2 14.6667 2 12C2 9.33335 4.27272 8 6.0909 8C8.8182 8 10.1818 9.7778 12 12C13.8182 14.2222 15.1818 16 17.9091 16C19.7272 16 22 14.6667 22 12C22 9.33335 19.7272 8 17.9091 8C16.0909 8 14.7272 9.33335 14.2727 9.7778"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        ></path>
      </svg>
    ),
  },
];
export default function WhyViDuAi() {
  return (
    <section className="relative flow-root h-full max-md:h-auto">
      <div className="mt-[134px] flex w-screen flex-col items-center overflow-hidden">
        <HeaderItem />
        <ListItem />
        <ContentItem />
      </div>
    </section>
  );
}

const ContentItem = () => {
  return (
    <div
      className="relative flex w-[120%] justify-center max-md:w-[140%]"
      style={{ transform: "perspective(800px) rotateX(30deg)" }}
    >
      <div className="scrollbar-hide max-h-[500px] overflow-y-auto max-md:max-h-[250px]">
        <div className="flex flex-wrap justify-center gap-4 px-4">
          {[
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            image7,
            image8,
            image9,
            image10,
            image11,
            image12,
            image13,
          ]
            .map((image, index) => (
              <img
                key={index}
                alt="why-vidu"
                loading="lazy"
                width="316"
                height="200"
                decoding="async"
                data-nimg="1"
                className="aspect-[1.58/1] h-[200px] w-[316px] object-cover max-md:h-[100px] max-md:w-[158px]"
                style={{ color: "transparent" }}
                src={image}
              />
            ))
            .concat(
              // Repeat the images 2 more times
              [...Array(2)].flatMap(() =>
                [
                  image1,
                  image2,
                  image3,
                  image4,
                  image5,
                  image6,
                  image7,
                  image8,
                  image9,
                  image10,
                  image11,
                  image12,
                  image13,
                  image8,
                  image9,
                  image10,
                  image11,
                  image12,
                  image13,
                ].map((image, index) => (
                  <img
                    key={`repeat-${index}`}
                    alt="why-vidu"
                    loading="lazy"
                    width="316"
                    height="200"
                    decoding="async"
                    data-nimg="1"
                    className="aspect-[1.58/1] h-[200px] w-[316px] object-cover max-md:h-[100px] max-md:w-[158px]"
                    style={{ color: "transparent" }}
                    src={image}
                  />
                ))
              )
            )}
        </div>
      </div>
    </div>
  );
};
const ListItem = () => {
  return (
    <div className="mt-20 flex flex-row items-center gap-[74px] max-md:flex-col max-lg:gap-[30px]">
      {content.map((item, index) => (
        <React.Fragment key={index}>
          <div className="flex w-[316px] flex-col justify-between max-md:items-center max-md:justify-center max-lg:w-[260px]">
            <div className="flex w-[72px] items-center justify-center rounded-full border-[#006aff] border-[2px] border-solid bg-[#006aff]/60 px-6 py-[6px] shadow-[0px_0px_14px_0px_#3489FF_inset]">
              {item.icon}
            </div>
            <div className="flex flex-col max-md:items-center ">
              <h3 className="mt-2 text-nowrap font-semibold text-[28px] leading-normal max-md:text-[24px] max-md:leading-[60px] max-lg:text-[28px] text-white">
                {item.title}
              </h3>
              <div className="text-nowrap font-normal text-[#2882FF] text-[28px] leading-none max-md:text-[24px] max-md:leading-[60px] max-lg:text-[24px]">
                {item.subTitle}
              </div>
            </div>
            <div className="mt-3 text-[14px] text-white leading-[26px] opacity-60 max-md:mt-0 max-md:text-center">
              {item.description}
            </div>
          </div>
          {index !== content.length - 1 && (
            <div className="h-[131px] w-[2px] bg-white opacity-15 max-md:h-[2px] max-md:w-full"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const HeaderItem = () => {
  return (
    <>
      <h2 className="text-center font-medium text-[48px] max-md:text-[32px] text-white">
        Why Vidu AI Video Generator?
      </h2>
      <div className="my-4 hidden h-[2px] w-[50px] bg-system-white opacity-25 max-md:block"></div>
      <div className="font-normal text-[14px] text-base text-white opacity-65 max-md:mx-[58px] max-md:text-center max-md:leading-6">
        Vidu AI Video Generator delivers what others can't - trusted by millions
        worldwide.
      </div>
    </>
  );
};
