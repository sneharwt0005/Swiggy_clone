import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-[#ff5200] p-4 font-serif">
        <div className="flex justify-between container mx-auto py-8">
      <img
        className="w-40 h-12"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
        alt="Swiggy"/>
        <div className=" text-white text-base font-bold flex gap-15 items-center">
            <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
             <a target="_blank" href="">Partner with us</a>
            <a className="border border-white py-3 px-4 rounded-2xl" target="_blank" href="">Get The App</a>
         <a className="border border-black bg-black py-3 px-4 rounded-2xl" target="_blank" href="">Sign In</a>



        </div>
      </div>
      <div className="pt-16 pb-8 relative">

        <img className="h-110 w-60 absolute top-0 left-0"src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
        <img className="h-110 w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
        <div className="max-w-[60%] text-5xl text-white font-bold container mx-auto text-center">Order Food and groceries. Discover best restaurents. Swiggy it!</div>

        <div className="max-w-[70%] container mx-auto flex gap-5 mt-10 px-5">
            <input className="bg-white w-[50%] text-xl px-5 py-4 rounded-2xl" placeholder="Enter your delivery location"></input>
           <input className="bg-white w-[50%] text-xl px-5 py-4 rounded-2xl" placeholder="Search for restaurent, items or more"></input>


        </div>

        <div className="max-w-[80%] mx-auto flex gap-6">
        <Link to="/restaurant">
      <img
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
      alt="Restaurants"
    />
    </Link>

  <a target="_blank" href="https://www.swiggy.com/instamart">
    <img
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"
      alt="Instamart"
    />
  </a>

  <a target="_blank" href="https://www.swiggy.com/dineout">
    <img
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"
      alt="Dineout"
    />
  </a>
</div>

      </div>
    </header>
  );
}
