

const Blog = () => {

    const blogPosts = [
        {
            id: 1,
            title: "Introducing Our Patriotic Teddy Bear",
            content:
                "Discover the story behind our adorable Patriotic Teddy Bear and what makes it the perfect companion for American patriots. Whether you're celebrating Independence Day, showing support for veterans, or simply looking for a cuddly friend, our Teddy Bear embodies the spirit of America. With its stars-and-stripes pattern and charming outfit, it's a symbol of love for the USA that you can hold close.",
        },
        {
            id: 2,
            title: "The Craftsmanship Behind Our Teddy Bears",
            content:
                "At our Teddy Bear shop, quality is our top priority. Learn about the meticulous craftsmanship that goes into creating each Teddy Bear. Our artisans use premium materials and attention to detail to ensure that every bear is not only cute and cuddly but also durable. Discover the love and care that makes our Teddy Bears the best companions for a lifetime.",
        },
        {
            id: 3,
            title: "Teddy Bears for Special Occasions",
            content:
                "Looking for the perfect gift for a special occasion? Our Teddy Bears are here to spread joy and love. Explore our collection of Teddy Bears for birthdays, anniversaries, and other celebrations. With a wide range of outfits and accessories, you can find the ideal Teddy Bear to convey your sentiments and make every moment memorable.",
        },
        // Add more blog posts here
    ];
    return (
        <div className="bg-[#DAC0A3] min-h-screen py-8">
            <div className="container mx-auto">
                {/* Header Section */}
                <header className="text-center mb-8">
                    <img
                        src="https://i.ibb.co/wL7rJHP/teddy-22-778x1024.png" // Replace with your shop's logo
                        alt="Shop Logo"
                        className="mx-auto mb-4"
                        style={{ maxWidth: "200px" }}
                    />
                    {/* Navigation links go here */}
                    <nav>
                        <a href="/">Home</a> | <a href="/shop">Shop</a> | <a href="/about">About</a>
                    </nav>
                   
                </header>

              
                {/* Blog Posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white rounded-lg shadow-lg p-6 transition transform hover:scale-105 hover:shadow-2xl"
                        >
                            <h2 className="text-xl font-semibold text-[#5C3D1E] mb-4">
                                {post.title}
                            </h2>
                            
                            <p className="text-gray-700">{post.content}</p>
                            <a
                                href="#"
                                className="text-blue-500 hover:underline mt-4 inline-block"
                            >
                                Read more
                            </a>
                        </div>
                    ))}
                </div>

                
            </div>
        </div>
    );
};

export default Blog;