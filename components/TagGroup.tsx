import React, { useState } from "react";
import Tag from "./Tag";

interface TagGroupProps {
  tags: string[];
  label: string;
  error?: string;
  required?: boolean;
  multi?: boolean;
  onTagChange?: (selected: string[] | string) => void;
}

const TagGroup: React.FC<TagGroupProps> = ({
  onTagChange,
  tags,
  label,
  error,
  required = false,
  multi = false,
}) => {
  const [visibleItems, setVisibleItems] = useState<number>(8);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };

  const [selectedSingle, setSelectedSingle] = useState<string>("");
  const [selectedMulti, setSelectedMulti] = useState<string[]>([]);

  const handlePress = (label: string) => {
    if (multi) {
      if (selectedMulti.includes(label)) {
        const newSelected = selectedMulti.filter((tag) => tag !== label);
        setSelectedMulti(newSelected);
        onTagChange && onTagChange(newSelected);
      } else {
        const newSelected = [...selectedMulti, label];
        setSelectedMulti(newSelected);
        onTagChange && onTagChange(newSelected);
      }
    } else {
      const newSelected = selectedSingle === label ? "" : label;
      setSelectedSingle(newSelected);
      onTagChange && onTagChange(newSelected);
    }
  };
  return (
    <div className="mt-5 w-full">
      <div className="flex w-full flex-row justify-start">
        <span className="mb-2 text-base font-semibold text-secondGray">
          {label}
        </span>
        {required && <span className="text-primary">*</span>}
      </div>
      <div className="flex flex-row flex-wrap">
        {tags.slice(0, visibleItems).map((tag) => (
          <Tag
            key={tag}
            label={tag}
            handlePress={() => handlePress(tag)}
            isSelected={
              multi ? selectedMulti.includes(tag) : selectedSingle === tag
            }
          />
        ))}
      </div>
      {error && <span className="text-xs text-red-500">{error}</span>}
      {visibleItems < tags.length && (
        <span
          className="mt-2 text-blue-500 underline cursor-pointer"
          onClick={loadMore}
        >
          Show more
        </span>
      )}
    </div>
  );
};

export default TagGroup;
