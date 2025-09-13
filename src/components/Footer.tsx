const Navbar = () => {
  return (
    <nav className="bg-gray-100 border-gray-900 border rounded w-full fixed bottom-0">
      <div className="items-center justify-between w-full">
        <ul className="flex flex-row p-2 font-medium rounded-lg rtl:space-x-reverse justify-center">
          <li>
            <a
              href="https://www.linkedin.com/in/cesarrondon/"
              className="block py-2 px-3 text-gray-900 hover:text-red-500 text-xl"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/cesar05gabriel"
              className="block py-2 px-3 text-gray-900 hover:text-red-500 text-xl"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="mailto:cesar05gabriel@gmail.com"
              className="block py-2 px-3 text-gray-900 hover:text-red-500 text-xl"
              target="_blank"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
