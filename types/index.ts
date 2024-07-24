 
export type Color = 'white' | 'black' | 'gray';
export type detailsArticleType = {
    id: number;
    images: Record<Color, string[]>;
    name: string;
    marque: string;
    description: string;
    price: string;
    type: string;
    mesuresDispo: number[];
    colour: Color[];
  };