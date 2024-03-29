import React from "react";

export default function Advantage({ title, reasons }) {
    return (
        <div className="container padding-left-all-section-1">
            <h1 className='text-4xl lg:text-5xl Gilroy-Bold w-fit lg:pl-10'>Benefits of <span className='text-[#7600EB]'>{title}</span></h1>

            <div className="flex flex-col my-8 h-auto ">
                {
                    reasons?.map((ele, index) => (
                        <div key={index} className="bg-customer px-6 py-8 mx-8 text-start text-slate-400 my-2 lg:w-full  leading-8 Gilroy-Semibold tracking-wider">{ele}</div>
                    ))
                }
            </div>
        </div>
    );
}
