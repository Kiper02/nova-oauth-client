"use client"

import Image from 'next/image'
import logo from './../../../../public/logo.svg'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import authService from '@/shared/services/auth.service';
import { IProfile } from '@/shared/types/auth.type';
import AccountModal from '../account-modal/AccountModal';

interface IHeaderProps {
    isAuth: boolean;
}

export default function Header({isAuth}: IHeaderProps) {
    
    const [profile, setProfile] = useState<IProfile | null>(null);
    const [profileModal, setProfileModal] = useState(false);

    const findProfile = async() => {
        const response: IProfile = await authService.findProfile();
        setProfile(response);
    }

    useEffect(() => {
        isAuth && findProfile();
    },[]) 

    useEffect(() => {
        const handleDocumentClick = (event: MouseEvent) => {
            if (profileModal) {
                const modalElement = document.querySelector('.modal');
                if (modalElement && !modalElement.contains(event.target as Node)) {
                    setProfileModal(false);
                }
            }
        };

        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [profileModal]);

    return(
        <header className='p-10 fixed top-0 left-0 right-0 bg-white shadow-md z-10'>
            <div className='flex justify-between items-center'>
                <Link href='/applications'><Image src={logo} alt='logo'/></Link>
                {isAuth ? (
                    <ul className='flex gap-20 items-center'>
                    <li className='text-2xl font-bold'><Link href="/docs">Документация</Link></li>
                    <li className='text-2xl font-bold'><Link href='/applications'>Мои приложения</Link></li>
                    <li className='text-2xl font-bold'>
                        <div 
                            className='rounded-[50%] w-[66px] h-[66px] cursor-pointer'
                            onClick={(e) => {
                                e.stopPropagation();
                                setProfileModal(true);
                            }}
                        >
                            {profile && 
                            <img src={profile.avatar} alt='avatar' className='w-[100%] h-[100%]'/>
                            }
                        </div>
                    </li>
                </ul>
                ) : null}
                {profileModal && profile && <AccountModal user={profile} setProfileModal={setProfileModal}/>}
            </div>
        </header>
    )
}
