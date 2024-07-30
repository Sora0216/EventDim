function Header() {
  return (
    <header className="bg-gray-900 text-white w-full">
      <nav className="flex justify-between items-center px-5 xl:px-12 py-6">
        <a className="text-3xl font-bold font-heading" href="/">
          Logo Here
        </a>

        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li>
            <a className="hover:text-gray-200" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="/plan">
              Plan Event
            </a>
          </li>

          <li>
            <a className="hover:text-gray-200" href="/login">
              Register / Login
            </a>
          </li>

          <li>
            <a className="hover:text-gray-200" href="/events">
              My Events
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="/about">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
