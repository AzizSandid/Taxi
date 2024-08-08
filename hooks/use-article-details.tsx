import { detailsArticle } from "@/dump-data";
import { Color } from "@/types";
import { useState } from "react";

export function useArticleDetails() {
  const [selectedColor, setSelectedColor] = useState<Color>("white");
  const [mainImage, setMainImage] = useState<string>(
    detailsArticle.images[selectedColor][0]
  );
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [newAvis, setNewAvis] = useState<string>("");
  const [numberArticle, setNumberArticle] = useState<number>(1);
  const handleTagChange = (tags: string[] | string) => {
    if (Array.isArray(tags)) {
      setSelectedTags(tags);
    } else {
      setSelectedTag(tags);
    }
  };

  const [visibleItems, setVisibleItems] = useState(3);
  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 2);
  };
  const addAvis=()=>{
    detailsArticle.avis.push({
      id: 4,
      reviewer: "John Doe",  // Replace with the reviewer's name
      note: 4,  // Adjust the rating as needed
      review: "Great shoes, very comfortable, but could be slightly cheaper.",  // Replace with the review text
      date: "2024-08-08"  // Replace with the actual review date
    });
  }
  return {
    selectedColor,
    setSelectedColor,
    mainImage,
    setMainImage,
    selectedTags,
    setSelectedTags,
    selectedTag,
    setSelectedTag,
    numberArticle,
    setNumberArticle,
    handleTagChange,
    detailsArticle,
    newAvis,
    setNewAvis,
    visibleItems,
    setVisibleItems,
    loadMore,
    addAvis
  };
}
