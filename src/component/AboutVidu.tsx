import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import quote from "../assets/banner/quote.bad43e01.png";
const testimonialsExample = [
    {
      text: "Vidu brings us something new and really interesting: the Multi Entity Consistency.",
      username: "@RoyalKongz",
      displayName: "RoyalKongZ (Laurent)", 
      avatar: "https://image01.cf.vidu.studio/vidu/landing-page/userImageGlobal5.d2729ca8.jpg",
      text2: "VIDU AI's Reference to Video model is NEXT-LEVEL.. Take 3 images, and AI generates a smooth, cinematic sequence with perfect character consistency. The future of AI filmmaking is unfolding before our eyes...",
      username2: "@FutureVibesAi",
      displayName2: "Future AI World",
      avatar2: "https://image01.cf.vidu.studio/vidu/landing-page/userImageGlobal2.08c79ae5.jpg",
    },
  ] 

const testimonials = testimonialsExample.concat(Array(10).fill(testimonialsExample[0]));
export default function AboutVidu() {
 
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      containScroll: "trimSnaps",
      slidesToScroll: 2,
    },
    [AutoScroll({ playOnInit: true })]
  );

  const TestimonialCard = ({
    text,
    username,
    displayName,
    avatar,
    text2,
    username2,
    displayName2,
    avatar2,
  }: {
    text: string;
    username: string;
    displayName: string;
    avatar: string;
    text2: string;
    username2: string;
    displayName2: string;
    avatar2: string;
  }) => {
    const QuoteIcon = () => (
      <img
        alt="quote"
        loading="lazy"
        width="32"
        height="32"
        decoding="async"
        data-nimg="1"
        className="h-[32px] py-1 max-md:h-[22px] max-md:py-0.5"
        style={{ color: "transparent" }}
        src={quote}
      />
    );

    const ShareIcon = () => (
      <svg
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="size-8 rounded-lg bg-system-white12 p-1 max-md:size-[22px] max-md:p-0.5"
      >
        <path
          d="M8.06055 5H4.56055L15.9355 19H19.4355L8.06055 5Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.3125"
        />
        <path
          d="M18.123 5L18.6018 5.44884L19.6378 4.34375H18.123V5ZM17.6855 5V4.34375H17.4012L17.2068 4.55116L17.6855 5ZM12.7324 10.75L12.2231 11.1638L12.6971 11.7472L13.2112 11.1988L12.7324 10.75ZM12.5293 10.5L12.0505 10.0512L11.6587 10.4692L12.02 10.9138L12.5293 10.5ZM10.6543 12.5L11.1636 12.0862L10.6896 11.5028L10.1755 12.0512L10.6543 12.5ZM4.56055 19L4.08179 18.5512L3.04577 19.6562H4.56055V19ZM4.99805 19V19.6562H5.28236L5.47681 19.4488L4.99805 19ZM10.8574 12.75L11.3362 13.1988L11.728 12.7808L11.3667 12.3362L10.8574 12.75ZM18.123 4.34375H17.6855V5.65625H18.123V4.34375ZM13.2112 11.1988L18.6018 5.44884L17.6443 4.55116L12.2537 10.3012L13.2112 11.1988ZM13.2417 10.3362L13.0386 10.0862L12.02 10.9138L12.2231 11.1638L13.2417 10.3362ZM17.2068 4.55116L12.0505 10.0512L13.0081 10.9488L18.1643 5.44884L17.2068 4.55116ZM10.1755 12.0512L4.08179 18.5512L5.03931 19.4488L11.1331 12.9488L10.1755 12.0512ZM4.56055 19.6562H4.99805V18.3438H4.56055V19.6562ZM5.47681 19.4488L11.3362 13.1988L10.3787 12.3012L4.51929 18.5512L5.47681 19.4488ZM10.145 12.9138L10.3481 13.1638L11.3667 12.3362L11.1636 12.0862L10.145 12.9138Z"
          fill="currentColor"
        />
      </svg>
    );

    const VerifiedIcon = () => (
      <svg
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 18 19"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[18px] w-[18px] max-md:h-[12.5px] max-md:w-[12.5px]"
      >
        <path
          d="M6.66125 4.25023C7.22427 1.75772 10.7757 1.75772 11.3388 4.25023C13.4993 2.88587 16.0106 5.39714 14.6462 7.55773C17.1388 8.12075 17.1388 11.6722 14.6462 12.2352C16.0106 14.3958 13.4993 16.9071 11.3388 15.5427C10.7757 18.0353 7.22427 18.0353 6.66125 15.5427C4.50065 16.9071 1.98939 14.3958 3.35375 12.2352C0.861233 11.6722 0.861233 8.12075 3.35375 7.55773C1.98939 5.39714 4.50066 2.88587 6.66125 4.25023Z"
          fill="#249AE1"
        />
        <path
          d="M6.08398 9.89681L8.16732 11.9801L12.334 7.81348"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.4"
        />
      </svg>
    );

    const TestimonialContent = ({ text, username, displayName, avatar }: { text: string, username: string, displayName: string, avatar: string }) => (
      <div className="w-[400px] shrink-0 rounded-xl border-[1px] border-system-white08 bg-[linear-gradient(180deg,rgba(153,153,153,0.08)0%,rgba(255,255,255,0.08)100%)] p-6 max-md:w-[280px] max-md:p-4">
        <div className="flex justify-between">
          <QuoteIcon />
          <ShareIcon />
        </div>
        <div className="mt-4 line-clamp-4 text-[14px] leading-[20px] max-md:mt-[11px] max-md:text-[12px] max-md:leading-[14px] text-white">
          {text}
        </div>
        <div className="my-6 border-white border-b-[1px] opacity-10 max-md:my-4" />
        <div className="flex flex-row-reverse items-center gap-1">
          <div className="text-[12px] leading-[20px] max-md:text-[8px] max-md:leading-[12px] text-white">
            {username}
          </div>
          <VerifiedIcon />
          <div className="text-[14px] leading-[20px] max-md:text-[10px] max-md:leading-[14px] text-white">
            {displayName}
          </div>
          <img
            alt="avatar"
            loading="lazy"
            width="24"
            height="24"
            decoding="async"
            data-nimg="1"
            className="size-6 rounded-full object-cover max-md:size-4"
            style={{ color: "transparent" }}
            src={avatar}
          />
        </div>
      </div>
    );

    return (
      <div className="embla__slide flex flex-col gap-2 px-1">
        <TestimonialContent text={text} username={username} displayName={displayName} avatar={avatar} />
        <TestimonialContent text={text2} username={username2} displayName={displayName2} avatar={avatar2} />
      </div>
    );
  };

  return (
    <div className="relative flow-root h-full max-md:h-auto">
      <div className="relative flex w-full flex-col items-center overflow-hidden">
        <div className="mt-[160px] mb-6 flex h-[36px] w-[64px] items-center justify-center rounded-full bg-system-white24 max-md:hidden">
          <svg
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="size-6 text-system-white"
          >
            <path
              d="M12.0004 21.5999C17.3023 21.5999 21.6004 17.3018 21.6004 11.9999C21.6004 6.69797 17.3023 2.3999 12.0004 2.3999C6.69845 2.3999 2.40039 6.69797 2.40039 11.9999C2.40039 13.3015 2.65943 14.5427 3.12878 15.6745C3.3711 16.2589 3.66949 16.8142 4.01724 17.3336C4.13394 17.508 3.915 18.61 3.36039 20.6399C5.39026 20.0853 6.49234 19.8663 6.66668 19.9831C7.18613 20.3308 7.7414 20.6292 8.3258 20.8715C9.45764 21.3408 10.6988 21.5999 12.0004 21.5999Z"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="1.44"
            />
            <path
              d="M8.30273 9.91016H16.6924"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="M10.9236 7.86914L9.4668 16.1313"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="M14.4236 7.86914L12.9668 16.1313"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="M7.30273 14H15.6924"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <h2 className="font-medium text-[24px] leading-normal max-md:mt-[97px] max-md:text-[30px] text-white">
          What Do Creators Say
        </h2>
        <div className="mb-[66px] text-center font-semibold text-[44px] leading-none max-md:text-[36px] text-white">
          About Vidu AI Video Generator
        </div>
        <div className="w-full overflow-hidden">
          <div className="embla" ref={emblaRef}>
            <div className="flex gap-4 py-2">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
