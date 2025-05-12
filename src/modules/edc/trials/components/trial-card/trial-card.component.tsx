import React from "react";
import { useRouter } from "next/navigation";
import { ITrial } from "../../types/trial.types";
import { useDispatch } from "react-redux";
import { setActiveTrialId } from "@/lib/store/features/trialsSlice";
import { Button } from "@/components/ui/button";

interface TrialProps {
  data: ITrial
}

const TrialCard: React.FC<TrialProps> = ({ data }) => {
  const router = useRouter();
  const dispatch = useDispatch()

  const routeToTrialInfo = () => {
    dispatch(setActiveTrialId(data.id))
    router.push(`/edc/trials/${data.id}`)
  }

  return (
    <div className="w-[20rem] h-[20rem] rounded-3xl shadow-lg bg-zinc-100 p-5 flex flex-col justify-between border-4 border-white">
      <div className="flex justify-end">
        <p className="text-sm text-white bg-zinc-700 w-fit px-2 py-1 rounded-full">{data.sponsor}</p>
      </div>
      <div className="">
        <p>Therapeutic indication :</p>
        <p className="text-xs text-[#636ae8]" >{data.indication}</p>

        <h2 className="my-2">Phase: {data.phase}</h2>

        <h2 className="text-lg font-bold mt-2">{data.title}</h2>
        <h5 className="text-xs text-[#636ae8] mt-6">ID: {data.id}</h5>
        <div className="flex justify-between items-center">
          <h6 className="text-xs text-zinc-500 mt-2">{data.startdate}</h6>
          <Button onClick={routeToTrialInfo} className="text-sm text-white bg-[#636ae8]" >View</Button>
        </div>
      </div>
    </div>
  );
};

export default TrialCard;
