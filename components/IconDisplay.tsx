import React from "react";
interface IconDisplayProps {
  icon: React.ElementType;
  label: string;
  subTitle?: string;
}

const IconDisplay: React.FC<IconDisplayProps> = ({ icon: Icon, label,subTitle}) => {
  return (
    <div className="flex flex-col items-center space-y-4 w-1/3 mt-12">
      <div className="flex items-center justify-center p-4 bg-primary rounded-full w-24 h-24">
        <Icon/>
      </div>
      <p className="font-bold text-center text-xs sm:text-base md:text-lg">{label}</p>
      <p className="font-medium text-center text-xs sm:text-base md:text-lg text-gray">{subTitle}</p>

    </div>
  );
};

export default IconDisplay;