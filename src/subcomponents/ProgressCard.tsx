/* eslint-disable @typescript-eslint/no-explicit-any */
import { Progress } from '@mantine/core';

const ProgressCard = ({ pName, progressValue, dollarAmt, percent, hex } : any) => {
  return (
    <div className="w-full">
      <h3 className="md:text-[18px] text-[14px] text-[#22242C] font-[600] mb-3 leading-[26px]">
        {pName}
      </h3>
      <Progress color={hex} value={progressValue} />
      <div className="mt-[16px] flex justify-between items-center">
        <span className="md:text-[18px] text-[14px] text-[#525252] font-[400]">
          {dollarAmt}
        </span>
        <span className="md:text-[18px] text-[14px] text-[#525252] font-[400]">
          +{percent}%
        </span>
      </div>
    </div>
  );
}

export default ProgressCard
