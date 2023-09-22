import React from "react";
import Image from "next/image";
const Index = () => {
  return (
    <>
      <div className="py-8 mb-8 relative flex flex-col justify-center bg-virifi-m bg-[url('https://d1u4arv5y5eda6.cloudfront.net/images/project/virifi/Image+8.png')] bg-repeat lg:py-24 lg:-my-12">
        <div className="container">
          <h1 className="text-center text-3xl Gilroy-Bold lg:text-6xl  lg:mx-44">
            <span className="text-[#7600EB]"> Admin&apos;s</span> Outlook
          </h1>

          <div className="px-4 lg:px-24 lg:py-12 ">
            <div className="">
              <div>
                <Image
                  className="w-full"
                  width={2000}
                  height={500}
                  alt=""
                  src="https://d1u4arv5y5eda6.cloudfront.net/images/project/virifi/Group 6475.png"
                />
              </div>

              <div>
                <Image
                  className="w-full"
                  width={2000}
                  height={500}
                  alt=""
                  src="https://d1u4arv5y5eda6.cloudfront.net/images/project/virifi/Group 6473.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Image
          src="https://d1u4arv5y5eda6.cloudfront.net/images/project/virifi/Mask Group 289.png"
          alt=""
          width={2000}
          height={100}
          className="w-full"
        />
      </div>
    </>
  );
};
export default Index;
