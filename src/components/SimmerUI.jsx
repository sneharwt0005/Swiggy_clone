import ShimmerCard from "./SimmerCard";
export default function ShimmerUI() {
  return (
    <div className="flex flex-wrap w-[90%] mx-auto mt-20">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <ShimmerCard key={index} />
        ))
        }
    </div>
  );
}
