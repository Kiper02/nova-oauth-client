import { Dispatch, SetStateAction, useState } from "react";

interface IProfileProps {
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
}

export default function Profile({setEmail, setPassword}: IProfileProps) {

  return (
    <div className="flex flex-col gap-4 w-full">
      <input
        placeholder="Введите email"
        className="bg-[#131317] text-[#A9ADC0] font-bold text-xl rounded-xl border border-[#A4A4A4] p-4"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Введите пароль"
        className="bg-[#131317] text-[#A9ADC0] font-bold text-xl rounded-xl border border-[#A4A4A4] p-4"
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
}
