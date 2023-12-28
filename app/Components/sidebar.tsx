/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Sidebar() {
  const list = [
    "Unlimited Support",
    "Deployment Success Plan",
    "Dedicated Customer Success Manager",
  ];
  return (
    <div className="relative p-10 h-screen bg-sidebarGrey flex items-center overflow-y-hidden">
      <div className="px-20">
        <h1 className="text-[32px] leading-10 text-white font-semibold">
          Complete a brief sign up to receive your first project
        </h1>
        <p className="text-lg font-normal text-[#949AA9] mb-10 mt-6">
          In just a few minutes, you'll see why so many modern organizations use
          Haystack to keep employees engaged, informed, and connected.
        </p>
        <ul className="space-y-5">
          {list.map((item, index) => (
            <li key={index} className="text-white font-semibold text-lg">
              <Image
                src="/Check.svg"
                alt="Check"
                className="inline-flex mr-5"
                width={24}
                height={24}
              />
              {item}
            </li>
          ))}
        </ul>
        <div className="border border-[#4A4F5B] my-10"></div>
        <p className="italic font-[300] text-[24px] leading-[36px] text-[#949AA9] mb-10">
          “ I absolutely love my experience with Cadhero! This labor exchange
          for architects not only gave me access to outstanding design
          professionals, but also made the entire hiring process simple and
          efficient. “
        </p>
        <div className="flex flex-row">
          <div className="size-[57px] rounded-full bg-[#434751] mr-5"></div>
          <div className="flex flex-col">
            <div className="text-lg font-normal text-white">
              Jeff Jeannette <br /> Owner / Lead Architect at Jeannette
              Architects
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 right-5">
        <div className="size-20 bg-[#C0C5D2] rounded-full flex items-center justify-center">
          <Image
            src="/Headphone.svg"
            alt="Check"
            className="inline-flex"
            width={30}
            height={32}
          />
        </div>
      </div>
    </div>
  );
}
