import Image from "next/image";
import React from "react";

export default function ChooseBraininventory({ reasons, subhead }) {
    return (
        <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
            <div className="container padding-left-all-section-1">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                    <div>
                        <h1 className="Gilroy-Bold text-4xl leading-[3rem]">
                            Why Choose Brain inventory for Your Next{" "}
                            <span className="text-[#7600EB]">Assignment</span>
                        </h1>
                        <p className="Gilroy-Light text-lg opacity-60 pt-4 pb-6">
                            {subhead}
                        </p>
                        {reasons &&
                            reasons.map((ele, index) => (
                                <div className="flex items-start" key={index}>
                                    <p className="Gilroy-Light text-lg opacity-60 pt-4 pb-6 ">
                                        {ele}<br /><br />
                                    </p>
                                </div>
                            ))}
                        <a href="#talk">
                            <button className="bg-engagedment h-12 flex justify-center items-center rounded-lg px-8 Gilroy-Bold mt-4">
                                Get a Quote
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18.018"
                                    height="17.535"
                                    viewBox="0 0 18.018 17.535"
                                    className="ml-2 h-3"
                                >
                                    <path
                                        id="Path_16513"
                                        data-name="Path 16513"
                                        d="M13.25,21V6m0,0,7,7.2m-7-7.2-7,7.2"
                                        transform="translate(22.25 -4.482) rotate(90)"
                                        fill="none"
                                        stroke="#fff"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2.5"
                                    />
                                </svg>
                            </button>
                        </a>
                    </div>
                    <div className="max-h-[55%]">
                        <Image src="https://d1u4arv5y5eda6.cloudfront.net/images/choose-b1.png" alt="" width={800} height={800} className="object-contain" />
                    </div>
                </div>
            </div>
        </div>
    );
}
