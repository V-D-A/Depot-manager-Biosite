"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ITrial } from "../../types/trial.types";
// import { useDispatch } from "react-redux";
// import { setActiveTrialId } from "@/lib/store/features/trialsSlice";
import { Button } from "@/components/ui/button";

interface TrialProps {
  data: ITrial;
}

const TrialCard: React.FC<TrialProps> = ({ data }) => {
  const router = useRouter();
  // const dispatch = useDispatch();

  const routeToTrialInfo = () => {
    // dispatch(setActiveTrialId(data.id));
    router.push(`/edc/trials/${data.id}`);
  };
  console.log(data.startdate);

  return (
    <div className="rounded-2xl shadow-lg bg-zinc-100 p-5 relative min-w-[309px] max-w-[340px] border-2 border-gray-200">
     
      <p className="absolute top-4 right-4 text-[0.7rem] text-[#044372] font-medium bg-[#B2BDDF] px-2 rounded-full">
        {data.phase}
      </p>
      <div className="max-w-[50%] overflow-hidden">
        <span
          className="text-sm text-[#044372] font-medium hover:underline mt-6 leading-tight line-clamp-1 overflow-hidden"
        >
          {data.sponsor}
        </span>
      </div>
      <div>
       
        <h2 className="text-lg font-semibold text-black mt-20 leading-tight line-clamp-2">
          {data.title}
        </h2>
        <div className="flex justify-between">
        
          <div>
            <p className="text-sm text-[#044372] mt-2">
              ID: {String(data.id).slice(0, 5)}
            </p>
            <p className="text-sm text-[#9CA3AF]">
              {new Date(data.startdate).toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })}
            </p>
          </div>

         
          <div className="flex justify-end mt-4">
            <Button
              variant="default"
              className="bg-[#42589D] text-white text-sm px-4 py-2 rounded-lg"
              onClick={routeToTrialInfo}
            >
              View
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrialCard;
