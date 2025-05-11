import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./EmblaCarouselArrowButtons";


//video data
import videoData1 from "../assets/ReferenceVideo/reference1.ff0b3a2f.mp4";
import imageData1 from "../assets/ReferenceVideo/img2.6315c6c5.jpg";
import imageDataItem1 from "../assets/ReferenceVideo/reference1-2.4fe0f230.png";
import imageDataItem2 from "../assets/ReferenceVideo/reference1-1.bed97d57.png";
import imageDataItem3 from "../assets/ReferenceVideo/reference1-3.b3b61c5d.png";

import videoData2 from "../assets/ReferenceVideo/refrenceGlobal2.75cedbc6.mp4";
import imageData2 from "../assets/ReferenceVideo/reference3.4908d3f5.jpg";
import imageDataItem4 from "../assets/ReferenceVideo/referenceGlobal2-2.e3e27677.png";
import imageDataItem5 from "../assets/ReferenceVideo/referenceGlobal2-3.38889907.png";
import imageDataItem6 from "../assets/ReferenceVideo/referenceGlobal2-1.1e642f84.png";

import videoData3 from "../assets/ReferenceVideo/reference3.096cbbdb.mp4";
import imageData3 from "../assets/ReferenceVideo/img3.997ba760.jpg";
import imageDataItem7 from "../assets/ReferenceVideo/reference3-1.d7e4ec5d.jpeg";
import imageDataItem8 from "../assets/ReferenceVideo/reference3-2.4578997f.jpeg";
import imageDataItem9 from "../assets/ReferenceVideo/reference3-3.38723d62.jpeg";


import rowimage from "../assets/banner/lineArrow.d9b43180.png";


// video data 2

import videoData4 from "../assets/ReferenceVideo/imageGlobal1.47868a52.mp4";
import imageData4 from "../assets/ReferenceVideo/imageGlobal1-1.832ed84d.png";
import imageDataItem10 from "../assets/ReferenceVideo/imageGlobal1-2.1293d485.png";
import imageDataItem11 from "../assets/ReferenceVideo/imageGlobal1-1.1485a09e.png";

import videoData5 from "../assets/ReferenceVideo/man.23c0146e.mp4";
import imageData5 from "../assets/ReferenceVideo/man.9afc3129.png";
import imageDataItem12 from "../assets/ReferenceVideo/man-first.d12aa430.png";
import imageDataItem13 from "../assets/ReferenceVideo/man-last.2dd4e940.png";

import videoData6 from "../assets/ReferenceVideo/image3.d24df352.mp4";
import imageData6 from "../assets/ReferenceVideo/image3-1.e941435c.png";
import imageDataItem14 from "../assets/ReferenceVideo/image3-2.1d70f4a8.png";
import imageDataItem15 from "../assets/ReferenceVideo/image3-1.e941435c.png";


//reference video data


import referenceImage1 from "../assets/ReferenceVideo/viduAbilityReStart.53b0efd2.png";
import referenceImage2 from "../assets/ReferenceVideo/viduAbilityReEnd.338c0ecb.png";
import referenceImage3 from "../assets/ReferenceVideo/viduAbilityStart.9fa2b9c4.png";
import referenceImage4 from "../assets/ReferenceVideo/viduAbilityEnd.76c96cc4.png";





const videoData = [
  {
    id: "video-https://image01.cf.vidu.studio/vidu/landing-page/img2.6315c6c5.jpg",
    poster:
      imageData1,
    video:
      videoData1,
    images: [
      imageDataItem1,
      imageDataItem2,
      imageDataItem3,
    ],
  },
  {
    id: "video-https://image01.cf.vidu.studio/vidu/landing-page/reference3.4908d3f5.jpg",
    poster:
      imageData2,
    video:
      videoData2,
    images: [
      imageDataItem4,
      imageDataItem5,
      imageDataItem6,
    ],
  },
  {
    id: "video-https://image01.cf.vidu.studio/vidu/landing-page/img3.997ba760.jpg",
    poster:
      imageData3,
    video:
      videoData3,
    images: [
      imageDataItem7,
      imageDataItem8,
      imageDataItem9,
    ],
  },
];

