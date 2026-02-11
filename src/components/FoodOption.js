import imageGridCards from "../data/FoodData";
import FoodCard from "./FoodCard";

export default function FoodOption() {
  return (
    <section className="px-4 py-6 bg-white">
      
      {/* Heading */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 
                       flex items-center gap-3 border-l-4 border-orange-500 pl-4">
          🍔 Order our best food options
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid 
                grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8
                gap-3 md:gap-4">
  {imageGridCards[0]?.info?.map((foodData) => (
    <FoodCard key={foodData.id} foodData={foodData} />
  ))}
</div>


    </section>
  );
}
