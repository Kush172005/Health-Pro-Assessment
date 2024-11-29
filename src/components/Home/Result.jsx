import React from "react";
import bgImage from "../../assests/Images/black-white-portrait-woman-expecting-baby (3).svg";
import ChartJsProgressChart from "../Chart/PieChart";
import marker from "../../assests/Icons/mark.svg";
import markerMobile from "../../assests/Icons/markMobile.svg";
import rightArrow from "../../assests/Icons/arrow-right.svg";

const Result = () => {
    return (
        <>
            <div className="relative">
                <div className="h-[100vh] bg-[#303030]"></div>

                <div className="absolute xl:top-[18%] top-[8%] flex justify-center items-center gap-6">
                    <img className="max-sm:hidden" src={marker} alt="marker" />
                    <img
                        className="sm:hidden"
                        src={markerMobile}
                        alt="marker"
                    />
                    <div className="text-[#fff] font-poppins text-lg sm:text-xl md:text-2xl xl:text-4xl font-medium leading-normal max-sm:pr-6">
                        Your estimated IVF Success Rate is
                    </div>
                </div>

                <div className="absolute flex flex-col items-center xl:top-[55%] top-[35%] xl:left-[18%] left-[25%] transform -translate-y-1/2 p-5">
                    <ChartJsProgressChart />
                    <div className="text-center mt-8 text-[#fff] font-poppins text-2xl font-medium leading-normal">
                        With 1 IVF Cycle
                    </div>
                </div>

                <div className="absolute inset-0 bottom-0 right-0 flex justify-end items-end">
                    <div className="relative w-[80%] md:w-[70%] max-w-[700px] aspect-square rounded-full opacity-70 bg-gradient-to-r from-[#3E9E51] blur-[120px]"></div>
                </div>

                <div className="absolute max-sm:top-[55%] md:right-0 bottom-0 w-[90%] max-w-[800px] xl:w-[90%] xl:max-w-[1000px] h-auto">
                    <img src={bgImage} alt="bgImage" className="" />
                </div>
            </div>
            <div className="flex sm:hidden bg-[#303030] justify-center items-center">
                <div className="flex justify-center items-center rounded-[6px] bg-[#D75555] px-[18px] py-[8px] text-[#fff] sm:mt-10">
                    Start private consultation
                    <img src={rightArrow} alt="right Arrow" />
                </div>
            </div>
        </>
    );
};

export default Result;
