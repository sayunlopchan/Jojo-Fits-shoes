import { useParams } from 'react-router-dom';
import productData from '../../assets/Data/productData';

const DetailPage = () => {
  // Get the id from the URL parameters
  const { id } = useParams();

  // Convert id to a number
  const productId = parseInt(id, 10);

  // Find the product based on the id
  const product = productData.shoes.find(item => item.id === productId);

  // Check if the product exists
  if (!product) {
    return <div className="text-center p-6">Product not found.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center">
        <img
          src={product.src}
          alt={product.alt}
          className="w-full h-auto max-w-md mx-auto mb-4"
        />
      </div>
      <div className="mt-4">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-xl font-semibold text-gray-700">NPR {product.price}</p>
        <p className="mt-2 text-gray-600">{product.description}</p>
        <div className="mt-4">
          <label htmlFor="size" className="mr-2">Size:</label>
          <select id="size" name="size" className="border border-gray-300 rounded p-2">
            {product.sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <button
          className="mt-4 bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
        >
          Add to Cart
        </button>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-bold">More Banners:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {productData.bannerData.map((banner) => (
            <div key={banner.id} className="border rounded p-4">
              <img src={banner.src} alt={banner.alt} className="w-full h-auto mb-2" />
              <h3 className="font-semibold">{banner.title}</h3>
              <p>{banner.description}</p>
              <p className="text-gray-500">{banner.discount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
