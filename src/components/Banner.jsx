import React, { useEffect } from "react";

function Banner({ gameBanner }) {
  useEffect(() => {}, []);
  return (
    <>
      <div className="relative">
        <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full">
          <h2 className="text-2xl text-white font-bold mb-2">
            {gameBanner.name}
          </h2>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            style={{
              backgroundColor: "#2563eb",
              color: "white",
              padding: "8px 16px",
              borderRadius: "6px",
            }}
          >
            Get Now
          </button>
        </div>
        <img
          src={gameBanner.background_image}
          className="md:h-80 w-full object-cover object-top rounded-lg ml-4"
          alt=""
        />
      </div>
    </>
  );
}

export default Banner;
