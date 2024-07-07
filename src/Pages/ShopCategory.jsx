import React, { useContext } from "react";
import "../Pages/CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import "./CSS/ShopCategory.css";

const ShopCategory = (prop) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <div className="category-header">
        <img
          decoding="async"
          src={
            prop.category === "wheels"
              ? "https://luxurywheel.com.au/wp-content/uploads/2021/10/Rotiform-Wheels.webp"
              : "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTRsdm83ZXAxcnI2Nms4NWMzdHk4c2wweGU0Mzdub3NocnB5OW9vZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kiY19eeBn77hwuYtnu/giphy.webp"
          }
          alt="Rotiform Wheels"
          className="category-image"
        />
      </div>
      <div
        className="max-w-9xl mx-auto justify-items-center grid grid-cols-1 
      sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-4 px-4 sm:px-8 md:px-12 lg:px-0 xl:px-80 border-black"
      >
        {all_product.map((item, i) => {
          if (prop.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
