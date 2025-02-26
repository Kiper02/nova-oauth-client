"use client"

import Link from "next/link";
import Header from "../header/Header";
import { useState } from "react";
import authService from "@/shared/services/auth.service";
import { useRouter } from "next/navigation";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

interface IAuth {
  login: boolean;
}

const schema = z.object({
  username: z.coerce.string().min(3, "Имя пользователя должно быть минимум 3 символа"), 
  email: z.coerce.string().email("Некорректный адрес электронной почты").nonempty("Электронная почта обязательна"),
  password: z.coerce.string().min(8, "Пароль должен содержать минимум 8 символов").nonempty("Пароль обязателен"),
});


export default function Auth({ login }: IAuth) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const { push } = useRouter();

  const submit = async (data: any) => {
    let response;

    try {
      if (login) {
        response = await authService.login({ email: data.email, password: data.password });
      } else {
        response = await authService.register({ username: data.username, email: data.email, password: data.password });
      }
      console.log(response);
      if (response) {
        push('/applications');
      }
    } catch (error: any) {
      console.error("Ошибка при аутентификации:", error.message);
    }
  };

  return (
    <section className="max-h-max overflow-hidden h-screen">
      <Header isAuth={false} />
      <div className="h-screen flex items-center justify-center max-w-md mx-auto">
        <div className="p-2">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Привет</h1>
            <h3 className="text-lg font-bold">
              Что бы начать, {login ? "войдите в аккаунт" : "зарегистрируйтесь"}
            </h3>
          </div>

          <form onSubmit={handleSubmit(submit)} className="mt-4">
            {!login ? (
              <div>
                <input
                  placeholder="username"
                  className="
                    border 
                    border-gray-300 
                    bg-[#EFEAEA] 
                    p-2 mb-2 
                    rounded-[15]
                    w-full h-[50px]
                  "
                  {...register('username')}
                />
                {errors.username && <p className="text-red-500">{errors.username.message}</p>}
              </div>
            ) : null}
            <div>
              <input
                placeholder="email address"
                className="
                  border 
                  border-gray-300 
                  bg-[#EFEAEA] 
                  p-2 mb-2 
                  rounded-[15]
                  w-full h-[50px]
                "
                {...register('email')}
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <div>
              <input
                placeholder="password"
                type="password"
                className="
                  border 
                  border-gray-300 
                  bg-[#EFEAEA] 
                  p-2 mb-4 
                  rounded-[15] 
                  w-full h-[50px]
                "
                {...register('password')}
              />
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </div>
            <button
              type="submit"
              className="
                bg-black 
                text-white 
                p-2 
                rounded-[15] 
                w-full h-[50px]
              "
            >
              {login ? "Войти" : "Зарегистрироваться"}
            </button>
          </form>

          <p className="text-center mt-3 font-bold">
            {login ? (
              <>
                Нет аккаунта?{" "}
                <Link href="/auth/register">
                  <span className="text-[#0044FF] cursor-pointer">
                    Зарегистрироваться
                  </span>
                </Link>
              </>
            ) : (
              <>
                Уже есть аккаунт?{" "}
                <Link href="/auth/login">
                  <span className="text-[#0044FF] cursor-pointer">Войти</span>
                </Link>
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
