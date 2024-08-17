import { detailsArticleType } from "@/types";

export const detailsArticle: detailsArticleType = {
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
    avis: [
      {
        id: 1,
        reviewer: "Sofia Harvetz",
        note: 5,
        review: "Excellent quality and comfortable.",
        date: "2024-08-01",
      },
      {
        id: 2,
        reviewer: "John Doe",
        note: 4,
        review: "Great shoes, very comfortable, but could be slightly cheaper.",
        date: "2024-08-08",
      },
      {
        id: 3,
        reviewer: "Jane Smith",
        note: 5,
        review: `I absolutely love these shoes! They are incredibly comfortable and have a great fit. 
                I have worn them daily for the past few weeks and they show no signs of wear and tear. 
                The design is sleek and stylish, making them versatile for both casual and slightly 
                more formal occasions. The cushioning inside is superb, providing excellent support for 
                long walks or standing for extended periods. My only minor gripe is that they took a little 
                longer than expected to break in, but once they did, they became my go-to shoes. I would 
                highly recommend these to anyone looking for a durable and stylish pair of sneakers.`,
        date: "2024-08-09"
    }
    ],
  };