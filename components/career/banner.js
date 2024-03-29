import React from "react";
import Image from "next/image";
import HomeButton from "../buttons/HomeButton";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <div className="h-screen  flex items-center relative">
        <div className="lg:w-[60%] w-full  h-full  relative">
          <div className="3xl:py-10 2xl:py-6 xl:py-6 2xl:px-14 xl:px-12 px-10 flex flex-col justify-center 2xl:space-y-5 xl:space-y-4 space-y-3 h-full">
            <h1 className="2xl:text-4xl xl:text-4xl mt-20 text-3xl stroke-text-3 Gilroy-Bold">
              The Right place for you | Career at Brain Inventory
            </h1>

            <h1 className="text-heading-1 Gilroy-Bold">
              lets do some great <br /> things together!
            </h1>

            <div className="flex flex-col">
              <div className="Gilroy-Light text-xl tracking-widest text-gray-50">
                While we are good at sign language, there are various other
                simpler ways to connect with us. Talk to us in person.
              </div>
            </div>

            <Link href="tel:+91-810-956-1401">
              <HomeButton>
                <span className="text-base">call us now!</span>
              </HomeButton>
            </Link>
          </div>
        </div>
        <div className="w-1/2 h-full lg:flex justify-center items-center hidden">
          <div className="w-[600px] h-[450px]  relative">
            <Image
              src={"https://d1u4arv5y5eda6.cloudfront.net/images/carrer.png"}
              alt="carrer"
              layout="fill"
            />
          </div>
        </div>
        <span
          id="circle"
          className="border absolute p-8 rounded-full border-blue -left-24 pointer-events-none"
        ></span>
      </div>
    </>
  );
};

export default Banner;

// import React from "react";
// import Image from "next/image";
// import HomeButton from "../buttons/HomeButton";
// import Link from "next/link";

// const Banner = () => {
//   // Check if window is defined (client-side)
//   if (typeof window === "undefined") {
//     return null;
//   }

//   return (
//     <div className="h-screen  flex items-center relative">
//       <div className="lg:w-[60%] w-full  h-full  relative">
//         <div className="3xl:py-10 2xl:py-6 xl:py-6 2xl:px-14 xl:px-12 px-10 flex flex-col justify-center 2xl:space-y-5 xl:space-y-4 space-y-3 h-full">
//           <h1 className="2xl:text-4xl xl:text-4xl mt-20 text-3xl stroke-text-3 Gilroy-Bold">
//             The Right place for you | Career at Brain Inventory
//           </h1>

//           <h1 className="text-heading-1 Gilroy-Bold">
//             lets do some great <br /> things together!
//           </h1>

//           <div className="flex flex-col">
//             <div className="Gilroy-Light text-xl tracking-widest text-gray-50">
//               While we are good at sign language, there are various other
//               simpler ways to connect with us. Talk to us in person.
//             </div>
//           </div>

//           <Link href="tel:+91-810-956-1401">
//             <HomeButton>
//               <span className="text-base">call us now!</span>
//             </HomeButton>
//           </Link>
//         </div>
//       </div>
//       <div className="w-1/2 h-full lg:flex justify-center items-center hidden">
//         <div className="w-[600px] h-[450px]  relative">
//           <Image
//             src={"https://d1u4arv5y5eda6.cloudfront.net/images/carrer.png"}
//             alt="carrer"
//             layout="fill"
//           />
//         </div>
//       </div>
//       <span
//         id="circle"
//         className="border absolute p-8 rounded-full border-blue -left-24 pointer-events-none"
//       ></span>
//     </div>
//   );
// };

// export default Banner;
