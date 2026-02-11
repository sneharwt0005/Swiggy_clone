import { useSelector } from "react-redux";

export default function Checkout() {

  const items = useSelector(state => state.cartslice.items);

  const totalPrice = items.reduce((total, item) => {
    return total + (item.price / 100) * item.quantity;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      {items.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty 🛒</p>
      ) : (
        <div className="bg-white rounded-xl shadow-md p-6">

          {/* Cart Items */}
         {items.map(item => {
  const imageUrl = item.imageId
    ? `https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`
    : null;

  const price = (item.price || item.defaultPrice) / 100;
  const subtotal = price * item.quantity;

  return (
    <div
      key={item.id}
      className="flex justify-between items-center border-b py-4"
    >
      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">

        {/* Small Image */}
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={item.name}
            className="w-16 h-16 rounded-lg object-cover"
          />
        ) : (
          <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-500">
            No Image
          </div>
        )}

        {/* Item Details */}
        <div>
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p className="text-gray-500 text-sm">
            ₹{price} × {item.quantity}
          </p>
        </div>

      </div>

      {/* RIGHT SIDE (Subtotal) */}
      <div className="text-lg font-semibold">
        ₹{subtotal}
      </div>
    </div>
  );
})}

          {/* Total Section */}
          <div className="flex justify-between items-center mt-6 text-xl font-bold">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>

          {/* Place Order Button */}
          <button className="w-full mt-6 bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
            Place Order
          </button>

        </div>
      )}
    </div>
  );
}
