import React, { useState } from "react";
import radioButton from "../../assests/Icons/RadioButton.svg";
import radioButtonFilled from "../../assests/Icons/RadioButtonFilled.svg";
import emptySquare from "../../assests/Icons/emptySquare.svg";
import squareFilled from "../../assests/Icons/CheckSquareFilled.svg";
import Slider from "../Slider/Slider";
import { useNavigate } from "react-router-dom";

const RateCalculator = () => {
    const [selectedAge, setSelectedAge] = useState("");
    const [selectedConditions, setSelectedConditions] = useState([]);

    const navigate = useNavigate();

    const handleAgeSelection = (value) => {
        setSelectedAge(value);
    };

    const handleConditionSelection = (condition) => {
        if (selectedConditions.includes(condition)) {
            setSelectedConditions(
                selectedConditions.filter((c) => c !== condition)
            );
        } else {
            setSelectedConditions([...selectedConditions, condition]);
        }
    };

    return (
        <div className="flex justify-center items-center bg-[#FCFAF5] sm:py-20 py-10 max-sm:px-[5%]">
            <div className="flex justify-center sm:items-center flex-col gap-5 text-[#1E231E] font-poppins">
                <div className="sm:text-[28px] text-lg font-medium">
                    Which age range applies to you?
                </div>

                <div className="gap-5 flex max-sm:flex-col ">
                    <div
                        className="flex sm:gap-3 items-center cursor-pointer gap-[10px]"
                        onClick={() => handleAgeSelection("under30")}
                    >
                        <img
                            src={
                                selectedAge === "under30"
                                    ? radioButtonFilled
                                    : radioButton
                            }
                            alt="Under 30"
                        />
                        Under 30
                    </div>
                    <div
                        className="flex sm:gap-3 items-center cursor-pointer gap-[10px]"
                        onClick={() => handleAgeSelection("between30to34")}
                    >
                        <img
                            src={
                                selectedAge === "between30to34"
                                    ? radioButtonFilled
                                    : radioButton
                            }
                            alt="Between 30-34"
                        />
                        Between 30 - 34
                    </div>
                    <div
                        className="flex sm:gap-3 items-center cursor-pointer gap-[10px]"
                        onClick={() => handleAgeSelection("between35to37")}
                    >
                        <img
                            src={
                                selectedAge === "between35to37"
                                    ? radioButtonFilled
                                    : radioButton
                            }
                            alt="Between 35-37"
                        />
                        Between 35 - 37
                    </div>
                </div>

                <div className="gap-5 flex max-sm:flex-col ">
                    <div
                        className="flex sm:gap-3 items-center cursor-pointer gap-[10px]"
                        onClick={() => handleAgeSelection("between38to40")}
                    >
                        <img
                            src={
                                selectedAge === "between38to40"
                                    ? radioButtonFilled
                                    : radioButton
                            }
                            alt="Between 38-40"
                        />
                        Between 38 - 40
                    </div>
                    <div
                        className="flex sm:gap-3 items-center cursor-pointer gap-[10px]"
                        onClick={() => handleAgeSelection("between41to43")}
                    >
                        <img
                            src={
                                selectedAge === "between41to43"
                                    ? radioButtonFilled
                                    : radioButton
                            }
                            alt="Between 41-43"
                        />
                        Between 41 - 43
                    </div>
                    <div
                        className="flex sm:gap-3 items-center cursor-pointer gap-[10px]"
                        onClick={() => handleAgeSelection("above43")}
                    >
                        <img
                            src={
                                selectedAge === "above43"
                                    ? radioButtonFilled
                                    : radioButton
                            }
                            alt="Above 43"
                        />
                        Above 43
                    </div>
                </div>
                <div className="flex flex-col justify-center sm:items-center mt-11">
                    <div className="sm:text-[28px] text-lg font-medium ">
                        Number of IVF Cycles?
                    </div>
                </div>

                <Slider />

                <div className="flex flex-col justify-center sm:items-center mt-11">
                    <div className="sm:text-[28px] text-lg font-medium">
                        Have you undergone these procedures before?
                    </div>
                    <div className="flex flex-wrap gap-[10px] sm:gap-[80px] mt-[10px] sm:mt-6">
                        <div className="flex gap-6 justify-center items-center ">
                            <div className="sm:text-xl sm:font-[550] font-semibold text-base">
                                ICSI Procedure:
                            </div>
                            <div className="flex gap-3 ">
                                <div className="flex justify-center gap-3 items-center cursor-pointer">
                                    <img src={radioButton} alt="radio" />
                                    Yes
                                </div>
                                <div className="flex justify-center gap-3 items-center cursor-pointer">
                                    <img src={radioButton} alt="radio" />
                                    No
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-6 justify-center items-center">
                            <div className="sm:text-xl sm:font-[550] font-semibold text-base">
                                PGT Testing:
                            </div>
                            <div className="flex gap-3">
                                <div className="flex justify-center gap-3 items-center cursor-pointer">
                                    <img src={radioButton} alt="radio" />
                                    Yes
                                </div>
                                <div className="flex justify-center gap-3 items-center cursor-pointer">
                                    <img src={radioButton} alt="radio" />
                                    No
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center max-sm:items-start items-center mt-11">
                    <div className="sm:text-[28px] text-lg font-medium">
                        Do you have any of these medical conditions?
                    </div>
                    <div className="flex max-sm:flex-col gap-[10px] sm:gap-12 mt-6">
                        {[
                            "PCOS",
                            "Endometriosis",
                            "Low Ovarian Reserve",
                            "Male Factor Infertility",
                        ].map((condition) => (
                            <div
                                key={condition}
                                className="flex gap-3 items-center cursor-pointer"
                                onClick={() =>
                                    handleConditionSelection(condition)
                                }
                            >
                                <img
                                    src={
                                        selectedConditions.includes(condition)
                                            ? squareFilled
                                            : emptySquare
                                    }
                                    alt={condition}
                                />
                                {condition}
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    onClick={() =>
                        navigate("/Home/IVF-Success-Rate-Calculator/Result")
                    }
                    className="flex justify-center items-center cursor-pointer"
                >
                    <div className="flex flex-col justify-center items-center w-[147px] h-[47px] flex-shrink-0 rounded-[6px] bg-[#D75555] px-[18px] py-[8px] text-[#fff] mt-[10px] sm:mt-10">
                        Calculate
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RateCalculator;
