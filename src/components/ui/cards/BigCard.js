import React from "react";

export default function BigCard({
  card: { imageBig, index, titleBig, descriptionBig },
}) {
  return (
    <div
      key={index}
      className="bg-white rounded-lg w-full h-80 gap-2 flex flex-col text-center items-center transition hover:scale-105"
    >
      <img className="mb-3 mt-10" src={imageBig} alt="cardsImage" />
      <h6 className=" text-md font-semibold text-primary-brand-color">
        {titleBig}
        <p className=" text-sm font-thin text-gray-500">{descriptionBig}</p>
      </h6>
    </div>
  );
}
