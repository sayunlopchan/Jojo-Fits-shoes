import React, { useState } from 'react';

const FavouritePage = () => {
  // Sample liked products (replace this with actual data from a global state or database)
  const [favourites, setFavourites] = useState([
    { id: 1, name: 'Product 1', price: 50, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg' },
    { id: 2, name: 'Product 2', price: 30, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg' },
    { id: 3, name: 'Product 3', price: 20, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg' },
    { id: 4, name: 'Product 4', price: 25, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg' },
    { id: 5, name: 'Product 5', price: 35, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg' },
    { id: 6, name: 'Product 6', price: 45, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg' },
    { id: 7, name: 'Product 7', price: 55, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg' },
    { id: 8, name: 'Product 8', price: 60, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg' },
  ]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Your Favourite Products</h1>

      {/* Check if there are favourite products */}
      {favourites.length === 0 ? (
        <p className="text-gray-500">You haven't liked any products yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Create the gallery layout based on favourites */}
          {favourites.map((product) => (
            <div key={product.id} className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={product.image}
                  alt={product.name}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavouritePage;
