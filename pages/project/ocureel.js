import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../../components/header/Header";
import dynamic from "next/dynamic";
import Image from "next/image";
const SectionOne = dynamic(() =>
  import("../../components/project/projocureel/SectionOne.jsx")
);
const SectionTwo = dynamic(() =>
  import("../../components/project/projocureel/Sectiontwo.jsx")
);
const SectionThree = dynamic(() =>
  import("../../components/project/projocureel/SectionThree.jsx")
);
const ChallengeSection = dynamic(() =>
  import("../../components/project/projectDetailCard.jsx")
);
const ProjectInquiry = dynamic(() =>
  import("../../components/project/projectInquiryCard.jsx")
);
const TechStack = dynamic(() =>
  import("../../components/project/projectTechstack.jsx")
);
const Team = dynamic(() => import("../../components/project/projectTeam.jsx"));
const Milestone = dynamic(() =>
  import("../../components/project/projectMilestone.jsx")
);
const VisitProject = dynamic(() =>
  import("../../components/project/projectVisit.jsx")
);
const ProjectSectionTwo = dynamic(() =>
  import("../../components/project/projectSectionTwo.jsx")
);
const LocateUs = dynamic(() => import("../../components/portfolio/LocateUs"));
const ContactForm = dynamic(() =>
  import("../../components/common/ContactForm")
);
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle")
);
const Slogan = dynamic(() =>
  import("../../components/project/ProjectSlogan.jsx")
);
const Footer = dynamic(() => import("../../components/common/Footer"));

