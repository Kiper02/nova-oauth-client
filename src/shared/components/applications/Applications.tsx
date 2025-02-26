"use client";


import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "../header/Header";
import Container from "../container/Container";
import { ItemApplications } from "./ItemApplications";

interface IApplications {
  id: string;
  name: string;
  redirectUri: string;
  clientId: string;
  clientSecret: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export default function Application() {
  const { push } = useRouter();

  const [applications, setApplications] = useState<IApplications[]>([]);

  const getApplications = async () => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/application`;

    const response = await axios.get(url, { withCredentials: true });
    if (response) {
      setApplications(response.data);
    }
  };

  useEffect(() => {
    getApplications();
  }, [])

  return (
    <section>
      <Header isAuth={true} />
      <Container>
        <div>
          <h1 className="text-3xl font-bold">Мои приложения</h1>

          <ul
            className="
                mt-9
                grid 
                grid-cols-2
                gap-4
            "
          >
            {applications &&
              applications.map((item) => (
                <li key={item.id}>
                  <ItemApplications
                    name={item.name}
                    date={item.createdAt}
                    id={item.id}
                  />
                </li>
              ))}
          </ul>
        </div>
      </Container>

      <div className="fixed bottom-20 left-[50%] transform -translate-x-1/2 flex justify-center items-center w-full h-28">
        <button
          className="
        w-[325px]
        h-[60px]
        rounded-[10]
        bg-black
        text-white
        font-bold
        text-2xl
        "
          onClick={() => push("/applications/create")}
        >
          Создать
        </button>
      </div>
    </section>
  );
}
