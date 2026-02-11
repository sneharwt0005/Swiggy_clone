
export default function FoodCard({ foodData }) {
  const imageId = foodData?.imageId || foodData?.info?.imageId;
   const actionLink = foodData?.action?.link;

  if (!imageId) return null;

  return (
    <a
     href={actionLink}
      target="_blank"
      rel="noopener noreferrer"
    >
    
    <img
      src={`https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`}
      className="w-40 h-50 hover:scale-105 transition object-cover"
      alt="food"
    />
    </a>
  );
}
