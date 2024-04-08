import { cartProductPrice } from "../../component/AppContext";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function CartProduct({ product, onRemove }) {
  return (
    <div className="flex items-center gap-4 border-b py-4">
      <div className="max-w-24 max-h-24 overflow-hidden">
        <img
          width={240}
          height={200}
          src={product.image}
          alt={"pizza pic"}
          className="w-full h-full"
        />
      </div>
      <div className="grow">
        <h3 className="font-semibold">{product.name}</h3>
        {product.size && (
          <div className="text-sm">
            Size: <span>{product.size.name}</span>
          </div>
        )}
        {product.extras?.length > 0 && (
          <div className="text-sm text-gray-500">
            {product.extras.map((extra) => (
              <div key={extra.name}>
                {extra.name} ${extra.price}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="text-lg font-semibold">${cartProductPrice(product)}</div>
      {!!onRemove && (
        <div className="ml-2">
          <button type="button" onClick={() => onRemove(index)} className="p-2">
            <TrashIcon className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
