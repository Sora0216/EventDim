function Header() {
  return (
    <>
      <div class="flex flex-wrap">
        <section class="relative mx-auto">
          <nav class="flex justify-between bg-gray-900 text-white w-screen">
            <div class="px-5 xl:px-12 py-6 flex w-full items-center">
              <a class="text-3xl font-bold font-heading" href="/">
                Logo Here.
              </a>

              <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <a class="hover:text-gray-200" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a class="hover:text-gray-200" href="/plan">
                    Plan Event
                  </a>
                </li>

                <li>
                  <a class="hover:text-gray-200" href="/login">
                    Register / Login
                  </a>
                </li>

                <li>
                  <a class="hover:text-gray-200" href="/events">
                    My Events
                  </a>
                </li>
                <li>
                  <a class="hover:text-gray-200" href="/about">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </section>
      </div>
    </>
  );
}

export default Header;
