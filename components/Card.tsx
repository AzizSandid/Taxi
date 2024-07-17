import React from "react";

type CardProps={
  image:string,
  name:string,
  price:string  
}
export default function Card ({image,name,price}:CardProps){

    return(
        <div className="">
            <img src={image} alt="Card Image" className="w-[100%] h-[80%] max-h-[400px] max-w-[450px]" />
            <p className="font-medium text-base sm:text-xl md:text-xl py-2">{name}</p>
            <p className="font-medium text-sm sm:text-base md:text-xl text-gray">{price}</p>
        </div>
    );
}