import { Blend, BriefcaseMedical, Pill, Syringe } from "lucide-react";
import React from "react";
import { useFetchAllDrugs } from "../../hooks/useDrugs";

interface Props{
    trialId:string
}
const DrugInformation:React.FC<Props> = ({trialId}) => {
    const {data:drugDetails} = useFetchAllDrugs(trialId);
    console.log(drugDetails);
    console.log((drugDetails?.data));


    const apiData = drugDetails?.data?.data?.[0] || {};
    console.log(apiData);
   
    const drugInfo = [
        {
          title: "Investigational Product",
          icons: <BriefcaseMedical size={16} />,
          value: apiData. investigational_product || "N/A",
        },
        {
          title: "Drug Dose",
          icons: <Pill size={16} />,
          value: apiData.drug_dose || "N/A",
        },
        {
          title: "Comparator",
          icons: <Syringe size={16} />,
          value: apiData.comparator || "N/A",
        },
        {
          title: "Mode of Administration",
          icons: <Blend size={16} />,
          value: apiData.administration_mode || "N/A",
        },
      ];
    
    
    return (
        <div className="p-6 rounded-xl shadow border">
            <h2 className="text-lg font-bold">Drug Information</h2>

            <div className="flex flex-col gap-4 mt-4">
                {drugInfo.map((info, index) => (
                    <div key={index} className="grid gap-2 grid-cols-2">
                        <div>
                            <div className="flex gap-2 items-center text-gray-500 font-semibold">
                                <span >{info.icons}</span>
                                <p > {info.title}</p>
                            </div>
                        </div>
                        <p>{info.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DrugInformation;
