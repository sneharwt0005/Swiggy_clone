import { Link } from "react-router-dom";

export default function RestCard({ restInfo, image }) {
  return (
    <Link to={`/city/delhi/${restInfo?.info?.id}`}>
    <div className="w-64 bg-white rounded-xl shadow-lg overflow-hidden m-4 hover:shadow-2xl transition-shadow duration-300">
      
      {/* Image */}
      <div className="h-40 w-full overflow-hidden">
        <img
          src={image}
          alt={restInfo?.info?.name || "Restaurant"}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">{restInfo?.info?.name}</h2>
        <p className="text-sm text-gray-500 mt-1 truncate">
          {restInfo?.info?.cuisines?.join(", ")}
        </p>

        {/* Rating Badge */}
        <div className="mt-2 flex items-center justify-between">
  <span className="text-sm font-medium text-white bg-green-500 px-2 py-1 rounded">
    ⭐ {restInfo?.info?.avgRating || "N/A"}
  </span>

  <span className="text-sm text-gray-400">
    {restInfo?.info?.sla?.deliveryTime
      ? restInfo.info.sla.deliveryTime + " mins"
      : ""}
  </span>
</div>

      </div>
    </div>
    </Link>
  );
}
