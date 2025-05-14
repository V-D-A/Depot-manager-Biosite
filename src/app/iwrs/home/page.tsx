"use client";

import React from "react";
import Image from "next/image";
// import Link from "next/link";
// import { Search, SquarePlus,  PlusCircle   } from "lucide-react";
// import { Input } from "@/components/ui/input";
import { ITrial } from "@/components/trialCard/types/trial.types";
import TrialCard from "@/components/trialCard/TrialCard";
// import TrialCard from "@/modules/edc/trials/components/trial-card/trial-card.component";

const trials: ITrial[] = [
  {
    id: "0",
    title: "Trial A",
    phase: "Phase 1",
    indication: "Cancer",
    sponsor: "Pfizer",
    startdate: "2025-04-01",
  },
  {
    id: "1",
    title: "Trial B",
    phase: "Phase 2",
    indication: "Diabetes",
    sponsor: "Moderna",
    startdate: "2025-05-15",
  },
  {
    id: "2",
    title: "Trial C",
    phase: "Phase 3",
    indication: "Hypertension",
    sponsor: "Roche",
    startdate: "2025-06-10",
  },
];
const Home = () => {
   
    // const [isDialogOpen, setIsDialogueOpen] = useState(false);

    const org_name="AERIAL BORNE"
    return (
        <>
            <div className="min-h-[80dvh] flex-1 px-8 relative overflow-hidden">
                {/* upper bar */}
                <div className="flex justify-between py-4">
                    <div className="flex gap-2 items-center">
                        <Image
                            className="w-12"
                            width={1000}
                            height={1000}
                            alt="acc"
                            src="/Home/org.png"
                        />
                        <div>
                            <p className="text-sm">Account</p>
                            <h2 className="text-xl">{org_name}</h2>
                        </div>
                    </div>

                </div>

                
              

                {/* if trials exists show all trials*/}
                <div className=" mt-10">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-10">
                            <h2 className="text-2xl font-bold">All Trials</h2>
                            {/* <div className="flex items-center gap-2 bg-white rounded-full px-2 border-2 border-zinc-400">
                                <Search />
                                <Input
                                    className="w-[330px] border-none focus:outline-none focus:ring-0 focus:border-none"
                                    type="search"
                                    name="search"
                                    id="search"
                                    placeholder="Search..."
                                />
                            </div> */}
                        </div>
                        {/* <Filter /> */}
                    </div>

                    <div className=" flex flex-wrap gap-4 mt-8">
                        {trials.map((trial, index) => (
                            <TrialCard key={index} data={trial}/>
                           
                        ))}
                    </div>
                </div>
            </div>
            {/* {userData && (
                <OrganisationUserForm
                    isDialogOpen={isDialogOpen}
                    toggleDialogueState={toggleDialogueState}
                    userData={userData}
                />
            )} */}
        </>
    );
};

export default Home;
