import ProcessLine from "./ProcessLine";
import Image from "next/image";
import webServiceUrl from "./../../../public/web-service.svg";
import { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface ICreateApplicationStepThreeProps {
  name: string;
  scopes: string[];
  redirect: string,
  host: string,
  setRedirect: Dispatch<SetStateAction<string>>;
  setHost: Dispatch<SetStateAction<string>>;
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function CreateApplicationStepThree({
  redirect,
  host,
  setHost,
  setRedirect,
  submit
}: ICreateApplicationStepThreeProps) {
  return (
    <>
      <ProcessLine percent={100} />
      <form onSubmit={(e) => submit(e)}>
        <h1
          className="
          text-3xl 
          font-bold
          "
        >
          Создание приложения
        </h1>
        <h3
          className="
          flex
          gap-3
          font-bold
          text-[20px]
          items-center
          mt-6
          mb-5
        "
        >
          <Image src={webServiceUrl} alt="web-service" width={20} height={20} />
          Веб сервисы
        </h3>
        <div
          className="
        flex
        flex-col
        gap-3
      "
        >
          <div
            className="
            flex
            flex-col
            gap-1
        "
          >
            <h4
              className="
            text-black
            text-[20px]
          "
            >
              Redirect URI
            </h4>
            <p
              className="
            text-[#878787]
            text-[13px]
          "
            >
              Адрес страницы, куда направим пользователя после того, как
              он разрешил или отказал приложению в доступе
            </p>
            <input
              placeholder="https://oauth.yandex.ru/verification_code"
              value={redirect}
              onChange={(e) => setRedirect(e.target.value)}
              className="
                p-4
                mt-3
                rounded-2xl
                bg-[#EFEAEA]
                text-[#827D7D]
        "
            />
          </div>
          <div
            className="
            flex
            flex-col
            gap-1
        "
          >
            <h4
              className="
            text-black
            text-[20px]
          "
            >
              Suggest Hostname
            </h4>
            <p
              className="
            text-[#878787]
            text-[13px]
          "
            >
              Хост страницы, на которой разместится кнопка или виджет
              авторизации
            </p>
            <input
              placeholder="https://"
              value={host}
              onChange={(e) => setHost(e.target.value)}
              className="
                p-4
                mt-3
                rounded-2xl
                bg-[#EFEAEA]
                text-[#827D7D]
        "
            />
          </div>
        </div>
        <button
          className="
          bg-black
          w-full
          p-4
          rounded-2xl
          text-white
          mt-5
          "
          // onClick={(e) => submit(e)}
        >
          Далее
        </button>
      </form>
    </>
  );
}
