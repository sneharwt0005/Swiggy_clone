const IMG_CDN =
  "https://media-assets.swiggy.com/swiggy/image/upload/";

function GroceriesCard({ card }) {
  return (
    <a
      href={card.action.link}
      className="group flex flex-col items-center text-center"
       target="_blank"
    >
      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition">
        <img
          src={IMG_CDN + card.imageId}
          alt={card.action.text}
          className="w-full h-full object-cover group-hover:scale-110 transition"
        />
      </div>

      <p className="mt-2 text-sm font-semibold text-gray-800">
        {card.action.text}
      </p>
    </a>
  );
}

export default GroceriesCard;
