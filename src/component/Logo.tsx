import LogoImage from "../assets/logo.svg";
import LogoImageDark from "../assets/logo2.svg";


export default function Logo({ className, isDark }: { className?: string, isDark?: boolean }) {
    return (
        <div className="flex items-center">
            <img src={isDark ? LogoImageDark : LogoImage} alt="logo" className={className} />
        </div>
    )
}
