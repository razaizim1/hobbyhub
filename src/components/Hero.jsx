import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Hero.css';

const slides = [
    {
        img: "https://i.ibb.co/WmHszzM/img.jpg",
        alt: "Creative Hobby 1",
        title: "Ignite Your Passion for Creative Expression",
        subtitle:
            "Uncover your next favorite hobby. Whether you're a painter, collector, crafter, or just curious, HobbyHub brings together communities, resources, and inspiration to fuel your creative spark.",
    },
    {
        img: "https://i.ibb.co/g0Zx97m/Rectangle-2sdf957.jpg",
        alt: "Creative Hobby 2",
        title: "Build Meaningful Connections Through Shared Hobbies",
        subtitle:
            "Discover local groups that align with your interests, from robotics to woodworking. HobbyHub helps you meet like-minded people and explore your passion hands-on.",
    },
    {
        img: "https://i.ibb.co/JjDWgQr2/Rectangle-2957.jpg",
        alt: "Creative Hobby 3",
        title: "Start a Club or Join an Existing Community Today",
        subtitle:
            "Whether you’re into gardening, drone flying, or calligraphy, you’ll find the perfect place to belong. Connect, create, and share your journey with fellow enthusiasts.",
    },
    {
        img: "https://i.ibb.co/JRfLjQfY/Rectangsdfle-2957.jpg",
        alt: "Creative Hobby 4",
        title: "Find Local Events That Celebrate Your Craft",
        subtitle:
            "Attend workshops, meetups, and exhibitions centered around your favorite hobbies. HobbyHub curates vibrant community gatherings to help you grow and showcase your skills.",
    },
];

const Hero = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={30}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
            }}
            className="mySwiper"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <section className="bg-[#f9f7f1] dark:bg-black dark:text-white text-gray-800">
                        <div className="container mx-auto flex flex-col-reverse xl:flex-row items-center justify-between px-6 pt-24 pb-34 gap-8">
                            {/* Text Section */}
                            <div className="w-full xl:w-1/2 text-center xl:text-left">
                                <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-[#3b3a39] dark:text-white">
                                    Ignite Your Passion for Creative Expression
                                    <span className="text-[#4BAF47] block">— All in One Place</span>
                                </h1>
                                <p className="mt-6 mb-8 text-lg text-[#5c5c5c] dark:text-white">
                                    Uncover your next favorite hobby. Whether you're a painter, collector, crafter, or just curious, HobbyHub brings together communities, resources, and inspiration to fuel your creative spark.
                                </p>
                                <div className="flex flex-col sm:flex-row sm:justify-center xl:justify-start gap-4">
                                    <a href="#" className="px-8 py-3 text-lg font-semibold rounded bg-[#4BAF47] text-white hover:bg-[#a3cea1] transition">
                                        Explore Hobbies
                                    </a>
                                    <a href="#" className="px-8 py-3 text-lg font-semibold border rounded border-[#4BAF47] text-[#4BAF47] hover:bg-[#4BAF47] hover:text-white transition">
                                        Join the Community
                                    </a>
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="w-full xl:w-1/2 flex justify-center">
                                <img
                                    src={slide.img}
                                    alt={slide.alt}
                                    className="object-cover h-72 sm:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] rounded-2xl w-[80%] shadow-lg border border-[#4BAF47]"
                                />
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Hero;
