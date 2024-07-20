"use client";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import CustomHeader from "./CustomHeader";
import SectionTitle from "./SectionTitle";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";


const cards = [
  {
    title: "A Propos",
    value: `Magasin de vêtements <br/> spécialisé dans les chaussures`,
  },
  {
    title: "Contact",
    value: `+216 99 999 999 <br/>
    +216 55 444 222 <br/>
    email@gmail.com`,
  },
  {
    title: "Adresse",
    value: "Bir Ali Ben Khlifa,3040<br/> Sfax",
  },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    text: "",
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Simple validation
    const { fullname, email, text } = formData;
    if (!fullname.trim()) {
      toast.error("Nom et Prénom requis");
      return;
    }
    if (!email.trim()) {
      toast.error("Adresse Email requise");
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Adresse Email invalide");
      return;
    }
    if (!text.trim()) {
      toast.error("Message requis");
      return;
    }

    setLoading(true);

    /*try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/messages/add`,
        formData
      );
      console.log("Message sent successfully:", response.data);
      toast.success("Message envoyé avec succès");
      setFormData({
        fullname: "",
        email: "",
        text: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Erreur lors de l'envoi du message");
    } finally {
      setLoading(false);
    }*/
  };
  return (
    <main  id="Contact" className="flex flex-col overflow-x-hidden min-h-[100vh] gap-10 items-center">
      <CustomHeader title="Contacts" />
      <div className="flex w-full gap-4 flex-col md:flex-row">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col min-w-fit px-4 lg:px-10 py-6 gap-4 text-center lg:text-start bg-primary  text-white rounded-xl hover:bg-primary/65 transition"
          >
            <h2 className={`text-xl xl:text-3xl`}>
              {card.title}
            </h2>
            <p
              className="w-[200px] xl:w-[260px] text-base leading-8 font-medium w-full"
              dangerouslySetInnerHTML={{ __html: card.value }}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-row bg-[#FFF8EB] gap-8 w-full rounded-2xl overflow-hidden justify-center">
          <div className="hidden lg:flex lg:w-1/3 overflow-hidden">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d819.6986018334908!2d10.0909257!3d34.7355763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ffb271f167d319%3A0xa178a63179ad6dde!2zVGF4aSDYp9mE2LnYp9mK2YTYqQ!5e0!3m2!1sen!2stn!4v1720397257506!5m2!1sen!2stn" 
                width="800" 
                height="600"
                loading="lazy" 
                className="w-full"
            ></iframe>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center p-8 gap-8 w-full lg:w-2/3 "
          >
          <SectionTitle
              title="Écrire un message"
              align="start"
          />
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <CustomInput
                  label="Nom et Prénom"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleInputChange}
                />
                <CustomInput
                  label="Adresse Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <CustomInput
                label="Message"
                name="text"
                value={formData.text}
                onChange={handleInputChange}
                type="textarea"
                className="min-h-40"
              />
              <CustomButton
                label={loading ? "Envoi en cours..." : "Envoyer"}
                type="button"
                onclick={() => {}}
              />
            </div>
          </form>
      </div>
    </main>
  );
}
