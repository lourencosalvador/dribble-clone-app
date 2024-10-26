import Image from "next/image";
import logo from "@/../public/logo.svg"
import chevron from '@/../public/chevron.svg'
import Search from '@/../public/search.svg'

export function Navbar() {
    return (
        <nav className="w-full px-[3.4375rem] bg-[#FFFF] py-[1.5rem] flex justify-between">
            <div className="flex gap-12">
                <Image src={logo} alt="logo ..." width={110} />

                <div className="w-[40.3125rem] h-auto py-2 flex px-3 justify-between items-center  bg-zinc-200/50 rounded-full hover:bg-[#FFFFFF] hover:border-4 hover:border-pink-200 duration-100 transition-all">
                    <input type="text"
                        placeholder="What are you looking for?"
                        className="placeholder:text-[16px] pl-4 flex-1 bg-transparent outline-none text-[16px] text-zinc-900  placeholder:text-zinc-900"
                    />
                    <div className="flex gap-4 items-center">
                        <div className="flex gap-2 size-auto">
                            <p className="text-[18px] font-semibold">Shots</p>
                            <Image src={chevron} alt="chevron.." />
                        </div>
                        <div className="flex justify-center items-center size-[3.3125rem] rounded-full bg-[#EC5E95]">
                            <Image src={Search} alt="search.." />
                        </div>
                    </div>
                </div>

                <ul className="flex gap-9 size-auto items-center">
                    <div className="flex gap-1 size-auto items-center">
                        <li className="text-[18px] font-semibold hover:text-zinc-500 hover:cursor-pointer duration-75 transition-all">Explore</li>
                        <Image src={chevron} alt="chevron.." />
                    </div>
                    <div className="flex gap-1 size-auto items-center">
                        <li className="text-[18px] font-semibold hover:text-zinc-500 hover:cursor-pointer duration-75 transition-all">Hire a Designer</li>
                        <Image src={chevron} alt="chevron.." />
                    </div>

                    <li className="text-[18px] font-semibold hover:text-zinc-500 hover:cursor-pointer duration-75 transition-all">Find Jobs</li>
                    <li className="text-[18px] font-semibold hover:text-zinc-500 hover:cursor-pointer duration-75 transition-all">Blog</li>
                </ul>
            </div>

            <div className="flex size-auto gap-4 items-center">
                <h2 className="text-zinc-950 text-[18px] font-extrabold hover:text-zinc-500 hover:cursor-pointer duration-75 transition-all">Sign up</h2>
                <button className="w-[6.625rem] h-[3.8rem] rounded-full bg-slate-950 hover:bg-slate-950/75 duration-100 transition-all text-slate-100 text-[18px] font-extrabold">Log in</button>
            </div>
        </nav>
    )
}