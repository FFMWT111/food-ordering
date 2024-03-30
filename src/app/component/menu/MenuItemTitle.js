import AddToCartButton from "./AddToCartButton";

export default function MenuItemTitle({ onAddToCart, ...item }) {
  const { image, description, name, basePrice, sizes, extraIngredientPrices } =
    item;

  const hasSizesOrExtras =
    sizes.length > 0 || extraIngredientPrices?.length > 0;

  return (
    <div className="relative mx-auto bg-gray-200 shadow-md hover:bg-white hover:shadow-md hover:shadow-black/25 p-4 rounded-lg text-center transition-all min-h-[350px]">
      <div className="p-2 max-w-60 max-h-44 mx-auto overflow-hidden">
        <img
          src={image}
          alt="pizza"
          className="w-full h-full mx-auto overflow-hidden"
        />
      </div>
      <div>
        <h4 className="text-xl font-semibold my-2 text-clip overflow-hidden leading-5">
          {name}
        </h4>
        <p className="text-gray-500 text-sm line-clamp-3 h-[43px] text-clip overflow-hidden">
          {description}
        </p>
      </div>
      <AddToCartButton
        hasSizesOrExtras={hasSizesOrExtras}
        onClick={onAddToCart}
        basePrice={basePrice}
        image={image}
      />
    </div>
  );
}
