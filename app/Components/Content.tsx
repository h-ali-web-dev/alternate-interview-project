"use client";
import SelectCard from "./SelectCard";

interface ContentInterface {
  isClient: boolean;
  onChange: (val: boolean) => void;
}

export default function Content({ isClient, onChange }: ContentInterface) {
  return (
    <div className=" mx-10 p-16 bg-white">
      <h1 className="text-center font-semibold text-[32px] leading-[44px] mb-4 mt-1 text-[#23272E]">
        Welcome to Cadhero
      </h1>
      <p className="text-center text-balance font-normal text-lg text-[#7F8694] mb-10">
        Welcome to the home page of Cadhero, your trusted partner in the
        <br />
        world of architectural labor exchange. Join as a client or freelancer:
      </p>
      <div className="flex gap-10 mb-[50px] justify-center">
        <div className="flex" onClick={() => onChange(false)}>
          <SelectCard
            message={`I'm a freelancer looking for work`}
            selected={isClient ? false : true}
          />
        </div>
        <div className="flex" onClick={() => onChange(true)}>
          <SelectCard
            message={`I am a customer seeking services for a project`}
            selected={isClient ? true : false}
          />
        </div>
      </div>
      <div className="max-w-[384px] w-full h-[52px] py-4 px-32 bg-[#7E8493] mx-auto rounded-[3px] font-semibold text-[15px] leading-[17px] mb-5">
        <div className="text-white font-semibold text-[15px] leading-[17px] text-center">
          Create account
        </div>
      </div>
      <div className="text-center text-[#9AA0AF] text-[15px] leading-[17px] mb-3">
        Already have an account?{" "}
        <span className=" underline font-semibold text-[#7E8493]">Log In</span>
      </div>
    </div>
  );
}
