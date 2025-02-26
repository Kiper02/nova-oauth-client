import { Dispatch, SetStateAction } from "react";
import ProcessLine from "./ProcessLine";

interface ICreateApplicationStepTwoProps {
  setScopes: Dispatch<SetStateAction<string[]>>;
  scopes: string[]
  setPage: Dispatch<SetStateAction<number>>;
}

export default function CreateApplicationStepTwo({setScopes,scopes, setPage}: ICreateApplicationStepTwoProps) {

  const addScope = (scope: string) => {
    setScopes([...scopes, scope]);
  }


  return (
    <>
    <ProcessLine percent={50} />
      <h1
        className="
            text-3xl 
            font-bold"
      >
        Доступ к данным
      </h1>
      <h3
        className="
            font-bold
            text-[20px]
          "
      >
        Выберите данные, доступ к которым вам нужен
      </h3>
      <div className="
                flex
                flex-col
                gap-2">
        <div className="flex items-center">
          <input
            onChange={() => addScope("date:birth")}
            id="default-checkbox"
            type="checkbox"
            value=""
            className="
            w-5 h-5 appearance-none rounded-sm bg-[#D9D9D9] border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 checked:bg-[#6200FF]"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-[16px] font-medium text-black"
          >
            Доступ к дате рождения
          </label>
        </div>
        <div className="flex items-center">
          <input
            onChange={() => addScope("email")}
            id="default-checkbox"
            type="checkbox"
            value=""
            className="
            w-5 h-5 appearance-none rounded-sm bg-[#D9D9D9] border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 checked:bg-[#6200FF]"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-[16px] font-medium text-black"
          >
            Доступ к адресу электронной почты
          </label>
        </div>
        <div className="flex items-center">
          <input
            onChange={() => addScope("login:name:lastname:male")}
            id="default-checkbox"
            type="checkbox"
            value=""
            className="
            w-5 h-5 appearance-none rounded-sm bg-[#D9D9D9] border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 checked:bg-[#6200FF]"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-[16px] font-medium text-black"
          >
            Доступ к логину, имени и фамилии, полу
          </label>
        </div>
        <div className="flex items-center">
          <input
          onChange={() => addScope("avatar")}
            id="default-checkbox"
            type="checkbox"
            value=""
            className="
            w-5 h-5 appearance-none rounded-sm bg-[#D9D9D9] border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 checked:bg-[#6200FF]"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-[16px] font-medium text-black"
          >
            Доступ к портрету пользователя
          </label>
        </div>
        <div className="flex items-center">
          <input
          onChange={() => addScope("phone")}
            id="default-checkbox"
            type="checkbox"
            value=""
            className="
            w-5 h-5 appearance-none rounded-sm bg-[#D9D9D9] border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 checked:bg-[#6200FF]"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-[16px] font-medium text-black"
          >
            Доступ к номеру телефона
          </label>
        </div>
      </div>
      <button
        onClick={() => setPage(3)}
        className="
            bg-black
            h-full
            w-full
            p-4
            rounded-2xl
            text-white
            "
      >
        Далее
      </button>
    </>
  );
}
