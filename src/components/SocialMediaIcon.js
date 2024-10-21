import { useState } from "react";

const SocialMediaIcon = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <span
      className="cursor-pointer"
      style={{
        cursor: "pointer",
        filter: isHovered
          ? "invert(60%) sepia(43%) saturate(6017%) hue-rotate(315deg) brightness(109%) contrast(97%)"
          : "none",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={props.imageSrc}
        alt={props.imageAlt}
        className="cursor-pointer hover:fill-blue-500 hover:stroke-blue-500"
      />
    </span>
  );
};

export default SocialMediaIcon;