const Virifi = () => {
  const VirifiSectionOne = {
    brief:
      "Certifies and verifies your files with protected confidentiality, E2E encryption,and helps you digitize your business with the next generation of verification.",
    logo: "https://d1u4arv5y5eda6.cloudfront.net/images/project/virifi/Group+6385.png",
    alt: "Virifi",
  };

  const tech = [
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/images/ocureel/CCVXV.png",
      name: "React Native",
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/images/ocureel/BFVDC.png",
      name: "Firebase",
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/images/ocureel/GNBVDS.png",
      name: "NoSQL",
    },

    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/images/rtc/rgdgfg.png",
      name: "Docker",
    },
  ];
  const teamMembers = [
    {
      id: 1,
      name: "Shivam Singh",
      image:
        "https://d1u4arv5y5eda6.cloudfront.net/images/ocureel/Group%20-1.png",
      role: "Sr. Software Architecture",
    },
    {
      id: 3,
      name: "Shubham patidar",
      image:
        "https://d1u4arv5y5eda6.cloudfront.net/images/ocureel/Group%206300.png",
      role: "Mobile Developer",
    },
    {
      id: 2,
      name: "Pritesh Patil",
      image:
        "https://d1u4arv5y5eda6.cloudfront.net/images/ocureel/Group%206301.png",
      role: "Quality Analyst",
    },

    {
      id: 4,
      name: "Darshan Boyat",
      image:
        "https://d1u4arv5y5eda6.cloudfront.net/images/ocureel/Group%20-2.png",
      role: "Jr. Software Enginner",
    },
  ];

  const milestoneContent = [
    "Awarded as the best Social Ultimate Game",
    "Less than 2 seconds loading time on Reel scrolling",
    "1K download at the launch party itself",
  ];
  return (
    <>
      <Head>
        <title>Brain Inventory Developed Integrated Personal Trainer App</title>
        <meta
          name="description"
          content="Brain Inventory developed training software for My Fit Mantra that diverse the needs of trainers to achieve their fitness goals. Check out how we develop training apps."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" Brain Inventory Blog –
  Staff Augmentation | Software | Web | App Development 
  "
        />
        <meta
          property="og:description"
          content="Brain Inventory developed training software for My Fit Mantra that diverse the needs of trainers to achieve their fitness goals. Check out how we develop training apps."
        />
        <meta
          property="og:url"
          content=" 
  https://braininventory.in/"
        />
        <meta property="twitter:domain" content="https://braininventory.in/ " />
        <meta
          property="twitter:image"
          content="https://d1u4arv5y5eda6.cloudfront.net/images/Logobg.png"
        />
        <meta
          property="og:image"
          content="https://d1u4arv5y5eda6.cloudfront.net/images/blog-4.jpg"
        />
        <meta
          property="twitter:title"
          content=" Brain Inventory Blog – 
  Staff Augmentation | Software | Web | App Development "
        />
        <meta
          property="twitter:description"
          content=" Read the latest 
  technology trends, news & updates and other topics about software
  & app development from Brain Inventory’s informative blogs!"
        />
        <meta property="twitter:creator" content=" BrainInventory " />
        <meta property="twitter:site" content="BrainInventory" />
        <meta property="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href="https://braininventory.in/project/my-fit-mantra"
        />
      </Head>
      <div className="bg-cover relative z-20 w-full h-[105vh] lg:h-[140vh] bg-center lg:bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/ocureel/Mask+Group+192.png')] bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
        <Header />
        <div className="container">
          <SectionOne />
        </div>
      </div>
      <div className="">
        <div className=" bg-white relative z-10 lg:-top-52 lg:pt-48">
          <div className="container">
            <div className="flex container m-auto text-center justify-center text-black text-4xl lg:text-6xl py-4 lg:pt-32">
              <span className="font-bold">About</span>&nbsp; Ocureel
            </div>
            <div className="w-full py-4">
              <p className="text-black opacity-50 font-satoshi px-2 lg:px-72 text-center text-2xl font-semibold leading-10 lg:leading-[4rem] flex justify-center">
                A game-changing social video content application which went
                viral in no time. Ocureel is a video content platform which
                takes users on the ultimate adventure of creating real-life
                connections & building deep relationships via interactive video
                content. Do you ever feel empty after scrolling for hours on
                social media? Or pressure to show a flawless version of
                yourself? Ocureel a patented game is designed to bring life and
                help you feel good about the time you spend on your phone. Be
                seen for who you really are! Find genuine friends! NO FILTERS!
                NO HATE! ONLY POSITIVITY!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#FDDEFE] relative lg:-top-52 lg:-mb-64">
          <div className="container">
            <div className="lg:h-[80vh] bg-no-repeat bg-contain bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/ocureel/ocureel+section+2.png')] relative lg:-top-28">
              <h1 className="transparent-text text-8xl bg-transparent w-72 px-8 h-[80vh] flex flex-col justify-end">
                Mobile Version
              </h1>
            </div>
          </div>
        </div>

        <SectionTwo />

        <SectionThree />

        <ProjectInquiry />
        <div className="container">
          <Image
            src="https://d1u4arv5y5eda6.cloudfront.net/images/project/IMG_0984.png"
            alt=""
            className="rounded-3xl w-[100vw] px-[10vw] py-[5vh]"
            width={500}
            height={500}
          />
        </div>

        <ChallengeSection
            challenge="One significant challenge involved creating a schema that could effectively link multiple elements with each other. This required careful consideration of the relationships between different data components within the system to ensure efficient data management and retrieval. Implementing a secure and seamless payment process was another technical hurdle. The team needed to develop a solution that would allow trainers to accept payments directly into their wallets through the platform."
            solution="In order to address the aforementioned challenges, several technical solutions were implemented during the development of the project. Extensive discussions were held between the business owner, product analyst team and developers to identify the specific use cases. These discussions facilitated the thoughtful design of the schema, ensuring that every element of the project catered to the intended audience. MongoDB was chosen as the database solution due to its flexibility and built-in tools, which simplified the storage of dynamic data. For direct payment options, Stripe was selected as the payment aggregator. To provide users with the ability to connect their Stripe accounts, the Stripe Connect strategy was implemented. By utilizing the user's Stripe account, the platform was able to generate products on demand and securely process payments."
          />
        <div className="py-10">
          <video
            muted
            loop
            autoPlay={true}
            controls={false}
            poster="https://d1u4arv5y5eda6.cloudfront.net/images/project/durationPoster.png"
          >
            <source
              src="https://d1u4arv5y5eda6.cloudfront.net/videos/Comp 2.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <TechStack tech={tech} />
        <Team teamMembers={teamMembers} />
        <Milestone content={milestoneContent} />
        <VisitProject
          projectName="Ocureel"
          projectLink="https://Ocureel.com/"
          mockup=""
        />
        <div className="mx-4 lg:mx-24">
          <ProjectSectionTwo />
        </div>
        <div className="px-4">
          <BlogArticle />
        </div>
        <div className="mx-4">
          <ContactForm />
        </div>
        <LocateUs />
        <Slogan />
        <Footer />
      </div>
    </>
  );
};

export default Virifi;
