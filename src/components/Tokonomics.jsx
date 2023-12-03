import React from "react";

function Tokonomics() {
  return (
    <section className=" token">
      <div className="container-wrapper">
        <div>
          <h1 className="text-[#fff] text-5xl  font-bold my-12  ptext uppercase text-center font-bitsu">
            Tokonomics
          </h1>
        </div>

        <div className=" flex justify-center items-center gap-5 text-center">
          <div>
            <img
              src="images/token.png"
              alt=""
              className="h-auto sm:h-[500px]"
            />

            <div className="flex justify-center gap-7 items-center pt-8 mt-8 font-bitsu text-base sm:text-3xl">
              <h2> 50% Burn</h2>

              <h2> 25% PinkSale</h2>

              <h2> 12% Liquidty</h2>

          

             
            </div>

            <div className="flex justify-center gap-7 items-center py-1 mt-8 font-bitsu text-base sm:text-3xl">
              <h2> 7% CEX</h2>

              <h2> 6% Staking</h2>

             

          

             
            </div>

            
          </div>

          <div></div>
        </div>
      </div>
    </section>
  );
}

export default Tokonomics;
