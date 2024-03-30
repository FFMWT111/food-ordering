import React from "react";
import FlyingButton from "react-flying-item";

export default function AddToCartButton({
  onClick,
  basePrice,
  hasSizesOrExtras,
  image,
}) {
  if (!hasSizesOrExtras) {
    return (
      <div className="flying-button-parent absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
        <FlyingButton targetTop={"5%"} targetLeft={"95%"} src={image} alt="">
          <div onClick={onClick}>Add to cart ${basePrice}</div>
        </FlyingButton>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-primary text-white mt-4 py-2 px-8 rounded-full"
    >
      <span>Add to cart (from ${basePrice})</span>
    </button>
  );
}
