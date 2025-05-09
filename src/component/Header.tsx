import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <HeaderDesktop isOpen={isOpen} setIsOpen={setIsOpen} />
      <HeaderMobile isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}


const HeaderMobile = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) => {
  return (
    <div className={`fixed top-0 left-0 h-screen w-full bg-[rgba(0,0,0,0.6)] backdrop-blur-[10px] z-999 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="flex h-screen w-full flex-col justify-start overflow-y-auto p-4 text-[14px] text-white">
        <div className="flex flex-col gap-6">
          <div>
            <div>
              <div className="px-4 py-2 text-[14px] leading-[22px] opacity-40">Features</div>
              <div className="flex flex-col">
                <a target="_self" className="block px-4 text-[16px] leading-[40px]" href="/create/character2video">Reference to Video</a>
                <a target="_self" className="block px-4 text-[16px] leading-[40px]" href="/create/img2video">Image to Video</a>
                <a target="_self" className="block px-4 text-[16px] leading-[40px]" href="/create/text2video">Text to Video</a>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="px-4 py-2 text-[16px] leading-[22px]">Templates</div>
            </div>
          </div>
          <div>
            <div>
              <div className="px-4 py-2 text-[16px] leading-[22px]">Pricing</div>
            </div>
          </div>
          <div>
            <div>
              <div className="px-4 py-2 text-[16px] leading-[22px]">Vidu CPP</div>
            </div>
          </div>
          <div>
            <div>
              <div className="px-4 py-2 text-[16px] leading-[22px]">API</div>
            </div>
          </div>
          <div>
            <div>
              <div className="px-4 py-2 text-[14px] leading-[22px] opacity-40">Support</div>
              <div className="flex flex-col">
                <a target="_self" className="block px-4 text-[16px] leading-[40px]" href="/help-center">Help Center</a>
                <a target="_self" className="block px-4 text-[16px] leading-[40px]" href="https://shengshu.feishu.cn/docx/MtKHd8OhNokOtaxzxQHcdUDPnKh">Tutorial</a>
                <a target="_self" className="block px-4 text-[16px] leading-[40px]" href="/blog">Blog</a>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="flex items-center gap-2 px-4 py-2 text-[16px] leading-[22px]">
                Language
                <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-5">
                  <path d="M19 8.5L12 16L5 8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-7 right-4 flex size-9 cursor-pointer items-center justify-center rounded-full bg-system-white12" onClick={() => setIsOpen(!isOpen)}>
          <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-5">
            <path d="M5 15.5L12 8L19 15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

const HeaderDesktop = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) => {
  return (
    <div className="absolute z-20 w-full">
      <header className="fixed z-20 flex w-full items-start justify-between px-[70px] py-4 text-base duration-200 data-[open=true]:bg-[rgba(19,12,20,0.8)] max-md:items-center max-md:px-3 max-md:py-3 max-lg:px-0 max-lg:py-[18px] text-[#FFFFFF99] bg-[linear-gradient(180deg,rgba(0,0,0,0.64)0%,rgba(0,0,0,0)100%)]">
        <div className="inline-flex h-11 flex-1 items-center justify-start gap-8 font-bold text-[16px] leading-[24px] max-lg:gap-3 max-lg:text-[14px]">
          <a target="_self" aria-label="logo" href="/">
            <svg
              width="3.25em"
              height="1em"
              fill="none"
              viewBox="0 0 78 24"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-[-6px] text-[24px] text-white"
            >
              <path
                d="M75.3024 20.4082L77.7373 20.4047L77.7232 9.56426H75.3024V17.1604C75.3024 17.5624 73.4503 18.5824 72.2846 18.5824C70.8082 18.5824 70.0902 17.5396 70.0902 15.3961V9.5625H67.6641L67.6693 15.4839C67.6693 19.1336 68.914 20.1466 70.4518 20.589C72.016 21.0384 74.0559 20.3292 75.3006 18.7334V20.4082H75.3024Z"
                fill="currentColor"
              ></path>
              <path
                d="M51.3806 9.56445H48.9492V20.3978H51.3806V9.56445Z"
                fill="currentColor"
              ></path>
              <path
                d="M34.1426 5.94531L39.1037 20.3652H42.0635L47.0264 5.94531H44.4897L40.5836 17.2439L36.6793 5.94531H34.1426Z"
                fill="currentColor"
              ></path>
              <path
                d="M58.5992 9.30252C55.8816 9.30252 53.7539 11.8744 53.7539 15.0378C53.7539 18.3611 55.7429 20.7732 58.5992 20.7732C60.044 20.7732 61.5537 20.0411 62.4473 18.9088L62.593 18.7245V20.3887H65.0262V5.53516H62.593V11.5303C61.3413 10.0802 60.1458 9.30252 58.5992 9.30252ZM62.6018 13.9933V16.207C62.6018 16.8531 61.6134 18.5524 59.3892 18.5524C57.667 18.5524 56.3696 17.0321 56.3696 15.015C56.3696 13.019 57.6968 11.4548 59.3892 11.4548C61.4975 11.4548 62.6018 13.342 62.6018 13.9933Z"
                fill="currentColor"
              ></path>
              <path
                d="M50.1627 7.4368C50.9743 7.4368 51.6321 6.77894 51.6321 5.96743C51.6321 5.15591 50.9743 4.49805 50.1627 4.49805C49.3512 4.49805 48.6934 5.15591 48.6934 5.96743C48.6934 6.77894 49.3512 7.4368 50.1627 7.4368Z"
                fill="currentColor"
              ></path>
              <path
                d="M26.6928 16.4336C27.6724 13.4317 29.6228 7.36983 29.6228 7.36983C30.3689 4.92964 29.0434 1.44316 25.6096 0.307329C21.9844 -0.893453 18.8666 1.65382 18.1398 3.98516C18.1398 3.98516 15.5241 12.3854 14.4093 15.8912C13.8774 17.5624 12.559 20.2993 10.0767 20.2993C8.05432 20.2993 7.01504 18.4016 6.57616 17.271L3.56192 9.2342C3.21257 8.38803 3.57772 6.69921 4.97863 6.19362C6.47434 5.65643 7.43637 6.90812 7.68566 7.57171L8.4458 9.51859H12.0113L10.807 6.3604C9.44119 3.40584 6.54807 1.96631 3.68129 3.02138C1.36048 3.87632 -0.872552 6.80454 0.342275 10.4841L3.45307 18.4858C3.92531 19.6989 5.79144 23.6594 10.0082 23.6594C15.0694 23.6594 16.9689 19.3443 18.0222 15.9333C18.5489 14.2269 21.4385 5.00162 21.4385 5.00162C21.858 3.62352 23.5644 3.22677 24.63 3.57437C25.3814 3.81839 26.7402 4.85591 26.3013 6.46397C26.2188 6.75714 23.9138 14.1813 23.0641 16.4389L26.6928 16.4336Z"
                fill="currentColor"
              ></path>
              <path
                d="M23.0645 16.4389C22.6204 17.6168 21.4951 20.1746 18.9338 19.8183C18.1526 21.5475 17.5048 22.5516 16.5234 23.454C19.7185 24.9672 24.3759 23.4434 26.3369 17.5185C26.4299 17.2394 26.551 16.869 26.6932 16.4336L23.0645 16.4389Z"
                fill="url(#paint0_linear_2210_5444)"
              ></path>
              <path
                d="M8.44531 9.51953L11.4402 17.193C12.3356 16.0396 12.9044 14.1629 13.2748 12.834L12.0108 9.51953H8.44531Z"
                fill="url(#paint1_linear_2210_5444)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_2210_5444"
                  gradientUnits="userSpaceOnUse"
                  x1="22.394"
                  x2="14.8372"
                  y1="19.9559"
                  y2="22.0259"
                >
                  <stop stopColor="currentColor"></stop>
                  <stop
                    offset="1"
                    stopColor="currentColor"
                    stopOpacity="0.6"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2210_5444"
                  gradientUnits="userSpaceOnUse"
                  x1="10.9983"
                  x2="13.4174"
                  y1="11.5473"
                  y2="18.0317"
                >
                  <stop stopColor="currentColor"></stop>
                  <stop
                    offset="1"
                    stopColor="currentColor"
                    stopOpacity="0.6"
                  ></stop>
                </linearGradient>
              </defs>
            </svg>
          </a>

          <div className="relative flex flex-col max-md:hidden">
            <a
              target="_self"
              className="hover:rounded-full hover:backdrop-blur-[10px] lg:px-0 hover:bg-white/20 hover:text-white"
              aria-label="Features"
              href=""
            >
              <div className="whitespace-nowrap px-4 py-2 font-normal leading-[22px] lg:px-3">
                Features
              </div>
            </a>
            <div className="absolute top-full left-0 z-10 flex min-w-[150px] flex-col rounded-lg pt-4 features-dropdown pointer-events-none opacity-0 duration-200">
              <div className="pl-3">
                <a
                  target="_self"
                  className="flex cursor-pointer items-center whitespace-nowrap rounded py-4 font-normal text-sm hover:text-white"
                  aria-label="Reference to Video"
                  href="/create/character2video"
                >
                  Reference to Video
                </a>
              </div>
              <div className="pl-3">
                <a
                  target="_self"
                  className="flex cursor-pointer items-center whitespace-nowrap rounded py-4 font-normal text-sm hover:text-white"
                  aria-label="Image to Video"
                  href="/create/img2video"
                >
                  Image to Video
                </a>
              </div>
              <div className="pl-3">
                <a
                  target="_self"
                  className="flex cursor-pointer items-center whitespace-nowrap rounded py-4 font-normal text-sm hover:text-white"
                  aria-label="Text to Video"
                  href="/create/text2video"
                >
                  Text to Video
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col max-md:hidden">
            <a
              target="_self"
              className="hover:rounded-full hover:backdrop-blur-[10px] max-lg:px-0 hover:bg-white/20 hover:text-white"
              aria-label="Templates"
              href="/templates"
            >
              <div className="whitespace-nowrap px-4 py-2 font-normal leading-[22px] max-lg:px-3">
                Templates
              </div>
            </a>
          </div>

          <div className="relative flex flex-col max-md:hidden">
            <a
              target="_self"
              className="hover:rounded-full hover:backdrop-blur-[10px] max-lg:px-0 hover:bg-white/20 hover:text-white"
              aria-label="Pricing"
              href="/pricing"
            >
              <div className="whitespace-nowrap px-4 py-2 font-normal leading-[22px] max-lg:px-3">
                Pricing
              </div>
            </a>
          </div>

          <div className="relative flex flex-col max-md:hidden">
            <a
              target="_self"
              className="hover:rounded-full hover:backdrop-blur-[10px] max-lg:px-0 hover:bg-white/20 hover:text-white"
              aria-label="Vidu CPP"
              href="/cpp"
            >
              <div className="whitespace-nowrap px-4 py-2 font-normal leading-[22px] max-lg:px-3">
                Vidu CPP
              </div>
            </a>
          </div>

          <div className="relative flex flex-col max-md:hidden">
            <a
              target="_self"
              className="hover:rounded-full hover:backdrop-blur-[10px] max-lg:px-0 hover:bg-white/20 hover:text-white"
              aria-label="API"
              href="https://platform.vidu.com/"
            >
              <div className="whitespace-nowrap px-4 py-2 font-normal leading-[22px] max-lg:px-3">
                API
              </div>
            </a>
          </div>

          <div className="relative flex flex-col max-md:hidden">
            <a
              target="_self"
              className="hover:rounded-full hover:backdrop-blur-[10px] max-lg:px-0 hover:bg-white/20 hover:text-white"
              aria-label="Support"
              href=""
            >
              <div className="whitespace-nowrap px-4 py-2 font-normal leading-[22px] max-lg:px-3">
                Support
              </div>
            </a>
            <div className="absolute top-full left-0 z-10 flex min-w-[150px] flex-col rounded-lg pt-4 support-dropdown pointer-events-none opacity-0 duration-200">
              <div className="pl-3">
                <a
                  target="_blank"
                  className="flex cursor-pointer items-center whitespace-nowrap rounded py-4 font-normal text-sm hover:text-white"
                  aria-label="Help Center"
                  href="/help-center"
                >
                  Help Center
                </a>
              </div>
              <div className="pl-3">
                <a
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex cursor-pointer items-center whitespace-nowrap rounded py-4 font-normal text-sm hover:text-white"
                  aria-label="Tutorial"
                  href="https://shengshu.feishu.cn/docx/MtKHd8OhNokOtaxzxQHcdUDPnKh"
                >
                  Tutorial
                </a>
              </div>
              <div className="pl-3">
                <a
                  target="_blank"
                  className="flex cursor-pointer items-center whitespace-nowrap rounded py-4 font-normal text-sm hover:text-white"
                  aria-label="Blog"
                  href="/blog"
                >
                  Blog
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-11 cursor-pointer items-center justify-end gap-4 xxl:gap-10 max-md:hidden max-lg:gap-4 xl:gap-8">
          <div className="relative flex h-11 items-center justify-center gap-2">
            <svg
              width="1em"
              height="1em"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="size-[22px] p-[2px] text-white"
            >
              <circle
                cx="12.0004"
                cy="11.9999"
                r="9.6"
                stroke="currentColor"
                strokeWidth="1.5"
              ></circle>
              <path
                d="M2.40039 12H21.6004"
                stroke="currentColor"
                strokeWidth="1.5"
              ></path>
              <ellipse
                cx="12.0004"
                cy="11.9999"
                rx="3.6"
                ry="9.6"
                stroke="currentColor"
                strokeWidth="1.5"
              ></ellipse>
            </svg>
            <div className="mx-1 block text-[14px] max-lg:hidden text-white">
              Language
            </div>
            <svg
              width="1em"
              height="1em"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 transition-transform duration-200"
            >
              <path
                d="M19 8.5L12 16L5 8.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </div>

          <button
            type="button"
            className="group flex h-11 items-center justify-center rounded-full px-6 font-medium text-[14px] text-white leading-5 backdrop-blur-[20px] hover:opacity-90"
          >
            <svg
              width="1em"
              height="1em"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 text-lg"
            >
              <rect
                height="19.5"
                width="13.5"
                rx="3.42857"
                stroke="currentColor"
                strokeWidth="1.5"
                x="5.25"
                y="2.25"
              ></rect>
              <path
                d="M10.5 18H13.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
              ></path>
            </svg>
            Get App
          </button>

          <a
            target="_self"
            className="box-border inline-flex h-11 cursor-pointer items-center justify-center text-nowrap rounded-full border-[1px] font-semibold text-[14px] leading-[28px] backdrop-blur-[10px] border-system-white/30 bg-system-black px-8 text-white"
            aria-label="trynow"
            href="/create"
          >
            Try Vidu
          </a>
        </div>

        <div className="hidden space-x-4 text-center font-ShengShu text-base max-md:block" onClick={() => setIsOpen(!isOpen)}>
          <svg
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="size-6 text-white"
          >
            <path
              d="M5 12H19"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
            ></path>
            <path
              d="M5 6H19"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
            ></path>
            <path
              d="M5 18H19"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
            ></path>
          </svg>
        </div>
      </header>
    </div>
  )
}