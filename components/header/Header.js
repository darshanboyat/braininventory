import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TagManager from "react-gtm-module";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [blockName, setBlockName] = useState("companyChildren");
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-MWMG4P2" });
  }, [blockName]);

  const handlesidebar = () => {
    if (navOpen) {
      document.getElementById("sidenav").classList.add("-translate-y-full");
    } else {
      document.getElementById("sidenav").classList.remove("-translate-y-full");
    }
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (window.pageYOffset > 50) {
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").classList.remove("scrollUp");
        } else {
          document.getElementById("navbar").classList.add("scrollUp");
        }
        prevScrollpos = currentScrollPos;
      }
    };
  }, []);

  return (
    <>
      <nav>
        <div
          id="navbar"
          className="fixed top-0 flex justify-between items-center w-full py-3 px-4 lg:px-8 z-50"
        >
          <Link href="/" className="cursor-pointer">
            <span className="text-4xl Gilroy-Bold z-30">
              {!navOpen && (
                <div className="relative w-36 h-12 cursor-pointer">
                  <Image
                    priority={true}
                    src="https://d1u4arv5y5eda6.cloudfront.net/images/main/Logobg.png"
                    className="cursor-pointer"
                    alt="it service company offers web and app design and development"
                    preload="metadata"
                    width={144}
                    height={48}
                  />
                </div>
              )}
            </span>
          </Link>

          {navOpen ? (
            <div className="dropdown lg:block  dropdown-hover">
              <label className="btn  bg-transparent outline-none border-0 hover:bg-transparent m-1">
                <div className="flex  justify-between align-middle items-center bg-case-blue-request h-11 z-[100]">
                  <p className="px-4 text-xs Gilroy-Light lowercase lg:block hidden">
                    <Link href="/contact">request A Quote</Link>
                  </p>
                  <span
                    onClick={() => {
                      handlesidebar();
                    }}
                    className="bg-base-blue-1 items-center h-11 px-4 text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 relative top-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </div>
              </label>
            </div>
          ) : (
            <div className="dropdown lg:block  dropdown-hover">
              <label className="btn  bg-transparent outline-none border-0 hover:bg-transparent m-1">
                <div className="flex  justify-between align-middle items-center bg-case-blue-request h-11 z-[100]">
                  <p className="px-4 text-xs Gilroy-Light lowercase mobile-none">
                    <Link href="/contact">request A Quote</Link>
                  </p>
                  <span
                    onClick={() => {
                      handlesidebar();
                    }}
                    className="bg-base-blue-1 items-center h-11 px-4 text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 relative top-3"
                      width="15.5"
                      height="11.5"
                      viewBox="0 0 15.5 11.5"
                    >
                      <g
                        id="Group_3668"
                        data-name="Group 3668"
                        transform="translate(-1821.75 -41.75)"
                      >
                        <line
                          id="Line_181"
                          data-name="Line 181"
                          x2="14"
                          transform="translate(1822.5 42.5)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeWidth="1.5"
                        />
                        <line
                          id="Line_182"
                          data-name="Line 182"
                          x2="8.326"
                          transform="translate(1822.5 47.5)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeWidth="1.5"
                        />
                        <line
                          id="Line_226"
                          data-name="Line 226"
                          x2="14"
                          transform="translate(1822.5 52.5)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeWidth="1.5"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </label>
            </div>
          )}
        </div>
        <div
          id="sidenav"
          className="fixed inset-0 overflow-hidden transition-transform -translate-y-full duration-300 bg-gradient-4 z-40 flex gap-10"
        >
          <div className="grid lg:grid-cols-4 grid-cols-1 px-8 py-16 lg:px-28 w-full">
            <div className="">
              <Link href="/how-we-work">
                <h3
                  onClick={() => {
                    setBlockName("companyChildren");
                  }}
                  className="stroke-text text-3xl text-left Gilroy-Bold cursor-pointer lg:pb-6"
                >
                  About us
                </h3>
              </Link>
              <h3
                onClick={() => {
                  setBlockName("ServicesChildren");
                }}
                className="stroke-text text-3xl Gilroy-Bold text-left cursor-pointer lg:py-6"
              >
                Services
              </h3>
              <Link href="/portfolio">
                <h3 className="stroke-text text-3xl Gilroy-Bold text-left cursor-pointer lg:py-6">
                  Portfolio
                </h3>
              </Link>

              <Link href="/career">
                <h3 className="stroke-text text-3xl Gilroy-Bold text-left cursor-pointer lg:py-6">
                  Careers
                </h3>
              </Link>
              <h3
                onClick={() => {
                  setBlockName("Solution");
                }}
                className="stroke-text text-3xl Gilroy-Bold text-left cursor-pointer lg:py-6"
              >
                Solution
              </h3>
              <Link href="/contact">
                <h3 className="stroke-text text-3xl Gilroy-Bold text-left cursor-pointer lg:py-6">
                  Contacts
                </h3>
              </Link>
            </div>
            <div className="col-span-3">
              {blockName === "companyChildren" && <CompanyChildren />}
              {blockName === "ServicesChildren" && <ServicesChildren />}
              {blockName === "Solution" && <Solution />}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const CompanyChildren = () => {
  return (
    <div className="col-span-4 lg:grid grid-cols-1">
      <div className="space-y-4">
        <h2 className="text-2xl Gilroy-Bold">About</h2>
        <ul className="space-y-2">
          <li className="color-gray">
            <Link href="/company" className="cursor-pointer">
              Our Company
            </Link>
          </li>
          <li className="color-gray">
            <Link href="/how-we-work" className="cursor-pointer">
              How we work
            </Link>
          </li>
          <li className="color-gray">
            <Link href="/career" className="cursor-pointer">
              Careers
            </Link>
          </li>
          <li className="color-gray">
            <Link href="/blog" className="cursor-pointer">
              Blog
            </Link>
          </li>
          <li className="color-gray">
            <Link href="/contact" className="cursor-pointer">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const ServicesChildren = () => {
  const webLinks = [
    {
      _id: 1,
      name: "Custom Web Development",
      link: "/web-development/custom-web-development",
    },
    {
      _id: 2,
      name: "Angular JS Development",
      link: "/web-development/angular-js-development",
    },
    {
      _id: 3,
      name: "React JS Development",
      link: "/web-development/react-js-development",
    },
    {
      _id: 4,
      name: "Node JS Development",
      link: "/web-development/node-js-development",
    },
    {
      _id: 5,
      name: "Vue JS Development",
      link: "/web-development/vue-js-development",
    },
    {
      _id: 6,
      name: "MEAN Development",
      link: "/web-development/mean-stack-development",
    },
    {
      _id: 7,
      name: "MERN Development",
      link: "/web-development/mern-stack-development",
    },
    {
      _id: 8,
      name: "LAMP Development",
      link: "/web-development/lamp-development",
    },
    {
      _id: 9,
      name: "PHP Development",
      link: "/web-development/php-development",
    },
    {
      _id: 10,
      name: "Python Development",
      link: "/web-development/python-development",
    },
    {
      _id: 11,
      name: "Wordpress Website Development",
      link: "/web-development/wordpress-development",
    },
    {
      _id: 12,
      name: "CodeIgniter Development",
      link: "/web-development/codeigniter-development",
    },
  ];
  const mobileLinks = [
    {
      _id: 1,
      name: "Custom App Development",
      link: "/mobile-development/custom-app-development",
    },
    {
      _id: 2,
      name: "iOS App Development",
      link: "/mobile-development/ios-development",
    },
    {
      _id: 3,
      name: "Android App Development",
      link: "/mobile-development/android-development",
    },
    {
      _id: 4,
      name: "React Native App Development",
      link: "/mobile-development/react-native-development",
    },
    {
      _id: 5,
      name: "Flutter App Development",
      link: "/mobile-development/flutter-development",
    },
    {
      _id: 6,
      name: "Swift App Development",
      link: "/mobile-development/swift-development",
    },
    {
      _id: 7,
      name: "Hybrid App Development",
      link: "/mobile-development/hybrid-app-development",
    },
    {
      _id: 8,
      name: "Modile App Integration",
      link: "/mobile-development/mobile-app-integration",
    },
  ];

  const hireLinks = [
    {
      _id: 1,
      name: "Hire Angular JS Developers",
      link: "/hire-angular-js-developers",
    },
    {
      _id: 2,
      name: "Hire React JS Developers",
      link: "/hire-react-js-developers",
    },
    {
      _id: 3,
      name: "Hire Node JS Developers",
      link: "/hire-node-js-developers",
    },
    {
      _id: 4,
      name: "Hire Vue JS Developers",
      link: "/hire-vue-js-developers",
    },
    {
      _id: 5,
      name: "Hire NextJS Developers",
      link: "/hire-next-js-developers",
    },
    {
      _id: 6,
      name: "Hire MEAN Developers",
      link: "/hire-mean-stack-developers",
    },
    {
      _id: 7,
      name: "Hire MERN Developers",
      link: "/hire-mern-stack-developers",
    },
    {
      _id: 8,
      name: "Hire UI/UX Developers",
      link: "/hire-ui-ux-developers",
    },
    {
      _id: 9,
      name: "Hire Android Developers",
      link: "/hire-android-developers",
    },
    {
      _id: 10,
      name: "Hire iOS Developers",
      link: "/hire-ios-developers",
    },
    {
      _id: 11,
      name: "Hire React Native Developers",
      link: "/hire-react-native-developers",
    },
    {
      _id: 12,
      name: "Hire Python Developers",
      link: "/hire-python-developers",
    },
    {
      _id: 13,
      name: "Hire Full Stack Developers",
      link: "/hire-full-stack-developers",
    },
    {
      _id: 14,
      name: "Hire PHP Developers",
      link: "/hire-php-developers",
    },
    {
      _id: 15,
      name: "Hire Chatbot Developers",
      link: "/hire-chatbot-developers",
    },
    {
      _id: 16,
      name: "Hire QA Analyst",
      link: "/hire-qa-analysts",
    },
  ];

  return (
    <div className="col-span-4 lg:grid lg:grid-cols-3 hidden">
      <div className="space-y-4">
        <h2 className="text-2xl Gilroy-Bold">Web Development</h2>
        <ul className="space-y-2">
          {webLinks?.map((ele) => (
            <li className="color-gray" key={ele._id}>
              <Link href={ele.link} className="cursor-pointer">
                {ele.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl Gilroy-Bold">Mobile Development </h2>
        <ul className="space-y-2">
          {mobileLinks?.map((ele) => (
            <li className="color-gray" key={ele._id}>
              <Link href={ele.link} className="cursor-pointer">
                {ele.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl Gilroy-Bold">Hire Dedicated Developers</h2>
        <ul className="space-y-2">
          {hireLinks?.map((ele) => (
            <li className="color-gray" key={ele._id}>
              <Link href={ele.link} className="cursor-pointer">
                {ele.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Solution = () => {
  const solutionLinks = [
    {
      _id: 1,
      name: "Custom Software Development",
      link: "#",
    },
    {
      _id: 2,
      name: "NFT Marketplace",
      link: "#",
    },
    {
      _id: 3,
      name: "Blockchain Solution",
      link: "#",
    },
    {
      _id: 4,
      name: "Metaverse Application",
      link: "#",
    },
    {
      _id: 5,
      name: "Accounting Application",
      link: "#",
    },
    {
      _id: 6,
      name: "Sports Betting Platform",
      link: "#",
    },
    {
      _id: 7,
      name: "Custom Fantasy Sports Solution",
      link: "#",
    },
    {
      _id: 8,
      name: "Social Media Applications",
      link: "#",
    },
    {
      _id: 9,
      name: "Online Learning Solutions",
      link: "#",
    },
  ];

  return (
    <div className="col-span-4 lg:grid lg:grid-cols-1 hidden">
      <div className="space-y-4">
        <h2 className="text-2xl Gilroy-Bold">Solution</h2>
        <ul className="space-y-2">
          {solutionLinks?.map((ele) => (
            <li className="color-gray" key={ele._id}>
              <Link href={ele.link} className="cursor-pointer">
                {ele.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Header;
