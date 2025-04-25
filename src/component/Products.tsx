import Video1 from "../assets/video/1.mp4";
import Video2 from "../assets/video/2.mp4";
import Video3 from "../assets/video/3.mp4";
import Video4 from "../assets/video/4.mp4";
import Video5 from "../assets/video/5.mp4";
import Video6 from "../assets/video/6.mp4";
import Video7 from "../assets/video/7.mp4";
import Video8 from "../assets/video/8.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useState } from "react";
import FintechWebApp from "../modal/FintechWebApp";
import { Icon } from "@iconify/react";
import MobileCryptoBanking from "../modal/MobileCryptoBanking";
import EducationApp from "../modal/EducationApp";
import EcommerceWebApp from "../modal/Ecommerce";
import RealState from "../modal/RealState";
import Logistics from "../modal/Logistics";
import HRTech from "../modal/HRTech";
import AIMachineLearning from "../modal/AIMachineLearning";
const ProductList = [
  {
    id: 1,
    name: "Education App",
    description: "Description 1",
    video: Video1,
    modal: EducationApp,
  },
  {
    id: 2,
    name: "Mobile Crypto Banking",
    description: "Description 1",
    video: Video2,
    modal: MobileCryptoBanking,
  },
  {
    id: 3,
    name: "Fintech Web App",
    description: "Description 1",
    video: Video3,
    modal: FintechWebApp,
  },
  {
    id: 4,
    name: "Ecommerce Web App",
    description: "Description 1",
    video: Video4,
    modal: EcommerceWebApp,
  },
  {
    id: 5,
    name: "Real State",
    description: "Description 1",
    video: Video5,
    modal: RealState,
  },  
  {
    id: 6,
    name: "Logistics",
    description: "Description 1",
    video: Video6,
    modal: Logistics,
  },
  {
    id: 7,
    name: "HR Tech",
    description: "Description 1",
    video: Video7,
    modal: HRTech,
  },
  {
    id: 8,
    name: "AI / Machine Learning",
    description: "Description 1",
    video: Video8,
    modal: AIMachineLearning,
  },
];
export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product: any) => {
    setSelectedProduct(product);
  };
  return (
    <>
      <div className="bg-background">
        <div className="max-w-screen-xl mx-auto py-10 md:py-20 px-4 md:px-10">
          <h1 className="text-primary text-center text-2xl md:text-4xl  font-bold mb-10 md:mb-20">
            What did we do?
          </h1>
          <div className="mb-10 md:mb-20">
            <div className="grid grid-cols-1 gap-8">
              <div>
                <p className="text-base md:text-xl leading-relaxed tracking-wide">
                  QNSoftware is a technology powerhouse with a proven track record of delivering innovative, scalable, and impactful digital solutions across a wide range of industries.
                  With years of hands-on experience, we've built world-class products in over 20 technical domains, empowering startups, enterprises, and global brands to achieve digital excellence.

                </p>
                
              </div>
              
            </div>
          </div>
          <div className="relative border-primary border-2 p-2 md:p-10 rounded-[20px] w-full max-w-[1024px] mx-auto">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
            >
              {ProductList.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="w-full h-full relative">
                    <video
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full mx-auto  border-primary rounded-[20px]"
                      controls={false}
                    />
                  </div>

                  <div className="absolute left-4 bottom-10 z-12">
                    <h3 className="text-primary text-xl md:text-2xl font-bold pb-4">
                      {item.name}
                    </h3>
                    <button
                      className="bg-primary text-white px-4 py-2 rounded-lg text-sm md:text-base"
                      onClick={() => openModal(item)}
                    >
                      Learn More
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <ProductModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}

        
      />
    </>
  );
}

const ProductModal = ({
  isOpen,
  onClose,
  product,
}: {
  isOpen: boolean;
  onClose: () => void;
  product: any;
}) => {
  return (
    <div
      className={`fixed w-full  inset-0  bg-white w-screen transition-transform duration-300 ease-in-out h-screen z-50 will-change-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="w-screen h-screen flex flex-col scrollbar-hide overflow-y-auto">
        <div className="bg-white flex items-center justify-between px-4 lg:px-10 py-2 lg:py-4 border-b border-primary fixed top-0 left-0 w-full">
          <h4 className="text-primary text-xl lg:text-2xl font-bold">
            {product?.name}
          </h4>
          <Icon
            icon="mingcute:close-fill"
            className="text-primary text-2xl"
            onClick={onClose}
          />
        </div>
        <div className="w-full h-full mx-auto mt-4">
          {product?.modal && <product.modal />}
        </div>
      </div>
    </div>
  );
};
