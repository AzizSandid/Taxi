"use client";
import { Card, Contact, CustomButton, CustomHeader, FeedBackCard, IconDisplay, ScrollIndicator, SearchInput } from "@/components";
import { Arrow, Article, Commande, Phone } from "@/public/icon";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {

  const [searchResults, setSearchResults] = useState<any[]>([]);
  const handleSearch = (searchTerm: string) => {
    console.log(`Searching for: ${searchTerm}`);
    setSearchResults([]);
  };
  const BestSelling=[
    {id:1, image:'/exemple.png',name:'Air Force 1',price:"DT 280.00",route:'/homme/'},
    {id:2, image:'/exemple.png',name:'Air Force 2',price:"DT 380.00",route:'/homme/'},
    {id:3, image:'/exemple.png',name:'Air Force 3',price:"DT 580.00",route:'/homme/'}
  ]
  const iconList = [
    {
      icon: Article,
      label: "Grand Assortiment",
      subTitle: "Nous proposons de nombreux types de produits différents avec de variations dans chaque catégorie."
    },
    {
      icon: Commande,
      label: "Livraison Rapide",
      subTitle: "Délai de livraison de 7 jours ou moins et option de livraison accélérée."
    },
    {
      icon: Phone,
      label: "Assistance 24/7",
      subTitle: "Des réponses à toute demande commerciale 24/7."
    }
  ];
  const FeedbackList = [
    {
      name: "John Doe",
      subtitle: "Youtuber",
      content: "Nous proposons de nombreux types de produits différents avec de variations dans chaque catégorie.",
      note:"4.5"
    },
    {
      name: "Aziz",
      subtitle: "Youtuber",
      content: "Nous proposons de nombreux types de produits différents avec de variations dans chaque catégorie.Nous proposons de nombreux types de produits différents avec de variations dans chaque catégorie.Nous proposons de nombreux types de produits différents avec de variations dans chaque catégorie.Nous proposons de nombreux types de produits différents avec de variations dans chaque catégorie.Nous proposons de nombreux types de produits différents avec de variations dans chaque catégorie.Nous proposons de nombreux types de produits différents avec de variations dans chaque catégorie.",
      note:"4"
    },    {
      name: "Yassine",
      subtitle: "Youtuber",
      content: "Nous proposons de nombreux types de produits différents avec de variations dans chaque catégorie.",
      note:"3.5"
    },    {
      name: "John Doe",
      subtitle: "Youtuber",
      content: "Nous proposons de nombreux types de produits différents avec de variations dans chaque catégorie.",
      note:"4.5"
    },
    
  ];
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <main className="flex min-h-[4020px] flex-col items-center justify-between py-24">
      <div id='first-section' className="flex rounded-3xl h-[350px] w-11/12 bg-primary p-12 pb-0 justify-between">
        <div className="w-full md:w-[55%]">
          <text className="font-extrabold text-2xl sm:text-4xl md:text-5xl  h-fit">Découvrir Votre Style</text>
          <div className="flex my-8 justify-between w-2/3 sm:w-1/2">
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
        <img src="/homeImage.png" alt="Home Image" className="place-self-end rounded-t-[200px] rounded-bl-[200px] w-[40%] h-[90%] max-h-[400px] max-w-[370px] hidden md:block" />
      </div>
      <div className="flex flex-col md:flex-row w-11/12">
        <div className="w-full md:w-1/4 flex flex-col justify-between h-44 mb-4 md:h-80">
           <p className="font-bold text-xl sm:text-2xl lg:text-3xl">Pièces les plus vendues</p>
           <p className="font-medium text-base sm:text-base lg:text-xl text-gray w-11/12">La meilleure façon de profiter de nos produits les plus populaires et d'améliorer votre quotidien</p>
           <CustomButton
                label={"Voir plus"}
                type="button"
                onclick={() => {}}
                icon={Arrow}
              />
        </div>
        <div className="flex w-full md:w-3/4 justify-between">
          {BestSelling.map((item)=>{
            return(
              <Card 
                key={item.id} 
                image={item.image} 
                name={item.name} 
                price={item.price} 
                route={item.route+item.id}/>
            )
          })}
        </div>
      </div>
      <div id="propos" className="flex flex-col w-11/12 items-center">
        <CustomHeader title="À propos de nous" />
        <p className="font-medium text-sm sm:text-base md:text-xl text-gray py-3">Commandez maintenant et appréciez la beauté de nos produits</p>
        <div className="flex space-x-4">
          {iconList.map((item, index) => (
            <IconDisplay
              key={index}
              icon={item.icon}
              label={item.label}
              subTitle={item.subTitle}
            />
          ))}
        </div>
      </div>
      <div id="Catégories" className="flex flex-col w-full items-center">
        <CustomHeader title="Catégories" />
        <p className="font-medium text-sm sm:text-base md:text-xl text-gray py-3">Trouvez ce que vous cherchez</p>
        <div className="flex flex-col space-y-12 w-full bg-primary p-12 items-center justify-center">
          <div className="flex w-3/4 justify-between items-center">
            <div className=" space-y-4 w-2/5 ">
              <img src="/Homme.png" alt="Home Image" className="rounded-xl"/>
              <p className="font-bold text-center text-sm sm:text-base md:text-lg">Homme</p>
            </div>
            <div className=" space-y-4 w-2/5 ">
              <img src="/Femme.png" alt="Home Image" className="rounded-xl"/>
              <p className="font-bold text-center text-sm sm:text-base md:text-lg">Femme</p>
            </div>
          </div>
          <CustomButton
                label={"Voir plus"}
                type="button"
                onclick={() => {}}
                icon={Arrow}
                bgColor='bg-white hover:bg-slate-200'
              />
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="flex justify-between w-11/12">
          <h1 className="text-xl md:text-4xl font-bold text-black w-1/2 sm:w-1/3">
            Que disent les clients de Taxi العايلة?
          </h1>
          <ScrollIndicator scrollContainerRef={scrollContainerRef} itemCount={FeedbackList.length}/>          
        </div>
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto no-scrollbar w-full space-x-4 p-12"
        >
          {FeedbackList.map((item,index)=>(
            <FeedBackCard 
              key={index}
              name={item.name}
              content={item.content}
              subTitle={item.subtitle}
              note={item.note}
            />
          ))
          }
        </div>

      </div>
      <Contact/>
    </main>
  );
}