const imageToVideoData = [
  {
    id: "video-https://image01.cf.vidu.studio/vidu/landing-page/imageGlobal1-1.832ed84d.png",
    poster:
      imageData4,
    video:
      videoData4,
    images: [
      imageDataItem10,
      imageDataItem11,
    ],
  },
  {
    id: "video-https://image01.cf.vidu.studio/vidu/landing-page/man.9afc3129.png",
    poster:
      imageData5,
    video:
      videoData5,
    images: [
      imageDataItem12,
      imageDataItem13,
    ],
  },
  {
    id: "video-https://image01.cf.vidu.studio/vidu/landing-page/image3-1.e941435c.png",
    poster:
      imageData6,
    video:
      videoData6,
    images: [
      imageDataItem14,
      imageDataItem15,
    ],
  },
];

const ContentFooterData1 = [
  {
    title: "Multi-Reference Consistency",
    description:
      "Upload up to 7 images to keep people, objects, and scenes consistent throughout your video.",
    image:
      referenceImage1,
    href: "/create/character2video",
    svg: (
      <svg
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="size-10 py-[2px] max-md:h-[40px] max-md:w-[40px] max-md:rounded-full max-md:bg-system-white08 max-md:p-[7.5px]"
      >
        <path
          d="M21.1626 7.85491C21.1626 6.93711 20.6245 6.10456 19.7878 5.72754L12.9625 2.65234C12.3508 2.37672 11.6501 2.37777 11.0392 2.6552L4.27865 5.72548C3.44528 6.10396 2.91016 6.93471 2.91016 7.84999V16.1456C2.91016 17.0609 3.44526 17.8916 4.27859 18.2701L11.0391 21.3406C11.65 21.618 12.3508 21.6191 12.9626 21.3434L19.7878 18.268C20.6246 17.891 21.1626 17.0585 21.1626 16.1407V7.85491Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M7.0332 9.39551L11.9959 11.8022L16.9641 9.39551"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.60374"
        />
        <path
          d="M12 11.8076V17.3955"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.60374"
        />
      </svg>
    ),
  },
  {
    title: "My References",
    description:
      "Save characters, props, and scenes in My References for effortless reuse.",
    image:
      referenceImage2,
    href: "/create/character2video",
    svg: (
      <svg
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="size-10 py-[2px] max-md:h-[40px] max-md:w-[40px] max-md:rounded-full max-md:bg-system-white08 max-md:p-[7.5px]"
      >
        <path
          d="M21.1626 7.85491C21.1626 6.93711 20.6245 6.10456 19.7878 5.72754L12.9625 2.65234C12.3508 2.37672 11.6501 2.37777 11.0392 2.6552L4.27865 5.72548C3.44528 6.10396 2.91016 6.93471 2.91016 7.84999V16.1456C2.91016 17.0609 3.44526 17.8916 4.27859 18.2701L11.0391 21.3406C11.65 21.618 12.3508 21.6191 12.9626 21.3434L19.7878 18.268C20.6246 17.891 21.1626 17.0585 21.1626 16.1407V7.85491Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M7.0332 9.39551L11.9959 11.8022L16.9641 9.39551"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.60374"
        />
        <path
          d="M12 11.8076V17.3955"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.60374"
        />
      </svg>
    ),
  },
];

