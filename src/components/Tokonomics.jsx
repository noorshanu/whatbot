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

        <div className=" flex justify-between items-center gap-5">
          <div>
            <img
              src="images/token.png"
              alt=""
              className="h-auto sm:h-[500px]"
            />
          </div>

          <div>
            <div className="flex items-center">
              <div className=""></div>

              <div>
                <h2> 50% Burn</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tokonomics;
