import Image from "next/image";
import logout from "./../../../../public/logout.svg";
import profile from "./../../../../public/profile.svg";
import close from "./../../../../public/close.svg";
import { IProfile } from "@/shared/types/auth.type";
import authService from "@/shared/services/auth.service";
import { useRouter } from "next/navigation";
import './account-modal.css'
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface AccountModalProps {
  user: IProfile;
  setProfileModal: Dispatch<SetStateAction<boolean>>;
}

export default function AccountModal({ user, setProfileModal }: AccountModalProps) {
  const { email, avatar, username } = user;

  const { push } = useRouter();

  const submit = async () => {
    try {
      await authService.logout();
      push("/auth/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed top-48 right-8 bg-white shadow-md z-10 w-[423px] p-6 flex flex-col gap-9 modal">
      <Image src={close} alt="close" className="absolute right-5 cursor-pointer" onClick={() => setProfileModal(false)}/>
      <div className="flex justify-center w-full">
        <div className="rounded-[50%] w-[66px] h-[66px] cursor-pointer">
          {avatar && (
            <img src={avatar} alt="avatar" className="w-[100%] h-[100%]" />
          )}
        </div>
      </div>

      <div className="w-full flex justify-center flex-col">
        <p className="text-xl font-medium text-center">{email}</p>
        <p className="flex items-center justify-center text-base text-[#9FA1B2]">
          +7 951 943‒72‒55 • {username}
        </p>
      </div>

      <ul className="text-left w-full">
        <li className="flex items-center gap-3 mb-4 modal-item rounded-lg p-3" onClick={() => submit()}>
          <div className="w-5 h-5">
            <Image src={logout} alt="logout" />
          </div>
          <p className="font-medium text-xl">Выйти</p>
        </li>
        <li className="flex items-center gap-3 modal-item rounded-lg p-3">
          <div className="w-5 h-5">
            <Image src={profile} alt="profile" />
          </div>
          <Link href='/profile'><p className="font-medium text-xl">Профиль</p></Link>
        </li>
      </ul>
    </div>
  );
}
