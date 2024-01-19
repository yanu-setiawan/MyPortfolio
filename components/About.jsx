import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  PhoneCall,
  Calendar,
  GraduationCap,
  Briefcase,
  HomeIcon,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Yanu Setiawan",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+62 822 338 9731",
  },
  {
    icon: <MailIcon size={20} />,
    text: "yanusetiawan363@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 15 Jan, 2004",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "SMKN JATIROGO (Software Engineering)",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Tuban, Jawa Timur, Indonesia.",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        University: "Fazztrack Bootacamp",
        qualification: "Fullstack Web Development",
        years: "Feb 2023 - Jun 2023",
      },
      {
        University: "SMKN JATIROGO",
        qualification: "Software Engineering",
        years: "jun 2019 - Jun 2022",
      },
      {
        University: "SMPN 1 Jatirogo",
        years: "jun 2016 - Jun 2019",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "STTR CEPU",
        qualification: "Assistent Office ",
        years: "Jan 2021 - Mey 2021",
      },
    ],
  },
];

const skillData = [
  {
    title: "skils",
    data: [
      {
        name: "HTML,CSS",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "Javascript,Typescript",
      },
      {
        name: "Backend Development",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "./about/vscode.svg",
      },
      {
        imgPath: "./about/figma.svg",
      },
      {
        imgPath: "./about/notion.svg",
      },
      {
        imgPath: "./about/wordpress.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 py-24">
      <div className=" container mx-auto">
        <h2 className=" section-title mb-8 xl:mb-16 mx-auto text-center">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <div className="hidden xl:flex flex-1 relative">
            <div className=" bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative">
              <Image
                className=" mr-[62px] mt-[52px] absolute top-[39px] left-[79px]"
                src="/hero/yanuuu.png"
                alt=""
                width={420}
                height={470}
              />
            </div>
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className=" w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className=" w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className=" w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className=" w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* Tabs Content */}
              <div className=" text-lg mt-12 xl:mt-8 ">
                {/* personal */}
                <TabsContent value="personal">
                  <div className=" text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for Over 10 Years
                    </h3>
                    <p className=" subtitle max-w-xl mx-auto xl:mx-0">
                      I specialize in crafting intuitive website with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences.
                    </p>
                    {/* icons */}
                    <div>
                      {infoData.map((item, index) => {
                        return (
                          <div key={index}>
                            <div>{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  qualifications info
                </TabsContent>
                <TabsContent value="skills">skill info</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
