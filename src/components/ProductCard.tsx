import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="max-w-sm bg-white rounded-lg">
      <div className="relative w-full h-48">
        <Image
          src="/images/product1.jpg"
          alt="Product Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800">Product Name</h3>
        <p className="text-sm text-gray-600 mt-2">
          This is a short description of the product.
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-indigo-600">$29.99</span>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
