import { headerLinks } from "./Header"
import Logo from "./Logo"

export default function Footer({setActiveNav}: {setActiveNav: (activeNav: string) => void}) {
    return (
    <footer className="sc:px-0 relative flex flex-col border-t border-gray-800 px-5 md:px-10 bg-primary">
        <div className="max-w-392 mx-auto flex w-full flex-col items-center justify-center">
            <div className="flex w-full flex-col-reverse items-stretch justify-between pt-16 xl:flex-row">
                <div className="my-16 flex flex-row items-center justify-between gap-4 xl:mt-0 xl:flex-col xl:items-start">
                    <Logo isDark={true} className="w-80 lg:w-100" />
                    {/* <div>
                        <nav className="flex grow flex-row flex-nowrap items-start justify-start gap-10">
                            <a tabIndex={0} target="_blank" className="flex items-center justify-center" href="https://x.com/EnterTheMythos" aria-label="Twitter icon">
                                <svg className="text-white/40 h-6 w-6" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.7935 1.97904H13.8165L9.39692 7.00847L14.5961 13.8524H10.5252L7.33666 9.70158L3.68826 13.8524H1.66409L6.39122 8.47282L1.40358 1.97904H5.57791L8.46006 5.77303L11.7935 1.97904ZM11.0835 12.6468H12.2044L4.96882 3.12132H3.76593L11.0835 12.6468Z" fill="currentColor"/>
                                </svg>
                            </a>
                            <a tabIndex={0} target="_blank" className="flex items-center justify-center" href="https://linktr.ee/mythostoken" aria-label="Linktree icon">
                                <svg className="text-white/40 h-6 w-6" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.12743 1.33332H9.29362V4.53591L11.6932 2.2259L13.2249 3.70046L10.8315 6.00455L14.2163 6.00455V8.08989H10.8302L13.2248 10.3952L11.6931 11.8697L8.21601 8.52241L4.73966 11.869L3.20793 10.3945L5.60185 8.08989H2.21634L2.21634 6.00455L5.60052 6.00455L3.20783 3.70116L4.73956 2.22661L7.12743 4.52535V1.33332Z M7.12743 10.7656H9.29362V15.3335H7.12743V10.7656Z" fill="currentColor"/>
                                </svg>
                            </a>
                            <a tabIndex={0} target="_blank" className="flex items-center justify-center" href="https://t.me/enterthemythos" aria-label="Telegram icon">
                                <svg className="text-white/40 h-6 w-6" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.60284 7.50197C2.95247 6.69409 4.45904 6.01986 5.86669 5.34213C8.28839 4.23212 10.7197 3.14133 13.1756 2.12582C13.6534 1.95279 14.512 1.78357 14.5961 2.55307C14.5501 3.64229 14.3604 4.72511 14.2304 5.80796C13.9002 8.18923 13.5186 10.5623 13.1465 12.9358C13.0183 13.7264 12.107 14.1356 11.5239 13.6297C10.1225 12.601 8.71028 11.5824 7.32679 10.5298C6.87356 10.0294 7.29381 9.31075 7.69858 8.9534C8.8528 7.71731 10.0769 6.66708 11.1708 5.36706C11.4659 4.5927 10.594 5.24535 10.3065 5.44527C8.72632 6.6286 7.18482 7.88417 5.51883 8.92414C4.66786 9.43321 3.67602 8.99817 2.82542 8.71411C2.06275 8.37097 0.945237 8.02521 1.60284 7.50197Z" fill="currentColor"/>
                                </svg>
                            </a>
                        </nav>
                    </div> */}
                </div>
                <nav className="flex items-start gap-12 text-white/40 max-md:w-full md:gap-14 xl:mb-24">
                    <div className="flex w-1/2 flex-col items-start md:w-64">
                        <div className="flex w-full flex-col">
                            <h2 className="mb-4 text-base font-bold text-white">QN Software</h2>
                            <ul className="flex w-full flex-col gap-4 text-sm leading-loose">
                                {
                                    headerLinks.map((link) => ( 
                                        <li key={link.title} onClick={() => setActiveNav(link.title)} className="cursor-pointer">
                                            {link.title}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                  
                </nav>
            </div>
            <div className="max-w-392 w-full border-t border-white/[.06] py-10">
                <p className="text-left text-xs text-white/40">
                    Copyright © 2025 QN Software. All rights reserved. This site is protected by reCAPTCHA and the Google <a href="/privacy-policy" className="underline hover:no-underline">Privacy Policy</a> and Terms of Service apply.
                </p>
            </div>
        </div>
    </footer>
    )
}

