import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
export default function HireBanner({
    heading,
    subtitle,
    content,
    btn,
    image,
}) {
    return (
        <main className="container padding-left-all-section-1 lg:pb-28">
            <section className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                <section className="">
                    <section className="ml-4 lg:ml-0 flex flex-col items-center lg:items-start">
                        <h1 className="text-5xl Gilroy-Bold	drop-shadow-2xl-[#fff] mean_stack_development_text_shadow">{heading}</h1>
                        <Image src="https://d1u4arv5y5eda6.cloudfront.net/images/Technology/Group 6439.png" alt="Development" width={300} height={100} className="w-8/12 lg:-my-10 lg:-ml-8" />
                        <h1 className="text-5xl Gilroy-Bold	drop-shadow-2xl-[#fff] text-center lg:text-start mean_stack_development_text_shadow lg:my-2">Company</h1>

                        <h2 className="lg:text-5xl text-4xl Gilroy-Bold mb-4 text-center lg:text-start">
                            {subtitle}
                        </h2>
                    </section>
                    <section className="rounded-xl py-6 mt-16 mb-10 lg:m-0 m-6">
                        <p className="Gilroy-Light text-sm w-full lg:w-[70%] leading-6 text-center lg:text-start">{content}</p>
                    </section>
                    <a href="#talk" className="flex justify-center lg:block">
                        <section className="bg-gradient-to-r from-[#000076] to-[#7600EB] w-fit px-5 py-3 rounded-2xl mt-4 pr-12 ">
                            <button
                                className="flex flex-col justify-center Gilroy"
                            >
                                <span className="text-xs font-thin text-slate-400 pb-1">
                                    Got a project in mind?
                                </span>
                                <span className="flex items-center justify-between w-full">
                                    {btn} <BsArrowRight />
                                </span>
                            </button>
                        </section>
                    </a>
                </section>
                <section>
                    <aside className="lg:mb-0 mb-6 bg-none max-w-full">
                        <Image
                            src={image}
                            className="w-full rounded-2xl"
                            width={700}
                            height={700}
                            alt={heading}
                        />
                    </aside>
                </section>
            </section>
        </main>
    );
}