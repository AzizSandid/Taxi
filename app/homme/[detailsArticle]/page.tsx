"use client";
import { Counter, CustomButton, CustomInput } from "@/components";
import TagGroup from "@/components/TagGroup";
import { useArticleDetails } from "@/hooks/use-article-details";
import { StarIcon } from "@/public/icon";
import Link from "next/link";
import React from "react";

export default function HomePage() {
  const {
    selectedColor,
    setSelectedColor,
    mainImage,
    setMainImage,
    numberArticle,
    setNumberArticle,
    handleTagChange,
    detailsArticle,
    newAvis,
    setNewAvis,
    visibleItems,
    addAvis,
    loadMore,
  } = useArticleDetails();
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
            className="w-2/3 sm:w-[94%] max-w-[500px] max-h-[500px] object-cover sm:mb-4 rounded-none"
          />
          <div className="thumbnail-images sm:flex">
            {detailsArticle.images[selectedColor]
              .slice(1, 4)
              .map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-11/12 sm:w-[30%] max-w-[170px] max-h-[170px] object-cover cursor-pointer mb-2 sm:mr-2 sm:mb-0"
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
              {detailsArticle.avis.length} avis
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
          <Counter
            numberArticle={numberArticle}
            setNumberArticle={setNumberArticle}
          />
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
      <div className="reviews w-11/12">
        <h2 className="text-2xl font-bold mb-4">Avis des clients</h2>
        <div className="flex gap-x-1 mb-4">
          {Array.from({ length: detailsArticle.note }).map((_, index) => (
            <StarIcon key={index} />
          ))}
          <p className="text-base text-black ml-1">
            {detailsArticle.avis.length} avis
          </p>
        </div>
        <div className="lg:flex bg-gray/10 p-2 gap-4 border border-[#E8ECEF] my-4 rounded-2xl items-center ">
          <CustomInput
            label="Partage tes pensées"
            name="text"
            value={newAvis}
            onChange={(e) => setNewAvis(e.target.value)}
            type="textarea"
            className="min-h-20"
          />
          <button
            className="border border-gray-300 rounded-full py-2 px-8 h-12 w-52 md:w-64 mt-4 lg:mt-0  bg-black text-white text-sm md:text-base"
            onClick={addAvis}
          >
            Ecrire une critique
          </button>
        </div>
        {detailsArticle.avis.slice(0, visibleItems).map((item) => (
          <div className="review border-b border-gray/30 py-4">
            <div className="review-header flex justify-between mb-2">
              <div className="reviewer-info flex items-center">
                <img
                  src="https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
                  alt="Reviewer 1"
                  className="reviewer-image rounded-full mr-2 w-12 h-12 object-cover"
                  content="cover"
                />
                <div className="reviewer-name font-bold text-black">
                  {item.reviewer}
                  <div className="flex gap-x-1 mt-1">
                    {Array.from({ length: item.note }).map((_, index) => (
                      <StarIcon key={index} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="review-date text-xs text-gray">July 21, 2024</div>
            </div>

            <p className="review-text text-[#353945] md:pl-12 place-self-center text-justify text-xs md:text-base">
              {item.review}
            </p>
          </div>
        ))}
        {visibleItems < detailsArticle.avis.length && (
          <div className="flex justify-center mt-8">
            <button
              className="bg-white hover:bg-slate-200 text-black border border-black-200 font-bold py-2 px-4 rounded-full"
              onClick={loadMore}
            >
              voir plus
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
