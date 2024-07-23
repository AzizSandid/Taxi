"use client";
import React, { useState } from "react";

    const detailsArticle=
        {
            id:1, 
            images :{
                white: ['/exemple.png', '/exemple.png', '/exemple.png', '/exemple.png'],
                black: ['/airForceBlack.png', '/airForceBlack.png', '/airForceBlack.png', '/airForceBlack.png'],
                gray: ['/exemple.png', '/exemple.png', '/exemple.png', '/exemple.png'],
            },
            name:'Air Force 1',
            marque:'Nike',
            description:'Lorem ipsum dolor sit amet consectetur. Elementum praesent sagittis turpis iaculis elementum aliquam. Mauris ipsum dans sa grande habitasse. Nam tellus amet sit sed fringilla ut. Asseyez-vous auctor ultrices volutpat nisi porta ipsum. Ut est lectus ultrices massa tincidunt convallis lacus dui suspendisse.',
            price:"DT 280.00",
            type:'homme',
            mesuresDispo:[40,41,42,43,44,45],
            colour:["white",'black','gray']
        }
      
        export default function HomePage() {
            const [selectedColor, setSelectedColor] = useState('white');
            const [mainImage, setMainImage] = useState(detailsArticle.images[selectedColor][0]);
          
            return (
              <div className="flex flex-col items-center justify-between py-24 bg-white">
                <div className="product-detail flex w-4/5 mx-auto mb-12">
                  <div className="images flex flex-col mr-8">
                    <img
                      src={mainImage}
                      alt="Main product"
                      className="main-image w-[500px] h-[500px] object-cover mb-4"
                    />
                    <div className="thumbnail-images flex">
                      {detailsArticle.images[selectedColor].map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-24 h-24 object-cover mr-2 cursor-pointer"
                          onClick={() => setMainImage(img)}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="product-info max-w-lg">
                    <h1 className="text-4xl font-bold mb-4 text-black">Air Force 1</h1>
                    <p className="price text-3xl font-bold mb-6 text-black">$120.00</p>
                    <div className="sizes flex mb-6">
                      <button className="size border border-gray-300 py-2 px-4 mr-2 text-black">
                        S
                      </button>
                      <button className="size border border-gray-300 py-2 px-4 mr-2 text-black">
                        M
                      </button>
                      <button className="size border border-gray-300 py-2 px-4 text-black">
                        L
                      </button>
                    </div>
                    <div className="colors flex mb-6">
                      {Object.keys(detailsArticle.images).map((color) => (
                        <button
                          key={color}
                          className={`color border border-gray-300 py-2 px-4 mr-2 text-black ${
                            selectedColor === color ? "border-black" : ""
                          }`}
                          onClick={() => {
                            setSelectedColor(color);
                            setMainImage(detailsArticle.images[color][0]);
                          }}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                    <button className="add-to-cart bg-yellow-500 text-white py-3 px-6 text-black">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="reviews w-4/5 mx-auto">
                  <h2 className="text-2xl font-bold mb-4">3 Reviews</h2>
                  <button className="border border-gray-300 rounded-full py-2 px-4 mb-4 text-black">Write a Review</button>
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
                    <p className="review-text text-black">Great shoes, very comfortable!</p>
                  </div>
                  <div className="review border-t border-gray-300 py-4">
                    <div className="review-header flex justify-between mb-2">
                      <div className="reviewer-info flex items-center">
                        <img
                          src="https://via.placeholder.com/40"
                          alt="Reviewer 2"
                          className="reviewer-image rounded-full mr-2"
                        />
                        <div className="reviewer-name font-bold text-black">Jane Smith</div>
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
                        <div className="reviewer-name font-bold text-black">Michael Johnson</div>
                      </div>
                      <div className="review-date text-gray-500">July 19, 2024</div>
                    </div>
                    <p className="review-text text-black">A bit tight, but overall good quality.</p>
                  </div>
                </div>
              </div>
            );
          }