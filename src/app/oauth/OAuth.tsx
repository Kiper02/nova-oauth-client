"use client";

import Image from 'next/image'
import logo from './../../../public/logo.svg'
import Profile from '@/shared/components/oauth/Profile'
import Authorization from '@/shared/components/oauth/Authorization'
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from 'react';
import userAuthService from '@/shared/services/user-auth.service';

interface IProfile {
  username: string;
  email: string;
  avatar: string;
}

export default function OAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState<IProfile | null>(null)

  const searchParams = useSearchParams();
  const clientId = searchParams.get('clientId');
  const redirectUri = searchParams.get('redirect_uri');
  const { push } = useRouter();
  
  if (!clientId || !redirectUri) {
    push('/error?message=Отсутствуют обязательные параметры clientId или redirectUri');
    return null;
  }
  

  const findProfile = async () => {
    const response = await userAuthService.findProfile();
    if (response) {
      setProfile(response);
    }
  }

  const login = async () => {
    const response = await userAuthService.login({ email, password, clientId });
    if (response && response.data && response.data.code) {
      push(redirectUri);
    }
  };

  useEffect(() => {
    findProfile();
  }, [])

  return (
    <section className="flex justify-center items-center h-screen">
      <Image src={logo} alt='logo' className='fixed top-5 left-5' />
      <form className="bg-[#131317] p-8 flex flex-col gap-[90px] rounded-xl w-[464px]">
        <h1 className='text-[#E0E0E8] font-bold text-xl text-center'>
          NOVA
        </h1>

        {
          profile
            ? <Profile setEmail={setEmail} setPassword={setPassword} />
            : <Authorization />
        }
        <button
          className='bg-white text-black text-xl font-bold p-4 rounded-xl'
          onClick={login}  // Добавьте вызов функции
        >
          Войти
        </button>
      </form>
    </section>
  )
}
