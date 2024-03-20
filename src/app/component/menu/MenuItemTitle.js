import AddToCartButton from "./AddToCartButton";

export default function MenuItemTitle({ onAddToCart, ...item }) {
  const { image, description, name, basePrice, sizes, extraIngredientPrices } =
    item;

  const hasSizesOrExtras =
    sizes.length > 0 || extraIngredientPrices?.length > 0;

  return (
    <div className="bg-gray-200 shadow-md hover:bg-white hover:shadow-md hover:shadow-black/25 p-4 rounded-lg text-center transition-all">
      <img src={image} alt="pizza" className="max-h-24 mx-auto" />
      <h4 className="text-xl font-semibold my-3">{name}</h4>
      <p className="text-gray-500 text-sm line-clamp-3">{description}</p>
      <AddToCartButton
        hasSizesOrExtras={hasSizesOrExtras}
        onClick={onAddToCart}
        basePrice={basePrice}
        image={image}
      />
    </div>
  );
}
