const IMG_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/w_400,h_250,c_fill/";

export default function DineCard({ dineData }) {
  const info = dineData?.info;

  const imageId = info?.mediaFiles?.[0]?.url;
  const rating = info?.rating?.value;
  const cuisines = info?.cuisines?.join(", ");
  const distance = info?.locationInfo?.distanceString;
  const offerHeader = info?.vendorOffer?.infos?.[0]?.header;
    const ctaLink = dineData?.cta?.link;

  const offerDescription =
    info?.offerInfoV2?.customerOffer?.header;

  return (
    <div
      className="min-w-[280] bg-white rounded-xl overflow-hidden
                 shadow-sm hover:shadow-md transition duration-300"
    >
      {/* Image */}
     <a
      href={ctaLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block min-w-[280]"
    >
      <div className="relative">
        <img
          loading="lazy"
          src={`${IMG_URL}${imageId}`}
          alt={info?.name}
          className="w-full h-44 object-cover"
        />

        {/* Name */}
        <h3 className="absolute bottom-2 left-3 text-white 
                       text-lg font-bold drop-shadow">
          {info?.name}
        </h3>

        {/* Rating */}
        {rating && (
          <div className="absolute bottom-2 right-3 bg-green-600 
                          text-white text-sm font-semibold 
                          px-2 py-0.5 rounded-md flex items-center gap-1">
            ⭐ {rating}
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-3 space-y-1">
        <p className="text-sm text-gray-600 truncate">
          {cuisines}
        </p>

        <p className="text-sm text-gray-500">
          {info?.locality}, {info?.locationInfo?.city?.name}
        </p>

        <div className="flex justify-between text-sm text-gray-700 mt-1">
          <span>{info?.costForTwo}</span>
          <span>{distance}</span>
        </div>

        {/* Table booking */}
        {info?.vendorOffer?.offerHighlights?.length > 0 && (
          <div className="inline-flex items-center gap-1 mt-2 
                          border border-gray-300 rounded-full 
                          px-3 py-1 text-xs text-gray-700">
            🍽️ Table booking
          </div>
        )}
      </div>

      {/* Offer strip */}
      {offerDescription && (
        <div className="bg-green-100 px-3 py-2 text-sm 
                        text-green-800 font-medium">
          {offerDescription}
        </div>
      )}

      {/* Extra offer */}
      {offerHeader && (
        <p className="px-3 py-2 text-xs text-blue-600 font-semibold">
          {offerHeader}
        </p>
      )}
      </a>
    </div>
    
  );
}
