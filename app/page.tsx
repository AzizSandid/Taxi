'use client'
import Card from "@/components/Card";
import Contact from "@/components/Contact";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import SearchInput from "@/components/SearchInput ";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [searchResults, setSearchResults] = useState<any[]>([]);
  const handleSearch = (searchTerm: string) => {
    console.log(`Searching for: ${searchTerm}`);
    setSearchResults([]);
  };
  const BestSelling=[
    {id:1, image:'/exemple.png',name:'Air Force 1',price:"DT 280.00"},
    {id:2, image:'/exemple.png',name:'Air Force 2',price:"DT 380.00"},
    {id:3, image:'/exemple.png',name:'Air Force 3',price:"DT 580.00"}
  ]
  return (
    <main className="flex min-h-[2220px] flex-col items-center justify-between py-24">
      <div id='first-section' className="flex rounded-3xl h-[350px] w-11/12 bg-primary p-12 pb-0 justify-between">
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
          <SearchInput onSearch={handleSearch} />
        </div>
        <img src="/homeImage.png" alt="Home Image" className="place-self-end rounded-t-[200px] rounded-bl-[200px] w-[38%] h-[80%] max-h-[400px] max-w-[450px]" />
      </div>
      <div className="flex w-11/12">
        <div className="w-1/5">
           <p className="font-bold text-base sm:text-xl md:text-2xl">Pièces les plus vendues</p>
           <p className="font-medium text-sm sm:text-base md:text-xl text-gray py-3">La meilleure façon de profiter de nos produits les plus populaires et d'améliorer votre quotidien</p>
           <CustomButton
                label={"Voir plus"}
                type="button"
                onclick={() => {}}
              />
        </div>
        <div className="flex w-4/5 justify-around">
          {BestSelling.map((item)=>{
            return(
              <Card key={item.id} image={item.image} name={item.name} price={item.price}/>
            )
          })}
        </div>
      </div>
      <Contact/>
    </main>
  );
}
