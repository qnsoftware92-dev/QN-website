import { useState, useEffect } from "react";

const data = [
  {
    src: "https://image01.cf.vidu.studio/vidu/landing-page/image13.badbcb23.png",
    alt: "global_title13",
    position: "top-[8%] left-[6%]",
    height: "h-[25.5%]"
  },
  {
    src: "https://image01.cf.vidu.studio/vidu/landing-page/image1.ead1ef76.png", 
    alt: "global_title1",
    position: "bottom-[13%] right-[2%]",
    height: "h-[16.8%]"
  },
  {
    src: "https://image01.cf.vidu.studio/vidu/landing-page/image12.546b3101.png",
    alt: "global_title12", 
    position: "top-[65%] left-[-1%]",
    height: "h-[26.7%]"
  },
  {
    src: "https://image01.cf.vidu.studio/vidu/landing-page/image4.16d51f78.png",
    alt: "global_title4",
    position: "bottom-[40%] right-[5%]",
    height: "h-[35.5%]"
  },
  {
    src: "https://image01.cf.vidu.studio/vidu/landing-page/image6.f548cbbd.png",
    alt: "global_title5",
    position: "bottom-[20%] left-[23%]",
    height: "h-[21.2%]"
  },
  {
    src: "https://image01.cf.vidu.studio/vidu/landing-page/image8.f681376b.png",
    alt: "global_title8",
    position: "bottom-[22%] right-[22%]",
    height: "h-[22.6%]"
  },
  {
    src: "https://image01.cf.vidu.studio/vidu/landing-page/image10.47ea3f9c.png",
    alt: "global_title10",
    position: "top-[30%] left-[1%]",
    height: "h-[15%]"
  },
  {
    src: "https://image01.cf.vidu.studio/vidu/landing-page/image11.5c78da13.png",
    alt: "global_title11",
    position: "top-[25%] left-[17%]",
    height: "h-[29%]"
  },
  {
    src: "https://image01.cf.vidu.studio/vidu/landing-page/image15.7604e99c.png",
    alt: "global_title15",
    position: "top-[49%] right-[-4%]",
    height: "h-[19%]"
  },
  {
    src: "https://image01.cf.vidu.studio/vidu/landing-page/image14.6c64cea1.png",
    alt: "global_title14",
    position: "top-[50%] left-[-2%]",
    height: "h-[5.3%]"
  }
];


export default function Comunity() {
    const [transform, setTransform] = useState<string>("translate(0px, 0px)");

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.02;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.02;
            setTransform(`translate(${moveX}px, ${moveY}px)`);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
    <section className="relative flow-root h-full max-md:h-auto">
        <div className="relative h-[74vh]">
            <div className="absolute h-full w-full bg-[linear-gradient(337deg,#006aff_5.33%,#000_63.82%)] opacity-40"></div>
            <div className="pointer-events-none absolute z-[10] flex h-full w-full flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <div className="mb-4 flex h-[32px] w-[64px] items-center justify-center rounded-full bg-system-white24 max-md:hidden">
                        <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-6 text-system-white">
                            <path d="M12.0004 15.8402C17.3023 15.8402 21.6004 14.1209 21.6004 12.0002C21.6004 9.87937 17.3023 8.16016 12.0004 8.16016C6.69845 8.16016 2.40039 9.87937 2.40039 12.0002C2.40039 14.1209 6.69845 15.8402 12.0004 15.8402Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.44"></path>
                            <path d="M15.8402 11.9999C15.8402 17.3018 14.1209 21.5999 12.0002 21.5999C9.87937 21.5999 8.16016 17.3018 8.16016 11.9999C8.16016 6.69797 9.87937 2.3999 12.0002 2.3999C14.1209 2.3999 15.8402 6.69797 15.8402 11.9999Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.44"></path>
                            <path d="M12.0004 21.5999C17.3023 21.5999 21.6004 17.3018 21.6004 11.9999C21.6004 6.69797 17.3023 2.3999 12.0004 2.3999C6.69846 2.3999 2.40039 6.69797 2.40039 11.9999C2.40039 17.3018 6.69846 21.5999 12.0004 21.5999Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.44"></path>
                        </svg>
                    </div>
                    <h2 className="font-medium text-[28px] leading-normal max-md:text-[24px] max-md:leading-none text-white">Join Our</h2>
                    <div className="font-semibold text-[64px] leading-none max-md:text-[48px] max-md:leading-none text-white">Community</div>
                    <div className="mt-16 flex gap-8 max-md:flex-col">
                        <div className="pointer-events-auto text-white flex cursor-pointer items-center justify-center gap-1 rounded-full bg-[#006aff] px-6 py-2 max-md:py-[4px]">
                            <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="m-2 size-6">
                                <path d="M15.083 17.5731C14.8161 17.6397 14.5474 17.6988 14.2771 17.75C12.8118 18.0319 11.3058 18.0262 9.84274 17.7331C9.58618 17.6819 9.22306 17.5919 8.75525 17.4644L7.22214 19.5C3.43842 19.3759 2 16.7857 2 16.7857C2 11.0357 4.4656 6.3745 4.4656 6.3745C6.93058 4.44764 9.27618 4.50014 9.27618 4.50014L9.94711 5.39326C10.009 5.38451 10.0712 5.37857 10.1334 5.37638C11.412 5.20316 12.7085 5.20884 13.9855 5.39326L14.7218 4.50014C14.7218 4.50014 17.0689 4.44764 19.5326 6.37637C19.5326 6.37637 21.9998 11.0357 21.9998 16.7857C21.9998 16.7857 20.5433 19.3741 16.7592 19.5L15.083 17.5716V17.5731Z" fill="currentColor"></path>
                            </svg>
                            <div className="font-semibold text-[14px] text-white text-white">Join Discord</div>
                        </div>
                        <a target="_self" className="pointer-events-auto flex cursor-pointer items-center justify-center rounded-full border-[2px] border-system-white24 px-8 py-2" href="/cpp">
                            <div className="font-semibold text-[14px] text-white leading-[28px] text-white">Apply for CPP</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-0 bottom-0 left-0 block overflow-hidden max-md:hidden">
                {data.map((item, index) => (
                    <div key={index} className={`absolute transition-transform duration-300 ease-out ${item.position} ${item.height}`} style={{transform: transform}}>
                        <img src={item.src} alt={item.alt} className="h-full" />
                    </div>
                ))}
            </div>
            <div className="absolute top-0 right-0 hidden h-full w-full overflow-hidden max-md:block">
                <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="object-cover object-center" style={{position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent'}} src="https://image01.cf.vidu.studio/vidu/landing-page/whyVidu1.b2526522.png" />
            </div>
        </div>
    </section>
    )
}
