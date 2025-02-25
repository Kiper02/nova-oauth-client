"use client";

import CreateApplicationStepOne from "@/components/applications/CreateApplicationStepOne";
import CreateApplicationStepThree from "@/components/applications/CreateApplicationStepTree";
import CreateApplicationStepTwo from "@/components/applications/CreateApplicationStepTwo";
import ProcessLine from "@/components/applications/ProcessLine";
import Container from "@/components/container/Container";
import Header from "@/components/header/Header";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import dotenv from 'dotenv'
dotenv.config();

export default function CreateApplication() {
  const [name, setName] = useState("");
  const [scopes, setScopes] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [redirect, setRedirect] = useState("");
  const [host, setHost] = useState("");
  const { push } = useRouter();

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
      try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/application`;
        console.log(`url = `, url);
        const response = await axios.post(url, {
          name,
          scopes,
          redirect_uri: redirect,
          host,
        }, {
          withCredentials: true,
        });
    
        console.log("Успешно:", response);
        push("/");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Ошибка Axios:", error.message, `${process.env.API_URL}/application`);
        } else {
          console.error("Неизвестная ошибка:", error);
        }
      }
    };
    

  return (
    <section
      className="
                flex 
                justify-center 
                items-center 
        "
    >
      <Header isAuth={true} />
      <Container>
        <div
          className="
                w-[628px]
                h-[71px]
                mt-36
                relative
                flex
                flex-col
                gap-6
                "
        >
          {page === 1 && (
            <CreateApplicationStepOne setName={setName} setPage={setPage} />
          )}
          {page === 2 && (
            <CreateApplicationStepTwo
              setScopes={setScopes}
              scopes={scopes}
              setPage={setPage}
            />
          )}
          {page === 3 && (
            <CreateApplicationStepThree name={name} scopes={scopes} submit={submit} redirect={redirect} host={host} setRedirect={setRedirect} setHost={setHost} />
          )}
        </div>
      </Container>
    </section>
  );
}
