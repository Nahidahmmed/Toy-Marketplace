import Wave from "../../Components/Wave";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollCarousel from 'scroll-carousel-react';
import Slider from "react-slick";


const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const carouselData = [
        {
            id: 1,
            title: "Teddy Bear 1",
            description: "This is Teddy Bear 1",
            imageUrl: "https://i.ibb.co/YB7ZjCv/ai-generated-8253972-1280.jpg",
        },
        {
            id: 2,
            title: "Teddy Bear 2",
            description: "This is Teddy Bear 2",
            imageUrl: "https://i.ibb.co/y8db1Zv/cold-1974481-1280.jpg",
        },
        {
            id: 3,
            title: "Teddy Bear 3",
            description: "This is Teddy Bear 3",
            imageUrl: "https://i.ibb.co/6PzFf6h/teddy-1113160-1280.jpg",
        },
        {
            id: 4,
            title: "Teddy Bear 4",
            description: "This is Teddy Bear 4",
            imageUrl: "https://i.ibb.co/GJjgZpT/teddy-1444639-1280.jpg",
        },
        {
            id: 5,
            title: "Teddy Bear 5",
            description: "This is Teddy Bear 5",
            imageUrl: "https://i.ibb.co/SdMGwMF/teddy-3183563-1280.jpg",
        },
        {
            id: 6,
            title: "Teddy Bear 6",
            description: "This is Teddy Bear 6",
            imageUrl: "https://i.ibb.co/NVLcnVg/teddy-3412050-1280.jpg",
        },
        {
            id: 7,
            title: "Teddy Bear 7",
            description: "This is Teddy Bear 7",
            imageUrl: "https://i.ibb.co/BPh4YrB/teddy-3738656-1280.jpg",
        },
        {
            id: 8,
            title: "Teddy Bear 8",
            description: "This is Teddy Bear 8",
            imageUrl: "https://i.ibb.co/5nqhqsr/teddy-bear-png-28007.png",
        },
        // Add more data objects as needed
    ];
    return (
        <div className="mb-64">

            <div className="mb-0 pb-0">

                <Slider {...settings}>
                    <div>

                        <div className="flex bg-[#DAC0A3] pt-20">
                            <div className="w-9/12">
                                <h3 className="font-bold text-7xl pt-40 px-40 text-[#5C3D1E]">Patriotic Teddy Bear</h3>
                                <p className="w-4/6 pl-40 pt-10 font-medium text-[#5C3D1E]">
                                    Introducing our Patriotic Teddy Bear, a 12-inch bundle of pure American pride. This soft and huggable bear is decked out in a stars-and-stripes pattern, making it a symbol of patriotism in plush form. With a charming embroidered smile and a tiny top hat, it is the perfect companion for those who cherish the red, white, and blue. Whether for a collector, a child, or anyone who holds freedom close to their heart, this Teddy Bear is a cuddly reminder of the USA values and spirit. Bring home a piece of American pride today!</p>
                            </div>
                            <img className="pr-10 w-[957px]" src="https://i.ibb.co/S5SWwyn/teddy-bear-with-ai-generated-free-png.webp" alt="" />
                        </div>

                    </div>
                    <div>
                        <div className="flex bg-[#DAC0A3] pt-20">
                            <div className="w-9/12">
                                <h3 className="font-bold text-7xl pt-40 px-40 text-[#5C3D1E]">Patriotic Teddy Bear</h3>
                                <p className="w-4/6 pl-40 pt-10 font-medium text-[#5C3D1E]">
                                    Introducing our Patriotic Teddy Bear, a 12-inch bundle of pure American pride. This soft and huggable bear is decked out in a stars-and-stripes pattern, making it a symbol of patriotism in plush form. With a charming embroidered smile and a tiny top hat, it is the perfect companion for those who cherish the red, white, and blue. Whether for a collector, a child, or anyone who holds freedom close to their heart, this Teddy Bear is a cuddly reminder of the USA values and spirit. Bring home a piece of American pride today!</p>
                            </div>
                            <img className="pr-10 w-[658px]" src="https://i.ibb.co/zfXdx7n/teddy-2542148-1280.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="flex bg-[#DAC0A3] pt-20">
                            <div className="w-9/12">
                                <h3 className="font-bold text-7xl pt-40 px-40 text-[#5C3D1E]">Patriotic Teddy Bear</h3>
                                <p className="w-4/6 pl-40 pt-10 font-medium text-[#5C3D1E]">
                                    Introducing our Patriotic Teddy Bear, a 12-inch bundle of pure American pride. This soft and huggable bear is decked out in a stars-and-stripes pattern, making it a symbol of patriotism in plush form. With a charming embroidered smile and a tiny top hat, it is the perfect companion for those who cherish the red, white, and blue. Whether for a collector, a child, or anyone who holds freedom close to their heart, this Teddy Bear is a cuddly reminder of the USA values and spirit. Bring home a piece of American pride today!</p>
                            </div>
                            <img className="pr-10 w-[813px]" src="https://i.ibb.co/jysf56t/Teddy-Bear-PNG-File.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="flex bg-[#DAC0A3] pt-20">
                            <div className="w-9/12">
                                <h3 className="font-bold text-7xl pt-40 px-40 text-[#5C3D1E]">Patriotic Teddy Bear</h3>
                                <p className="w-4/6 pl-40 pt-10 font-medium text-[#5C3D1E]">
                                    Introducing our Patriotic Teddy Bear, a 12-inch bundle of pure American pride. This soft and huggable bear is decked out in a stars-and-stripes pattern, making it a symbol of patriotism in plush form. With a charming embroidered smile and a tiny top hat, it is the perfect companion for those who cherish the red, white, and blue. Whether for a collector, a child, or anyone who holds freedom close to their heart, this Teddy Bear is a cuddly reminder of the USA values and spirit. Bring home a piece of American pride today!</p>
                            </div>
                            <img className="pr-10 w-[856px]" src="https://i.ibb.co/5nqhqsr/teddy-bear-png-28007.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="flex bg-[#DAC0A3] pt-20">
                            <div className="w-9/12">
                                <h3 className="font-bold text-7xl pt-40 px-40 text-[#5C3D1E]">Patriotic Teddy Bear</h3>
                                <p className="w-4/6 pl-40 pt-10 font-medium text-[#5C3D1E]">
                                    Introducing our Patriotic Teddy Bear, a 12-inch bundle of pure American pride. This soft and huggable bear is decked out in a stars-and-stripes pattern, making it a symbol of patriotism in plush form. With a charming embroidered smile and a tiny top hat, it is the perfect companion for those who cherish the red, white, and blue. Whether for a collector, a child, or anyone who holds freedom close to their heart, this Teddy Bear is a cuddly reminder of the USA values and spirit. Bring home a piece of American pride today!</p>
                            </div>
                            <img className="pr-10 w-[1275px]" src="https://i.ibb.co/QdXPJRV/png-2629072-1280.png" alt="" />
                        </div>
                    </div>

                </Slider>
                <Wave></Wave>
            </div>
            <div>
                <h1>This is my component page</h1>
                <p>Now I am showing my creation scroll carousel</p>
                <ScrollCarousel
                    autoplay
                    autoplaySpeed={8}
                    speed={7}
                    onReady={() => console.log("I am ready")}
                >
                    {/* Map through the carouselData array to create blocks */}
                    {carouselData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-blue-300/20 border-2 border-blue-300/70 rounded h-36 w-48"
                        >
                        </div>
                    ))}
                </ScrollCarousel>
            </div>
        </div>
    );
};

export default Home;