import "./Item.css";

const Item = (prop) => {
  return (
    <div className="item">
      <img src={prop.image} alt="" className="h-[150px]" />
      <p className="text-black">{prop.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${prop.new_price}</div>
        <div className="item-price-old">${prop.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
