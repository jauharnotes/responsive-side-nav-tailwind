import { AiFillCrown, AiOutlineMenu } from "react-icons/ai";

export default function Home() {
  return (
    <div className="relative min-h-screen md:flex">
      {/* mobile menu bar */}
      <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
        {/* logo */}
        <a href="#" className="block p-4 text-white font-bold">
          Better Dev
        </a>

        {/* mobile menu botton */}
        <button className="p-4 hover:outline-none hover:bg-gray-700">
          <AiOutlineMenu className="text-lg" />
        </button>
      </div>

      {/* sidebar */}
      <div className="bg-blue-800 text-blue-100 w-64 space-y-6 px-4 py-4 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        {/* logo */}
        <a href="#" className="text-white flex items-center">
          <AiFillCrown className="text-3xl mr-1" />
          <span className="text-2xl font-extrabold">Better Dev</span>
        </a>
        {/* nav */}
        <nav>
          <a
            href="#"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 text-white"
          >
            Home
          </a>
          <a
            href="#"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 text-white"
          >
            About
          </a>
          <a
            href="#"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 text-white"
          >
            Feature
          </a>
          <a
            href="#"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 text-white"
          >
            Pricing
          </a>
        </nav>
      </div>

      {/* content */}
      <div className="p-1 font-bold">content goes here</div>
    </div>
  );
}
