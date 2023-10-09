
import ScrollCarousel from 'scroll-carousel-react';

const Carousel = () => {
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
        <div className="mt-72 text-[#5C3D1E]">
            <h1 className=" font-bold text-center text-5xl">Popular teddy Bears</h1>
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
                        className=" border-3 mt-40 border-[#c08041] rounded w-[355px] mx-5"
                    >
                        <img className="w-[350px]  h-[380px]" src={item.imageUrl} alt="" />
                    </div>
                ))}
            </ScrollCarousel>
        </div>
    );
};

export default Carousel;