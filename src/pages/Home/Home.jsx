import Wave from "../../Components/Wave";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Carousel from "../../Components/Carousel";
import TeddyTab from "../../Components/TeddyTab";


const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

  
    return (
        <div className="mb-64">

            <div className="mb-0 pb-0">

                <Slider {...settings}>
                    <div>

                        <div className="lg:flex bg-[#DAC0A3] pt-20">
                            <div className="lg:w-9/12">
                                <h3 className="font-bold lg:text-7xl lg:pt-32 lg:px-40 text-[#5C3D1E]">Fluffy White Teddy</h3>
                                <p className="lg:w-4/6 lg:pl-40 lg:pt-10 font-medium text-[#5C3D1E]">
                                    Introducing our Patriotic Teddy Bear, a 12-inch bundle of pure American pride. This soft and huggable bear is decked out in a stars-and-stripes pattern, making it a symbol of patriotism in plush form. With a charming embroidered smile and a tiny top hat, it is the perfect companion for those who cherish the red, white, and blue. Whether for a collector, a child, or anyone who holds freedom close to their heart, this Teddy Bear is a cuddly reminder of the USA values and spirit. Bring home a piece of American pride today!</p>
                            </div>
                            <img className="lg:pr-10 lg:w-[957px]" src="https://i.ibb.co/S5SWwyn/teddy-bear-with-ai-generated-free-png.webp" alt="" />
                        </div>

                    </div>
                    <div>
                        <div className="lg:flex bg-[#DAC0A3] pt-20">
                            <div className="lg:w-9/12">
                                <h3 className="font-bold lg:text-7xl lg:pt-32 lg:px-40 text-[#5C3D1E]">Patriotic Teddy Bear</h3>
                                <p className="lg:w-4/6 lg:pl-40 lg:pt-10 font-medium text-[#5C3D1E]">
                                    Introducing our Patriotic Teddy Bear, a 12-inch bundle of pure American pride. This soft and huggable bear is decked out in a stars-and-stripes pattern, making it a symbol of patriotism in plush form. With a charming embroidered smile and a tiny top hat, it is the perfect companion for those who cherish the red, white, and blue. Whether for a collector, a child, or anyone who holds freedom close to their heart, this Teddy Bear is a cuddly reminder of the USA values and spirit. Bring home a piece of American pride today!</p>
                            </div>
                            <img className="lg:pr-10 lg:w-[658px]" src="https://i.ibb.co/zfXdx7n/teddy-2542148-1280.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="lg:flex bg-[#DAC0A3] pt-20">
                            <div className="w-9/12">
                                <h3 className="font-bold lg:text-7xl lg:pt-32 lg:px-40 text-[#5C3D1E]">Cuddly Brown Bear</h3>
                                <p className="lg:w-4/6 lg:pl-40 lg:pt-10 font-medium text-[#5C3D1E]">
                                    Introducing our Patriotic Teddy Bear, a 12-inch bundle of pure American pride. This soft and huggable bear is decked out in a stars-and-stripes pattern, making it a symbol of patriotism in plush form. With a charming embroidered smile and a tiny top hat, it is the perfect companion for those who cherish the red, white, and blue. Whether for a collector, a child, or anyone who holds freedom close to their heart, this Teddy Bear is a cuddly reminder of the USA values and spirit. Bring home a piece of American pride today!</p>
                            </div>
                            <img className="lg:pr-10 lg:w-[813px]" src="https://i.ibb.co/jysf56t/Teddy-Bear-PNG-File.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="lg:flex bg-[#DAC0A3] pt-20">
                            <div className="w-9/12">
                                <h3 className="font-bold lg:text-7xl lg:pt-32 lg:px-40 text-[#5C3D1E]">Superhero Teddy</h3>
                                <p className="lg:w-4/6 lg:pl-40 lg:pt-10 font-medium text-[#5C3D1E]">
                                    Introducing our Patriotic Teddy Bear, a 12-inch bundle of pure American pride. This soft and huggable bear is decked out in a stars-and-stripes pattern, making it a symbol of patriotism in plush form. With a charming embroidered smile and a tiny top hat, it is the perfect companion for those who cherish the red, white, and blue. Whether for a collector, a child, or anyone who holds freedom close to their heart, this Teddy Bear is a cuddly reminder of the USA values and spirit. Bring home a piece of American pride today!</p>
                            </div>
                            <img className="lg:pr-10 lg:w-[856px]" src="https://i.ibb.co/5nqhqsr/teddy-bear-png-28007.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="lg:flex bg-[#DAC0A3] pt-20">
                            <div className="w-9/12">
                                <h3 className="font-bold lg:text-7xl lg:pt-32 lg:px-40 text-[#5C3D1E]">Miniature Teddy Set</h3>
                                <p className="lg:w-5/6 lg:pl-40 lg:pt-10 font-medium text-[#5C3D1E]">
                                    Introducing our Patriotic Teddy Bear, a 12-inch bundle of pure American pride. This soft and huggable bear is decked out in a stars-and-stripes pattern, making it a symbol of patriotism in plush form. With a charming embroidered smile and a tiny top hat, it is the perfect companion for those who cherish the red, white, and blue. Whether for a collector, a child, or anyone who holds freedom close to their heart, this Teddy Bear is a cuddly reminder of the USA values and spirit. Bring home a piece of American pride today!</p>
                            </div>
                            <img className="lg:pr-10 lg:w-[1275px]" src="https://i.ibb.co/QdXPJRV/png-2629072-1280.png" alt="" />
                        </div>
                    </div>

                </Slider>
                <Wave></Wave>
            </div>
          <Carousel></Carousel>
            <div>
                <h1 className="font-bold text-[#5C3D1E] text-5xl text-center mt-48">All Teddy By Category</h1>
                <TeddyTab></TeddyTab>
            </div>
        </div>
    );
};

export default Home;