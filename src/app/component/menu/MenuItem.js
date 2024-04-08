import { useContext, useState } from "react";
import MenuItemTitle from "../../component/menu/MenuItemTitle";
import { CartContext } from "../AppContext";
import React from "react";
import FlyingButton from "react-flying-item";

export default function MenuItem(menuItem) {
  const { image, name, description, basePrice, sizes, extraIngredientPrices } =
    menuItem;
  const [showPopup, setShowPopup] = useState(false);
  const [selectedSize, setSelectedSize] = useState(sizes?.[0] || null);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const { addToCart } = useContext(CartContext);

  async function handleAddToCartButton(e) {
    e.preventDefault();
    const hasOptions = sizes?.length > 0 || extraIngredientPrices?.length > 0;
    if (hasOptions && !showPopup) {
      setShowPopup(true);
      return;
    }
    addToCart(menuItem, selectedSize, selectedExtras);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setShowPopup(false);
  }

  function handleExtraThing(e, extraThing) {
    const checked = e.target.checked;
    if (checked) {
      setSelectedExtras((prev) => [...prev, extraThing]);
    } else {
      setSelectedExtras((prev) => {
        prev.filter((e) => e.name !== extraThing.name);
      });
    }
  }

  let selectedPrice = basePrice;
  if (selectedSize) {
    selectedPrice += selectedSize.price;
  }
  if (selectedExtras?.length > 0) {
    for (const extra of selectedExtras) {
      selectedPrice += extra.price;
    }
  }

  return (
    <>
      {showPopup && (
        <div
          onClick={() => setShowPopup(false)}
          className="flex items-center justify-center fixed inset-0 bg-black/80 z-10"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="my-8 bg-white p-2 rounded-lg max-w-md"
          >
            <div
              className="overflow-y-scroll p-2"
              style={{ maxHeight: "calc(100vh - 100px)" }}
            >
              <img
                src={image}
                alt={name}
                width={300}
                height={200}
                className="mx-auto"
              />
              <h2 className="text-lg font-bold text-center mb-2">{name}</h2>
              <p className="text-gray-500 text-sm line-clamp-3">
                {description}
              </p>
              {sizes?.length > 0 && (
                <div className="p-2">
                  <h3 className="text-center text-gray-700 font-semibold">
                    Pick your size
                  </h3>
                  {sizes.map((size) => (
                    <label
                      type="button"
                      key={size._id}
                      className="flex items-center gap-2 p-4 border rounded-md mb-1 cursor-pointer text-gray-700"
                    >
                      <input
                        type="radio"
                        name="size"
                        onClick={() => setSelectedSize(size)}
                        checked={selectedSize?.name === size?.name}
                      />
                      <div>
                        {size.name} ${basePrice + size.price}
                      </div>
                    </label>
                  ))}
                </div>
              )}
              {extraIngredientPrices?.length > 0 && (
                <div className="p-2">
                  <h3 className="text-center text-gray-700 font-semibold">
                    Any extras?
                  </h3>
                  {extraIngredientPrices.map((extraThing) => (
                    <label
                      key={extraThing._id}
                      className="flex items-center gap-2 p-4 border rounded-md mb-1 cursor-pointer text-gray-700"
                    >
                      <input
                        type="checkbox"
                        onClick={(e) => handleExtraThing(e, extraThing)}
                        name={extraThing.name}
                      />
                      <div>
                        {extraThing.name} + ${extraThing.price}
                      </div>
                    </label>
                  ))}
                </div>
              )}
              <FlyingButton targetTop={"5%"} targetLeft={"70%"} src={image}>
                <div
                  className="primary sticky bottom-2"
                  onClick={handleAddToCartButton}
                >
                  Add to cart ${selectedPrice}
                </div>
              </FlyingButton>
              <button onClick={() => setShowPopup(false)} className="mt-2">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <MenuItemTitle onAddToCart={handleAddToCartButton} {...menuItem} />
    </>
  );
}
