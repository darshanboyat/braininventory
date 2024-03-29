import React from "react";
import Header from "../../components/header/Header";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
const SectionOne = dynamic(() =>
  import("../../components/project/projectRtc/SectionOne.jsx")
);
const SectionTwo = dynamic(() =>
  import("../../components/project/projectRtc/sectionTwo.jsx")
);
const SectionThree = dynamic(() =>
  import("../../components/project/projectRtc/sectionThree.jsx")
);
const SectionFour = dynamic(() =>
  import("../../components/project/projectRtc/sectionFour.jsx")
);
const SectionFive = dynamic(() =>
  import("../../components/project/projectRtc/sectionFive.jsx")
);
const SectionSix = dynamic(() =>
  import("../../components/project/projectRtc/sectionSix.jsx")
);
const ProjectInquiry = dynamic(() =>
  import("../../components/project/projectInquiryCard.jsx")
);
const ChallengeSection = dynamic(() =>
  import("../../components/project/projectDetailCard.jsx")
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
  import("../../components/project/projectSectionTwo")
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


const Fatoura = () => {
  const FatouraSectionOne = {
    space: "",
    brief: "CREATE & MANAGE YOUR ",
    styleBrief: "INVOICES",
    logo: "https://d1u4arv5y5eda6.cloudfront.net/images/rtc/Group 5166.png",
    alt: "Fatoura",
  };

  const sectionOneImg = {
    one: "https://d1u4arv5y5eda6.cloudfront.net/images/Group 6420.png",
    two: "https://d1u4arv5y5eda6.cloudfront.net/images/Mask Group 172.png",
  };
  const sectionTwoImg = {
    one: "https://d1u4arv5y5eda6.cloudfront.net/images/Group 6419.png",
    two: "https://d1u4arv5y5eda6.cloudfront.net/images/Group 6418.png",
  };

  const milestoneContent = [
    "Major IM platform integration.",
    "Real-time email management within the application",
    "Social media post scheduling on the IM platform from within the application",
  ];
  const challenge = "uilding a complete travel planner with a CRM in place, we knew that we have to deal with ample Data types and manage them on DB in such a way that we can retrieve them for various reports generation with ease and fast. Integration of inbuild email management (Gmail) and Instant Messaging platforms (Insta, FB, Twitter) were some serious tasks on this project. Lastly, is to develop Drag & Drop campaign builder (No Code website builder)";
  const solution = "Solution done for the challenges- Advanced-level report generation was planned in a way that we mapped the key parameters before starting the development, which helped us to efficiently use the DB. Regarding real-time IM and email management, we execute a job every 30 seconds to check new emails and messages. It was designed and planned in a way to not put any load on the server as it was running every 30 seconds. Alongside keeping the code structure optimized, used SKDs and ran the cron every for 1 minute. We made different stages and connected the node of every stage like the start and the endpoints. Added a real-time auto-save to avoid any rework for the travel agents.";
  const tech = [
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/images/rtc/hvh.png",
      name: "PHP"
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/images/rtc/2.png",
      name: "MySQL"
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/images/rtc/3.png",
      name: "Javascript"
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/images/rtc/jhj.png",
      name: "Curl"
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/images/rtc/fddf.png",
      name: "AWS SDK"
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/images/rtc/kk.png",
      name: "Google Places API"
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/images/rtc/MNBNM.png",
      name: "IMAP"
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/images/rtc/bnv.png",
      name: "Widgety API"
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/images/rtc/nbb.png",
      name: "Flight Stats API"
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/images/rtc/BVVVD.png",
      name: "Stripe"
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/images/rtc/IJMTGBIK.png",
      name: "AWS"
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/images/rtc/KJHNGBFVCX.png",
      name: "Microservices"
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/images/rtc/rgdgfg.png",
      name: "Docker"
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/images/rtc/MNBVC.png",
      name: "Kubernetes"
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/images/rtc/okska.png",
      name: "Project Expedition API"
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/images/rtc/ikhjh.png",
      name: "Facebook SDK"
    }
  ]
  const teamMembers = [
    {
      id: 1,
      name: "Sidra Shahid",
      image: "https://d1u4arv5y5eda6.cloudfront.net/images/rtc/Group -1.png",
      role: "Software Architecture",
    },
    {
      id: 2,
      name: "Deepak Dangi",
      image: "https://d1u4arv5y5eda6.cloudfront.net/images/rtc/Group 6438.png",
      role: "Sr. Software Engineer",
    },
    {
      id: 3,
      name: "Shivam Yadav",
      image: "https://d1u4arv5y5eda6.cloudfront.net/images/rtc/Group 6300.png",
      role: "Software Engineer",
    },
    {
      id: 4,
      name: "Hussain Ali",
      image: "https://d1u4arv5y5eda6.cloudfront.net/images/rtc/Group 6429.png",
      role: "Sr. Software Engineer",
    },
    {
      id: 5,
      name: "Krishna Agrawal",
      image: "https://d1u4arv5y5eda6.cloudfront.net/images/rtc/Group 6420.png",
      role: "Sr. UI/UX Designer",
    },
  ];
  
  return (
    <>
      <Head>
        <title>
          Brain Inventory Develop a Travel Planning Platform With CRM
        </title>
        <meta
          name="description"
          content="Brain Inventory developed a travel planner platform with inbuild CRM that helps travel agents as well as users. Read more."
        />
        <link
          rel="canonical"
          href="https://braininventory.in/project/revolution-travel-crm"
        />
      </Head>
      <div className="bg-cover h-screen bg-[url('https://d1u4arv5y5eda6.cloudfront.net/images/rtc/Mask+Group+248.png')]">
        <Header />
        <div className="container lg:pt-48">
          <SectionOne section={FatouraSectionOne} />
        </div>
      </div>
      <>
        <SectionTwo />
      </>
      <SectionThree
        sectionOneImg={sectionOneImg}
        sectionTwoImg={sectionTwoImg}
      />
      <SectionFour />
      <SectionSix />
      <SectionFive /> 
      <div className="py-8">
        <div className="flex justify-center items-center ">
          <Image width={500} height={500}
            src="https://d1u4arv5y5eda6.cloudfront.net/images/rtc/Group+6533.png"
            alt=""
            className="w-[34rem]"
          />
        </div>
        <div className="relative w-full h-screen lg:h-[78vh] overflow-y-scroll no-scrollbar">
          <Image width={1500} height={1500}
            src="https://d1u4arv5y5eda6.cloudfront.net/images/rtc/Group+6535.png"
            alt=""
            className="w-full"
          />
        </div>
      </div>

      <ProjectInquiry />
      <div className="max-w-full flex justify-center">
        <Image width={500} height={500}
          src="https://d1u4arv5y5eda6.cloudfront.net/images/project/IMG_0984.png"
          alt=""
          className="rounded-3xl w-full px-4 lg:w-[50%] py-[5%]"
        />
      </div>
      <ChallengeSection challenge={challenge} solution={solution}/>
      <div className="py-2 flex justify-center">
        <video
          muted
          loop
          autoPlay={true}
          controls={false}
          poster="https://d1u4arv5y5eda6.cloudfront.net/images/project/durationPoster.png"
        >
          <source
            src="https://d1u4arv5y5eda6.cloudfront.net/videos/Cojmp+2.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <TechStack tech={tech} />
      <Team teamMembers={teamMembers} />
      <Milestone content={milestoneContent} />
      <VisitProject
        projectName="Revolution Travel CRM"
        projectLink="https://www.revolutiontravel.ca/"
        mockup=""
      />
      <ProjectSectionTwo />
      <BlogArticle />
      <ContactForm />
      <LocateUs />
      <Slogan />
      <Footer />
    </>
  );
};

export default Fatoura;
