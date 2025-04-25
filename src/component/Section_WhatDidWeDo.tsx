import React from 'react';

const WhatDidWeDo = () => {
  const features = [
    {
      icon: '/_next/static/media/2a9e454742efc41c8de5d3889bf55d34.svg',
      title: 'Two-way synchronization',
      description: 'Integrate your task tracker with GitHub to sync changes instantly.'
    },
    {
      icon: '/_next/static/media/4d5dd04473e9f2ebc5c49291c1f73681.svg',
      title: 'Private tasks',
      description: 'Integration and management of multiple data repositories effectively.'
    },
    {
      icon: '/_next/static/media/7338cddab3021d50f73a3d36c88df490.svg',
      title: 'Multiple repositories',
      description: 'Organize multiple projects for more effective planning and collaboration.'
    },
    {
      icon: '/_next/static/media/c1edb00984cbfb46dd8eda516738f4f0.svg',
      title: 'Milestone migration',
      description: 'Seamless migration of key project milestones between repositories.'
    },
    {
      icon: '/_next/static/media/352118264d839bffe60735ff4aeed26f.svg',
      title: 'Track progress',
      description: 'Keep track of GitHub contributions and changes within your workspace.'
    },
    {
      icon: '/_next/static/media/12b7898bd7ddbbbbcacf68c0f47c7c51.svg',
      title: 'Advanced filtering',
      description: 'Precise project data search with advanced filtering capabilities.'
    }
  ];

  return (
    <section className="sync-with-github relative z-20 overflow-hidden bg-[#111111] pb-[180px] pt-[131px] px-safe lg:pb-[131px] lg:pt-24 md:py-24 sm:py-16">
      <div className="container-narrow">
        <h2 className="max-w-2xl font-title text-80 font-medium leading-[0.9] tracking-snugger text-white lg:text-72 md:max-w-md md:text-56 sm:max-w-96 sm:text-36">
          Sync with GitHub. Both&nbsp;ways.
        </h2>
        <p className="mt-4 max-w-[580px] leading-snug tracking-tight text-grey-60">
          Manage your tasks efficiently with Huly's bidirectional GitHub synchronization. 
          Use&nbsp;Huly as an advanced front-end for GitHub Issues and GitHub Projects.
        </p>
        
        <div className="relative -z-10 mt-[108px] aspect-[1.732851] w-full rounded-xl lg:mt-20 lg:rounded-[10px] md:mt-12 md:rounded-lg sm:mt-10 sm:rounded">
          <span className="absolute left-1/2 top-0 -z-10 h-full w-px" aria-hidden="true"></span>
          <div className="pointer-events-none absolute left-[-255px] top-[-204px] aspect-[1.39393939] w-[1472px] bg-[#111111] lg:-left-60 lg:top-[-191px] lg:w-[1376px] md:left-[-26.705%] md:top-[-36.921%] md:w-[153.409%]">
            <video 
              className="h-auto w-full max-w-none" 
              width="1472" 
              height="1056" 
              autoPlay 
              loop 
              playsInline 
              src="blob:https://huly.io/7b6a4fd1-cc7a-44f2-a6d0-c21f970cc515"
            ></video>
          </div>
          <div className="relative aspect-[1.732851] w-full overflow-hidden rounded-xl bg-[#111111] lg:rounded-[10px] md:rounded-lg sm:rounded [&_canvas]:!h-full [&_canvas]:!w-full" aria-hidden="true">
            <div className="h-full w-full sm:pointer-events-none">
              <canvas width="896" height="517" style={{verticalAlign: 'top', width: '896px', height: '517px'}}></canvas>
            </div>
          </div>
        </div>
        
        <ul className="gird mt-40 grid grid-cols-3 gap-x-24 gap-y-20 lg:mt-[102px] lg:gap-x-[76px] lg:gap-y-14 md:mt-16 md:gap-x-16 md:gap-y-12 sm:mt-12 sm:grid-cols-1 sm:gap-y-8">
          {features.map((feature, index) => (
            <li key={index} className="relative">
              <div className="realtive after:pointer-events-none after:absolute after:-left-2 after:-top-2 after:h-8 after:w-8 after:rounded-[50%] after:bg-[linear-gradient(180deg,#478BEB_60%,rgba(71,139,235,0)_100%)] after:opacity-60 after:mix-blend-plus-lighter after:blur-2xl after:lg:h-7 after:lg:w-7">
                <img 
                  alt="" 
                  loading="lazy" 
                  width={40} 
                  height={40} 
                  decoding="async" 
                  className="h-10 w-auto md:h-9 sm:h-8" 
                  style={{color: 'transparent'}} 
                  src={feature.icon}
                />
              </div>
              <h3 className="mt-5 font-title text-32 leading-none tracking-snugger text-white lg:text-28 md:mt-4 md:text-24 sm:mt-2.5 sm:max-w-full sm:text-20">
                {feature.title}
              </h3>
              <p className="mt-3 text-15 font-light leading-snug tracking-snugger text-grey-60 md:mt-2 md:leading-tight sm:mt-1">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhatDidWeDo;