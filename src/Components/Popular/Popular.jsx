import "./Popular.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="flex flex-col items-center p-1 h-auto">
      <h1 className="text-black text-sm md:text-2xl text-center font-bold">
        BEST BUY
      </h1>
      <hr className="w-full my-0" />
      <div className="flex flex-wrap justify-center items-center space-x-2 gap-4 ">
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
