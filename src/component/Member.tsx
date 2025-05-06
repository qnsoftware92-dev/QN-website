import Bruce from "../assets/Bruce.jpg";
import Dragon from "../assets/Dragon.jpg";
import Cool from "../assets/Cool.jpg";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const list = [
  {
    name: "Bruce",
    image: Bruce,
    title: "Lead Developer",
  },
  {
    name: "Dragon",
    image: Dragon,
    title: "Full Stack Developer",
  },
  {
    name: "Cool",
    image: Cool,
    title: "Full Stack Developer",
  },
];
export default function Member() {
  const isMobile = window.innerWidth < 768;
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto py-10 lg:py-20 px-5 lg:px-0">
        <div className="flex flex-col items-center justify-center mb-5 lg:mb-10">
          <h1 className="text-2xl lg:text-4xl font-bold text-primary">
            Our Team
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-base lg:text-lg">
            Our dedicated team of skilled professionals brings together diverse
            expertise and unwavering commitment. With extensive experience
            across multiple technologies and domains, we're always ready to
            tackle your most challenging projects. We pride ourselves on
            delivering high-quality solutions through collaborative teamwork,
            innovative thinking, and a relentless focus on excellence. Whether
            you need frontend specialists, backend experts, or full-stack
            developers, our team stands prepared to bring your vision to life
            with precision and professionalism.
          </h4>
        </div>
        <div className="mt-6 lg:mt-10">
          <Swiper
            slidesPerView={isMobile ? 1 : 3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {list.map((item) => (
              <SwiperSlide key={item.name}>
                <div className="flex flex-col items-center justify-center  border-2 border-primary shadow-lg rounded-lg p-5">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
