"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Menu, ShoppingCart, X  } from "lucide-react";
import { usePathname } from 'next/navigation';


export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Get the current route

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const navigationLinks = [
    { title: "Accueil", route: "/" },
    { title: "Homme", route: "/homme" },
    { title: "Femme", route: "/femme" },
    { title: "Contact", route: "/#Contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 px-9 py-4 flex h-20 transition-all duration-300 ease-in-out justify-between items-center  ${
        isScrolled ? "bg-black bg-opacity-20 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between gap-12">
        <Link href="/">
          <img src="/logo/logo.png" alt="Taxi العائلة Logo" className="h-20 w-40" />
        </Link>
        <div className="hidden lg:flex items-center space-x-10">
          {navigationLinks.map((link) => (
            <div className="relative" key={link.title}>
              <Link
                href={link.route}
                className={`${pathname === link.route ? 'text-black' :  isScrolled ?'text-white':'text-gray'} font-medium app-transition truncate text-lg`}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex">
        <ShoppingCart
          onClick={() => console.log("pressed")}
          className="text-black cursor-pointer font-bold mr-4 "
          size={24}
        />
        <Menu
          onClick={() => setToggle(!toggle)}
          className="text-black cursor-pointer lg:hidden"
          size={24}
        />
      </div>
     
      {toggle && (
        <div className="fixed top-0 right-0 bg-primary rounded-l-xl w-fit pt-4 pb-8 lg:hidden h-fit flex flex-col items-end gap-4 text-black">
          <X
            onClick={() => setToggle(false)}
            className=" text-black cursor-pointer font-bold mr-4"
            size={24}
          />
          <div className="flex flex-col items-start justify-start gap-2 ml-10 ">
            {navigationLinks.map((link) => (
              <div key={link.title} className="flex flex-col items-start w-full " >
                <Link href={link.route} className=" text-lg hover:text-white select-none py-2 bg-light-bg w-full px-4 font-semibold rounded-l-xl mx-4 hover:-translate-x-2" >
                  {link.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}