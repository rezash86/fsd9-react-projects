import React from "react";
import Imageshow from "./Imageshow";
import { Image } from "./Imageshow";
import "./ImageList.css";

interface Props {
  images: Image[];
}

const ImageList = ({ images }: Props) => {
  // console.log("I receievd images");
  // console.log(images);

  const renderedImages = images.map((image) => {
    return <Imageshow key={image.id} image={image} />;
  });

  return <div className="image-list">{renderedImages}</div>;
};

export default ImageList;
