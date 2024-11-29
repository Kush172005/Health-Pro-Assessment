import React from "react";
import logo from "../../assests/Icons/logo.svg";
import rightArrow from "../../assests/Icons/arrow-right.svg";
import threeLines from "../../assests/Icons/ThreeLines.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="fixed cursor-pointer top-0 left-0 right-0 z-50 flex justify-center max-md:justify-between max-md:px-[5%] items-center w-full py-[7px] bg-[#fff] border-[1px] border-[#E6E3D2] gap-[5%]">
                <div
                    onClick={() => navigate("/")}
                    className="flex flex-shrink items-center gap-1 my-2"
                >
                    <div className="max-sm:w-[64px]">
                        <img src={logo} alt="IVF-logo" />
                    </div>
                    <div className="text-[#1E231E] font-poppins text-4xl max-xl:text-3xl max-md:text-2xl font-medium leading-[1.2]">
                        Pulse
                    </div>
                </div>
                <div className="flex max-md:hidden">
                    <div className="flex text-center justify-center items-center text-base font-medium font-poppins gap-[15px] ">
                        <div className="mx-[10px]">Donor Programme</div>
                        <div className="mx-[10px]">Fertility Preservation</div>
                        <div className="mx-[10px]">Advanced Treatments</div>
                        <div className="mx-[10px]">Infertility Treatments</div>
                        <div className="mx-[10px]">IVF Testing</div>
                        <div className="mx-[10px]">About Us</div>
                        <div className="flex justify-center items-center px-[18px] gap-[6px] py-[8px] text-[#fff] rounded-[6px] bg-[#D75555] max-xl:hidden">
                            Talk to Us
                            <img src={rightArrow} alt="right Arrow" />
                        </div>
                    </div>
                </div>
                <div className="md:hidden">
                    <img src={threeLines} alt="hamburger" />
                </div>
            </div>

            <div className=" h-[60px] md:h-[65px]"></div>
        </div>
    );
};

export default Header;
