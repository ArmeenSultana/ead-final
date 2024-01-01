import React from "react";
import image1 from "../assets/car-icon.png";
import image2 from "../assets/support-icon.png";
import image3 from "../assets/return-icon.png";
import image4 from "../assets/secure-icon.png";

const serviceCard = ({ image, title, description }) => {
  return (
    <>
      <div class="card border-0 col-md-3 col-sm-5 col-12 mx-1 my-md-0 my-4">
        <div className="d-flex w-100">
          <div className="p-1 px-3">
            <img className="" src={image} alt="" width={20} />
          </div>
          <div className="">
            <div
              className="fw-bold "
              style={{
                fontSize: "16px",
              }}
            >
              {title}
            </div>
            <div className="pe-3">{description}</div>
          </div>
        </div>
      </div>
    </>
  );
};

const data = [
  {
    image: image1,
    title: "Free Shipping",
    description: "Enjoy free shipping on all orders above $100",
  },
  {
    image: image2,
    title: "SUPPORT 24/7",
    description: "Our support team is there to help you for queries",
  },
  {
    image: image3,
    title: "30 DAYS RETURN",
    description: "Simply return it within 30 days for an exchange.",
  },
  {
    image: image4,
    title: "100% PAYMENT SECURE",
    description: "Our payments are secured with 256 bit encryption",
  },
];

const Services = () => {
  return (
    <div className="p-5">
      <div className="px-5">
        <div className="d-flex justify-content-evenly align-items-center flex-wrap flex-md-nowrap  py-5 my-5">
          {data.map((value, key) => {
            return <serviceCard key={key} {...value} />;
          })}
        </div>
      </div>
      <div className="d-flex justify-content-evenly align-items-center row">
        <div
          className="col-md-7 bg-black d-flex justify-content-center align-items-center text-white flex-column"
          style={{
            height: "70vh",
          }}
        >
          <h1>PEACE OF MIND</h1>
          <p className="w-50 text-center ">
            A one-stop platform for all your fashion needs, hassle-free. Buy
            with a peace of mind.
          </p>
          <button
            className="btn btn-light border-0 rounded-0 px-4"
            style={{
              color: "#024E82",
            }}
          >
            BUY NOW
          </button>
        </div>
        <div
          className="col-md-4 bg-black d-flex justify-content-center align-items-center text-white flex-column"
          style={{
            height: "70vh",
          }}
        >
          <h1>Buy 2 Get 1 Free</h1>
          <p className="w-75 text-center ">
            End of season sale. Buy any 2 items of your choice and get 1 free.
          </p>
          <button
            className="btn btn-light border-0 rounded-0 px-4"
            style={{
              color: "#024E82",
            }}
          >
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
