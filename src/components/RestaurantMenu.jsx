import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addItems,increaseItem,decreaseItem, IncrementItems, DecrementItems } from "../stored/CartSlicer";
import { useDispatch,useSelector } from "react-redux";

export default function RestaurantMenu() {
  const { id } = useParams();

  const [recommended, setRecommended] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
const [foodType, setFoodType] = useState("ALL");
const [searchText, setSearchText] = useState("");

const dispatch = useDispatch();
const cartItems = useSelector(state => state.cartslice.items);



function handleAddItems(info){
  dispatch(addItems(info));
}

function handleIncrementItems(info){
  dispatch(IncrementItems(info));
}

function handleDecrementItems(info){
  dispatch(DecrementItems(info));
}






  useEffect(() => {
    async function fetchMenu() {
      const res = await fetch(`http://localhost:5000/api/menu/${id}`);
      const json = await res.json();

      // 1️⃣ Get REGULAR cards
      const regularCards =
        json?.data?.cards
          ?.find(c => c.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      // 2️⃣ Find Recommended section
      const recommendedSection = regularCards?.find(
        card => card?.card?.card?.title === "Recommended"
      );

      // 3️⃣ Extract items
      const items = recommendedSection?.card?.card?.itemCards || [];

      setRecommended(items);
    }

    fetchMenu();
  }, [id]);

 const filteredItems = recommended
  // 🔍 Search filter
  .filter(item =>
    item.card.info.name
      .toLowerCase()
      .includes(searchText.toLowerCase())
  )
  // 🌱 Veg / Non-Veg filter
  .filter(item => {
    if (foodType === "ALL") return true;

    const isVeg = item.card.info.isVeg === 1;
    return foodType === "VEG" ? isVeg : !isVeg;
  });


  



  return (

    <div className="w-[80%] mx-auto mt-10">
        <input
  type="text"
  placeholder="Search dishes..."
  value={searchText}
  onChange={(e) => setSearchText(e.target.value)}
  className="w-full mb-6 px-5 py-3 text-lg bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-gray-400"
/>

   <div className="flex gap-3 my-6">

  {/* ALL */}
  <button
    onClick={() => setFoodType("ALL")}
    className={`px-5 py-2 text-sm font-medium rounded-full border transition
      ${
        foodType === "ALL"
          ? "bg-gray-900 text-white border-gray-900"
          : "border-gray-300 text-gray-700 hover:bg-gray-100"
      }
    `}
  >
    All
  </button>

  {/* VEG */}
  <button
    onClick={() => setFoodType("VEG")}
    className={`flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full border transition
      ${
        foodType === "VEG"
          ? "bg-green-600 text-white border-green-600"
          : "border-green-600 text-green-600 hover:bg-green-50"
      }
    `}
  >
    <span className="w-3 h-3 border border-current flex items-center justify-center">
      <span className="w-1.5 h-1.5 bg-current rounded-full"></span>
    </span>
    Veg
  </button>

  {/* NON-VEG */}
  <button
    onClick={() => setFoodType("NON_VEG")}
    className={`flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full border transition
      ${
        foodType === "NON_VEG"
          ? "bg-red-500 text-white border-red-500"
          : "border-red-500 text-red-500 hover:bg-red-50"
      }
    `}
  >
    <span className="w-3 h-3 border border-current flex items-center justify-center">
      <span className="w-1.5 h-1.5 bg-current rounded-full"></span>
    </span>
    Non-Veg
  </button>

</div>



        <div
  className="flex justify-between items-center cursor-pointer py-4 border-b"
  onClick={() => setIsOpen(prev => !prev)}
>
  <h1 className="text-xl font-bold">Recommended({filteredItems.length})</h1>

  <span
    className={`transition-transform duration-300 ${
      isOpen ? "rotate-180" : "rotate-0"
    }`}
  >
    ⌄
  </span>
</div>

      {recommended.length === 0 && <p>No recommendations found</p>}

{isOpen && (
  <div className="mt-2">
    {filteredItems.map(item => {
      const info = item.card.info;

      const cartItem = cartItems.find(cart => cart.id === info.id);


      return (
        <div
          key={info.id}
          className="flex justify-between items-start py-5 border-b"
        >
          {/* LEFT */}
          <div className="w-[70%]">
            <h2 className="font-semibold text-lg">{info.name}</h2>

            <p className="text-gray-600 text-sm mt-1">
              ₹{(info.price || info.defaultPrice) / 100}
            </p>

            {info.description && (
              <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                {info.description}
              </p>
            )}
          </div>

         {/* RIGHT */}
<div className="relative w-24 h-24">
  {info.imageId ? (
    <img
      src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.imageId}`}
      alt={info.name}
      className="h-24 w-24 rounded-xl object-cover"
    />
  ) : (
    <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-gray-200 text-xs text-gray-500">
      No Image
    </div>
  )}

  {/* Add to Cart Button */}
{cartItem ? (
  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-3 rounded-lg border border-green-600 bg-white px-3 py-1">
    <button
      onClick={() => handleDecrementItems(info)}
      className="text-xl font-bold text-green-600"
    >
      −
    </button>

    <span className="min-w-[20] text-center text-sm font-semibold text-green-700">
      {cartItem.quantity}
    </span>

    <button
      onClick={() => handleIncrementItems(info)}
      className="text-xl font-bold text-green-600"
    >
      +
    </button>
  </div>
) : (
  <button
    onClick={() => handleAddItems(info)}
    className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-lg bg-white px-3 py-1 text-sm font-semibold text-green-600 shadow-md hover:bg-green-50"
  >
    ADD
  </button>
)}

   


 
</div>

        </div>
      );
    })}
  </div>
)}



    </div>
  );
}
