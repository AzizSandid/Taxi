 
export type Color = 'white' | 'black' | 'gray';
export type Review = {
  id: number;
  reviewer: string;
  note: number;
  review: string;
  date: string; // Stores the date of the review
};
export type detailsArticleType = {
    id: number;
    images: Record<Color, string[]>;
    name: string;
    marque: string;
    description: string;
    price: string;
    type: string;
    mesuresDispo: string[];
    colour: Color[];
    note:number,
    avis: Review[];  };