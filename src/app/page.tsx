import Image from "next/image";
import { Navbar } from "./components/navbar";
import { DivBanner } from "./components/div-banner";
import { fonts } from "./fonts";
import { CardScroll } from "./components/card-scroll";



export default function Home() {
  return (
    <div className="w-full h-full bg-[#F8F7F5]">
      <Navbar />

      <div className="size-full pt-12 flex flex-col gap-14 items-center mb-[4.5625rem]">
        <DivBanner />

        <div className={`${fonts.work_sans.className} size-auto flex flex-col gap-[50px] items-center`}>
          <h1 className={`${fonts.buenard.className} w-[65.0781rem] text-center font-bold text-[6.3rem] leading-[5.60rem] text-[#0D0C22]`}>
            The world’s destination
            for design
          </h1>
          <p className={` text-[23px] text-[#0D0C22 font-medium`}>Get inspired by the work of millions of top-rated designers & agencies around the world.</p>
          <button className="w-[10rem] h-[4rem] rounded-full bg-slate-950 hover:bg-slate-950/75 duration-100 transition-all text-slate-100 text-[19px] font-extrabold">Get start</button>
        </div>
      </div>

      <CardScroll />
    </div>
  );
}
