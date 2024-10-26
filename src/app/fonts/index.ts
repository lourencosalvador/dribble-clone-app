import
{ 
 Buenard, 
 Work_Sans
} from "next/font/google";

 const buenard = Buenard({ subsets: ["latin"], weight: "400" });
 const work_sans = Work_Sans({ subsets: ["latin"], weight: "500" });

export const fonts = {
    buenard,
    work_sans
}