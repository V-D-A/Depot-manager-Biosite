import Avatar from "@/components/avatar/Avatar";
import { PencilLine, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
import { ITrialDetailsCard } from "../../types/trial.types";

type TrialdDetailsCardProps = ITrialDetailsCard;

const TrialDetailsCard: React.FC<TrialdDetailsCardProps> = (props) => {
  return (
    <>
      <div className="bg-white px-7 py-5 rounded shadow-md">
        <div className="flex justify-between items-center py-5 ">
          <div className="flex gap-5 items-center">
            <h4 className="text-sm">Clinical Trial Documents</h4>
            <h3 className="text-zinc-400">{props?.media?.length || 0}</h3>
          </div>
          <Plus
            size={36}
            className="bg-gray-200 p-2 rounded-full cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-3 border-b-2 border-b-zinc-300 border-dotted pb-5">
          {props?.media?.map((doc, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-2 border-zinc-200 p-3 rounded-lg"
              onClick={() => window.open(doc.url, "_blank")}
            >
              <div className="flex items-center gap-3">
                <div className="w-[3rem] h-[3rem]">
                  <Image
                    src="/images/pdflogo.png"
                    alt="PDF"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <h5 className="text-sm text-black">{doc.filename}</h5>
                  <h4 className="text-xs text-zinc-500">
                    Uploaded:
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    }).format(new Date(doc.createdAt))}
                  </h4>
                  <h4 className="text-xs text-zinc-500">
                    Last Updated:
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    }).format(new Date(doc.updatedAt))}
                  </h4>
                </div>
              </div>
              <div
                className={`text-xs font-medium rounded-full px-4 py-1 ${
                  doc.filetype === "protocol"
                    ? "bg-[#f1f8fd] text-[#379ae6]"
                    : "bg-[#eefdf3] text-[#2b8a4a]"
                }`}
              >
                {doc.filetype}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center ">
          <div className="flex gap-4 items-center py-5">
            <h3 className="text-sm text-zinc-500">Indication</h3>
            <p className="bg-gray-200 rounded-sm px-2 py-1 text-sm text-gray-700">
              {props?.disease}
            </p>
          </div>
          <PencilLine
            size={32}
            className="bg-gray-200 p-2 rounded-full cursor-pointer"
            onClick={() => {
              props.setShowIndicationModal?.(!props.showIndicationModal);
            }}
          />
        </div>
        <div className="flex justify-between items-center pb-5 border-b-2 border-b-zinc-300 border-dotted">
          <h4 className="text-sm text-zinc-500">Start date</h4>
          <h3 className="text-sm translate-x-[-2rem]">
            {props?.startDate
              ? new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                }).format(new Date(props.startDate))
              : "N/A"}
          </h3>
          <h4 className="text-sm text-zinc-500">End date</h4>
          <h3 className="text-sm translate-x-[-2rem]">
            {props?.endDate
              ? new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                }).format(new Date(props.endDate))
              : "Ongoing"}
          </h3>
        </div>

        <div className="flex justify-between items-center my-2 ">
          <h3 className="text-sm text-zinc-500">Study Type</h3>
          <p className="bg-gray-200 rounded-sm px-2 py-1 text-sm text-gray-700">
            {props?.studyType}
          </p>
        </div>

        <div className="flex justify-between items-center my-2">
          <h3 className="text-sm text-zinc-500">Study Arms</h3>
          <p className="bg-gray-200 rounded-sm px-2 py-1 text-sm text-gray-700">
            {props?.studyArms}
          </p>
        </div>

        <div className="flex justify-between items-center ">
          <h3 className="text-sm text-zinc-500">No. of Kits</h3>
          <p className="bg-gray-200 rounded-sm px-2 py-1 text-sm text-gray-700">
            {props?.kitsCount}
          </p>
        </div>

        <div className="flex justify-between items-center border-b-2 border-b-zinc-300 border-dotted py-2">
          <h3 className="text-sm text-zinc-500">No. of Subjects</h3>
          <p className="bg-gray-200 rounded-sm px-2 py-1 text-sm text-gray-700">
            {props?.subjectsCount}
          </p>
        </div>

        <div className="flex justify-between items-center border-b-2 border-b-zinc-300 border-dotted py-2">
          <div className="w-full">
            <h3 className="text-sm text-zinc-500">Comparator Details</h3>

            <div className="flex flex-col gap-3 w-full ">
              {props?.comparatorDetails ? (
                props.comparatorDetails.map((comp, index) => (
                  <div
                    key={index}
                    className="mt-1 flex flex-col gap-2 border-2 rounded-md p-2 w-full"
                  >
                    <div className="flex items-center justify-between w-full">
                      <h4 className="text-sm text-zinc-500 w-fit">
                        Comparator Name
                      </h4>
                      <p className="bg-gray-200 rounded-sm px-2 py-1 text-sm text-gray-700">
                        {comp.name || "N/A"}
                      </p>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <h4 className="text-sm text-zinc-500 w-40">
                        Comparator Units
                      </h4>
                      <p className="bg-gray-200 rounded-sm px-2 py-1 text-sm text-gray-700">
                        {comp.units || "N/A"}
                      </p>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <h4 className="text-sm text-zinc-500 w-40">
                        Comparator Dosage
                      </h4>
                      <p className="bg-gray-200 rounded-sm px-2 py-1 text-sm text-gray-700">
                        {comp.dosage || "N/A"}
                      </p>
                    </div>
                 
                  </div>
                ))
              ) : (
                <p className="text-sm text-zinc-400">
                  No comparator details available.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center py-5">
            <Avatar text="Study Sponsor" backgroundColor="#044372" />
            <h2 className="font-bold text-[#8B919E] text-xl">
              {props?.sponsor}
            </h2>
          </div>
          <PencilLine
            size={32}
            className="bg-gray-200 p-2 rounded-full cursor-pointer"
            onClick={() => {
              props.setShowSponsorModal?.(!props.showSponsorModal);
            }}
          />
        </div>
        {/* <h6 className="text-sm text-zinc-600 flex items-center gap-2 mb-3 font-medium">
        <Mail size={20} /> {props?.email}
      </h6>
      <h6 className="text-sm text-zinc-600 flex items-center gap-2 mb-3 font-medium">
        <Phone size={20} /> {props?.phone}
      </h6> */}
        {/* <h6 className="text-sm text-zinc-600 flex items-center gap-2 mb-3 font-medium">
        <Building2 size={20} />
        {props?.sponsor}
      </h6> */}
      </div>
    </>
  );
};

export default TrialDetailsCard;
