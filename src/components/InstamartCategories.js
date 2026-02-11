import { GroceriesCardData} from "../data/GroceryData";
import GroceriesCard from "./GroceriesCard";

function InstamartCategories() {
  return (
    <section className="px-4 py-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 
               flex items-center gap-3 border-l-4 border-orange-500 pl-4">
               🛒 Shop groceries on Instamart
        </h2>
      </div>

    <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
      {GroceriesCardData.info.map((item) => (
        <GroceriesCard key={item.id} card={item} />
      ))}
    </div>

    </section>

  );
}

export default InstamartCategories;