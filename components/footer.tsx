/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const socialLinks = [
  {
    icon: "/icon/facebook.svg",
    link: "https://www.facebook.com/taxilafamille",
  },
  {
    icon: "/icon/instagram.svg",
    link: "https://www.instagram.com/taxi.el3ayla/",
  },
];

const links = [
  {
    label: "À propos de nous",
    link: "#propos",
  },
  {
    label: "Catégories",
    link: "#Catégories",
  },
  {
    label: "Contact",
    link: "#Contact",
  },
];

const contact = [
  {
    label: "53 071 084",
    link: "tel:+21653 071 084",
    icon: "/icon/phone2.svg",
  },
  {
    label: "example@gmail.com",
    link: "mailto:example@gmail.com",
    icon: "/icon/mail.svg",
  },
  {
    label: "Sfax, route manzel chaker km3, en face Mg",
    link: "https://maps.app.goo.gl/WATouzT1q5a8iyMX8",
    icon: "/icon/location.svg",
  },
];

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center bg-primary">
      {/* Lower Footer */}
      <div className="min-w-8/12 min-h-[40vh] w-10/12 flex flex-col lg:flex-row gap-10 lg:justify-between py-16">
        <div className="flex flex-col sm:flex-row gap-10 items-start">
          <div className="flex flex-col gap-4">
            <p className="text-left font-bold max-w-72 text-black ">
              Taxi العايلة
            </p>  
            <p className="text-[#80762B] text-left font-medium max-w-72 ">
              Nous vous aidons à trouver les pièces de vos rêves            
            </p>
            <div className="flex items-start justify-start gap-4">
              {socialLinks.map((socialLink, index) => (
                <Link
                  key={index}
                  href={socialLink.link}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer p-4 bg-primary border border-[#80762B] rounded-full hover:bg-yellow-500 transition-all duration-300 ease-in-out"
                >
                  <img src={socialLink.icon} alt="social" className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 lg:gap-40 items-start">
          <div className="flex flex-col  gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="font-bold rounded-full text-black">Acceuil</h3>
              <div className="flex flex-row items-center gap-1">
                <div className="w-8 h-1 bg-yellow-500 rounded-full" />
                <div className="w-1 h-1 bg-yellow-500 rounded-full" />
              </div>
            </div>

            {links.map((link, index) => (
              <div key={index} className="flex items-center gap-2">
                <Link
                  href={link.link}
                  className="text-[#80762B]   hover:text-white text-sm"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start justify-center gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="font-bold rounded-full  text-black">Contact</h3>
              <div className="flex flex-row items-center gap-1">
                <div className="w-12 h-1 bg-yellow-500 rounded-full" />
                <div className="w-1 h-1 bg-yellow-500 rounded-full" />
              </div>
            </div>

            {contact.map((contact, index) => (
              <div key={index} className="flex items-center gap-2">
                <img src={contact.icon} className="h-4 w-4" alt="Icon" />
                <Link
                  href={contact.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#80762B] hover:text-white text-sm w-56"
                >
                  {contact.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-10/12 h-10 flex items-left justify-left text-[#80762B] font-semibold text-sm text-left">
        <span> &copy; 2024 all Right Reserved Term of use Taxi العايلة</span>
      </div>
    </footer>
  );
};

export default Footer;
