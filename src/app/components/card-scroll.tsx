import { firstCard } from "@/mocks/image-card";
import Image, { StaticImageData } from "next/image";
import Marquee from "react-fast-marquee"

export function CardScroll() {

    return (
      
            <Marquee play speed={50} className="w-full flex h-[380px] gap-[2.5rem] mb-[10px]">
                <div className="flex gap-[2.5rem] w-full">
                 <Card image={firstCard.figure1}/>
                 <CardVideo image="/video2.mp4" />
                 <Card image={firstCard.figure3}/>
                 <Card image={firstCard.figure5}/>
                 <Card image={firstCard.figure6}/>
                 <CardVideo image="/video3.mp4" />
                 <Card image={firstCard.figure2}/>
                 <Card image={firstCard.figure3}/>
                 <Card image={firstCard.figure4}/>
                 <Card image={firstCard.figure5}/>
                </div>
            </Marquee>
    );
}


function Card({ image }: { image: StaticImageData }) {
    return (
        <div className="relative w-[18rem] h-auto overflow-hidden rounded-[2.4rem] ">
              <div className="absolute flex flex-col gap-3 p-4 bottom-0 w-full">
                <div className="flex flex-col gap-1">
                <p className="text-[16px] text-slate-100 font-semibold">Chris Owens</p>
                <p className="text-[16px] text-slate-100 font-semibold">Principal Design</p>
                </div>
                <div className="w-auto h-auto flex gap-3"> 
                    <div className="size-auto flex  p-2 border border-slate-100  rounded-full text-[14px] text-slate-100 font-semibold">
                      Mobile
                    </div>
                    <div className="size-auto flex  p-2 border border-slate-100  rounded-3xl text-[14px] text-slate-100 font-semibold">
                      Product
                    </div>
                    <div className="size-auto flex  p-2 border border-slate-100  rounded-3xl text-[14px] text-slate-100 font-semibold">
                      UX
                    </div>
                </div>
              </div>
            <Image src={image} alt="card image ..." className="size-full object-cover"/>
        </div>
    )
}

function CardVideo({ image }: { image: string }) {
    return (
      <div className="relative w-[18rem] h-[380px] overflow-hidden rounded-[2.4rem]">
        <div className="absolute flex flex-col gap-3 p-4 bottom-0 w-full">
          <div className="flex flex-col gap-1">
            <p className="text-[16px] text-slate-100 font-semibold">Chris Owens</p>
            <p className="text-[16px] text-slate-100 font-semibold">Principal Design</p>
          </div>
          <div className="w-auto h-auto flex gap-3"> 
            <div className="flex p-2 border border-slate-100 rounded-full text-[14px] text-slate-100 font-semibold">
              Mobile
            </div>
            <div className="flex p-2 border border-slate-100 rounded-3xl text-[14px] text-slate-100 font-semibold">
              Product
            </div>
            <div className="flex p-2 border border-slate-100 rounded-3xl text-[14px] text-slate-100 font-semibold">
              UX
            </div>
          </div>
        </div>
        <video
          src={image}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>
    );
  }
  