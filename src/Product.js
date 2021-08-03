import React, { useState, useEffect } from "react";
const Product = () => {
  const [adata, setAdata] = useState([]);

  useEffect(() => {
    const data = async () => {
      const url =
        "https://gist.githubusercontent.com/sandeepdillerao/edb372a95d6cf1a2a49b79577d023281/raw/75bf5e59e47748fad0d01ca63c81dd3791c2615c/product.json";
      const response = await fetch(url);
      const res = await response.json();
      setAdata(res);

      console.log(res);
    };
    data();
  }, []);
  return (
    <div className="main">
      <div>
        <h3>brands</h3>
      
      </div>

      <div className="cards">
        {/* <h3>Products</h3> */}
        {adata.map((a) => {
          return (
            <div>
              <div className="card">
                <img src={a.icon} />
                <p>{a.name}</p>
                <h6>Price:₹{a.price}</h6>
                <h6>Weigth{a.weight}</h6>
                <h4>{a.brand}</h4>
                <button>Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Product;
