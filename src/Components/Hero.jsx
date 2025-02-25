
import Slider from "react-slick";
import first from '../assets/4.png';
import second from '../assets/5.png';
import third from '../assets/6.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 3000
      };
    return (
        <div className="lg:mt-[90px] md:mt-[90px] sm:mt-[67px]">
            <div>
      <div className='h-[100%] overflow-hidden -z-10'>
        <Slider {...settings}>
          <div className="lg:h-[70vh] md:h-auto sm:h-auto w-full">
              <img src={first} className= "h-auto w-full object-center object-cover"  alt="" />
          </div>
          <div className="lg:h-[70vh] md:h-auto sm:h-auto w-full">
              <img src={second} className= "h-auto w-full object-center object-cover"  alt="" />
          </div>
          <div className="lg:h-[70vh] md:h-auto sm:h-auto w-full">
              <img src={third} className= "h-auto w-full  object-center object-cover"  alt="" />
          </div>
          
        </Slider>
      </div>
    </div>
        </div>
    );
};

export default Hero;