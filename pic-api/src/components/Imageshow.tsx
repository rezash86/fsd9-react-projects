import React from "react";

export interface Image {
  id: string;
  urls: Info;
  alt_description: string;
}

interface Info {
  small: string;
}

interface Props {
  image: Image;
}

const Imageshow = ({ image }: Props) => {
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default Imageshow;
