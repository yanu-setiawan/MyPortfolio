import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import Image from "next/image";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

//components
import Badge from "./Badge";
import Socials from "./Socials";
import Write from "./Write";

const Hero = () => {
  return (
    <section className=" py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className=" flex justify-between gap-x-8">
          {/* Text */}
          <div className="flex flex-col max-w-[700px] justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-xl font-bold uppercase mb-4 text-primary tracking-[4px] ">
              ....
            </div>
            <h1 className="h1 mb-4">Hello, my name is Yanu Setiawan</h1>
            <div className=" text-[1.25rem] xl:text-[2rem]  font-semibold mb-4 text-primary tracking-[4px] flex gap-3 mx-auto xl:mx-0">
              <span>Im a</span>
              <Write />
            </div>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Brief description with insights into myself, my vocational
              journey, and what i engage in professionally.
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2 text-center ">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2 text-center ">
                Download CV
                <Download size={18} />
              </Button>
            </div>
            {/* socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0 
            "
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>

          {/* Image */}
          <div className=" hidden xl:flex relative">
            {/* badge */}
            <Badge
              containerStyles="absolute top-[43%] -left-[6rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={1}
              badgeText={"Years of experience"}
            />
            {/* badge 2 */}
            <Badge
              containerStyles="absolute top-[80%] -right-[-2rem]"
              icon={<RiTodoFill />}
              endCountNum={9}
              badgeText={"Finished Project"}
            />
            {/* badge 3 */}
            <Badge
              containerStyles="absolute top-[25%] -right-10"
              icon={<RiTeamFill />}
              endCountNum={20}
              badgeText={"Years Old"}
            />
            <div className=" bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat">
              <div className="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom ">
                <div className=" flex justify-center items-center">
                  <Image
                    className=" mr-[62px] mt-[52px]"
                    src="/hero/yanuuu.png"
                    alt=""
                    width={420}
                    height={470}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-0 animate-bounce ">
          <RiArrowDownSLine className=" text-5xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
