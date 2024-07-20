import { FeedBackIcon } from "@/public/icon";
import React from "react";

type CardProps={
  image:string,
  content:string,
  price:string  
}
export default function FeedBackCard ({image,content,price}:CardProps){

    return(
        <div className="w-[30%] p-8 space-y-2">
            <p className="font-medium text-sm sm:text-base md:text-lg">{content}</p>
            <div className="flex">
                <div className="flex">
                    <FeedBackIcon/> 
                    <div>
                         <p className="font-bold text-sm sm:text-base md:text-lg ">{price}</p>
                         <p className="font-medium text-xs text-gray">{price}</p>
                    </div>
                </div>
                <div className="flex">

                </div>
            </div>
        </div>
    );
}