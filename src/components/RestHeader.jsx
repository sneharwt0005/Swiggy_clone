import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function RestHeader(){
    
    const cartItems = useSelector(state => state.cartslice.items);

  const totalCount = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
    

    
    
    return(
      <div className="sticky top-0 z-50 bg-white shadow-md">
  <div className="container mx-auto flex items-center justify-between px-6 py-4">
    
    {/* Logo */}
    <h1 className="text-3xl font-extrabold tracking-wide text-orange-600">
      Swiggy
    </h1>

    {/* Menu */}
    <div className="flex items-center gap-8">
      <p className="cursor-pointer text-lg font-medium text-gray-700 transition hover:text-orange-600">
        Home
      </p>

      <p className="cursor-pointer text-lg font-medium text-gray-700 transition hover:text-orange-600">
        Offers
      </p>

      {/* Cart */}
      <div className="cursor-pointer">
        <Link to="/Checkout">
        <span className="text-lg font-semibold text-gray-800 transition hover:text-orange-600">
          Cart{`(${totalCount})`}
        </span>
        </Link>
      </div>
    </div>

  </div>
</div>


    )
}