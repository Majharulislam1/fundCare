import { FaArrowRight } from "react-icons/fa";
import blog_1 from '../assets/blog_1.jpg';
import blog_2 from '../assets/blog_2.jpg';
import blog_3 from '../assets/blog_3.jpg';


const Blogs = () => {
    return (
        <div className='w-4/5 mx-auto py-10'>
              <div className="text-center">
                   <h1 className="lg:text-5xl md:text-4xl sm:text-3xl font-bold text-title mb-4">Our Blog </h1>
                   <p className="lg:w-1/2 md:w-3/4 sm:w-full mx-auto text-paragraph">Whether you&apos;re seeking inspiration, practical advice, or a deeper understanding of global and community dynamics, our blogs are crafted to... </p>
              </div>

             
<section className="flex  justify-center max-w-6xl   px-4 py-10 mx-auto sm:px-6">
    

    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">

        <div className="w-full max-w-full mb-8   flex flex-col ">
            <img src={blog_1} alt="Card img" className="object-cover object-center w-full h-48" />
            <div className="flex flex-grow">
                <div className="triangle"></div>
                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
                    <div>
                        <a href="#"
                            className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-primary hover:text-primary">Education</a>
                        <a href="#"
                            className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-primary">
                            Transforming Lives Through Learning
                        </a>
                        <p className="mb-4 text-paragraph">
                        Education is the cornerstone of a thriving society. It equips individuals with the skills, knowledge, and confidence to break free from cycles of poverty and contribute meaningfully to their communities.
                        </p>
                    </div>
                    <div>
                    <a href="#"
                            className="flex items-center pb-1 mt-2 text-base font-black text-primary uppercase border-b border-transparent ">Read
                            More <FaArrowRight  className="ml-2"/></a>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full max-w-full mb-8 flex flex-col">
            <img
            src={blog_2}
            alt="Card img"
            className="object-cover object-center w-full h-48"
          />
            <div className="flex flex-grow">
                <div className="triangle"></div>
                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                    <div>
                        <a href="#"
                            className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-primary hover:text-primary">Homeless</a>
                        <a href="#"
                            className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-primary">
                            Together, We Can Make a Difference
                        </a>
                        <p className="mb-4 text-paragraph">
                        Homelessness is a global challenge that affects millions, stripping individuals of their dignity and basic human rights. While the causes are complex, solutions start with compassion and community action.
                        </p>
                    </div>
                    <div>
                    <a href="#"
                            className="flex items-center pb-1 mt-2 text-base font-black text-primary uppercase border-b border-transparent ">Read
                            More <FaArrowRight  className="ml-2"/></a>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full max-w-full mb-8   flex flex-col">
            <img
            src={blog_3}
            alt="Card img"
            className="object-cover object-center w-full h-48"
          />
            <div className="flex flex-grow">
                <div className="triangle"></div>
                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                    <div>
                        <a href="#"
                            className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-primary hover:text-primary">Healthy Meal</a>
                        <a href="#"
                            className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-primary">
                            Combating Hunger, One Plate at a Time
                        </a>
                        <p className="mb-4 text-paragraph">
                        Access to nutritious food is a basic right, yet many people, especially vulnerable groups, face food insecurity daily. Healthy meals are essential not just for survival but for fostering growth, productivity, and well-being.
                        </p>
                    </div>
                    <div>
                        <a href="#"
                            className="flex items-center pb-1 mt-2 text-base font-black text-primary uppercase border-b border-transparent">Read
                            More <FaArrowRight  className="ml-2"/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        </div>
    );
};

export default Blogs;