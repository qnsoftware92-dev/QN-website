export default function Service() {
    return (
    <div className="bg-background">
        <div className="max-w-screen-xl md:p-0 p-4 mx-auto ">
      <div className="relative flex overflow-hidden rounded-[20px] bg-card-gradient">
        <div className="relative flex w-full flex-col px-2.5 py-12 pb-16 sm:px-16 sm:pb-12">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <div className="mb-2 flex relative">
              <div className="relative overflow-hidden rounded-[60px] backdrop-blur-[2px] h-[27px]">
                <div className="relative flex h-full items-center justify-center px-4">
                  <span className="font-bold tracking-[2.88px] text-xl uppercase">
                    Our Services
                  </span>
                </div>
              </div>
            </div>

            <h1 className="text-2xl font-bold md:text-4xl text-primary">Build Faster, Smarter, More Cost-Effectively</h1>

            <p className="leading-7 tracking-wide">
              We specialize in helping startups, SMEs, and enterprises scale their development capacity through top-tier outsourced software engineering teams. Whether you're building a product from scratch, accelerating delivery, or extending your in-house team — we've got your back.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:mt-12 lg:grid-cols-3">
            <div className="relative flex overflow-hidden rounded-[20px] backdrop-blur-[22px] border border-primary">
              <div className="relative flex w-full flex-col px-6 pb-9 pt-6 sm:pb-16 sm:pt-12">
                <div className="!h-16 !w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#3ac2da" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
                  </svg>
                </div>

                <h2 className="mt-12 text-lg font-bold uppercase tracking-wide xl:w-3/4">
                  Dedicated Software Engineers
                </h2>

                <p className="mt-5 text-sm tracking-wide">
                  Access pre-vetted, highly skilled developers with expertise in Frontend (React, Vue, Angular, ...), Backend (Node.js, Python, Java, ...), Mobile (Flutter, React Native, ...), and Full-stack development.
                </p>
              </div>
            </div>

            <div className="relative flex overflow-hidden rounded-[20px] backdrop-blur-[22px] border border-primary">
              <div className="relative flex w-full flex-col px-6 pb-9 pt-6 sm:pb-16 sm:pt-12">
                <div className="!h-16 !w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#3ac2da" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>

                <h2 className="mt-12 text-lg font-bold uppercase tracking-wide xl:w-3/4">
                  Full Project Teams
                </h2>

                <p className="mt-5 text-sm tracking-wide">
                  Complete teams including Project Managers, UI/UX Designers, QA Engineers, and DevOps specialists to ensure comprehensive project delivery and success.
                </p>
              </div>
            </div>

            <div className="relative flex overflow-hidden rounded-[20px] backdrop-blur-[22px] border border-primary">
              <div className="relative flex w-full flex-col px-6 pb-9 pt-6 sm:pb-16 sm:pt-12">
                <div className="!h-16 !w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#3ac2da" viewBox="0 0 24 24">
                    <path d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zM6 7h5v5H6zm6 4h4v6h-4z"/>
                  </svg>
                </div>

                <h2 className="mt-12 text-lg font-bold uppercase tracking-wide xl:w-3/4">
                  Custom Software Development
                </h2>

                <p className="mt-5 text-sm tracking-wide">
                  End-to-end development of MVPs, SaaS platforms, enterprise applications, internal tools, and API integrations tailored to your specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
}
