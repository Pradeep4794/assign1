import React from "react";
import Cards from "./Cards";

const Card = () => {
  return (
    <>
    {/* dsdjfsjjs */}
      <div className="container mt-5">
        <h2 className="text-center">Skip the line</h2>
        <p className="text-center">
          Buy your tickets or classess online and head
          <br />
          write to the rink when you get here
        </p>
        <div className="row ">
          <div className="col-md-3 ">
            <Cards />
           
          </div>

           <div className="col-md-3 ">
            <Cards />
          </div>
          <div className="col-md-3 ">
            <Cards />
          </div>
          <div className="col-md-3 ">
            <Cards />
          </div> 
        </div>
      </div>
    </>
  );
};

export default Card;
