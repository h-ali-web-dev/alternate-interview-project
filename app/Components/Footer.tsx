export default function Footer() {
  return (
    <footer className="flex flex-row justify-between px-10 py-4">
      <div className="text-[#8C909B] font-normal text-base">
        © 2022 - 2024 Cadhero® Global Inc.
      </div>
      <div className="flex flex-row gap-5">
        <div className="underline text-base text-[#343841]">
          Terms of Service
        </div>
        <div className="underline text-base text-[#343841]">Privacy Policy</div>
        <div className="underline text-base text-[#343841]">
          Cookie Settings
        </div>
      </div>
      <div className="text-[#343841] text-base underline">
        English (United States)
        <select defaultValue={1}>
          <option title="English (United States)" />
        </select>
      </div>
    </footer>
  );
}
