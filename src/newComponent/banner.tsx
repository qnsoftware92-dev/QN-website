import React, { useState } from 'react';

const VideoBanner = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(2); // Default to the third video

  const videos = [
    {
      poster: "https://image01.cf.vidu.studio/vidu/landing-page/travel.b359d872.png",
      src: "https://image01.cf.vidu.studio/vidu/landing-page/travel.a52da706.mp4"
    },
    {
      poster: "https://image01.cf.vidu.studio/vidu/landing-page/girl.49bc5b0b.png",
      src: "https://image01.cf.vidu.studio/vidu/landing-page/girl.6e936562.mp4"
    },
    {
      poster: "https://image01.cf.vidu.studio/vidu/landing-page/home1.d24295c9.png",
      src: "https://image01.cf.vidu.studio/vidu/landing-page/banner2.c92f22ed.mp4"
    },
    {
      poster: "https://image01.cf.vidu.studio/vidu/landing-page/explosion.282c0ee1.png",
      src: "https://image01.cf.vidu.studio/vidu/landing-page/explosion.e0203d2f.mp4"
    },
    {
      poster: "https://image01.cf.vidu.studio/vidu/landing-page/homeGlobal5.d26b1f17.jpg",
      src: "https://image01.cf.vidu.studio/vidu/landing-page/home5Global.49842d43.mp4"
    }
  ];

  const handleIndicatorClick = (index: number) => {
    setActiveVideoIndex(index);
  };

  return (
    <div className="relative z-10 flex h-screen flex-col items-center justify-center sm:justify-end md:h-[660px] md:justify-end">
      {/* Video backgrounds */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        {videos.map((video, index) => (
          <div 
            key={index}
            className={`-z-20 absolute top-0 left-0 h-screen w-full object-cover lg:h-full ${
              index === activeVideoIndex ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-150 ease-in-out`}
          >
            <div className="relative aspect-video h-screen w-full lg:h-full" style={{ aspectRatio: 'unset' }}>
              <img 
                alt="视频封面" 
                className="h-full w-full object-cover object-center hidden" 
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  color: 'transparent'
                }} 
                src={video.poster} 
                loading={index === 2 ? 'eager' : 'lazy'}
              />
              <video 
                autoPlay 
                loop 
                playsInline 
                webkit-playsinline="true" 
                x5-playsinline="true" 
                className="object-cover object-center h-screen w-full lg:h-full block"
              >
                <source src={video.src} type="video/mp4" />
              </video>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile indicators */}
      <div className="absolute right-3 flex flex-col items-center gap-3 md:hidden">
        {videos.map((video, index) => (
          <img 
            key={index}
            alt={`indicator_poster_${index}`}
            width="40"
            height="40"
            className={`cursor-pointer rounded-8 object-cover object-center ${
              index === activeVideoIndex 
                ? 'h-10 w-10 opacity-100' 
                : index === activeVideoIndex - 1 || index === activeVideoIndex + 1 
                  ? 'h-7 w-7 opacity-60' 
                  : 'h-5 w-5 opacity-30'
            } transition-all duration-300 ease-in-out`}
            style={{ color: 'transparent' }}
            src={video.poster}
            onClick={() => handleIndicatorClick(index)}
            loading={index === 2 ? 'eager' : 'lazy'}
          />
        ))}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 flex flex-col items-center">
        <h1 
          className="mb-[34px] text-center font-semibold text-7xl text-white leading-tight sm:w-[345px] sm:text-[32px] md:mb-[17px] md:text-[38px] lg:text-[50px] xl:text-[80px]" 
          style={{ textShadow: '0px 2.25px 2.25px rgba(0, 0, 0, 0.25)' }}
        >
          AI Video Generator
        </h1>
        
        <div className="mb-[30px] text-center text-[24px] leading-[34px] md:mb-[24px] md:text-[16px] md:leading-[22px]">
          What you imagine is what Vidu — fast, high-quality, affordable, and unparalleled 2D animation.
        </div>

        {/* Desktop search form */}
        <div className="mb-[160px] h-[60px] w-[856px] md:hidden lg:w-[580px]">
          <form className="relative mx-auto flex h-full w-full items-center justify-center overflow-hidden rounded-full border-system-white36 bg-system-white24 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200">
            <div className="ml-6 flex items-center">
              <img 
                alt="banner-img" 
                width="28" 
                height="28" 
                className="size-7 rounded-8 object-cover object-center" 
                style={{ color: 'transparent' }} 
                src="https://image01.cf.vidu.studio/vidu/landing-page/home1.d24295c9.png" 
                loading="lazy"
              />
              <span className="mx-4 inline-block h-6 w-2 text-center text-base text-white">|</span>
            </div>
            
            <input 
              type="text" 
              className="relative z-50 h-full flex-1 rounded-full border-none bg-transparent pr-44 pl-1 font-normal text-base focus:outline-none focus:ring-0" 
              value="" 
            />
            
            <button 
              type="button" 
              className="-translate-y-1/2 peer absolute top-1/2 right-2 z-50 flex h-12 w-[142px] cursor-pointer items-center rounded-full bg-black text-white transition duration-200 disabled:bg-[rgba(0,0,0,.8)]"
            >
              <div className="relative mx-4 inline-flex w-full items-center justify-center">
                <div className="absolute font-medium text-lg">Create</div>
              </div>
            </button>
            
            <div className="pointer-events-none absolute inset-0 flex items-center rounded-full">
              <p 
                className="w-[calc(100%-10rem)] truncate pl-24 text-left font-normal text-base text-white sm:pl-12" 
                style={{ opacity: 1, transform: 'none' }}
              >
                A rabbit warrior slowly raises his sharp sword, winks at the camera, and is captured with a Hitchcock zoom effect.
              </p>
            </div>
          </form>
        </div>

        {/* Mobile/tablet button */}
        <div className="hidden items-center justify-center sm:flex-col sm:gap-4 md:mb-16 md:flex">
          <a 
            target="_self" 
            className="box-border inline-flex h-12 w-[168px] cursor-pointer items-center justify-center rounded-full border-[#rgba(0,0,0,0.3)] bg-system-black font-semibold text-base text-white hover:bg-[linear-gradient(180deg,rgba(0,0,0,0)0%,rgba(0,0,0,0.3)100%)]" 
            href="/create"
          >
            Try Vidu
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;