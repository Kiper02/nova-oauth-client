export default function Authorization() {
    return (
    <div>
        <p className="text-sm font-bold text-center text-[#A9ADC0]">Войти с другим аккаунтом</p>

        <div className="flex gap-1 bg-[#303035] rounded-xl items-center pt-3 pb-3 pr-2 pl-2 mt-2">
            <div className='w-14 rounded-[50%] bg-red-800 overflow-hidden'>
                <img src="/avatar.jpg" alt='avatar' className="w-full h-full object-cover"/>
            </div>
            <div>
                <p className='text-lg'>kiper02</p>
                <p className='text-[#A9ADC0] text-sm font-normal'>permakovkirll925@gmail.com</p>
            </div>
        </div>
    </div>
    )
}
