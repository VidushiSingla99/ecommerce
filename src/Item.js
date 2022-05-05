import React from "react";
import Product from "./Product";
import data from "./data";

export default function Item({pric}) {
  return (
    <div className="offset-lg-2 col-8">
      <div className="header my-4 ">Our Product Line</div>
        <div className="">
          <div className="row">
            {data.productData.map((item, index) => {
              return (
                <Product
                  title={item.title}
                  src={item.src}
                  price={item.src}
                  key={index}
                  item={item}
                  catselected={pric}
                />
              );
            })}
          </div>
        </div>
      </div>

  );
}
