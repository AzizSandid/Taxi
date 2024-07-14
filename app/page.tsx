import Contact from "@/components/Contact";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-[2220px] flex-col items-center justify-between py-24">
      <div className="flex rounded-3xl h-[350px] w-11/12 bg-primary p-12 pb-0 justify-between">
        <div>
          <text className="font-extrabold text-2xl sm:text-4xl md:text-5xl  h-fit">Découvrir Votre Style</text>
          <div className="flex my-8 justify-between w-1/2">
            <div>
              <p className="font-medium text-lg sm:text-xl md:text-3xl ">50+</p>
              <p className="font-medium text-lg  md:text-xl ">Pièces</p>
            </div>
           <div className="border border-black"/>
           <div>
              <p className="font-medium text-lg sm:text-xl md:text-3xl ">100+</p>
              <p className="font-medium text-llg md:text-xl ">Clients</p>
            </div>
          </div>
        </div>
        <img src="/homeImage.png" alt="Home Image" className="place-self-end rounded-t-[200px] rounded-bl-[200px] w-[45%] h-[80%]" />
      </div>
      <Contact/>
    </main>
  );
}
