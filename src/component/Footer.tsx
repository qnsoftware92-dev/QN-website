export default function Footer() {
  const socialLinks = [
    { title: "X", href: "https://x.com/ViduAI_official", icon: (
      <path d="M8.06055 5H4.56055L15.9355 19H19.4355L8.06055 5Z M18.123 5L18.6018 5.44884L19.6378 4.34375H18.123V5Z M17.6855 5V4.34375H17.4012L17.2068 4.55116L17.6855 5Z M12.7324 10.75L12.2231 11.1638L12.6971 11.7472L13.2112 11.1988L12.7324 10.75Z M12.5293 10.5L12.0505 10.0512L11.6587 10.4692L12.02 10.9138L12.5293 10.5Z M10.6543 12.5L11.1636 12.0862L10.6896 11.5028L10.1755 12.0512L10.6543 12.5Z M4.56055 19L4.08179 18.5512L3.04577 19.6562H4.56055V19Z M4.99805 19V19.6562H5.28236L5.47681 19.4488L4.99805 19Z M10.8574 12.75L11.3362 13.1988L11.728 12.7808L11.3667 12.3362L10.8574 12.75Z M18.123 4.34375H17.6855V5.65625H18.123V4.34375Z M13.2112 11.1988L18.6018 5.44884L17.6443 4.55116L12.2537 10.3012L13.2112 11.1988Z M13.2417 10.3362L13.0386 10.0862L12.02 10.9138L12.2231 11.1638L13.2417 10.3362Z M17.2068 4.55116L12.0505 10.0512L13.0081 10.9488L18.1643 5.44884L17.2068 4.55116Z M10.1755 12.0512L4.08179 18.5512L5.03931 19.4488L11.1331 12.9488L10.1755 12.0512Z M4.56055 19.6562H4.99805V18.3438H4.56055V19.6562Z M5.47681 19.4488L11.3362 13.1988L10.3787 12.3012L4.51929 18.5512L5.47681 19.4488Z M10.145 12.9138L10.3481 13.1638L11.3667 12.3362L11.1636 12.0862L10.145 12.9138Z" fill="currentColor"/>
    )},
    { title: "Youtube", href: "https://www.youtube.com/channel/UChF9964qVeqdSL9MkzBwCig", icon: (
      <path d="M21.8808 7.01876C21.6436 6.12573 20.9448 5.4224 20.0576 5.18372C18.4493 4.75 12.0006 4.75 12.0006 4.75C12.0006 4.75 5.55185 4.75 3.9436 5.18372C3.05634 5.42244 2.35755 6.12573 2.12038 7.01876C1.68945 8.63743 1.68945 12.0147 1.68945 12.0147C1.68945 12.0147 1.68945 15.3919 2.12038 17.0105C2.35755 17.9036 3.05634 18.5776 3.9436 18.8163C5.55185 19.25 12.0006 19.25 12.0006 19.25C12.0006 19.25 18.4493 19.25 20.0576 18.8163C20.9448 18.5776 21.6436 17.9036 21.8808 17.0105C22.3117 15.3919 22.3117 12.0147 22.3117 12.0147C22.3117 12.0147 22.3117 8.63743 21.8808 7.01876ZM9.89147 15.0809V8.94839L15.2814 12.0147L9.89147 15.0809Z" fill="currentColor"/>
    )},
    { title: "Tiktok", href: "https://www.tiktok.com/@vidu_ai?lang=en", icon: (
      <path d="M10.7081 9.61657C7.82013 9.47724 5.81268 10.5069 4.68575 12.7056C2.99537 16.0036 4.39241 21.4001 10.0317 21.4001C15.671 21.4001 15.8341 15.9508 15.8341 15.3799C15.8341 14.9993 15.8341 12.8713 15.8341 8.99603C17.0403 9.75998 18.0573 10.2199 18.885 10.3757C19.7128 10.5314 20.239 10.6005 20.4637 10.5828V7.40687C19.6981 7.31457 19.036 7.1386 18.4774 6.87907C17.6396 6.48976 15.9782 5.40923 15.9782 3.82561C15.9793 3.83335 15.9793 3.42485 15.9782 2.6001H12.4873C12.4769 10.3568 12.4769 14.6167 12.4873 15.3799C12.5028 16.5246 11.6148 18.1259 9.81428 18.1259C8.01375 18.1259 7.12572 16.5259 7.12572 15.4939C7.12572 14.8622 7.34274 13.9464 8.23979 13.2683C8.77177 12.8661 9.51012 12.7056 10.7081 12.7056C10.7081 12.335 10.7081 11.3053 10.7081 9.61657Z" fill="currentColor"/>
    )},
    { title: "Discord", href: "https://discord.gg/3pDU8fmQ8Y", icon: (
      <path d="M15.083 17.5731C14.8161 17.6397 14.5474 17.6988 14.2771 17.75C12.8118 18.0319 11.3058 18.0262 9.84274 17.7331C9.58618 17.6819 9.22306 17.5919 8.75525 17.4644L7.22214 19.5C3.43842 19.3759 2 16.7857 2 16.7857C2 11.0357 4.4656 6.3745 4.4656 6.3745C6.93058 4.44764 9.27618 4.50014 9.27618 4.50014L9.94711 5.39326C10.009 5.38451 10.0712 5.37857 10.1334 5.37638C11.412 5.20316 12.7085 5.20884 13.9855 5.39326L14.7218 4.50014C14.7218 4.50014 17.0689 4.44764 19.5326 6.37637C19.5326 6.37637 21.9998 11.0357 21.9998 16.7857C21.9998 16.7857 20.5433 19.3741 16.7592 19.5L15.083 17.5716V17.5731ZM8.69369 11.4851C7.69338 11.4851 6.90245 12.2501 6.90245 13.1857C6.90245 14.121 7.70995 14.8863 8.69369 14.8863C9.69274 14.8863 10.4834 14.1207 10.4834 13.1857C10.4999 12.2501 9.6943 11.4851 8.69369 11.4851ZM15.0999 11.4851C14.1008 11.4851 13.3099 12.2501 13.3099 13.1857C13.3099 14.121 14.1174 14.8863 15.0996 14.8863C16.1002 14.8863 16.8908 14.1207 16.8908 13.1857C16.8908 12.2501 16.1002 11.4851 15.0996 11.4851H15.0999Z" fill="currentColor"/>
    )}
  ];

  const footerLinks = {
    "GET STARTED": [
      { href: "/create/character2video", text: "Reference to Video" },
      { href: "/create/img2video", text: "Image to Video" },
      { href: "/create/text2video", text: "Text to Video" }
    ],
    "AI TOOLS": [
      { href: "/ai-video-generator", text: "AI Video Generator" },
      { href: "/ai-animation-generator", text: "AI Animation Generator" },
      { href: "/ai-image-animator", text: "AI Image Animator" },
      { href: "/ai-ad-generator", text: "AI Video Ad Generator" },
      { href: "/ai-hug-generator", text: "AI Hug Generator" },
      { href: "/ai-kissing-generator", text: "AI Kissing Generator" },
      { href: "/ai-video-tools", text: "View All", hasIcon: true }
    ],
    "For Enterprise": [
      { href: "https://platform.vidu.com", text: "API" }
    ],
    "COMPANY": [
      { href: "mailto:support@vidu.com", text: "Contact Us: support@vidu.com" },
      { href: "https://www.vidu.com/en/cpp", text: "Creative Partner Program" }
    ]
  };

  return (
    <footer className="relative pb-6 max-sm:pt-20 max-md:pt-32 text-system-white64">
      <div className="mx-20 max-sm:mx-4 max-lg:mx-[30px]">
        <div className="mb-8 flex justify-between py-3 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-8">
          <div className="max-sm:flex max-sm:flex-col max-sm:items-center">
            {/* Logo SVG */}
            <svg width="3.4881889763779528em" height="1em" fill="none" viewBox="0 0 443 137" xmlns="http://www.w3.org/2000/svg" className="text-3xl text-white">
              <g clipPath="url(#clip0_192_1879)">
                <path d="M145.98 1.83999C125.33 -5.00001 107.57 9.50999 103.43 22.79C103.43 22.79 88.53 70.64 82.18 90.61C79.15 100.13 71.64 115.72 57.5 115.72C45.98 115.72 40.06 104.91 37.56 98.47L20.39 52.69C18.4 47.87 20.48 38.25 28.46 35.37C36.98 32.31 42.46 39.44 43.88 43.22L65.27 98.02C70.37 91.45 73.61 80.76 75.72 73.19L61.67 36.31C55.01 19.1 37.4 11.28 21.08 17.29C7.85998 22.16 -4.86002 38.84 2.05998 59.8L19.78 105.38C22.47 112.29 33.1 134.85 57.12 134.85C85.95 134.85 96.77 110.27 102.77 90.84C105.77 81.12 122.23 28.57 122.23 28.57C124.62 20.72 134.34 18.46 140.41 20.44C144.69 21.83 152.43 27.74 149.93 36.9C149.46 38.57 136.34 80.85 131.5 93.71C128.97 100.42 122.56 114.99 107.97 112.96C103.52 122.81 99.83 128.53 94.24 133.67C112.44 142.29 138.97 133.61 150.14 99.86C154.29 87.31 168.86 42.06 168.86 42.06C173.09 28.16 165.54 8.30999 145.98 1.83999Z" fill="url(#paint0_linear_192_1879)"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M294.23 34.07C294.23 38.6926 290.483 42.44 285.86 42.44C281.237 42.44 277.49 38.6926 277.49 34.07C277.49 29.4473 281.237 25.7 285.86 25.7C290.483 25.7 294.23 29.4473 294.23 34.07ZM333.91 53.07C318.43 53.07 306.31 67.72 306.31 85.74C306.31 104.67 317.64 118.41 333.91 118.41C342.14 118.41 350.74 114.24 355.83 107.79L356.66 106.74V116.22H370.52V31.61H356.66V65.76C349.52 57.5 342.71 53.07 333.91 53.07ZM356.7 79.79V92.4C356.7 96.08 351.07 105.76 338.4 105.76C328.59 105.76 321.2 97.1 321.2 85.61C321.2 74.24 328.76 65.33 338.4 65.33C350.41 65.34 356.7 76.08 356.7 79.79ZM222.86 116.08L194.6 33.9399H209.04L231.29 98.2999L253.53 33.9399H267.98L239.72 116.08H222.86ZM429.06 116.33L442.93 116.31L442.85 54.5599H429.06V97.8299C429.06 100.12 418.51 105.93 411.87 105.93C403.46 105.93 399.37 99.9899 399.37 87.7799V54.5499H385.55L385.58 88.2799C385.58 109.07 392.67 114.84 401.43 117.36C410.34 119.92 421.96 115.88 429.05 106.79V116.33H429.06ZM292.78 54.5599H278.93V116.27H292.78V54.5599Z" fill="white"/>
              </g>
              <defs>
                <linearGradient id="paint0_linear_192_1879" x1="5.48309" y1="25.8354" x2="185.256" y2="108.473" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#40EDD8"/>
                  <stop offset="0.0241" stopColor="#38E7E2"/>
                  <stop offset="0.0844" stopColor="#28DAF7"/>
                  <stop offset="0.1241" stopColor="#22D5FF"/>
                  <stop offset="0.3602" stopColor="#1ABFFF"/>
                  <stop offset="0.8502" stopColor="#0786FE"/>
                  <stop offset="0.9088" stopColor="#047FFE"/>
                </linearGradient>
                <clipPath id="clip0_192_1879">
                  <rect width="443" height="137" fill="white"/>
                </clipPath>
              </defs>
            </svg>

            <div>
              <p className="mt-6 mb-8 max-sm:text-center text-[#ececec]">What you imagine is what Vidu.</p>
              <div className="flex space-x-3 max-sm:justify-center">
                {socialLinks.map(({title, href, icon}) => (
                  <div key={title}>
                    <a 
                      target="_blank"
                      title={title}
                      className="flex h-11 w-11 items-center justify-center rounded-full border-[1px] border-[#FFFFFF] text-white"
                      rel="noopener noreferrer"
                      href={href}
                    >
                      <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-[24px]">
                        {icon}
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="flex flex-col items-start gap-2 px-4 text-sm leading-7 max-sm:items-center">
              <div className="mb-3 font-Syne text-base uppercase text-white">{title}</div>
              {links.map(({href, text, hasIcon}) => (
                <a 
                  key={text}
                  target="_blank"
                  className="hover:cursor-pointer text-system-text03 hover:text-white flex items-center gap-2"
                  rel="noopener noreferrer"
                  href={href}
                >
                  {text}
                  {hasIcon && (
                    <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-[16px] rotate-90">
                      <path d="M12 5V19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                      <path d="M6 11L12 5L18 11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="flex justify-between border-t-[1px] pt-5 text-sm max-sm:flex-col max-sm:gap-2 max-sm:text-center border-t-[#383838] text-white48">
          <div className="flex gap-8 max-sm:flex-col max-sm:items-center max-sm:gap-2">
            <span className="text-white48">Copyright © 2025 Vidu®</span>
          </div>
          <div className="space-x-8">
            <a target="_blank" className="hover:cursor-pointer text-white48 hover:text-white" rel="noreferrer nofollow" href="/terms">Terms of Use</a>
            <a target="_blank" className="hover:cursor-pointer text-white48 hover:text-white" rel="noreferrer nofollow" href="/privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
