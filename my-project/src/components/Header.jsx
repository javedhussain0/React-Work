// import { LuMenu } from "react-icons/lu";


const Header = () => {
  return (
    <div className=" flex justify-between ">
    <div className ="flex item-center justify-center gap-8">
      <img src="./assets/Logo.svg" alt="logo" />
      <button className="bg-gradient-to-r from-orange-400 to-red-400 text-white text-xs px-2.5 py-1.5 rounded-2xl">Hoster is hiring</button>
    </div>
    <div>
      <ul className=" hidden lg:flex justify-content items-center text-gray-400 flex-row font-lato gap-6 ">
        <li><a href="# ">Plans</a></li>
        <li><a href="# ">Find Domain</a></li>
        <li><a href="# ">Why Hoster</a></li>
      </ul>
    </div>

    <div className=" hidden lg:flex justify-center item-center font-lato gap-6">

      <a className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-800 text-white" href="#">sign In</a>
      <button className=" rounded-md px-4 py-3 bg-orange-400 hover:bg-orange-800 text-white">Join Waitlist</button>
    </div>
    </div>
   
  );
};

export default Header;
