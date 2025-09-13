const Navbar = () => {
  return (
    <nav className="bg-gray-100 border-gray-900 border rounded w-full fixed top-0">
      <div className="items-center justify-between w-full">
        <ul className="flex flex-row p-2 font-medium rounded-lg rtl:space-x-reverse justify-center">
          <li>
            <a
              href="#home"
              className="block py-2 px-3 text-gray-900 hover:text-red-500 text-xl"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block py-2 px-3 text-gray-900 hover:text-red-500 text-xl"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block py-2 px-3 text-gray-900 hover:text-red-500 text-xl"
            >
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
