import { useState } from "react";
import { LogoSVG } from "../common/common";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <HeaderDesktop isOpen={isOpen} setIsOpen={setIsOpen} />
      <HeaderMobile isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

const HeaderMobile = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen w-full bg-[rgba(0,0,0,0.6)] backdrop-blur-[10px] z-999 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex h-screen w-full flex-col justify-start overflow-y-auto p-4 text-[14px] text-white">
        <div className="flex flex-col gap-6">
          <div>
            <div>
              <div className="px-4 py-2 text-[14px] leading-[22px] opacity-40">
                Features
              </div>
              <div className="flex flex-col">
                <a
                  target="_self"
                  className="block px-4 text-[16px] leading-[40px]"
                  href="/create/character2video"
                >
                  Reference to Video
                </a>
                <a
                  target="_self"
                  className="block px-4 text-[16px] leading-[40px]"
                  href="/create/img2video"
                >
                  Image to Video
                </a>
                <a
                  target="_self"
                  className="block px-4 text-[16px] leading-[40px]"
                  href="/create/text2video"
                >
                  Text to Video
                </a>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="px-4 py-2 text-[16px] leading-[22px]">
                Templates
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="px-4 py-2 text-[16px] leading-[22px]">
                Pricing
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="px-4 py-2 text-[16px] leading-[22px]">
                Vidu CPP
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="px-4 py-2 text-[16px] leading-[22px]">API</div>
            </div>
          </div>
          <div>
            <div>
              <div className="px-4 py-2 text-[14px] leading-[22px] opacity-40">
                Support
              </div>
              <div className="flex flex-col">
                <a
                  target="_self"
                  className="block px-4 text-[16px] leading-[40px]"
                  href="/"
                >
                  Help Center
                </a>
                <a
                  target="_self"
                  className="block px-4 text-[16px] leading-[40px]"
                  href="/"
                >
                  Tutorial
                </a>
                <a
                  target="_self"
                  className="block px-4 text-[16px] leading-[40px]"
                  href="/"
                >
                  Blog
                </a>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="flex items-center gap-2 px-4 py-2 text-[16px] leading-[22px]">
                Language
                <svg
                  width="1em"
                  height="1em"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
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
            </div>
          </div>
        </div>
        <div
          className="absolute top-7 right-4 flex size-9 cursor-pointer items-center justify-center rounded-full bg-system-white12"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
          >
            <path
              d="M5 15.5L12 8L19 15.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

const HeaderDesktop = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const navItems = [
    {
      label: "Features",
      href: "",
      hasDropdown: true,
      dropdownItems: [
        { label: "Reference to Video", href: "/create/character2video" },
        { label: "Image to Video", href: "/create/img2video" },
        { label: "Text to Video", href: "/create/text2video" },
      ],
    },
    { label: "Templates", href: "/templates" },
    { label: "Pricing", href: "/pricing" },
    { label: "Vidu CPP", href: "/cpp" },
    { label: "API", href: "https://platform.vidu.com/" },
    {
      label: "Support",
      href: "",
      hasDropdown: true,
      dropdownItems: [
        { label: "Help Center", href: "/help-center", target: "_blank" },
        {
          label: "Tutorial",
          href: "/",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
        },
        { label: "Blog", href: "/", target: "_blank" },
      ],
    },
  ];

  return (
    <div className="absolute z-20 w-full">
      <header className="fixed z-20 flex w-full items-start justify-between px-[70px] py-4 text-base duration-200 data-[open=true]:bg-[rgba(19,12,20,0.8)] max-md:items-center max-md:px-3 max-md:py-3 max-lg:px-0 max-lg:py-[18px] text-[#FFFFFF99] bg-[linear-gradient(180deg,rgba(0,0,0,0.64)0%,rgba(0,0,0,0)100%)]">
        <div className="inline-flex h-11 flex-1 items-center justify-start gap-8 font-bold text-[16px] leading-[24px] max-lg:gap-3 max-lg:text-[14px]">
          <a target="_self" aria-label="logo" href="/">
            <LogoSVG />
          </a>

          {navItems.map((item, index) => (
            <div key={index} className="relative flex flex-col max-md:hidden">
              <a
                target="_self"
                className="hover:rounded-full hover:backdrop-blur-[10px] max-lg:px-0 hover:bg-white/20 hover:text-white"
                aria-label={item.label}
                href={item.href}
              >
                <div className="whitespace-nowrap px-4 py-2 font-normal leading-[22px] max-lg:px-3">
                  {item.label}
                </div>
              </a>
              {item.hasDropdown && (
                <div
                  className={`absolute top-full left-0 z-10 flex min-w-[150px] flex-col rounded-lg pt-4 ${item.label.toLowerCase()}-dropdown pointer-events-none opacity-0 duration-200`}
                >
                  {item.dropdownItems.map((dropdownItem, dropIndex) => (
                    <div key={dropIndex} className="pl-3">
                      <a
                        target={dropdownItem.target || "_self"}
                        rel={dropdownItem.rel}
                        className="flex cursor-pointer items-center whitespace-nowrap rounded py-4 font-normal text-sm hover:text-white"
                        aria-label={dropdownItem.label}
                        href={dropdownItem.href}
                      >
                        {dropdownItem.label}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
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

        <div
          className="hidden space-x-4 text-center font-ShengShu text-base max-md:block"
          onClick={() => setIsOpen(!isOpen)}
        >
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
  );
};
