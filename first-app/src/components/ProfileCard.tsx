import "bulma/css/bulma.css";

interface Props {
  title: string;
  handle: string;
  description: string;
  image: string;
}

// https://bulma.io/documentation/components/card/
const ProfileCard = ({ title, handle, description, image }: Props) => {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <figure className="image is-1by1">
            <img src={image} alt="logo" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{handle}</p>
          </div>
          <div className="content">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
