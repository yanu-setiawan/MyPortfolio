import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

//components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Social from "./Social";

const Hero = () => {
  return (
    <section className=" py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className=" flex justify-between gap-x-8">
          {/* Text */}
          <div className="flex flex-col max-w-[700px] justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px] ">
              Web Developer
            </div>
            <h1 className="h1">Hello, my name is Yanu Setiawan</h1>
            <p>
              Brief description with insights into myself, my vocational
              journey, and what i engage in professionally.
            </p>
            {/* Buttons */}
            <div>
              <Button />
            </div>
          </div>
          {/* Image */}
          <div className=" hidden xl:flex relative">Image</div>
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className=" text-4xl text-primary " />
        </div>
      </div>
    </section>
  );
};

export default Hero;
