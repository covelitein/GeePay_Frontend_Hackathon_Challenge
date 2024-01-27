/* eslint-disable @typescript-eslint/no-explicit-any */
import { PiTrendDown, PiTrendUp } from "react-icons/pi";

const AnalyticsCard = ({ areaGraph, h, num, percent, icon, isEven, isFirst } : any) => {
  return (
    <main className="p-[16px] rounded-[14px] bg-white ">
      <div className="flex justify-between items-center mb-5 gap-[6px]">
        {isFirst ? (
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="#E6E6E6"
            >
              <circle
                cx="20"
                cy="20"
                r="19.6429"
                stroke="#E6E6E6"
                strokeWidth="0.714286"
              />
            </svg>
            <div className="absolute top-[6px] left-[6px] bg-white h-[28px] w-[28px] rotate-[45deg]">
              <div className="-rotate-[45deg]">{icon}</div>
            </div>
          </div>
        ) : (
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <circle
                cx="20"
                cy="20"
                r="19.6429"
                stroke="#E6E6E6"
                stroke-width="0.714286"
              />
            </svg>
            <div className="absolute top-2 left-2">{icon}</div>
          </div>
        )}
        <img src={areaGraph} alt="" />
      </div>
      <div>
        <h3 className="text-[18px] font-[500]">{h}</h3>
        <h2 className="text-[24px] font-[600]">{num}</h2>
        <div className="flex items-center gap-1">
          <div
            className={`py-[4px] px-[8px] flex items-center gap-[2px] rounded-full ${
              isEven ? "bg-[rgba(237,84,78,0.12)]" : "bg-[rgba(52,202,165,0.12)]"
            } `}
          >
            {isEven ? (
              <PiTrendDown className={`text-[#ED544E]`} />
            ) : (
              <PiTrendUp className={`text-[#34CAA5]`} />
            )}
            <span
              className={`${
                isEven ? "text-[#ED544E]" : "text-[#34CAA5]"
              } text-[12px]`}
            >
              {percent}%
            </span>
          </div>
          <h3 className="text-[12px] font-[400] mb-1 font-[int]">
            vs. previous month
          </h3>
        </div>
      </div>
    </main>
  );
};

export default AnalyticsCard