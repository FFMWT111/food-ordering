import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="hero mt-6">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everything <br />
          is better <br />
          with a <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-4 text-gray-500">
          Pizza is the missing piece that makes every day complete,a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-2 justify-center items-center text-sm">
          <button className="flex items-center gap-2 bg-primary text-white rounded-full px-4 py-2 uppercase">
            Order now
            <ArrowRightCircleIcon className="w-6 h-6" />
          </button>
          <button className="flex items-center gap-2 text-gray-600 font-semibold border-0 text-sm ">
            Learn more
            <ArrowRightCircleIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="relative">
        <img
          src={"/pizza.png"}
          alt="pizza"
          layout={"fill"}
          objectfit={"contain"}
        />
      </div>
    </section>
  );
}
