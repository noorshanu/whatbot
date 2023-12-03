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
              <h2 className=" font-bitsu px-2 py-2 border rounded-xl border-[#922592] bg-[#922592a6]">
                50% Burn
              </h2>

              <h2 className=" font-bitsu px-2 py-2 border rounded-xl border-[#ADD8E6] bg-[#add8e6a7]">
                25% PinkSale
              </h2>

              <h2 className=" font-bitsu px-2 py-2 border rounded-xl border-[#F08080] bg-[#F08080a6]">
                12% Liquidty
              </h2>
            </div>

            <div className="flex justify-center gap-7 items-center py-1 mt-8 font-bitsu text-base sm:text-3xl">
              <h2 className=" font-bitsu px-2 py-2 border rounded-xl border-[#90EE90] bg-[#90EE90a6]">
                7% CEX
              </h2>

              <h2 className=" font-bitsu px-2 py-2 border rounded-xl border-[#31356E] bg-[#31356Ea6]">
                6% Staking
              </h2>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </section>
  );
}

export default Tokonomics;
