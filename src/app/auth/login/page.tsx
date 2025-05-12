'use client'
import React from "react";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

const Page = () => {
    const router=useRouter();
  return (
    <div className="flex h-screen gap-8 flex-col md:flex-row">
      {/* left div */}
      <div className="flex flex-col justify-center items-start px-6 md:pl-24 md:pr-24 py-8 w-full md:w-auto">
        <div className="flex items-center mb-8">
          <Image
            src="/Login/Logo.png"
            width={40}
            height={40}
            alt="CTMS Logo"
            className="mr-2"
          />
          <span className="text-md font-semibold">CTMS</span>
        </div>

        <p className="text-xl md:text-2xl font-semibold mb-2">Welcome to</p>
        <p className="text-lg md:text-xl font-bold mb-8">
          Designer <br />
          The eCRF Builder
        </p>

        <div className="w-full space-y-4">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            className="w-full py-3 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F3F4F6]"
          />

          <div className="w-full flex justify-end">
            <Button
              variant="outline"
              className="text-xs py-0 px-4 border border-blue-500 text-white bg-[#636AE8] hover:bg-blue-50 focus:outline-none"
            >
              Send OTP
            </Button>
          </div>

          <Label htmlFor="otp">OTP</Label>

          <InputOTP maxLength={6} className="w-full">
            <InputOTPGroup className="flex justify-center space-x-2">
              {[0, 1, 2].map((i) => (
                <InputOTPSlot
                  key={i}
                  index={i}
                  className="w-12 h-12 border border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F3F4F6]"
                />
              ))}
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup className="flex justify-center space-x-2">
              {[3, 4, 5].map((i) => (
                <InputOTPSlot
                  key={i}
                  index={i}
                  className="w-12 h-12 border border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F3F4F6]"
                />
              ))}
            </InputOTPGroup>
          </InputOTP>

          <Button
            variant="default"
            className="w-full py-3 px-4 bg-[#636AE8] text-white hover:bg-blue-600 focus:outline-none"
            onClick={()=>router.push('/iwrs/home')}
          >
            Login
          </Button>
        </div>

        <p className="text-sm mt-8 text-gray-500">Contact Support</p>
      </div>

      {/* right div - only visible on md and up */}
      <div className="hidden md:flex flex-1 p-0 justify-center items-center overflow-hidden relative">
        <Image
          src="/Login/Bg.png"
          fill
          alt="Background"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Page;
