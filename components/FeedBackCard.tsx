import { FeedBackIcon, StarIcon } from "@/public/icon";
import React from "react";

type CardProps={
  content:string,
  name:string  
  subTitle:string  
  note:string  
}
export default function FeedBackCard ({name,content,subTitle,note}:CardProps){

    return(
        <div className="min-w-[80%] sm:min-w-[50%] min-h-60 sm:min-h-72 p-8 flex flex-col justify-between bg-primary rounded-xl shadow-lg">
            <p className="font-medium text-sm sm:text-base md:text-lg text-[#56512C] h-20 sm:h-28 overflow-y-auto custom-scrollbar ">{content}</p>
            <div className="flex flex-col sm:flex-row justify-between h-20 sm:h-auto">
                <div className="flex">
                    <FeedBackIcon/> 
                    <div className="ml-2">
                         <p className="font-bold text-sm sm:text-base md:text-lg text-black">{name}</p>
                         <p className="font-medium text-xs text-gray">{subTitle}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <StarIcon/>
                    <p className="font-bold text-sm sm:text-base md:text-lg text-black">{note}</p>
                </div>
            </div>
        </div>
    );
}