import { Dispatch, SetStateAction } from "react";
import ProcessLine from "./ProcessLine";

interface ICreateApplicationStepOneProps {
  setName: Dispatch<SetStateAction<string>>;
  setPage: Dispatch<SetStateAction<number>>;
}

export default function CreateApplicationStepOne({setName, setPage}: ICreateApplicationStepOneProps) {



  return (
    <>
    <ProcessLine percent={25} />
      <h1
        className="
          text-3xl 
          font-bold"
      >
        Создание приложения
      </h1>
      <h3
        className="
          font-bold
          text-[20px]
        "
      >
        Название вашего приложения
      </h3>
      <input
        placeholder="Название"
        onChange={(e) => setName(e.target.value)}
        className="
          p-7
          rounded-2xl
        bg-[#EFEAEA]
        text-[#827D7D]
          w-full
          h-full
        "
      />
      <button
        className="
          bg-black
          h-full
          w-full
          p-4
          rounded-2xl
          text-white
          "
          onClick={() => setPage(2)}
      >
        Далее
      </button>
    </>
  );
}
