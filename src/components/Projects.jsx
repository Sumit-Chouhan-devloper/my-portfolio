import React, { useLayoutEffect } from "react";
import viewAllAroww from "../components/assets/images/svg/Arrow.svg";
import { projects } from "../components/common/Helper";
import arrowP from "../components/assets/images/svg/Arrow_p.svg";
import dotsImg from "../components/assets/images/svg/dots.svg";
import halfBox from "../components/assets/images/svg/box.svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let project = gsap.timeline({
      scrollTrigger: ".project_parent",
      start: "top top",
      end: "bottom center",
      markers: true,
    });
    project.fromTo(
      ".project_cards",
      {
        xPercent: 100,
        duration: 1,
        ease: "back(2)",
      },
      {
        xPercent: 10,
        ease: "back(2)",
        duration: 0.8,
      }
    );
  }, []);
  return (
    <>
      <div className="project_parent">
        <div className="pt-12 lg:pt-[74px] relative">
          <img
            src={dotsImg}
            alt="dotsImg"
            className=" absolute hidden lg:block top-[22%] z-[-1]"
          />
          <img
            src={halfBox}
            alt="halfBox"
            className=" hidden xl:block absolute top-[57%] right-0"
          />
          <div className=" px-3 container xl:max-w-[1100px] 3xl:max-w-[1140px] mx-auto ">
            <div className=" flex justify-between">
              <h2 className="text-white font-medium ff_fira text-[22px] sm:text-3xl md:text-[32px] sm:text-[32px] relative projects_line">
                <span className="text-[#C778DD]">#</span>projects
              </h2>
              <a
                href="#"
                className="text-white font-medium ff_fira text-[16px] flex items-center"
              >
                View all
                <span className=" ms-2">
                  <img src={viewAllAroww} alt="viewAllAroww" />
                </span>
              </a>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start">
              {projects.slice(0, 3).map((index) => (
                <div className=" w-full max-w-[375px] md:w-6/12 lg:w-4/12 sm:px-3 mt-6 project_cards">
                  <div className=" border border-[#ABB2BF]">
                    <img src={index.img} alt="map-img" className="w-full" />
                    <p className=" ff_fira text-[#ABB2BF] py-2 px-2 border-b border-b-[#ABB2BF]">
                      {index.skill}
                    </p>
                    <h2 className=" py-3 sm:py-4 px-4 ff_fira font-medium text-white  max-w-[329px] text-lg sm:text-xl md:text-2xl">
                      {index.projectsName}
                    </h2>
                    <p className=" ff_fira text-[16px] px-4 pb-3 sm:pb-4 text-[#ABB2BF]">
                      {index.servers}
                    </p>
                    <button className=" flex items-center mx-4 mb-4 ff_fira font-medium text-white text-[16px] border border-[#ABB2BF] py-2 px-4">
                      Live
                      <span className=" ms-2">
                        <img src={arrowP} alt="arrowP" />
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
