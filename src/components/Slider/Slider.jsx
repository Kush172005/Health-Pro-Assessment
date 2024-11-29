import { useState } from "react";

export default function Slider() {
    const [value, setValue] = useState(2);

    return (
        <div className="w-full max-w-[375px] mx-auto sm:pt-8 bg-[#FCFAF5]">
            <div className="relative pt-8">
                <div
                    className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-[#F48265] ml-3 text-white rounded-lg px-3 py-1 text-lg font-bold"
                    style={{
                        left: `${((value - 1) / 4) * 94}%`, // Adjust for correct percentage
                    }}
                >
                    {value}
                </div>

                <div className="relative h-2 bg-[#F3F4F6] rounded-full">
                    <div
                        className="absolute h-full bg-[#F48265] rounded-full "
                        style={{
                            width: `${((value - 1) / 4) * 100}%`,
                        }}
                    ></div>

                    <div
                        className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-[#F48265] rounded-full shadow-md z-[100]"
                        style={{
                            left: `${((value - 1) / 4) * 94}%`,
                        }}
                    ></div>

                    <div className="absolute w-full flex justify-between px-1 top-1/2 -translate-y-1/2">
                        <div className="w-1 h-1 bg-[#D1D5DB] rounded-full"></div>
                        <div className="w-1 h-1 bg-[#D1D5DB] rounded-full"></div>
                        <div className="w-1 h-1 bg-[#D1D5DB] rounded-full"></div>
                        <div className="w-1 h-1 bg-[#D1D5DB] rounded-full"></div>
                        <div className="w-1 h-1 bg-[#D1D5DB] rounded-full"></div>
                    </div>
                </div>

                <input
                    type="range"
                    min={1}
                    max={5}
                    value={value}
                    onChange={(e) => setValue(parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
            </div>
        </div>
    );
}
