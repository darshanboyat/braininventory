import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useForm } from "react-hook-form";
import "aos/dist/aos.css";
import Image from "next/image";
export default function HireBanner({
    heading,
    title,
    subtitle,
    content,
    card,
    btn,
    developmentImage,
    image,
    alt,
    type
}) {
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            const AOS = require("aos");
            require("aos/dist/aos.css");

            AOS.init({
                /* AOS initialization options */
            });
        }
    });
    return (
        <div className="container padding-left-all-section-1 pt-28 lg:pt-32 lg:pb-24 ">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                <div className="">
                    <div
                        className="ml-4 lg:ml-0"
                        data-aos="zoom-in"
                        data-aos-delay="1500"
                    >
                        <h2 className="text-5xl lg:text-[3.5rem] Gilroy-Bold my-4 leading-[4rem] text-shadow">{title}</h2>
                        <div className="lg:ml-[-1.5rem] ml-[-1.6rem] w-auto lg:w-96 -mt-4 pr-6">
                            {developmentImage ? <Image src={developmentImage} alt={alt} width={500} height={200} className="ml-4" /> : <Image
                                src="https://d1u4arv5y5eda6.cloudfront.net/images/development-12.png"
                                fill
                                alt={alt}
                            />}
                        </div>
                        <h1 className="text-2xl Gilroy-Bold text-shadow mb-12">{heading}</h1>
                        <h2 className="lg:text-5xl text-4xl Gilroy-Bold mb-4">
                            {subtitle}
                        </h2>
                    </div>

                    <div
                        className="bg-banner-sot rounded-xl p-6 lg:-mt-8 lg:m-0 m-6 w-[80%]"
                        data-aos="zoom-in"
                        data-aos-delay="1500"
                    >
                        <p className="Gilroy-Light text-md tracking-[0.05em] opacity-70">{content}</p>
                    </div>
                    {!card && (
                        <a href="#talk">
                            <div className="bg-gradient-to-r from-[#000076] to-[#7600EB] w-fit px-5 py-3 rounded-2xl mt-6 pr-20 ml-12 lg:ml-0">
                                <button
                                    className="flex flex-col justify-center Gilroy"
                                    onClick={() => setToggle(true)}
                                >
                                    <span className="text-xs font-thin text-slate-400 pb-1">
                                        Got a project in mind?
                                    </span>
                                    <span className="flex items-center justify-between w-full">
                                        {btn} <BsArrowRight />
                                    </span>
                                </button>
                            </div>
                        </a>
                    )}
                </div>
                <div>
                    {card ? (
                        <div
                            className="lg:ml-20 lg:mr-20 ml-4 mr-4 lg:mb-0 mb-6"
                            data-aos="zoom-in"
                            data-aos-delay="1500"
                        >
                            <div className="started-subcription">
                                <p className="Gilroy-Bold text-lg">Get Started Within</p>
                                <h2 className="Gilroy-Bold text-5xl">
                                    2 Business <span className="text-lg">Days</span>
                                </h2>
                                <form className="mt-3">
                                    <label className="Gilroy-Bold text-lg block">
                                        Hire Us Now
                                    </label>
                                    <input
                                        type="text"
                                        className="h-14 w-full px-4 bg-black opacity-60 mt-2"
                                        placeholder="Enter your Email Address"
                                    />
                                </form>
                            </div>
                        </div>
                    ) : (
                        <div className={`lg:ml-36 mx-14 lg:mb-0 mb-6 drop-shadow-hire-banner-image bg-transparent ${type === "php" && "drop-shadow-image"}`} data-aos="zoom-in"
                            data-aos-delay="1500">
                            <Image
                                src={image}
                                className="w-[100%] rounded-2xl bg-transparent"
                                fetchPriority="high"
                                alt=""
                                width={500}
                                height={500}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
