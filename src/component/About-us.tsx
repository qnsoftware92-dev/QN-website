export default function AboutUs() {
  return (
    <div className="max-w-screen-xl md:p-0 p-4 mx-auto">
      <div className="relative flex overflow-hidden rounded-[20px] bg-card-gradient">
        <div className="relative flex w-full flex-col px-2.5 py-12 pb-16 sm:px-16 sm:pb-12">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <div className="mb-2 flex relative">
              <div className="relative overflow-hidden rounded-[60px] backdrop-blur-[2px] h-[27px]">
                <div className="relative flex h-full items-center justify-center px-4">
                  <span className="font-bold tracking-[2.88px] text-xl uppercase">
                    Why choose us?
                  </span>
                </div>
              </div>
            </div>

            <h1 className="text-2xl font-bold md:text-4xl text-primary">QN Software</h1>

            <p className="leading-7 tracking-wide">
              QNSoftware is a software development company that provides
              software development services to clients.
              We are a team of experienced developers who are dedicated to providing the best possible service to our clients.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-2 sm:mt-12 lg:grid-cols-3 ">
            <div className="relative flex overflow-hidden rounded-[20px] backdrop-blur-[22px] border border-primary">
              <div className="relative flex w-full flex-col px-6 pb-9 pt-6 sm:pb-16 sm:pt-12">
                <div className="!h-16 !w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    fill="#3ac2da"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>

                <h2 className="mt-12 text-lg font-bold uppercase tracking-wide xl:w-3/4">
                  Self-Discipline
                </h2>

                <p className="mt-5 text-sm tracking-wide">
                  Why it matters: Remote work means no one’s looking over your
                  shoulder. You need to manage your time, stay focused, and hit
                  deadlines without direct supervision.
                </p>
                <p className="mt-5 text-sm tracking-wide">
                  Example: Waking up early, setting a daily schedule, and
                  avoiding distractions like social media during work hours.
                </p>
              </div>
            </div>

            <div className="relative flex overflow-hidden rounded-[20px] backdrop-blur-[22px] border border-primary">
              <div className="relative flex w-full flex-col px-6 pb-9 pt-6 sm:pb-16 sm:pt-12">
                <div className="!h-16 !w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    fill="#3ac2da"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.5 8.5 0 018 8v.5z" />
                  </svg>
                </div>

                <h2 className="mt-12 text-lg font-bold uppercase tracking-wide xl:w-3/4">
                  Strong Communication Skills
                </h2>

                <p className="mt-5 text-sm tracking-wide">
                  Why it matters: You’re not in the same room as your team, so
                  you have to be extra clear in messages, emails, or stand-up
                  meetings.
                </p>

                <p className="mt-5 text-sm tracking-wide">
                  Example: Using clear language, providing context, and
                  following up on important points.
                </p>
              </div>
            </div>

            <div className="relative flex overflow-hidden rounded-[20px] backdrop-blur-[22px] border border-primary">
              <div className="relative flex w-full flex-col px-6 pb-9 pt-6 sm:pb-16 sm:pt-12">
                <div className="!h-16 !w-fit">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 64 64"
                    fill="#3ac2da"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      stroke="#333"
                      stroke-width="2"
                      stroke-linecap="round" 
                      stroke-linejoin="round"
                    >
                      <path d="M32 4C21.5 4 13 12.5 13 23C13 28.6 15.7 33.6 20 36.7V44C20 45.1 20.9 46 22 46H42C43.1 46 44 45.1 44 44V36.7C48.3 33.6 51 28.6 51 23C51 12.5 42.5 4 32 4Z" />

                      <rect
                        x="26"
                        y="46"
                        width="12"
                        height="6"
                        rx="1"
                        fill="#ccc"
                      />
                      <rect
                        x="24"
                        y="52"
                        width="16"
                        height="6"
                        rx="1"
                        fill="#999"
                      />

                      <circle cx="32" cy="23" r="5" stroke="#333" />
                      <path d="M32 16V18M32 28V30M26.9 19.6L28.3 21M35.7 25L37.1 26.4M26.9 26.4L28.3 25M35.7 21L37.1 19.6M24 23H26M38 23H40" />
                    </g>
                  </svg>
                </div>

                <h2 className="mt-12 text-lg font-bold uppercase tracking-wide xl:w-3/4">
                  Proactive Problem-Solving
                </h2>

                <p className="mt-5 text-sm tracking-wide">
                  Why it matters: When working remotely, delays in communication
                  are common. A good developer doesn’t wait—they explore
                  solutions and take initiative.
                </p>
                <p>
                  Example: Searching documentation, debugging on your own, or
                  creating a proof of concept while waiting for a teammate’s
                  response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
