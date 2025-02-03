import React from "react";
import "./Item.css";

const Item = ({ item }) => {
  if (!item || !item.image) {
    return <div className="item-error">Error: Image not available</div>;
  }

  return (
    <div className="item">
      <img src={item.image} alt={item.name || "Item Image"} />
      <h3>{item.name || "No Title"}</h3>
      <p>Size: {item.size || "No Size Available"}</p>
      <p>New Price: {item.new_price ? `$${item.new_price}` : "Not Available"}</p>
      {item.old_price && (
        <p className="old-price">Old Price: ${item.old_price}</p>
      )}
    </div>
  );
};

export default Item;
