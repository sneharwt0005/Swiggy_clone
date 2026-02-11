import {dineoutRestaurants} from "../data/DineData"
import DineCard from "./DineCard"
export default function DineOption(){
    return(
       <section className="px-4 py-6 bg-white">
      
      {/* Heading */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 
                       flex items-center gap-3 border-l-4 border-orange-500 pl-4">
          Discover best restaurants on Dineout
        </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4">
  {dineoutRestaurants.map((dineData) => (
    <DineCard key={dineData?.info?.id} dineData={dineData} />
  ))}
</div>



    </section>
    )
       
}