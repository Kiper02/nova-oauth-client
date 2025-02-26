"use client";

import Header from "@/shared/components/header/Header";
import authService from "@/shared/services/auth.service";
import { IProfile } from "@/shared/types/auth.type";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState<IProfile>();
  const [avatar, setAvatar] = useState();

  const [phone, setPhone] = useState('string');
  const [displayName, setDisplayName] = useState('string');
  const [username, setUsername] = useState('string');
  const [email, setEmail] = useState('string');
  const [password, setPassword] = useState('string');

  const getProfile = async () => {
    const response = await authService.findProfile();
    setProfile(response);
    setAvatar(response.avatar);
    setPhone(response.phone);
    setDisplayName(response.displayName);
    setEmail(response.email);
    setPassword(response.password);
    setUsername(response.username);
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleImageChange = (event: any) => {
    setAvatar(event.target.files[0]);
  };

  const updatedProfile = async (e: any) => {
    e.preventDefault()
    await authService.updateProfile({
      email,
      password,
      username
    })

    getProfile()
  };


  return (
    <section className="h-screen flex items-center justify-center">
      <Header isAuth={true} />
      {profile && (
        <form className="flex justify-center flex-col gap-5 p-4 w-[400px]">
          <div className="flex justify-center relative">
            <div className="rounded-[50%] w-[188px] h-[188px] overflow-hidden cursor-pointer">
              <img
                src={profile.avatar}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute top-[50%-188px] left-[50%-188px] w-[155px] h-[155px] rounded-[50%] opacity-0 cursor-pointer"
            />
          </div>

          <input
            placeholder={profile.username}
            className="p-5 rounded-2xl w-full bg-[#EFEAEA]"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder={profile.email}
            className="p-5 rounded-2xl w-full bg-[#EFEAEA]"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="*********"
            className="p-5 rounded-2xl w-full bg-[#EFEAEA]"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            className="bg-black h-full w-full p-4 rounded-2xl text-white"
            onClick={(e) => updatedProfile(e)}  
          >
            Изменить
          </button>
        </form>
      )}
    </section>
  );
}
