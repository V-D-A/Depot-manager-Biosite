"use client";

import React, { useState } from "react";
// import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
// import { useFetchTrialDetails } from "@/modules/edc/trials/hooks/useTrials";
// import DrugInfoForm from "../../forms/drug-info-form/drug-info-form.component";
// import Site from "../../components/site-list/site-list.component";
// import DrugInformation from "../../components/drug-information/drug-information.component";
// import EcrfFormsList from "../../../visits/components/ecrf-forms-list/ecrf-forms-list.component";
import TrialDetailsCard from "../../components/trial-details-card/trial-details-card.component";
// import { ISiteDataResponse } from "@/modules/edc/sites/types/site.type";
// import { useFetchSitesByTrial } from "@/modules/edc/sites/hooks/useSite";
// import { SponsorDetailsModal } from "../../components/sponsor-details-modal/sponsor-details-modal";
// import { IndicationModal } from "../../components/indication-modal/indication-modal";
// import { TrialNameModal } from "../../components/trial-name-modal/trial-name-modal";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
// import { useDispatch } from "react-redux";
import { PencilLine } from "lucide-react";
import { ITrial } from "@/components/trialCard/types/trial.types";
import Inventory from "../../components/inventory/Inventory";
import Site from "../../components/site-list/site-list.component";

interface Props {
  trialId: string;
}
export const trials: ITrial[] = [
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

const siteData=[
  {
    "id": "e87c3891-6264-4e31-8061-789776c9ad36",
    "siteName": "xvz site",
    "siteType": "Clinic",
    "address": "LINE 1a\nLINE 2",
    "city": "FBD",
    "country": "India",
    "pincode": "121006",
    "siteManager": {
      "name": "Ben",
      "email": null
    },
    "teamMembers": []
  },
  {
    "id": "1a58199a-7d4e-4169-86d5-98d480d84888",
    "siteName": "xvz site",
    "siteType": "Clinic",
    "address": "LINE 1a\nLINE 2",
    "city": "FBD",
    "country": "India",
    "pincode": "121006",
    "siteManager": null,
    "teamMembers": []
  },
  {
    "id": "abb94804-8269-4f59-95f7-9a48d8cbfe6b",
    "siteName": "new site",
    "siteType": null,
    "address": "LINE 1\nLINE 2",
    "city": "FBD",
    "country": "India",
    "pincode": "121006",
    "siteManager": null,
    "teamMembers": []
  }
]

// this is a trial info page based on the id
const sponsorCard=
  {
    "company": "ctest",
    "comparatorDetails": [],
    "description": "ctest",
    "disease": "ctest",
    "drugname": "ctest",
    "endDate": null,
    "indication": "ctest",
    "kitsCount": 9,
    "media": [],
    "phase": "Phase 4",
    "phone": null,
    "sponsor": null,
    "startDate": "2025-04-24T00:00:00+05:30",
    "studyArms": "2 : 1 : 1- Active : Comparator : Placebo",
    "studyType": "Double Blind",
    "subjectsCount": 7
  }
  
  

const TrialInfo: React.FC<Props> = ({ trialId }) => {
  console.log(trialId)
  const [showSponsorModel, setShowSponsorModal] = useState(false);
  const [showIndicationModel, setShowIndicationModel] = useState(false);

  return (
    <>
      <div className="bg-[#F3F3F3]">
      <div className="border-b-2 border-[#BDC1CA] p-4 ">
        <Breadcrumb>
          <BreadcrumbList>
            
            <BreadcrumbItem>
              <BreadcrumbLink href={`/edc/home`}>
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Trial</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        </div>



        <div className="px-6 pt-6 text-[#323743] flex justify-between">
          <div>
          <h1 className="font-bold text-xl mb-6">Study Information</h1>
          <p className="text-[#6F7787]">Phase 3</p>
          <p className="font-semibold">Phase III Randomized, Double-Blind, Placebo-Controlled Trial to Evaluate the Efficacy and Safety of [Drug Name] in Patients with [Disease]</p>
         
        </div>
        <div>
          <Button className="bg-[#DCE1F0] text-[#233055] px-6 cursor-pointe hover:text-white hover:bg-[#233055]" 
          ><PencilLine/>Edit</Button>
          </div>
      </div>







      <div className="flex gap-4 w-full h-auto p-4 px-6 overflow-auto">
         
         <div className="flex-1 bg-white shadow-md rounded-lg p-4">
             <Tabs defaultValue="inventory" className="">
               <TabsList>
               <TabsTrigger value="inventory">Inventory</TabsTrigger>
                 <TabsTrigger value="site">Site (0)</TabsTrigger>
                 <TabsTrigger value="drugInfo">Drug Information</TabsTrigger>
                 <TabsTrigger value="sent kits">Sent Kits</TabsTrigger>
               </TabsList>
               <TabsContent value="inventory">
                  <Inventory/>
               </TabsContent>
               <TabsContent value="site">
                 {/* Site component */}
                 <Site siteData={siteData} />
               </TabsContent>
               <TabsContent value="drugInfo">
                 {/* Drug info component */}
                 <Button
                   className="mb-4 mt-2 bg-[#044372]"
                   type="button"
                 >
                   Add Drug Information
                 </Button>
                 {/* <DrugInformation trialId={trialId} /> */}
                 {/* <DrugInfoForm
                 trialId={trialId}
                   showDrugInfoDialogue={showDrugInfoDialogue}
                   handleDrugFormClosure={handleDrugFormClosure}
                 /> */}
               </TabsContent>
 
               <TabsContent value="ecrf">
                 {/* ecrf info component */}
                 {/* <EcrfFormsList trialId={trialId} /> */}
               </TabsContent>
             </Tabs>
           </div>
 
           <div className=" w-[35%] bg-white shadow-md rounded-lg">
             {sponsorCard && (
               <TrialDetailsCard
                 {...sponsorCard}
                
                 setShowSponsorModal={setShowSponsorModal}
                 showSponsorModal={showSponsorModel}
                 setShowIndicationModal={setShowIndicationModel}
                 showIndicationModal={showIndicationModel}
               />
             )}
           </div>
          
 
        
         </div>

     </div>
      {/* <TrialNameModal
        isOpen={showTrialNameModal}
        setIsOpen={setShowTrialNameModal}
      />
      <IndicationModal
        isOpen={showIndicationModel}
        setIsOpen={setShowIndicationModel}
      />
      <SponsorDetailsModal
        isOpen={showSponsorModel}
        setIsOpen={setShowSponsorModal}
      /> */}
    
    </>
);
}

export default TrialInfo;