const ContentFooterData2 = [
  {
    title: "First & Last Frames Control",
    description:
      "Upload the first and last frame images, and Vidu AI will create smooth transitions in between.",
    image:
      referenceImage3,
    href: "/create/img2video",
    svg: (
      <svg
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 41 41"
        xmlns="http://www.w3.org/2000/svg"
        className="size-10 md:h-[40px] md:w-[40px] md:rounded-full md:bg-system-white08 md:p-[7.5px]"
      >
        <g clipPath="url(#clip0_925_3440)">
          <path
            d="M18.3531 13.8679L18.1699 11.0063C18.0522 9.1691 16.4675 7.77512 14.6304 7.89275L4.7816 8.52334C2.94441 8.64097 1.55044 10.2257 1.66807 12.0628L2.82693 30.1625C2.94456 31.9997 4.52926 33.3937 6.36645 33.276L16.2405 32.6438C18.0678 32.5268 19.4586 30.9578 19.3555 29.1297L19.0333 23.4131"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2.5"
          />
          <path
            d="M22.6101 14.3811L22.8262 11.0063C22.9439 9.1691 24.5286 7.77512 26.3657 7.89275L36.2145 8.52334C38.0517 8.64097 39.4457 10.2257 39.328 12.0628L38.1692 30.1625C38.0515 31.9997 36.4668 33.3937 34.6296 33.276L24.7809 32.6455C22.9437 32.5278 21.5497 30.9431 21.6674 29.1059L22.0323 23.4068"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2.5"
          />
          <path
            d="M29.3125 22.3977C27.4878 19.2372 24.14 17.5418 20.8803 17.7928C19.7003 17.8837 18.5318 18.2297 17.4513 18.8535C15.9816 19.702 14.8758 20.9485 14.1803 22.3977"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M24.598 22.2326L29.3121 22.3977L29.9102 17.4336"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
        <defs>
          <clipPath id="clip0_925_3440">
            <rect
              height="40"
              width="40"
              fill="currentColor"
              transform="translate(0.5 0.580078)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: "Anime Art to Video",
    description:
      "Transform anime art into fluid animations with lifelike character motions.",
    image:
      referenceImage4,
    href: "/create/img2video",
    svg: (
      <svg
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="size-10 md:h-[40px] md:w-[40px] md:rounded-full md:bg-system-white08 md:p-[7.5px]"
      >
        <path
          d="M9.63828 15.8C5.96558 15.8 2.98828 12.8227 2.98828 9.15C2.98828 5.4773 5.96558 2.5 9.63828 2.5C13.311 2.5 16.2883 5.4773 16.2883 9.15"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M21.5121 9.1499H9.16211V21.4999H21.5121V9.1499Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];

export default function ReferenceVideo() {

  const ContentFooter = () => (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex w-full items-center justify-center gap-[20px] max-md:flex-col max-md:hidden"
      >
        {ContentFooterData1.map((item) => (
          <ContentFooterItem
            key={item.title}
            title={item.title}
            description={item.description}
            image={item.image}
            href={item.href}
            svg={item.svg}
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mx-4 hidden flex-col gap-5 max-md:flex"
      >
        {ContentFooterData1.map((item) => (
          <ContentFooterItemMobile
            key={item.title}
            title={item.title}
            description={item.description}
            image={item.image}
            href={item.href}
            svg={item.svg}
          />
        ))}
      </motion.div>
    </>
  );

  const ContentHeader = () => (
    <HeaderItem
      title="Image to Video"
      description="Bring still images to life with dynamic motion that aligns with your vision."
    />
  );

  const ContentBody = () => (
    <>
    <ContentBodyItem listItem={videoData} />
    <ContentBodyItemMobile items={videoData} />
    </>
  );

  const ContentFooter2 = () => (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex w-full items-center justify-center gap-[20px] max-md:flex-col max-md:hidden"
      >
        {ContentFooterData2.map((item) => (
          <ContentFooterItem
            key={item.title}
            title={item.title}
            description={item.description}
            image={item.image}
            href={item.href}
            svg={item.svg}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mx-4 hidden flex-col gap-5 max-md:flex"
      >
        {ContentFooterData1.map((item) => (
          <ContentFooterItemMobile
            key={item.title}
            title={item.title}
            description={item.description}
            image={item.image}
            href={item.href}
            svg={item.svg}
          />
        ))}
      </motion.div>
    </>
  );
  const ContentHeader2 = () => (
    <HeaderItem
      title="Reference to Video"
      description="Create videos that align with reference subjects, such as characters, objects, and scenes."
    />
  );

  const ContentBody2 = () => (
    <>    
    <ContentBodyItem listItem={imageToVideoData} />
    <ContentBodyItemMobile items={imageToVideoData} />
    </>

  );

  return (
    <section className="relative flow-root h-full max-md:h-auto">
      <div className="flex flex-col items-center px-20 pt-48 pb-16 max-md:px-0 max-md:py-0 max-lg:px-[29px] max-lg:pt-[123px] max-lg:pb-[40px] max-sm:pt-10">
        <ContentHeader />
        <ContentBody />
        <ContentFooter />
      </div>
      <div className="flex flex-col items-center px-20 pt-48 pb-16 max-md:px-0 max-md:py-0 max-lg:px-[29px] max-lg:pt-[123px] max-lg:pb-[40px]">
        <ContentHeader2 />
        <ContentBody2 />
        <ContentFooter2 />
      </div>
    </section>
  );
}

const ContentFooterItem = ({
  title,
  description,
  image,
  svg,
}: {
  title: string;
  description: string;
  image: string;
  href: string;
  svg: React.ReactNode;
}) => (
  <div className="relative flex h-[312px] w-[587px] flex-col justify-between overflow-hidden rounded-[20px] bg-system-white12 px-10 pt-6 pb-10 max-md:px-4">
    <div className="z-10 flex flex-col items-start text-white">
      {svg}
      <h3 className="mt-4 font-semibold text-[18px] text-white">{title}</h3>
      <div className="mt-3 w-[288px] text-[14px] text-white opacity-65 max-lg:w-[200px]">
        {description}
      </div>
    </div>
    <a
      target="_self"
      className="z-10 flex w-fit cursor-pointer items-center gap-2 rounded-full border-[2px] border-white border-solid px-6 py-3 text-[14px] text-white"
      href="/create/img2video"
    >
      Get Started
      <svg
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 rotate-90"
      >
        <path
          d="M12 5V19"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M6 11L12 5L18 11"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </a>
    <img
      alt="First & Last Frames Control"
      loading="lazy"
      width="587"
      height="312"
      decoding="async"
      data-nimg="1"
      className="absolute right-0 bottom-0 h-full w-full object-cover object-bottom"
      style={{ color: "transparent" }}
      src={image}
    />
  </div>
);

const ContentFooterItemMobile = ({
  title,
  description,
  image,
  href,
  svg,
}: {
  title: string;
  description: string;
  image: string;
  href: string;
  svg: React.ReactNode;
}) => (
  <div className="relative flex h-[312px] w-full flex-col justify-between overflow-hidden rounded-[20px] bg-system-white12 p-4">
    <div className="relative z-10 flex flex-col items-start max-sm:w-[336px] max-md:w-[600px]">
      {svg}
      <div className="mt-4 w-[190px] font-semibold text-[18px] text-white">
        {title}
      </div>
      <div className="mt-3 w-[210px] text-[14px] text-white opacity-65">
        {description}
      </div>
    </div>
    <a
      href={href}
      className="z-10 flex w-fit items-center gap-2 rounded-full border-[2px] border-white border-solid px-6 py-3 text-[14px]"
    >
      Get Started
      <svg
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 rotate-90"
      >
        <path
          d="M12 5V19"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M6 11L12 5L18 11"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </a>
    <img
      alt={title}
      loading="lazy"
      decoding="async"
      data-nimg="fill"
      className="absolute right-0 bottom-0 h-full w-full object-cover object-bottom"
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        inset: 0,
        color: "transparent",
      }}
      src={image}
    />
  </div>
);

const HeaderItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div
    className="mb-8 flex items-center justify-center gap-10 max-lg:flex-col"
    style={{ opacity: 1, transform: "none" }}
  >
    <h2 className="font-medium text-[48px] text-white max-md:text-[36px] max-lg:text-[40px]">
      {title}
    </h2>
    <div className="h-[50px] w-[2px] bg-white opacity-[0.24] max-lg:h-[2px] max-lg:w-[50px]" />
    <div className="w-[405px] text-[16px] text-white leading-[22px] opacity-65">
      {description}
    </div>
  </div>
);

const ContentBodyItem = ({
  listItem,
}: {
  listItem: {
    id: string;
    poster: string;
    video: string;
    images: string[];
  }[];
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  });
  const { prevBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mt-8 w-full max-w-[1000px] overflow-hidden rounded-xl max-md:hidden"
    >
      <div className="flex items-center justify-center gap-8">
 
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <div className="relative overflow-hidden rounded-xl" ref={emblaRef}>
          <div className="flex">
            {listItem.map((item) => (
              <div
                key={item.id}
                className="relative flex min-w-full shrink-0 grow-0 basis-full flex-col items-center justify-center"
              >
                <div className="flex w-full flex-col">
                  <div className="relative w-full">
                    <video
                      id={item.id}
                      poster={item.poster}
                      muted
                      playsInline
                      webkit-playsinline="true"
                      x5-playsinline="true"
                      className="aspect-video w-full rounded-xl object-cover object-center max-md:rounded-none"
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>

                    {item.images.length === 2 && (
                      <div className="absolute right-0 bottom-[110px] left-0 z-10 max-md:bottom-10">
                        <div className="flex flex-col items-center justify-center">
                          <div className="flex items-center justify-center gap-1 rounded-2xl bg-system-black64 p-3 backdrop-blur-[30px] max-md:gap-[2px] max-md:rounded-md max-md:p-[5px]">
                            <img
                              src={item.images[0]}
                              alt="poster-0"
                              className="max-h-[84px] w-auto rounded-lg object-contain max-md:max-h-[42px] max-md:rounded-sm"
                            />
                            <div className="flex h-[88px] w-[88px] items-center justify-center max-md:size-[10px]">
                              <img
                                alt="lineArrow"
                                loading="lazy"
                                width="88"
                                height="88"
                                decoding="async"
                                data-nimg="1"
                                className="size-[88px] max-md:size-[10px]"
                                style={{ color: "transparent" }}
                                src={rowimage}
                              />
                            </div>
                            <img
                              src={item.images[1]}
                              alt="poster-1"
                              className="max-h-[84px] w-auto rounded-lg object-contain max-md:max-h-[42px] max-md:rounded-sm"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {item.images.length > 2 && (
                      <div className="absolute right-0 bottom-[110px] left-0 z-10 max-md:bottom-10">
                        <div className="flex flex-col items-center justify-center">
                          <div className="flex items-center justify-center gap-1 rounded-2xl bg-system-black64 p-3 backdrop-blur-[30px] max-md:gap-[2px] max-md:rounded-[6px] max-md:p-[5px]">
                            {item.images.map((image, index) => (
                              <>
                                <img
                                  key={`img-${index}`}
                                  src={image}
                                  alt={`poster-${index}`}
                                  className="max-h-[84px] w-auto rounded-lg object-contain max-md:max-h-[42px] max-md:rounded-[4px]"
                                />
                                {index < item.images.length - 1 && (
                                  <div
                                    key={`plus-${index}`}
                                    className="flex h-6 w-6 items-center justify-center rounded-full bg-system-white24 max-md:size-[10px]"
                                  >
                                    <svg
                                      width="1rem"
                                      height="1rem"
                                      fill="none"
                                      viewBox="0 0 25 25"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="size-4 max-md:size-[7px]"
                                    >
                                      <path
                                        d="M12.28 5.96875L12.2617 19.9688"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                      />
                                      <path
                                        d="M5.25 12.9688H19.25"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                      />
                                    </svg>
                                  </div>
                                )}
                              </>
                            ))}
                          </div>
                        </div>
                        <div className="absolute top-0 z-10 flex w-full origin-bottom scale-y-[-1] items-center justify-center blur-[8px]">
                          <div className="flex items-center justify-center gap-1 rounded-4 p-3 max-md:gap-[2px] max-md:rounded-[3px] max-md:p-[5px]">
                            {item.images.map((image, index) => (
                              <>
                                <img
                                  key={`blur-img-${index}`}
                                  src={image}
                                  alt={`poster-${index}`}
                                  className="max-h-[84px] w-auto rounded-8 object-contain max-md:max-h-[42px] max-md:rounded-[4px]"
                                />
                                {index < item.images.length - 1 && (
                                  <div
                                    key={`blur-plus-${index}`}
                                    className="flex h-6 w-6 items-center justify-center rounded-full bg-system-white24 max-md:size-[10px]"
                                  >
                                    <svg
                                      width="16px"
                                      height="16px"
                                      fill="none"
                                      viewBox="0 0 25 25"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="size-4 max-md:size-[7px]"
                                    >
                                      <path
                                        d="M12.28 5.96875L12.2617 19.9688"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                      />
                                      <path
                                        d="M5.25 12.9688H19.25"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                      />
                                    </svg>
                                  </div>
                                )}
                              </>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="relative h-40 w-full max-md:h-16">
                      <div className="relative z-0 h-full w-full overflow-hidden opacity-[0.48]">
                        <video
                          poster={item.poster}
                          muted
                          playsInline
                          webkit-playsinline="true"
                          x5-playsinline="true"
                          className="w-full scale-y-[-1] rounded-xl blur-[30px] max-md:blur-[15px]"
                        >
                          <source src={item.video} type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute bottom-0 z-10 h-40 w-full bg-gradient-to-t from-black to-transparent">
            <div className="absolute top-0 left-0 h-full w-40 bg-gradient-to-r from-black to-transparent" />
            <div className="absolute top-0 right-0 h-full w-40 bg-gradient-to-l from-black to-transparent" />
            <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black to-transparent" />
          </div>
        </div>

        <NextButton onClick={onNextButtonClick}/>
      </div>
    </motion.div>
  );
  };


const ContentBodyItemMobile = (
  {
    items,
  }: {
    items: {
      id: string;
      poster: string;
      video: string;
      images: string[];
    }[];
  }
) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="gap-8 hidden max-md:flex"
    >
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative flex min-w-full shrink-0 grow-0 basis-full flex-col items-center justify-center p-4 max-md:p-0"
            >
              <div className="flex w-full flex-col">
                <div className="relative w-full">
                  <video
                    id={`video-${item.poster}`}
                    poster={item.poster}
                    muted
                    playsInline
                    webkit-playsinline="true"
                    x5-playsinline="true"
                    className="aspect-video w-full rounded-12 object-cover object-center max-md:rounded-none"
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>

                  {item.images.length === 2 && (
                      <div className="absolute right-0 bottom-[110px] left-0 z-10 max-md:bottom-10">
                        <div className="flex flex-col items-center justify-center">
                          <div className="flex items-center justify-center gap-1 rounded-2xl bg-system-black64 p-3 backdrop-blur-[30px] max-md:gap-[2px] max-md:rounded-md max-md:p-[5px]">
                            <img
                              src={item.images[0]}
                              alt="poster-0"
                              className="max-h-[84px] w-auto rounded-lg object-contain max-md:max-h-[42px] max-md:rounded-sm"
                            />
                            <div className="flex h-[88px] w-[88px] items-center justify-center max-md:size-[10px]">
                              <img
                                alt="lineArrow"
                                loading="lazy"
                                width="88"
                                height="88"
                                decoding="async"
                                data-nimg="1"
                                className="size-[88px] max-md:size-[10px]"
                                style={{ color: "transparent" }}
                                src={rowimage}
                              />
                            </div>
                            <img
                              src={item.images[1]}
                              alt="poster-1"
                              className="max-h-[84px] w-auto rounded-lg object-contain max-md:max-h-[42px] max-md:rounded-sm"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {item.images.length > 2 && (
                      <div className="absolute right-0 bottom-[110px] left-0 z-10 max-md:bottom-10">
                        <div className="flex flex-col items-center justify-center">
                          <div className="flex items-center justify-center gap-1 rounded-2xl bg-system-black64 p-3 backdrop-blur-[30px] max-md:gap-[2px] max-md:rounded-[6px] max-md:p-[5px]">
                            {item.images.map((image, index) => (
                              <>
                                <img
                                  key={`img-${index}`}
                                  src={image}
                                  alt={`poster-${index}`}
                                  className="max-h-[84px] w-auto rounded-lg object-contain max-md:max-h-[42px] max-md:rounded-[4px]"
                                />
                                {index < item.images.length - 1 && (
                                  <div
                                    key={`plus-${index}`}
                                    className="flex h-6 w-6 items-center justify-center rounded-full bg-system-white24 max-md:size-[10px]"
                                  >
                                    <svg
                                      width="1rem"
                                      height="1rem"
                                      fill="none"
                                      viewBox="0 0 25 25"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="size-4 max-md:size-[7px]"
                                    >
                                      <path
                                        d="M12.28 5.96875L12.2617 19.9688"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                      />
                                      <path
                                        d="M5.25 12.9688H19.25"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                      />
                                    </svg>
                                  </div>
                                )}
                              </>
                            ))}
                          </div>
                        </div>
                        <div className="absolute top-0 z-10 flex w-full origin-bottom scale-y-[-1] items-center justify-center blur-[8px]">
                          <div className="flex items-center justify-center gap-1 rounded-4 p-3 max-md:gap-[2px] max-md:rounded-[3px] max-md:p-[5px]">
                            {item.images.map((image, index) => (
                              <>
                                <img
                                  key={`blur-img-${index}`}
                                  src={image}
                                  alt={`poster-${index}`}
                                  className="max-h-[84px] w-auto rounded-8 object-contain max-md:max-h-[42px] max-md:rounded-[4px]"
                                />
                                {index < item.images.length - 1 && (
                                  <div
                                    key={`blur-plus-${index}`}
                                    className="flex h-6 w-6 items-center justify-center rounded-full bg-system-white24 max-md:size-[10px]"
                                  >
                                    <svg
                                      width="16px"
                                      height="16px"
                                      fill="none"
                                      viewBox="0 0 25 25"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="size-4 max-md:size-[7px]"
                                    >
                                      <path
                                        d="M12.28 5.96875L12.2617 19.9688"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                      />
                                      <path
                                        d="M5.25 12.9688H19.25"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                      />
                                    </svg>
                                  </div>
                                )}
                              </>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                  <div className="relative h-40 w-full max-md:h-16">
                    <div className="relative z-0 h-full w-full overflow-hidden opacity-[0.48]">
                      <video
                        poster={item.poster}
                        muted
                        playsInline
                        webkit-playsinline="true"
                        x5-playsinline="true"
                        className="w-full scale-y-[-1] blur-[30px] max-md:blur-[15px]"
                      >
                        <source src={item.video} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute bottom-0 z-10 h-16 w-full bg-gradient-to-t from-black to-transparent">
          <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-black to-transparent" />
          <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-black to-transparent" />
          <div className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-black to-transparent" />
        </div>
      </div>
    </motion.div>
  )
};
