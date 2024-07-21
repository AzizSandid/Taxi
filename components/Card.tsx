import Link from "next/link";
import React from "react";

type CardProps={
  image:string,
  name:string,
  price:string,
  route:string,
}
export default function Card ({image,name,price,route}:CardProps){
    return(
        <Link href={route} className="w-[30%] shadow rounded-lg p-4 hover:opacity-80">
            <img src={image} alt="Card Image" className="w-[100%] h-[80%] max-h-[400px] max-w-[450px]" />
            <p className="font-medium text-base sm:text-xl md:text-xl py-2 ">{name}</p>
            <p className="font-medium text-sm sm:text-base md:text-xl text-gray">{price}</p>
        </Link>
    );
}