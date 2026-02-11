export default function ShimmerCard() {
  return (
    <div className="p-2 m-2 border-gray-700 rounded shadow w-64 animate-pulse">
      {/* image */}
      <div className="bg-gray-300 h-40 w-full rounded"></div>

      {/* title */}
      <div className="h-4 bg-gray-300 rounded mt-3 w-3/4"></div>

      {/* cuisine */}
      <div className="h-3 bg-gray-300 rounded mt-2 w-full"></div>

      {/* rating */}
      <div className="h-3 bg-gray-300 rounded mt-2 w-1/2"></div>
    </div>
  );
}
