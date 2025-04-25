import { Icon } from "@iconify/react";
import { useState } from "react";
import Logo from "./Logo";

export const headerLinks = [
  {
    title: "Home",
    href: "/",
    icon: "material-symbols:home-rounded",
  },
  {
    title: "About Us",
    href: "/about-us",
    icon: "mdi:about",
  },
  {
    title: "Services",
    href: "/services",
    icon: "grommet-icons:services",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    icon: "bxs:contact",
  },
];

export default function Header({
  activeNav,
  setActiveNav,
}: {
  activeNav: string;
  setActiveNav: (activeNav: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="sc:px-0 fixed inset-0 top-0 z-50 flex h-[60px] flex-wrap items-center justify-between border-b border-primary px-4 text-white backdrop-blur-[35px] md:px-10 xl:h-[94px]">
        <div className="max-w-392 relative mx-auto flex w-full items-center justify-center self-center justify-self-center">
          <a className="absolute bottom-0 left-0 top-0 my-auto flex cursor-pointer items-center self-stretch xl:gap-3.5">
            <Logo className="w-40 xl:w-80" />
          </a>

          <nav className="border border-primary my-auto hidden min-w-[240px] flex-row flex-wrap items-center gap-12 self-stretch whitespace-nowrap rounded-[90px] px-10 py-4 text-center leading-6 tracking-[0.52px] text-white max-md:max-w-full xl:flex bg-gradient-to-b from-[#ffffff03] to-[#ffffff08]">
            {headerLinks.map((link) => (
              <div key={link.title}>
                <span
                  className={`text-sm text-primary cursor-pointer hover:text-primary/80 transition-all duration-300 ${
                    activeNav === link.title ? "text-primary" : ""
                  }`}
                  onClick={() => setActiveNav(link.title)}
                >
                  {link.title}
                </span>
              </div>
            ))}
          </nav>

          <div className="absolute bottom-0 right-0 top-0 my-auto flex items-center gap-2.5 self-stretch xl:gap-0">
          

            <button className="xl:hidden flex items-center justify-center size-6 cursor-pointer">
              <div className="menu-toggle">
                <div
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  {isOpen ? (
                    <Icon
                      icon="mingcute:close-fill"
                      className="text-primary transition-opacity duration-300"
                      width={30}
                      height={30}
                      onClick={() => setIsOpen(!isOpen)}
                    />
                  ) : (
                    <Icon
                      icon="fontisto:nav-icon-a"
                      className="text-primary transition-opacity duration-300"
                      width={24}
                      height={24}
                      onClick={() => setIsOpen(!isOpen)}
                    />
                  )}
                </div>
              </div>
            </button>
          </div>
        </div>
      </header>
      <Menu isOpen={isOpen} handleClose={() => setIsOpen(false)} setActiveNav={setActiveNav} />
    </>
  );
}

const Menu = ({ isOpen, handleClose, setActiveNav }: { isOpen: boolean, handleClose: () => void, setActiveNav: (activeNav: string) => void }) => {
  return (
    <aside
      className={` fixed left-0 bottom-0 top-0 z-40 w-screen overflow-y-auto bg-zinc-950/[0.9] pt-[60px] backdrop-blur-[22px] transition-transform duration-300 ease-in will-change-transform xl:hidden xl:pt-[94px] ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col px-5 pb-5 pt-9 h-full px-10 pb-10 pt-12">
        <div className="flex flex-col items-start justify-center gap-5 whitespace-nowrap text-center font-medium tracking-[0.52px] text-white max-md:max-w-full">
          {headerLinks.map((link) => (
            <div key={link.title}>
              <span
                className={`text-sm text-primary cursor-pointer hover:text-primary/80 transition-all duration-300`}
                onClick={() => {
                  handleClose();
                  setActiveNav(link.title);
                }}
              >
                {link.title}
              </span>
            </div>
          ))}
        </div>

        <nav className="mb-36 mt-12 flex grow flex-row flex-nowrap items-start justify-start gap-10 animate-fadeIn">
          {/* <a
            tabIndex={0}
            target="_blank"
            className="flex items-center justify-center"
            href="https://x.com/EnterTheMythos"
            aria-label="Twitter icon"
          >
            <Icon
              icon="mdi:twitter"
              className="text-white/30 hover:text-white size-6"
            />
          </a>
          <a
            tabIndex={0}
            target="_blank"
            className="flex items-center justify-center"
            href="https://linktr.ee/mythostoken"
            aria-label="Linktree icon"
          >
            <Icon
              icon="simple-icons:linktree"
              className="text-white/30 hover:text-white size-6"
            />
          </a>
          <a
            tabIndex={0}
            target="_blank"
            className="flex items-center justify-center"
            href="https://t.me/enterthemythos"
            aria-label="Telegram icon"
          >
            <Icon
              icon="ic:baseline-telegram"
              className="text-white/30 hover:text-white size-6"
            />
          </a> */}
        </nav>

        <p className="text-center text-[10px] leading-5 text-stone-300/50 animate-fadeIn">
          Copyright © 2025 Mythos Foundation. All rights reserved. This site is
          protected by reCAPTCHA and the Google{" "}
          <a href="/privacy-policy" className="underline hover:no-underline">
            Privacy Policy
          </a>{" "}
          and Terms of Service apply.
        </p>
      </div>
    </aside>
  );
};
