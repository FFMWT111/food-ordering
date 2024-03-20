import { useContext } from "react";
import MenuItemTitle from "../../component/menu/MenuItemTitle";
import Image from "next/image";
// import { CartContext } from "../component/AppContext";

export default function MenuItem(menuItem) {
  const { image, name, description, basePrice, sizes, extraIngredientPrices } =
    menuItem;
  const { addToCart } = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedSize, setSelectedSize] = useState(sizes?.[0] || null);
  const [selectedExtras, setSelectedExtras] = useState([]);

  async function handleAddToCartButton() {
    const hasOptions = sizes.length > 0 || extraIngredientPrices.length > 0;
    if (hasOptions && !showPopup) {
      setShowPopup(true);
      return;
    }
    addToCart(menuItem, selectedSize, selectedExtras);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setShowPopup(false);
  }

  function handleExtraThing(e) {
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
          onClick={() => setShowPopup(flase)}
          className="flex items-center justify-center fixed inset-0 bg-black/80"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="my-8 bg-white p-2 rounded-lg max-w-md"
          >
            <div
              className="overflow-y-scroll p-2"
              style={{ maxHeight: "calc(100vh - 100px)" }}
            >
              <Image
                src={image}
                alt={name}
                width={300}
                height={200}
                className="mx-auto"
              />
              <h2 className="text-lg font-bold text-center mb-2">{name}</h2>
              <p className="text-center text-gray-500 text-sm mb-2">
                {description}
              </p>
              {sizes?.length > 0 && (
                <div className="p-2">
                  <h3 className="text-center text-gray-700">Pick your size</h3>
                  {sizes.map((size) => (
                    <label className="flex items-center gap-2 p-4 border rounded-md mb-1">
                      <input
                        type="radio"
                        name="size"
                        onClick={() => setSelectedSize(size)}
                        checked={selectedSize?.name === size.name}
                      />
                      {size.name} ${basePrice + size.price}
                    </label>
                  ))}
                </div>
              )}
              {extraIngredientPrices?.length > 0 && (
                <div className="p-2">
                  <h3 className="text-center text-gray-700">Any extras?</h3>
                  {extraIngredientPrices.map((extraThing) => (
                    <label className="flex items-center gap-2 p-4 border rounded-md mb-1">
                      <input
                        type="checkbox"
                        onClick={(e) => handleExtraThing(e, extraThing)}
                        name={extraThing.name}
                      />
                      {extraThing.name} + ${extraThing.price}
                    </label>
                  ))}
                </div>
              )}
              <FlyingButton targetTop={"5%"} targetLeft={"95%"} src={image}>
                <div
                  onClick={handleAddToCartButton}
                  className="primary sticky bottom-2"
                >
                  Add to cart ${selectedPrice}
                </div>
              </FlyingButton>
              <button onClick={() => setShowPopup(flase)} className="mt-2">
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
