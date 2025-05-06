export default function Banner() {
    return (
    <div className="relative z-10 flex h-screen flex-col items-center justify-center max-sm:justify-end max-md:h-[660px] max-md:justify-end">
        <div className="absolute inset-0 h-full w-full overflow-hidden">
            <div className="-z-20 absolute top-0 left-0 h-screen w-full object-cover max-lg:h-full opacity-100 transition-opacity duration-150 ease-in-out">
                <div className="relative aspect-video h-screen w-full max-lg:h-full" style={{aspectRatio: 'unset'}}>
                    <img 
                        alt="视频封面"
                        decoding="async"
                        data-nimg="fill"
                        className="h-full w-full object-cover object-center hidden"
                        style={{position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent'}}
                        src="https://image01.cf.vidu.studio/vidu/landing-page/travel.b359d872.png"
                        fetchPriority="high"
                    />
                    <video autoPlay loop playsInline webkit-playsinline="true" x5-playsinline="true" className="object-cover object-center h-screen w-full max-lg:h-full block">
                        <source src="https://image01.cf.vidu.studio/vidu/landing-page/travel.a52da706.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            {/* Repeated similar video sections omitted for brevity */}
        </div>

        <div className="absolute right-3 flex flex-col items-center gap-3 max-md:hidden">
            <img 
                alt="indicator_poster_0"
                fetchPriority="high"
                width={40}
                height={40}
                decoding="async"
                data-nimg="1"
                className="cursor-pointer rounded-4 object-cover object-center h-10 w-10 opacity-100 transition-all duration-300 ease-in-out"
                style={{color: 'transparent', borderRadius: '10px'}}
                src="https://image01.cf.vidu.studio/vidu/landing-page/travel.b359d872.png"
            />
            {/* Additional indicator images omitted for brevity */}
        </div>

        <div className="absolute bottom-0 flex flex-col items-center">
            <h1 className="mb-[34px] text-center font-semibold text-7xl text-white leading-tight max-sm:w-[345px] max-sm:text-[32px] max-md:mb-[17px] max-md:text-[38px] max-lg:text-[50px] max-xl:text-[80px]" style={{textShadow: '0px 2.25px 2.25px rgba(0, 0, 0, 0.25)'}}>
                AI Video Generator
            </h1>
            
            <div className="mb-[30px] text-center text-[24px] leading-[34px] max-md:mb-[24px] max-md:text-[16px] max-md:leading-[22px]">
                What you imagine is what Vidu — fast, high-quality, affordable, and unparalleled 2D animation.
            </div>

            <div className="mb-[160px] h-[60px] w-[856px] max-md:hidden max-lg:w-[580px]">
                <form className="relative mx-auto flex h-full w-full items-center justify-center overflow-hidden rounded-full border-system-white36 bg-system-white24 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200">
                    <div className="ml-6 flex items-center">
                        <img
                            alt="banner-img"
                            loading="lazy"
                            width={28}
                            height={28}
                            decoding="async"
                            data-nimg="1"
                            className="size-7 rounded-8 object-cover object-center"
                            style={{color: 'transparent'}}
                            src="https://image01.cf.vidu.studio/vidu/landing-page/travel.b359d872.png"
                        />
                        <span className="mx-4 inline-block h-6 w-2 text-center text-base text-white">|</span>
                    </div>
                    <input 
                        type="text"
                        className="relative z-50 h-full flex-1 rounded-full border-none bg-transparent pr-44 pl-1 font-normal text-base focus:outline-none focus:ring-0"
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
                        <p className="w-[calc(100%-160px)] truncate pl-24 text-left font-normal text-base text-white max-sm:pl-12" style={{opacity: 1, transform: 'none'}}>
                            A young traveler stands in the golden desert beside two towering robots...
                        </p>
                    </div>
                </form>
            </div>

            <div className="hidden items-center justify-center max-sm:flex-col max-sm:gap-4 max-md:mb-16 max-md:flex">
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
    )
}
