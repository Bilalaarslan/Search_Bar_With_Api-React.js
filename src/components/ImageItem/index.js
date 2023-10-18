import React from "react";
import "./index.css";

const ImageItem = ({ imageItem }) => {
  return (
    <div>
      <img className="imageListImg" src={imageItem.urls.small} alt={imageItem.alt_description} />
    </div>
  );
};

export default ImageItem;
