'use client'
import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
  // import { useSelector } from "react-redux";
import EditKitForm from "../forms/EditKit.form";
// import { RootState } from "@/lib/store/store";
// import EditKitForm from "../forms/EditKit.form";

interface Props{
  kitId:string;
}

const EditKitPage: React.FC<Props> = ({ kitId })  => {
   console.log(kitId)
    // const trialId=useSelector((state:RootState)=>state.trial.activeTrialId);

  return (
    <div className=" text-[#171A1F]">
       <div className="border-b-2 border-[#BDC1CA] p-4 ">
        <Breadcrumb>
          <BreadcrumbList>
            
            <BreadcrumbItem>
              <BreadcrumbLink 
              // href={`/iwrs/home`}
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink 
              // href={`/edc/warehouse`}
              >
                Warehouse
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink 
              // href={`/edc/warehouse/trials/${trialId}`}
              >
                Trial
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Edit Kit</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        </div>
        <div className="px-6 pt-6">
      <h1 className="text-xl font-bold ">Kit Name</h1>
      
      <EditKitForm />
     
      </div>
    </div>
  );
};

export default EditKitPage;
