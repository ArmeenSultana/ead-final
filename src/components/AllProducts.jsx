import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=6").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center flex-column ">
      <div className="w-100 d-flex justify-content-center align-items-center flex-column py-5">
        <h1>We have some New Arrivals</h1>
        <p>Your Recently added shirts are here!</p>
      </div>
      <div className="w-100  px-3 d-flex justify-content-center align-items-center flex-wrap ">
        {products.map((product, key) => {
          return <Card key={key} {...product} />;
        })}
      </div>
    </div>
  );
};

const Card = ({ id, image, title, price }) => {
  return (
    <Link
      className="card m-md-4 col-md-2 col-sm-4 col-12 border-0"
      to={`/product/${id}`}
    >
      <div
        className="w-100 object-fit-contain overflow-hidden d-flex justify-content-center align-items-center "
        style={{
          height: "300px",
        }}
      >
        <img
          src={image}
          className="card-img-top"
          alt="..."
          height={"auto"}
          style={{
            width: "140px",
          }}
        />
      </div>
      <div className="card-body d-flex justify-content-center flex-column align-items-center ">
        <p className="fs-6 m-0 fw-bold ">
          {title.split(" ").slice(0, 2).join(" ")}
        </p>
        <p
          className="card-text m-0"
          style={{
            color: "#024E82",
          }}
        >
          ${price}
        </p>
      </div>
    </Link>
  );
};

export default AllProducts;
