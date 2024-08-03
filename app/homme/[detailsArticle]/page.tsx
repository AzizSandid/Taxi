"use client";
import { CustomButton } from "@/components";
import TagGroup from "@/components/TagGroup";
import { StarIcon } from "@/public/icon";
import { detailsArticleType, Color } from "@/types";
import Link from "next/link";
import React, { useState } from "react";

const detailsArticle: detailsArticleType = {
  id: 1,
  images: {
    white: ["/exemple.png", "/exemple.png", "/exemple.png", "/exemple.png"],
    black: [
      "/airForceBlack.png",
      "/airForceBlack.png",
      "/airForceBlack.png",
      "/airForceBlack.png",
    ],
    gray: ["/exemple.png", "/exemple.png", "/exemple.png", "/exemple.png"],
  },
  name: "Air Force 1",
  marque: "Nike",
  description:
    "Lorem ipsum dolor sit amet consectetur. Elementum praesent sagittis turpis iaculis elementum aliquam. Mauris ipsum dans sa grande habitasse. Nam tellus amet sit sed fringilla ut. Asseyez-vous auctor ultrices volutpat nisi porta ipsum. Ut est lectus ultrices massa tincidunt convallis lacus dui suspendisse.",
  price: "DT 280.00",
  type: "homme",
  mesuresDispo: ["40", "41", "42", "43", "44", "45"],
  colour: ["white", "black", "gray"],
  note: 5,
  nombreAvis: 11,
};

export default function HomePage() {
  const [selectedColor, setSelectedColor] = useState<Color>("white");
  const [mainImage, setMainImage] = useState<string>(
    detailsArticle.images[selectedColor][0]
  );
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>("");
  const handleTagChange = (tags: string[] | string) => {
    if (Array.isArray(tags)) {
      setSelectedTags(tags);
    } else {
      setSelectedTag(tags);
    }
  };
  return (
    <div className="flex flex-col items-center py-24 bg-white">
      <div className="flex w-11/12 my-4 gap-4">
        <Link href="/" className="text-gray ">
          Acceuil &gt;{" "}
        </Link>
        <Link href="/" className="text-gray ">
          Hommes &gt;{" "}
        </Link>
        <text className="text-black "> {detailsArticle.marque}</text>
      </div>
      <div className="product-detail flex flex-col sm:flex-row w-11/12 sm:justify-between">
        <div className="images flex sm:flex-col gap-x-2 sm:w-[35%]">
          <img
            src={mainImage}
            alt="Main product"
            className="w-[94%] max-w-[500px] max-h-[500px] object-cover sm:mb-4 rounded-none"
          />
          <div className="thumbnail-images sm:flex">
            {detailsArticle.images[selectedColor]
              .slice(1, 4)
              .map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="sm:w-[30%] max-w-[170px] max-h-[170px] object-cover gap-y-2 cursor-pointer"
                  onClick={() => setMainImage(img)}
                />
              ))}
          </div>
        </div>
        <div className="product-info sm:w-[60%]">
          <div className="flex gap-x-1">
            {Array.from({ length: detailsArticle.note }).map((_, index) => (
              <StarIcon key={index} />
            ))}
            <p className="text-base text-black ml-1">
              {" "}
              {detailsArticle.nombreAvis} avis
            </p>
          </div>
          <h1 className="text-4xl font-medium mt-4 text-black">
            {detailsArticle.name}
          </h1>
          <p className="font-normal text-xs sm:text-sm md:text-base my-4 text-gray w-full lg:w-4/5">
            {detailsArticle.description}
          </p>
          <p className="price text-3xl font-medium text-black">
            {detailsArticle.price}
          </p>
          <div className="h-[1px] my-6 w-full lg:w-4/5 bg-gray/30" />
          <TagGroup
            tags={detailsArticle.mesuresDispo}
            label="Des mesures"
            onTagChange={handleTagChange}
          />
          <p className="mb-2 mt-6 text-base font-semibold text-secondGray">
            Choisir la couleur
          </p>
          <p className="mb-4 text-xl">{selectedColor}</p>
          <div className="colors flex mb-6">
            {detailsArticle.colour.map((color) => (
              <button
                key={color}
                className={`color rounded mr-2 ${
                  selectedColor === color ? "border border-gray-300" : ""
                }`}
                onClick={() => {
                  setSelectedColor(color);
                  setMainImage(detailsArticle.images[color][0]);
                }}
              >
                <img
                  src={detailsArticle.images[color][0]}
                  alt={`${color}`}
                  className="w-20 h-20  rounded object-cover"
                />
              </button>
            ))}
          </div>
          <CustomButton
            label="Ajouter au panier"
            type="button"
            onclick={() => {}}
            bgColor="bg-secondary hover:bg-yellow-500 text-white w-full sm:w-4/5"
          />
          <div className="h-[1px] my-6 w-full lg:w-4/5 bg-gray/30" />
          <p className="mb-2 mt-6 text-base  text-secondGray">
            CATÉGORIE
            <span className="ml-[20%] text-black">
              {detailsArticle.type}, {detailsArticle.marque}
            </span>
          </p>
        </div>
      </div>
      <div className="reviews w-4/5">
        <h2 className="text-2xl font-bold mb-4">3 Reviews</h2>
        <button className="border border-gray-300 rounded-full py-2 px-4 mb-4 text-black">
          Write a Review
        </button>
        <div className="review border-t border-gray-300 py-4">
          <div className="review-header flex justify-between mb-2">
            <div className="reviewer-info flex items-center">
              <img
                src="https://via.placeholder.com/40"
                alt="Reviewer 1"
                className="reviewer-image rounded-full mr-2"
              />
              <div className="reviewer-name font-bold text-black">John Doe</div>
            </div>
            <div className="review-date text-gray-500">July 21, 2024</div>
          </div>
          <p className="review-text text-black">
            Great shoes, very comfortable!
          </p>
        </div>
        <div className="review border-t border-gray-300 py-4">
          <div className="review-header flex justify-between mb-2">
            <div className="reviewer-info flex items-center">
              <img
                src="https://via.placeholder.com/40"
                alt="Reviewer 2"
                className="reviewer-image rounded-full mr-2"
              />
              <div className="reviewer-name font-bold text-black">
                Jane Smith
              </div>
            </div>
            <div className="review-date text-gray-500">July 20, 2024</div>
          </div>
          <p className="review-text text-black">Stylish and fits well.</p>
        </div>
        <div className="review border-t border-gray-300 py-4">
          <div className="review-header flex justify-between mb-2">
            <div className="reviewer-info flex items-center">
              <img
                src="https://via.placeholder.com/40"
                alt="Reviewer 3"
                className="reviewer-image rounded-full mr-2"
              />
              <div className="reviewer-name font-bold text-black">
                Michael Johnson
              </div>
            </div>
            <div className="review-date text-gray-500">July 19, 2024</div>
          </div>
          <p className="review-text text-black">
            A bit tight, but overall good quality.
          </p>
        </div>
      </div>
    </div>
  );
}
