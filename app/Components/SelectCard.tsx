import Image from "next/image";

interface SelectCardInterface {
  message: String;
  selected: boolean;
}

export default function SelectCard({ message, selected }: SelectCardInterface) {
  return (
    <div className="outline-1 outline outline-[#7F8694] w-[370px] h-[280px]">
      <div className={`m-2 p-8 ${selected ? "bg-[#F9F9F9]" : ""}`}>
        <div className="flex align-top gap-2 justify-between pb-[38px]">
          <div className="size-[100px] outline outline-[#F6F6F6] bg-[#F9F9F9] rounded-full flex items-center justify-center text-lg font-bold text-[#ABAEB5]">
            IMG
          </div>
          {selected ? (
            <div className="size-8 bg-[#7E8493] rounded-full flex items-center justify-center">
              <Image
                src="/Check.svg"
                alt="Check"
                className="dark:brightness-200 inline-flex"
                width={16}
                height={16}
                color="#FFFFFF"
              />
            </div>
          ) : (
            <div className="size-8 outline outline-[#E4E4E4] outline-1 rounded-full flex items-center justify-center"></div>
          )}
        </div>
        <div className="text-2xl font-bold text-[#4A4F5B]">{message}</div>
      </div>
    </div>
  );
}
