import productData from '../../assets/Data/productData'


const CartPage = () => {



  const totalPrice = productData.shoes.reduce((total, item) => total + item.price * item.quantity ? item.quantity : 36000, 0);

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold text-black mb-4">Shopping Cart</h1>

      <div className="bg-white rounded-lg shadow-md p-4">
        {productData.shoes.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          productData.shoes.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-2 text-gray-700">
              <img src={item.src} alt={item.title} className="size-16 object-cover" />
              <div className="flex-grow ml-4">
                <h2 className="font-semibold">{item.title}</h2>
                <p >Rs.{item.price}</p>
                <p >Qty: {item.quantity ? item.quantity : 1}</p>
              </div>
              <div className="">Rs.{(item.price * item.quantity ? item.quantity : item.price)}</div>
            </div>
          ))
        )}
        {productData.shoes.length > 0 && (
          <div className="mt-4 flex justify-between">
            <h2 className="">Total:</h2>
            <p className="">Rs.{totalPrice.toFixed(2)}</p>
          </div>
        )}
        {productData.shoes.length > 0 && (
          <div className="mt-4 flex justify-between">
            <button className=" underline underline-offset-2">Continue Shopping</button>
            <button className=" underline underline-offset-2">Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
