import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useRef } from "react";

import video1 from "../assets/useVidu/anime.9e7436b5.mp4";
import video2 from "../assets/useVidu/advertising.72394969.mp4";
import video3 from "../assets/useVidu/socialMedia.348ef153.mp4";
import video4 from "../assets/useVidu/tourismGlobal.006a1326.mp4";
import video5 from "../assets/useVidu/film.f3db79f8.mp4";

const data = [
  {
    video: video1,
    image: "creat2.77ef334f.png",
    title: "Anime",
    opacity: ""
  },
  {
    video: video2,
    image: "creat4.f0bfb912.jpg", 
    title: "Advertising",
    opacity: "opacity-20"
  },
  {
    video: video3,
    image: "creat3.2c5d5ce2.jpg",
    title: "Social Media", 
    opacity: "opacity-20"
  },
  {
    video: video4,
    image: "create6.08093e56.jpg",
    title: "Culture & Tourism",
    opacity: "opacity-20"
  },
  {
    video: video5,
    image: "creat5.6937842c.jpg",
    title: "Film",
    opacity: "opacity-20"
  }
]

export default function UseVidu() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [mainCarouselRef, emblaMainApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false
  });
  const [thumbCarouselRef, emblaThumbApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "keepSnaps"
  });

  useEffect(() => {
    if (!emblaMainApi || !emblaThumbApi) return;

    emblaMainApi.on("select", () => {
      const newIndex = emblaMainApi.selectedScrollSnap();
      setSelectedIndex(newIndex);
      emblaThumbApi.scrollTo(newIndex);
      
      // Pause all videos except the selected one
      videoRefs.current.forEach((video, index) => {
        if (video) {
          if (index === newIndex) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      });
    });

    emblaThumbApi.on("select", () => {
      const newIndex = emblaThumbApi.selectedScrollSnap();
      setSelectedIndex(newIndex);
      emblaMainApi.scrollTo(newIndex);
    });

    // Auto play functionality
    const autoplayInterval = setInterval(() => {
      if (emblaMainApi.canScrollNext()) {
        emblaMainApi.scrollNext();
      }
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(autoplayInterval);
  }, [emblaMainApi, emblaThumbApi]);

  return (
    <section className="relative flow-root h-full max-md:h-auto">
      <div className="relative">
        <div className="flex items-center justify-center">
          <div className="mt-[160px] flex w-full flex-col items-center max-lg:mt-[30px]">
            <h2 className="text-[42px] max-md:mx-[50px] max-md:text-center max-md:text-[36px] max-md:leading-none text-white">
              Use Vidu AI Video Generator for
            </h2>
            <div className="flex w-full flex-col items-center justify-center">
              <div className="relative w-full overflow-hidden">
                <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-[15%] bg-gradient-to-r from-black to-transparent"></div>
                <div className="overflow-hidden" ref={thumbCarouselRef}>
                  <div className="flex justify-center">
                    {data.map((item, index) => (
                      <div 
                        key={index}
                        onClick={() => emblaThumbApi?.scrollTo(index)}
                        className={`shrink-0 cursor-pointer whitespace-nowrap px-8 text-[42px] transition-all duration-300 hover:text-system-white hover:opacity-100 md:font-semibold md:text-[36px] lg:text-[32px] ${
                          index === selectedIndex 
                            ? "text-system-blue01 opacity-100" 
                            : "text-white opacity-30"
                        }`}
                      >
                        <span className="inline-block font-semibold">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-[15%] bg-gradient-to-l from-black to-transparent"></div>
              </div>
              <div className="relative mt-12 flex w-full items-center gap-16 md:mt-0">
                <div className="relative mx-auto w-full">
                  <div className="overflow-hidden" ref={mainCarouselRef}>
                    <div className="relative flex">
                      {data.map((item, index) => (
                        <div key={index} className={`relative mx-1 flex h-full min-w-0 shrink-0 grow-0 basis-[931px] flex-col items-center justify-center max-md:basis-full`}>
                          <div className={`relative w-full ${index !== selectedIndex ? "blur-sm" : ""}`}>
                            <div className="relative aspect-video h-[520px] w-full">
                              <img 
                                alt="视频封面"
                                loading="lazy"
                                className="h-full w-full object-cover object-center hidden"
                                style={{position:'absolute',height:'100%',width:'100%',left:0,top:0,right:0,bottom:0,color:'transparent'}}
                                src={item.image}
                              />
                              <video 
                                ref={el => videoRefs.current[index] = el}
                                autoPlay={index === selectedIndex}
                                muted
                                loop 
                                playsInline 
                                webkit-playsinline="true" 
                                x5-playsinline="true"
                                className="h-full w-full object-cover object-center block"
                              >
                                <source src={item.video} type="video/mp4" />
                              </video>
                            </div>
                          </div>
                          <div className={`relative h-[200px] w-full overflow-hidden lg:h-[60px] ${index !== selectedIndex ? "blur-sm" : ""}`}>
                            <div className="relative aspect-video h-[520px] w-full scale-y-[-1] object-cover opacity-40">
                              <img
                                alt="视频封面"
                                loading="lazy" 
                                className="h-full w-full object-cover object-center hidden"
                                style={{position:'absolute',height:'100%',width:'100%',left:0,top:0,right:0,bottom:0,color:'transparent'}}
                                src={item.image}
                              />
                              <video 
                                autoPlay={index === selectedIndex}
                                muted
                                loop 
                                playsInline 
                                webkit-playsinline="true" 
                                x5-playsinline="true"
                                className="h-full w-full object-cover object-center block"
                              >
                                <source src={item.video} type="video/mp4" />
                              </video>
                            </div>
                            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black opacity-60"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute right-0 bottom-0 left-0 flex h-[200px] w-full items-center justify-center bg-gradient-to-b from-transparent to-black backdrop-blur-[10px] lg:h-[80px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
