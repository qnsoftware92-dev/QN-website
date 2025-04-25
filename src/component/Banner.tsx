// Using a direct URL for the image since SVG import isn't working
import banner from "../assets/vietnam.svg";
import video_background from "../assets/backgroun_banner.mp4";

const listProudOf = [
  "Resilience & Innovation",
  "Rising Tech Industry",
  "Young, World-Class Talent",
  "Global Expansion",
  "Tech for Good",
];
export default function Banner() {

  return (
    <div className="relative">
      <video src={video_background} autoPlay muted loop className="w-full h-full object-cover absolute top-0 left-0" />
      <div
        className="xl:mt-[94px] mt-[60px] relative z-10 px-2 md:px-4"
      >
        <div className="w-full max-w-screen-xl flex flex-col flex-col-reverse md:flex-row justify-center md:gap-10 items-center mx-auto min-h-screen ">
          <div>
            <img
              src={banner}
              alt="Vietnam flag banner"
              className="mt-6 md:w-full md:h-full w-[80%] h-[80%] mx-auto"
            />
          </div>
          <div className="md:flex-1">
            <h1 className="text-2xl xl:text-6xl font-bold text-white text-center mt-2 md:mt-0">
              We are so proud to say that
            </h1>
        
            <div className="text-2xl xl:text-6xl font-bold text-primary flex gap-2 md:mt-10 justify-center whitespace-nowrap">
              "Hey, We are from Vietnam !"
            </div>
            <ul className="hidden md:flex flex-col gap-2 mt-20 items-center justify-center">
              {listProudOf.map((item, index) => (
                <li
                  key={index}
                  className="text-center w-full text-xl xl:text-2xl font-bold text-white"
                >
                  {index + 1}. {item}
                </li>
              ))}
              <div className="flex gap-2 mt-14">
                <button className="bg-primary text-white px-4 py-2 rounded-md">
                  Discover more
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
