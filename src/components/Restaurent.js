import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import ShimmerUI from "./SimmerUI";

export default function Restaurent() {
  const [restData, setRestData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
         "https://your-backend-name.onrender.com/api/restaurants"
        );
        const data = await response.json();

        let restaurants = [];

        // Flatten all restaurant cards
        data?.data?.cards?.forEach((card) => {
          const info = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          if (info) restaurants.push(...info);
        });

        setRestData(restaurants);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Example set of placeholder / stock images
  const images = [
    "https://th.bing.com/th/id/OIP.r6QNsFDrNL6nrOMhstm88gHaEO?w=328&h=187&c=7&r=0&o=7&pid=1.7&rm=3",
    "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoaW5lc2UlMjBmb29kfGVufDB8fDB8fHww",
    "https://media.istockphoto.com/id/483120255/photo/asian-oranage-chicken-with-green-onions.webp?a=1&b=1&s=612x612&w=0&k=20&c=nYPWyUMuQeO6jpTuKhn2EpF1YD1d7cxh07ZFBKjPnTs=",
    "https://images.unsplash.com/photo-1667388969250-1c7220bf3f37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmVudHxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1681493207807-19e77818dc73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3RhdXJlbnR8ZW58MHx8MHx8fDA%3D",
    "https://media.istockphoto.com/id/1400398000/photo/victoria-sandwich-cake-decorated-with-strawberries-blueberries-and-mint-closeup.webp?a=1&b=1&s=612x612&w=0&k=20&c=S3LvYOFYED45nzTcM1ctOh3ivzqU32u3Qj6Q99GrknA=",
  ];

  if (loading) {
    return <ShimmerUI />;
  }

  return (
    <div className="flex flex-wrap w-[90%] mx-auto mt-20">
      {restData.map((restInfo, index) =>
        restInfo?.info?.id ? (
          <RestCard
            key={restInfo.info.id + "-" + index}
            restInfo={restInfo}
            image={images[index % images.length]}
          />
        ) : null
      )}
    </div>
  );
}


