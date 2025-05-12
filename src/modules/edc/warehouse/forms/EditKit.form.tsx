"use client";
import React, { useState } from "react";
import { CheckCircle, Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
// import { GeneralInfoForm, MoreInfoOneForm, MoreInfoTwoForm } from "../types/warehouse.type";
export interface GeneralInfoForm {
  kitId: string;
  kitName: string;
  kitDescription: string;
  kitType: string;
}

export interface MediaItem {
    url: string;
  }

  export interface MoreInfoOneForm {
  lotNumber: string;
  expirationDate: string;
  storageConditions: string;
}

export interface MoreInfoTwoForm {
    quantity: string;
    unitOfMeasure: string;
    specialInstructions: string;
    kitStatus:string;
  }

const defaultGeneralInfo: GeneralInfoForm = {
  kitId: "",
  kitName: "",
  kitDescription: "",
  kitType: "",
};

const defaultMoreInfoOne: MoreInfoOneForm = {
  lotNumber: "",
  expirationDate: "",
  storageConditions: "",
};

const defaultMoreInfoTwo: MoreInfoTwoForm = {
  quantity: "",
  unitOfMeasure: "",
  specialInstructions: "",
  kitStatus: "",
};

export default function EditKitForm() {
  const [generalInfo, setGeneralInfo] = useState(defaultGeneralInfo);
  const [media, setMedia] = useState<string[]>([]);
  const [MoreInfoOne, setMoreInfoOne] = useState(defaultMoreInfoOne);
  const [MoreInfoTwo, setMoreInfoTwo] = useState(defaultMoreInfoTwo);

  const handleGeneralInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setGeneralInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleMoreInfoOneChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMoreInfoOne((prev) => ({ ...prev, [name]: value }));
  };

  const handleMoreInfoTwoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMoreInfoTwo((prev) => ({ ...prev, [name]: value }));
  };

  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
      setMedia((prev) => [...prev, ...filesArray]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 mb-4 px-4 flex flex-col lg:flex-row gap-6">
      {/* Left Section */}
      <div className="flex-1 flex flex-col gap-6 bg-white p-4">

        {/* Kit Name Section */}
        <div className="flex flex-col gap-2">
          <span className="flex items-center gap-2 font-semibold text-lg">
            <CheckCircle className="text-green-500" /> Kit Name
          </span>

          <div className="flex flex-col gap-4">
            <div>
              <Label>Kit ID</Label>
              <Input
                name="kitId"
                value={generalInfo.kitId}
                onChange={handleGeneralInfoChange}
                placeholder="#123213"
                className="bg-[#F3F4F6]"
              />
            </div>
            <div>
              <Label>Kit Name</Label>
              <Input
                name="kitName"
                value={generalInfo.kitName}
                onChange={handleGeneralInfoChange}
                placeholder="Drug X Starter Kit"
                className="bg-[#F3F4F6]"
              />
            </div>
            <div>
              <Label>Kit Description</Label>
              <Textarea
                name="kitDescription"
                value={generalInfo.kitDescription}
                onChange={handleGeneralInfoChange}
                placeholder="Lorem ipsum dolor sit amet..."
                className="bg-[#F3F4F6]"
              />
            </div>
            <div>
              <Label>Kit Type</Label>
              <Input
                name="kitType"
                value={generalInfo.kitType}
                onChange={handleGeneralInfoChange}
                placeholder="Treatment Kit"
                className="bg-[#F3F4F6]"
              />
            </div>
          </div>
        </div>

        {/* More Information Section */}
        <div className="flex flex-col gap-2">
          <span className="flex items-center gap-2 font-semibold text-lg">
            <CheckCircle className="text-green-500" /> More Information
          </span>

          <div className="flex flex-col gap-4">
            <div>
              <Label>Lot Number</Label>
              <Input
                name="lotNumber"
                value={MoreInfoOne.lotNumber}
                onChange={handleMoreInfoOneChange}
                placeholder="#123213"
                className="bg-[#F3F4F6]"
              />
            </div>
            <div>
              <Label>Expiration Date</Label>
              <Input
                type="date"
                name="expirationDate"
                value={MoreInfoOne.expirationDate}
                onChange={handleMoreInfoOneChange}
                className="bg-[#F3F4F6]"
              />
            </div>
            <div>
              <Label>Storage Conditions</Label>
              <Textarea
                name="storageConditions"
                value={MoreInfoOne.storageConditions}
                onChange={handleMoreInfoOneChange}
                placeholder="Lorem ipsum dolor sit amet..."
                className="bg-[#F3F4F6]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 rounded-lg border border-gray-200 bg-white p-5 shadow-sm flex flex-col gap-6">
      {/* Media Section */}
        <div className="flex flex-col gap-2">
          <span className="flex items-center gap-2 font-semibold text-lg">
            <CheckCircle className="text-green-500" /> Media
          </span>

          <div className="flex gap-4 py-2">
            {media.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Uploaded ${index}`}
                className="h-20 w-20 rounded object-cover"
              />
            ))}
            <label className="h-20 w-20 flex items-center justify-center border-2 border-dashed cursor-pointer">
              +
              <input
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleMediaUpload}
                className="hidden"
                multiple
              />
            </label>
          </div>

          <p className="flex gap-2 text-sm text-blue-600 mt-2 bg-[#F1F8FD] py-5 px-3 rounded-md">
            <Info size={20} />
            <span className="text-[#303439]">Use PNG and JPEG format images.</span>
          </p>
        </div>

        {/* Other Fields */}
        <div className="flex flex-col gap-4">
          <div>
            <Label>Quantity</Label>
            <Input
              name="quantity"
              value={MoreInfoTwo.quantity}
              onChange={handleMoreInfoTwoChange}
              placeholder="#123213"
              className="bg-[#F3F4F6]"
            />
          </div>
          <div>
            <Label>Unit of Measure</Label>
            <Input
              name="unitOfMeasure"
              value={MoreInfoTwo.unitOfMeasure}
              onChange={handleMoreInfoTwoChange}
              placeholder="12-12-12"
              className="bg-[#F3F4F6]"
            />
          </div>
          <div>
            <Label>Special Instructions</Label>
            <Textarea
              name="specialInstructions"
              value={MoreInfoTwo.specialInstructions}
              onChange={handleMoreInfoTwoChange}
              placeholder="Any special handling or storage instructions."
              className="bg-[#F3F4F6]"
            />
          </div>
          <div>
            <Label>Kit Status</Label>
            <Input
              name="kitStatus"
              value={MoreInfoTwo.kitStatus}
              onChange={handleMoreInfoTwoChange}
              placeholder="Available"
              className="bg-[#F3F4F6]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
