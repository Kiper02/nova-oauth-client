import Image from 'next/image'
import logo from './../../../public/logo.svg'
import Link from 'next/link'
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface IHeaderProps {
    isAuth: boolean;
}

export default function Header({isAuth}: IHeaderProps) {
    
    const { push } = useRouter();

    const submit = async () => {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/session/logout`
        try {
            const response = await axios.post(url, {}, {withCredentials: true})
            console.log(response);
            if(response) {
                push('/auth/login')
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <header className='p-10 fixed top-0 left-0 right-0 bg-white shadow-md z-10'>
            <div className='flex justify-between items-center'>
                <Link href='/applications'><Image src={logo} alt='logo'/></Link>
                {isAuth ? (
                    <ul className='flex gap-20'>
                    <li className='text-2xl font-bold'><Link href="/docs">Документация</Link></li>
                    <li className='text-2xl font-bold'><Link href='/'>Мои приложения</Link></li>
                    <li className='text-2xl font-bold'><button onClick={submit}>Выйти</button></li>
                </ul>
                ) : null}
            </div>
        </header>
    )
}