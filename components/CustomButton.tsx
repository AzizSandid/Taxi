import Link from "next/link";
import React from "react";

interface CustomButtonProps {
  href?: string;
  label: string;
  icon?: React.ElementType;
  type: "button" | "link" | "submit";
  onclick?: () => void;
  bgColor?:string;
}


export default function CustomButton({
  href,
  label,
  type,
  icon:Icon,
  bgColor='bg-primary hover:bg-yellow-500 text-white',
  onclick,
}: CustomButtonProps) {
  if (type === "link") {
    return (
      <Link
        href={href ?? "#"}
        className="w-fit flex items-center justify-center px-8 py-4 text-white bg-primary rounded-xl  hover:bg-yellow-500 font-bold sm:text-lg text-center truncate"
      >
        <span className="font-semibold"> {label}</span>
      </Link>
    );
  } else {
    return (
      <button
        onClick={onclick}
        type="submit"
        className={`${bgColor} w-fit flex items-center justify-center px-4 lg:px-8 py-4 rounded-xl font-bold sm:text-lg text-center truncate`}
      >
        <span>{label}</span>
        {Icon && <Icon className="hidden lg:block ml-2"/>}
      </button>
    );
  }
}
