import { Link } from "react-router-dom";
import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  const redirectPath = `shop/${title}`;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>
        <Link to={redirectPath}>
          {" "}
          <p>Shop Now</p>{" "}
        </Link>
      </div>
    </div>
  );
};

export default DirectoryItem;
