import { useEffect } from "react";

function Header() {
  useEffect(() => {
    const currentUrl = location.href;

    const currentPage = currentUrl.split("/");

    console.log(currentPage);

    // if its homepage, header should be absolute (floating)
    if (currentPage[currentPage.length - 1] == "") {
      document.getElementById("header-container").style.position = "absolute";
      // if its other pages, header is sticky
    } else {
      document.getElementById("header-container").style.position = "sticky";
    }
  }, []);

  return (
    <>
      <header id="header-container" class="flex flex-wrap">
        <section class="relative mx-auto">
          <nav class="flex justify-between bg-gray-900 text-white w-screen">
            <div class="px-5 xl:px-12 py-[5px] flex w-full items-center">
              <a class="text-3xl font-bold font-heading" href="/">
                <img
                  class="w-[70px] rounded-full"
                  src="/images/Updated Globe.png"
                />
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
      </header>
    </>
  );
}

export default Header;
