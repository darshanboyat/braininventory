import React from "react";
import Image from "next/image";

function choose(props) {
  return (
    <div className="2xl:p-10 p-8 2xl:space-y-6 space-y-8 pt-24 pb-24">
      <div className="container padding-left-all-section">
        <h1 className="text-4xl Gilroy-Bold mb-2">
          Why choose braininventory?
        </h1>
        <p className="text-base color-light">
          Using deep domain expertise of our software developers. we create
          impactful digital solutions that drive meaningful change with a
          strategic vision.
        </p>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 mt-8">
          <div className="bg-vision">
            <Image
              src="https://d1u4arv5y5eda6.cloudfront.net/images/Icon1.svg"
              className="text-center m-auto block w-16"
              alt=""
              width={40}
              height={40}
            />
            <h3 className="text-center Gilroy-Bold text-xl">360 Approach</h3>
          </div>
          <div className="bg-vision">
            <Image
              src="https://d1u4arv5y5eda6.cloudfront.net/images/Icon2.svg"
              className="text-center m-auto block  w-16"
              alt=""
              width={40}
              height={40}
            />
            <h3 className="text-center Gilroy-Bold text-xl">
              Client-Centricity
            </h3>
          </div>
          <div className="bg-vision">
            <Image
              src="https://d1u4arv5y5eda6.cloudfront.net/images/Icon3.svg"
              className="text-center m-auto block w-16"
              alt=""
              width={40}
              height={40}
            />
            <h3 className="text-center Gilroy-Bold text-xl">
              Domain Expertise
            </h3>
          </div>
          <div className="bg-vision">
            <Image
              src="https://d1u4arv5y5eda6.cloudfront.net/images/Icon4.svg"
              className="text-center m-auto block w-16"
              alt=""
              width={40}
              height={40}
            />
            <h3 className="text-center Gilroy-Bold text-xl">Time-to-Market</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default choose;
